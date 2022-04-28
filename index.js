const express = require('express');
const app = express();
const command = require("child_process");
let fs = require('fs');
let cron = require('node-cron');

// config
const PORT = 9211;
const CRON_JOB = "*/2 * * * *";
const CONNECTION_LIMIT = 200;


cron.schedule(CRON_JOB, () => {
    console.log("Running Cron Job");
    checkDdos();
});

function checkDdos(){
    // Search for network connections
    command.exec("netstat -an | awk '{print $5}' | cut -d: -f1 | sort | uniq -c | sort -n", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        // convert list to array
        var array = stdout.split('\n')
        array = array.map(function (el) {
            return el.trim();
        });

        // Remove empty string
        array = array.filter(n => n)

        //get last index of array
        var lastIndexOfArray = array.slice(-1)[0];
        var [connection, ip] = lastIndexOfArray.split(" ");
        console.log(lastIndexOfArray.split(" "))

        // return true or false if IP is valid or not
        isValid = isValidIp(ip);

        if(isValid){
            console.log(`${ip} is a valid IP`)
            if(connection >= CONNECTION_LIMIT){
                console.log(`${connection} connections has been exceeded`);
                // Write down Ip to block json file
                fs.readFile('block.json', 'utf8', function readFileCallback(err, data){
                    if (err){
                        console.log(err);
                    } else {
                    obj = JSON.parse(data); //now it an object
                    // check if it already in the block josn list
                    if(ip in obj){
                        console.log(`${ip} Already Blocked`);     
                    }else{
                        // if Ip address not in the block list. Write down into the iptables and block.json file 
                        command.exec(`iptables -I INPUT -s ${ip} -j DROP`, (error, stdout, stderr) => {
                            if(error){console.log("error while inputing ip into iptables")}else{console.log(`droped ${ip} with ${connection} connections`)}
                            command.exec(`service iptables save`, (error, stdout, stderr) => { if(error){console.log("error while saving iptables")}else{console.log(`${ip} saved to iptables`)} })
                        })
                        obj[ip] = {ip: ip, connection: connection, time: new Date()};
                        json = JSON.stringify(obj); //convert it back to json
                        fs.writeFile('block.json', json, 'utf8', () => {
                            console.log(`${ip} Saved into Blocked list`);
                        }); // write it back 
                    }
                }});
            }
        }else{
            console.log(`${ip} is not a valid IP`)
        }

    });
}

function isValidIp(ip){

    const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    return regexExp.test(ip);
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

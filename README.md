# DDOS Deflate Iptables

## Helps to prevent ddos attack

### Author: _Umer Ahmad Shehzad_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Progame runs on:
- Linux (tested on centos)
- Node js

## Features

- Prevent DDos attack
- Update iptables
- Update blocked IP addresses

## Description

> ddos-delate-iptables written by Umer Ahmad Shahzad. the program is written in node js. it prevents the ddos attack by simply analys the number of network connections.
if the number of connection exceeded. it add that ip into the iptables and for the record it added the ip into the block json file too. the program runs on every specific or every minute with the help of cron job 


## Tech

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [node-cron](https://www.npmjs.com/package/node-cron) - The node-cron module is tiny task scheduler
- [child_process](https://nodejs.org/api/child_process.html) - he child_process module provides the ability to run commands

This programe is open sourced with under [MIT Licence][https://opensource.org/licenses/MIT]
 on GitHub.

## Installation

ddos deflate iptables requires [Node.js](https://nodejs.org/) v10+ to run. and linux centos distro with ip tables enabled

Install the dependencies and devDependencies and start the server.

```sh
cd ddos-deflate-iptables
npm i
node index.js
```

## Config & block.json

ddos-deflate-iptables is currently extended with the following file "block.json". And the configuration is written within the index.js file
Instructions on how to use them in index.js file.

## Development

Want to contribute? Great!
I'm happy to recieve any pull requests.

Verify the deployment by navigating to your server address

```sh
127.0.0.1:9211
```

## License

MIT

**Free Software, Hell Yeah!**


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

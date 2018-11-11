# Raspberry Home Server

## Description

Express server to host some websides on the local Network and redirect to other Services on this Pi or on other Devices

### Services

* 127.0.0.1/
* 127.0.0.1/pihole
* 127.0.0.1/octoprint
* 127.0.0.1/door


### Config.js file
module.exports.printer =  "your.device.ip.address"; 

## Setup

> git clone https://github.com/Dragonil/HomeServer.git

> npm i

> create config.js in the node_modules folder and config the device IPs

> npm start
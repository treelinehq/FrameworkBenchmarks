#!/bin/bash

fw_depends nodejs
fw_depends mysql

# reset cache & run app
npm install
node app.js --port 8080 &

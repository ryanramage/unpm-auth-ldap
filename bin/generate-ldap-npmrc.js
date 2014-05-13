#!/usr/bin/env node

var ini = require('ini'),
    username = process.argv[2],
    password = process.argv[3],
    email = process.argv[4];

if (!email || !username || !password) {
  return console.log('USAGE: generate-ldap-npmrc <username> <password> <email>');
}


var auth = username + ':' + password
var data = {};

data._auth = new Buffer(auth, 'utf8').toString('base64')
data.email = email;


console.log(ini.stringify(data))

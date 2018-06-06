const fs = require('fs');
const fixfix = require('./fixfix');

const folder = process.argv[2];
const division = process.argv[3];
const fix = process.argv[4];
const src = __dirname + '/' + folder;

// folder has to be in a sub directory
fixfix.fix(src, division, fix);
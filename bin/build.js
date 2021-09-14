#! /usr/bin/env node
const path = require('path');
const cp = require('child_process'),
  exec = cp.exec;
const fs = require('fs');

const task = process.env.npm_config_task;
const cliName = process.env.npm_config_cliname;
const target = process.env.npm_config_target;
const archiveName = process.env.npm_config_archivename;

const targets = [
  "node14-linux-x64",
  "node14-macos-x64",
  "node14-linux-arm64",
  "node12-linux-armv7",
  "node14-win-x86"
]


let build = {
  package: () => {
    if(target && cliName) {
      let arg = `pkg . --targets ${target} --output ${cliName}-${target}`;
      exec(arg, {maxBuffer: 1024 * 5000}, (err, stdout, stderr) => {
        if(!err) {
          console.log(arg)
          console.log(`done packaging ${cliName}`);
        } else {
          console.log('failed to package', err);
        }
      });  
    } else {
      console.log('cli name and target are required...');
      process.exit(0);
    }
  },
  archive: () => {
    if(archiveName && cliName) {
      let arg = `tar -cvzf ${archiveName} ${cliName}`;
      exec(arg, {maxBuffer: 1024 * 5000}, (err, stdout, stderr) => {
        if(!err) {
          console.log(arg)
          console.log(`done archiving ${cliName}`);
        } else {
          console.log('failed to archive', err);
          observer.error(err);
        }
      });  
    } else {
      console.log('archivename and cliname are required...');
      process.exit(0);
    }
  },
  signature: () => {
    if(archiveName) {
      let arg = `sha256sum ${archiveName}`;
      exec(arg, {maxBuffer: 1024 * 2000}, (err, stdout, stderr) => {
        if(!err) {
          console.log(arg)
          console.log(stdout)
          console.log(`done signing ${cliName}`);
        } else {
          console.log('failed to sign', err);
          observer.error(err);
        }
      });  
    } else {
      console.log('archivename and cliname are required...');
      process.exit(0);
    }
  },
  default: () => {
    console.log(`command not found.  ${process.platform}/${process.arch}`);
    process.exit(0);
  }
}

build[task] ? build[task]() : build.default();

import { Observable, forkJoin } from 'rxjs';
const cp = require('child_process'),
exec = cp.exec;
import { readFileSync, writeFileSync } from 'fs';
import { Env } from './env';
import { Utils } from './utils';
const prompt = require('prompt');

const envVar = new Env();
const utils = new Utils();

export class Hzn {
  objectType: any;
  objectId: any;
  objectFile: any;
  pattern: any;
  serviceJson: any;
  patternJson: any;
  policyJson: any;
  envVar = new Env();
  utils = new Utils();
  constructor() {}

  setup() {
    return new Observable((observer) => {
      envVar.init()
      .subscribe({
        complete: () => {
          this.objectType = process.env.npm_config_type || this.envVar.getMMSObjectType();
          this.objectId = process.env.npm_config_id || this.envVar.getMMSObjectId();
          this.objectFile = process.env.npm_config_object || this.envVar.getMMSObjectFile();
          this.pattern = process.env.npm_config_pattern || this.envVar.getMMSPatterName();
          this.patternJson = process.env.npm_config_patternjson || 'config/mms/pattern.json';
          this.serviceJson = process.env.npm_config_servicejson || 'config/mms/service.json';
          this.policyJson = process.env.npm_config_policyjson || 'config/mms/policy.json';
          observer.complete();    
        },
        error: (err) => {
          observer.error(err);
        } 
      })
    });      
  }
  test() {
    return new Observable((observer) => {
      console.log('it works...')
      observer.complete();
    });  
  }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hzn = void 0;
const rxjs_1 = require("rxjs");
const cp = require('child_process'), exec = cp.exec;
const env_1 = require("./env");
const utils_1 = require("./utils");
const prompt = require('prompt');
const envVar = new env_1.Env();
const utils = new utils_1.Utils();
class Hzn {
    constructor() {
        this.envVar = new env_1.Env();
        this.utils = new utils_1.Utils();
    }
    setup() {
        return new rxjs_1.Observable((observer) => {
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
            });
        });
    }
    test() {
        return new rxjs_1.Observable((observer) => {
            console.log('it works...');
            observer.complete();
        });
    }
}
exports.Hzn = Hzn;
//# sourceMappingURL=hzn.js.map
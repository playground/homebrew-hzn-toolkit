"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const rxjs_1 = require("rxjs");
const fs_1 = require("fs");
const cp = require('child_process'), exec = cp.exec;
const pEnv = process.env;
class Env {
    constructor() {
        this.env = pEnv.npm_config_env || 'biz';
    }
    init() {
        return new rxjs_1.Observable((observer) => {
            this.hznEnv = pEnv.npm_config_hznEnv || './config/.env-hzn.json';
            this.hznJson = JSON.parse((0, fs_1.readFileSync)(this.hznEnv).toString());
            // console.log(process.cwd(), this.env, this.hznJson)
            this.envVars = this.hznJson[this.env]['envVars'];
            for (const [key, value] of Object.entries(this.envVars)) {
                // @ts-ignore
                pEnv[key] = value.replace(/\r?\n|\r/g, '');
                // console.log(`${key}: ${pEnv[key]}`);
            }
            if (!this.envVars.ARCH || this.envVars.ARCH === undefined) {
                let arg = `hzn architecture`;
                exec(arg, { maxBuffer: 1024 * 2000 }, (err, stdout, stderr) => {
                    if (!err) {
                        pEnv.ARCH = this.envVars.ARCH = stdout.replace(/\r?\n|\r/g, '');
                        this.setAdditionalEnv();
                        observer.next();
                        observer.complete();
                    }
                    else {
                        console.log('failed to identify arch', err);
                        observer.error(err);
                    }
                });
            }
            else {
                this.setAdditionalEnv();
                console.log(this.envVars.ARCH);
                observer.next();
                observer.complete();
            }
        });
    }
    setAdditionalEnv() {
        pEnv.MMS_PATTERN_NAME = `pattern-${pEnv.MMS_SERVICE_NAME}-${pEnv.ARCH}`;
        pEnv.MMS_CONTAINER = `${pEnv.YOUR_DOCKERHUB_ID}/${pEnv.MMS_SERVICE_NAME}_${pEnv.ARCH}:${pEnv.MMS_SERVICE_VERSION}`.replace(/\r?\n|\r/g, '');
    }
    getEnv() {
        return this.env;
    }
    getOrgId() {
        console.log(pEnv.HZN_ORG_ID);
        return pEnv.HZN_ORG_ID;
    }
    getExchangeUserAuth() {
        return pEnv.HZN_EXCHANGE_USER_AUTH;
    }
    getExchangeUrl() {
        return pEnv.HZN_EXCHANGE_URL;
    }
    getFSSCSSUrl() {
        return pEnv.HZN_FSS_CSSURL;
    }
    getMyServiceName() {
        return pEnv.YOUR_SERVICE_NAME;
    }
    getMyServiceVersion() {
        return pEnv.YOUR_SERVICE_VERSION;
    }
    getMMSSharedVolume() {
        return pEnv.MMS_SHARED_VOLUME;
    }
    getMyDockerHubId() {
        return pEnv.YOUR_DOCKERHUB_ID;
    }
    getDockerImageBase() {
        return `${pEnv.YOUR_DOCKERHUB_ID}/${pEnv.MMS_SERVICE_NAME}`;
    }
    getMMSContainerCreds() {
        return pEnv.MMS_CONTAINER_CREDS;
    }
    getMMSPatterName() {
        return pEnv.MMS_PATTERN_NAME;
    }
    getMMSServiceName() {
        return pEnv.MMS_SERVICE_NAME;
    }
    getMMSServiceVersion() {
        return pEnv.MMS_SERVICE_VERSION;
    }
    getMMSContainer() {
        return pEnv.MMS_CONTAINER;
    }
    getArch() {
        return pEnv.ARCH;
    }
    getMMSObjectType() {
        return pEnv.MMS_OBJECT_TYPE;
    }
    getMMSObjectId() {
        return pEnv.MMS_OBJECT_ID;
    }
    getMMSObjectFile() {
        return pEnv.MMS_OBJECT_FILE;
    }
}
exports.Env = Env;
//# sourceMappingURL=env.js.map
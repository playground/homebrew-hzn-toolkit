import { Observable } from 'rxjs';
import { Env } from './env';
import { Utils } from './utils';
export declare class Hzn {
    objectType: any;
    objectId: any;
    objectFile: any;
    pattern: any;
    serviceJson: any;
    patternJson: any;
    policyJson: any;
    envVar: Env;
    utils: Utils;
    constructor();
    setup(): Observable<unknown>;
    test(): Observable<unknown>;
}

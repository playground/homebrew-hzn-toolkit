import { Observable } from 'rxjs';
export declare class Env {
    env: string;
    envVars: any;
    hznJson: any;
    hznEnv: any;
    constructor();
    init(): Observable<unknown>;
    setAdditionalEnv(): void;
    getEnv(): string;
    getOrgId(): string | undefined;
    getExchangeUserAuth(): string | undefined;
    getExchangeUrl(): string | undefined;
    getFSSCSSUrl(): string | undefined;
    getMyServiceName(): string | undefined;
    getMyServiceVersion(): string | undefined;
    getMMSSharedVolume(): string | undefined;
    getMyDockerHubId(): string | undefined;
    getDockerImageBase(): string;
    getMMSContainerCreds(): string | undefined;
    getMMSPatterName(): string | undefined;
    getMMSServiceName(): string | undefined;
    getMMSServiceVersion(): string | undefined;
    getMMSContainer(): string | undefined;
    getArch(): string | undefined;
    getMMSObjectType(): string | undefined;
    getMMSObjectId(): string | undefined;
    getMMSObjectFile(): string | undefined;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const hzn_1 = require("../common/src/hzn");
exports.command = 'deploy <action>';
exports.desc = 'Deploy <action> to Org <org>';
const builder = (yargs) => yargs
    .options({
    org: { type: 'string' },
})
    .positional('action', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const hzn = new hzn_1.Hzn();
    const { action, org } = argv;
    hzn.setup()
        .subscribe({
        complete: () => {
            hzn[action]()
                .subscribe({
                complete: () => {
                    console.log(action, process.env.YOUR_SERVICE_NAME, process.env.HZN_ORG_ID);
                    console.log('process completed.');
                    process.exit(0);
                }
            });
        },
        error: (err) => {
            console.log('something went wrong. ', err);
            process.exit(0);
        }
    });
};
exports.handler = handler;
//# sourceMappingURL=deploy.js.map
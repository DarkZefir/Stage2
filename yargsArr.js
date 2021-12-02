const opts = require('yargs')
    .scriptName('npm run wdio')
    .option('suite', {

        alias: ['s', 'suite'],
        describe: 'suite name',
        choices: ['smoke', 'cloudtest']
    })
    .option('browser', {
        alias: ['b', 'browser'],
        describe: 'browser name',
        choices: ['chrome', 'firefox'],

    })
    .argv;


module.exports = opts;
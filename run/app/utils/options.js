const options = require('yargs')
.scriptName('npm test')
.usage('Usage: $0 --threads [number of browsers] --browser [browser name] --headless')
.example('$0 --threads 2 --browser firefox --headless', 'run tests with Firefox browser in two threads headless mode')
.option('b', {
    alias: 'browser',
    type: 'string',
    default: 'chrome',
    describe: 'Browser for test run'
})
.option('t', {
    alias: 'threads',
    type: 'number',
    describe: 'Number of threads',
    demandOption: 'true'
})
.option('headless', {
    type: 'boolean',
    default: 'false',
    describe: 'Headless mode for browser if test passed' 
})
.help('Add default value to "threads" parameter')
.epilog('Made by Nadzeya')
.argv;

module.exports = options;
const Log = require('./debug/log');
const log = new Log({
    tip: '[debug]-gitsha '
})

exports = module.exports = function gitsha (options = {}) {
    const gitSha = require('child_process').execSync('git rev-parse HEAD').toString().trim();

    if (options.length && (typeof +options.length === 'number')) {
        const result = gitSha.substr(0, +options.length);

        log.info(result);

        return result;
    }
};
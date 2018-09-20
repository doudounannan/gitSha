exports = module.exports = class Log {
    constructor(options = {tip: '[debug] '}) {
        this.options = options;
        this.isDebug = process.env.NODE_ENV === 'development';
    }

    info() {
        if (this.isDebug) {
            console.info.call(this, `${this.options.tip}`, ...arguments);
        }
    }
}
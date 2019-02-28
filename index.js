module.exports = {
    extends: ['airbnb'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true
    },
    parser: 'babel-eslint',
    rules: {
        indent: ['error', 4]
    }
}

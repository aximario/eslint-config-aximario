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
        indent: ['error', 4],
        semi: ["error", "never"],
        "react/jsx-indent": ["error", 4, { checkAttributes: true }], // 是否检查属性也要 4 个空格
    }
}

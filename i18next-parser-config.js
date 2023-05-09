module.exports = {
    defaultNamespace: 'translation',
    lexer: {
        js: ['JsxLexer'],
        default: ['JavascriptLexer'],
    },
    locales: ['en', 'cn'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    input: ['src/*.jsx', ],
}
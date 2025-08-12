document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
        // デリミタの設定
        delimiters: [
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
        ],
        // オプション
        throwOnError: false,
        errorColor: '#cc0000',
        // 自動レンダリング
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option'],
        ignoredClasses: ['no-katex'],
        processEnvironments: true,
        processEscapes: true,
        // フォント設定
        output: 'html',
        // 日本語対応
        strict: false,
        trust: false
    });
});
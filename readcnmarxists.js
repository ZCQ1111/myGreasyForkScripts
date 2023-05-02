// ==UserScript==
// @name         中马库阅读脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.marxists.org/chinese/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=marxists.org
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    const DOC = document;
    const css = `
body {
    MARGIN-LEFT: 23em !important;
    MARGIN-RIGHT: 20em !important;
    background: none;
    color: lawngreen;
    font-size: larger;
}
table {
display: initial;
    margin-left: 0 !important;
    margin-right: 0 !important;
}
div, td {
    background: none !important;
}
`
GM_addStyle(`
${css}
`);
    // Your code here...

})();

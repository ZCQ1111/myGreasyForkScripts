// ==UserScript==
// @name         排行榜首页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bilibili Evolved太占内存，写个简易的
// @author       You
// @match        https://www.bilibili.com/
// @require      http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.3.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    "use strict";
    const hiddenItem = [
        ".recommended-swipe",
        ".eva-banner",
        "section:not(section:nth-child(1), section:nth-child(6), section:nth-child(7), section:nth-child(14), section:nth-child(15), section:nth-child(25))",
        ".video-card-list",
        ".live-card-list",
        ".palette-button-outer",
    ];
    const css = `
        .recommend-container__2-line {
        grid-column: span 6;
        grid-template-columns: repeat(5,1fr);
        }
        .recommend-container__2-line>*:nth-of-type(1n + 10) {
        display: block!important;
        }
        section:is(section:nth-child(6), section:nth-child(7), section:nth-child(14), section:nth-child(15), section:nth-child(25)) {
        width: 19%;
        }
        section:is(section:nth-child(6), section:nth-child(7), section:nth-child(14), section:nth-child(15)) {
        margin-right: 1%;
        }
        aside {
        height: 460px;
        }
        .bili-grid {
        display: inline-block;
        }
    `;
    const DOC = document;
    // Your code here...
    GM_addStyle(`
        ${hiddenItem.toString()} {
        display: none;
        }
        ${css}
    `);
    // 3s转不好干脆自杀算了
    setTimeout(() => {
        const item = $(".live-rank__mouse-switch > button:nth-child(2)");
        console.log(item);
        item.click();
    }, 3000);
})();

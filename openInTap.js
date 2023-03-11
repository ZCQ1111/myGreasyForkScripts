// ==UserScript==
// @name         右键在新标签页中打开链接但不激活
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  左键的click偶尔会有一些冲突
// @author       You
// @include      *
// @exclude      https://www.javbus.com/*
// @require      http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.3.js
// @require      https://lib.baomitu.com/zepto/latest/zepto.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant           GM_info
// @grant           GM_openInTab
// ==/UserScript==

(function () {
  "use strict";
  const DOC = document;
  const openInTab = (url, active = false, options = {}) => {
    if (url)
      return GM_openInTab(url, {
        active: !!active,
        setParent: true,
        ...options,
      });
  };

  class Common {
    constructor() {
      this.globalClick();
    }
    // G_CLICK
    globalClick = () => {
      const selectors = ["a[href]"];
      if (!selectors?.length) return;
      const getTarget = ({ target }) => target.closest(selectors) || false;

      /* DOC.addEventListener("click", (e) => {
        const closest = getTarget(e);
        if (!closest) return;
        else {
          console.log(closest);
          e.stopPropagation();
          e.preventDefault();
          openInTab(closest.href);
        }
      }); */

      let _event;
      DOC.addEventListener("mousedown", (e) => {
        if (e.button !== 2) return;

        const target = getTarget(e);
        if (!target) return;

        target.oncontextmenu = (e) => e.preventDefault();
        e.stopPropagation();
        e.preventDefault();
        openInTab(target.href);

        _event = e;
      });
      /* DOC.addEventListener("mouseup", (e) => {
        if (e.button !== 2 || !_event) return;

        const target = getTarget(e);
        if (!target) return;
        console.log(target);

        // e.stopPropagation();
        e.preventDefault();

        openInTab(target.href);
        // history.pushState({},'',);
      }); */
    };
  }
  try {
    new Common();
  } catch (err) {
    console.error(`${GM_info.script.name}: 无匹配模块`);
  }
})();

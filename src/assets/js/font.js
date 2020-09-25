(function (doc, win) {
     var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc    = function () {
                 var clientWidth = docEl.clientWidth;
                 if (clientWidth>=640) {
                    clientWidth = 640;
                 };
                 if (!clientWidth) return;
               docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
          };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);



//封闭空间，自我执行，监听窗口尺寸，设置文字和窗口比例适配，没有暴露姿势，直接引用
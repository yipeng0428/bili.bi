'use strict';

document.addEventListener('polymer-ready', function () {
  var freshicon = document.getElementById('refresh-icon');
  var ajax = document.querySelector('core-ajax');
  var iframe = document.getElementById('bili-frame');

  freshicon.addEventListener('click', function () {
    ajax.go();
  });

  ajax.addEventListener('core-response', function (e) {
    console.log(e.detail.response);
    iframe.src = 'http://m.acg.tv/video/av' + e.detail.response.av + '.html';
  });

  ajax.go();
});


var buffer = 20; //scroll bar buffer
var iframe = document.getElementById('bili-frame');

function pageY(elem) {
    return elem.offsetParent ? (elem.offsetTop + pageY(elem.offsetParent)) : elem.offsetTop;
}

function resizeIframe() {
    var height = document.documentElement.clientHeight;
    height -= pageY(document.getElementById('bili-frame'))+ buffer ;
    height = (height < 0) ? 0 : height;
    document.getElementById('bili-frame').style.height = height + 'px';
}

// .onload doesn't work with IE8 and older.
if (iframe.attachEvent) {
    iframe.attachEvent('onload', resizeIframe);
} else {
    iframe.onload=resizeIframe;
}

window.onresize = resizeIframe;

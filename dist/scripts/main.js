"use strict";function pageY(e){return e.offsetParent?e.offsetTop+pageY(e.offsetParent):e.offsetTop}function resizeIframe(){var e=document.documentElement.clientHeight;e-=pageY(document.getElementById("bili-frame"))+buffer,e=0>e?0:e,document.getElementById("bili-frame").style.height=e+"px"}document.addEventListener("polymer-ready",function(){var e=document.getElementById("refresh-icon"),t=document.querySelector("core-ajax"),n=document.getElementById("bili-frame");e.addEventListener("click",function(){t.go()}),t.addEventListener("core-response",function(e){console.log(e.detail.response),n.src="http://m.acg.tv/video/av"+e.detail.response.av+".html"}),t.go()});var buffer=20,iframe=document.getElementById("bili-frame");iframe.attachEvent?iframe.attachEvent("onload",resizeIframe):iframe.onload=resizeIframe,window.onresize=resizeIframe;
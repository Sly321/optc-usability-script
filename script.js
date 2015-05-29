// ==UserScript==
// @name         OPTCBlog Usability Script
// @namespace    https://github.com/Sly321/
// @version      0.1.1
// @description  For better usability on the One Piece Treasure Cruise Blog
// @icon         http://op-tc-eng-version.blogspot.com.au/favicon.ico
// @author       Sly321
// @match        http://op-tc-eng-version.blogspot.com.au/*
// @updateurl    https://raw.githubusercontent.com/Sly321/optc-usability-script/master/script.js
// ==/UserScript==

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

// Removing Nonsense Elementes
document.getElementById("navbar").remove();
document.getElementById("HTML2").remove();
document.getElementById("HTML1").remove();
document.getElementById("BlogArchive1").remove();
document.getElementById("Stats1").remove();
document.getElementsByTagName('footer').remove();
document.getElementById('blog-pager').remove();
document.getElementsByClassName('blog-feeds').remove();

// Fixing content Positions
var div = document.getElementsByClassName('content-outer')[0];
div.style.marginTop = "2px";
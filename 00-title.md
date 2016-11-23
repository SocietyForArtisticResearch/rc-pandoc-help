<div id="menuButton" onclick="openNav()"><span>&#9776; </span><span style="font-size: 50%"><b>MENU</b></span></div>
<!--
    this has to be added manually to the finished HTML
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-->

---
title: Research Catalogue Extended Guide
date: November 2016
---

<!--[pdf version](RC-extended-guide.pdf "pdf extended guide pdf version")  -->



<script>

// this is a little script for the navigation

var isMenuOpen = false; // this is the global that checks if the menu is open.

window.onload = function () {
	init();
}

function init() {
    document.getElementById("menuButton").onclick = function ( ) { 
		isMenuOpen ? closeNav() : openNav();
	};


/*
	var callback = function (e) {
    	var e = window.e || e;

    	console.log('etarget:');
    	console.log(e.target.id);

    	if (e.target.id !== 'TOC') {
        	console.log(e.target);
        	return;
    	}
    }

	if (document.addEventListener) {
    	document.addEventListener('click', callback, false);
    }
	else {
    	document.attachEvent('onclick', callback);
    }
*/
	
	makeLinksCloseNav();
}

function makeLinksCloseNav() { // links should close the navigation
	var links = document.getElementById("TOC").getElementsByTagName("A");
	for (var i = 0;i<links.length;i++) {
		links[i].onclick = function ( ) { closeNav() };
	}
}

function openNav() { // open navigation

	var TOC = document.getElementById("TOC");
    TOC.style.width = "100%";
    //document.getElementsByTagName("BODY")[0].style.display = 'none';

	menuButton.innerHTML = "<span>&times;</span>";
    isMenuOpen = true;
}

function closeNav() {
	menuButton.innerHTML = "<span>&#9776; </span><span style=\"font-size: 50%\"><b>MENU</b></span>";
	isMenuOpen = false;

	var TOC = document.getElementById("TOC");
    TOC.style.width = "0px";
    //document.getElementsByTagName("BODY")[0].style.display = "default";
}



</script>

<div id="menuButton" onclick="openNav()"><span>&#9776; </span><span style="font-size: 50%"><b>MENU</b></span></div>
<!--
    this has to be added manually to the finished HTML
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-->

---
title: Research Catalogue Extended Guide
date: October, 2017
---

<!--[pdf version](RC-extended-guide.pdf "pdf extended guide pdf version")  -->



<script>

// this is a little script for the navigation

var isMenuOpen = false; // this is the global that checks if the menu is open.

window.onload = function ( ) {
	init();
}

function init( ) {
    document.getElementById("menuButton").onclick = function ( ) { 
		isMenuOpen ? closeNav() : openNav();
	};
	
	makeLinksCloseNav();
}

function makeLinksCloseNav( ) { // links should close the navigation
	var links = document.getElementById("TOC").getElementsByTagName("A");
	for (var i = 0;i<links.length;i++) {
		links[i].onclick = function ( ) { closeNav() };
	}
}

function openNav( ) { // open navigation

	var TOC = document.getElementById("TOC");
    TOC.style.width = "100%";

	menuButton.innerHTML = "<span class=\"closeSymbol\">&times; </span><span style=\"font-size: 50%\"><b>MENU</b></span>";
    isMenuOpen = true;
}

function closeNav( ) {
	menuButton.innerHTML = "<span class=\"menuSumbol\">&#9776; </span><span style=\"font-size: 50%\"><b>MENU</b></span>";
	isMenuOpen = false;

	var TOC = document.getElementById("TOC");
    TOC.style.width = "0px";
}



</script>
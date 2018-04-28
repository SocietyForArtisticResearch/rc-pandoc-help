<div id="menuButton" onclick="openNav()"><div id="menuSymbol">&#9776; </div><span id="menuName">MENU</span></div>
<!--
    this has to be added manually to the finished HTML
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-->

---
title: Research Catalogue Extended Guide
date: March, 2018
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
		links[i].onclick = function ( ) { 
		    document.getElementById('body-text').style.display = 'default';
			closeNav();
 		};
	}
}

function openNav( ) { // open navigation
	let TOC = document.getElementById("TOC");
    TOC.style.width = "100%";
    let menuSymbol = document.getElementById("menuSymbol");
	menuSymbol.innerHTML = '&times;';
    isMenuOpen = true;
    document.getElementById('body-text').classList.add('navIsOpen');
}

function closeNav( ) {
	let menuSymbol = document.getElementById("menuSymbol");
	menuSymbol.innerHTML = '&#9776;';

	isMenuOpen = false;
	var TOC = document.getElementById("TOC");
    TOC.style.width = "0px";
    document.getElementById('body-text').classList.remove('navIsOpen');
}



</script>
<div id="body-text">

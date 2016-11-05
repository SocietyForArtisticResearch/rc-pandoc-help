<span id="menuButton" onclick="openNav()">&#9776;</span>

---
title: Research Catalogue Extended Guide
date: October 2016
---

[pdf version](RC-extended-guide.pdf "pdf extended guide pdf version")  



<script>

var isMenuOpen = false;

window.onload = function ( ) { 
	init(); 
};

function init() {
    document.getElementById("menuButton").onclick = function ( ) { 
		isMenuOpen ? closeNav() : openNav();
	};
	
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
    TOC.style.width = "320px";
    document.getElementsByTagName("BODY")[0].style.marginLeft = "345px";

	menuButton.innerHTML = "&times;";
    isMenuOpen = true;
}

function closeNav() {
	menuButton.innerHTML = "&#9776;";
	isMenuOpen = false;

	var TOC = document.getElementById("TOC");
    TOC.style.width = "0px";
    document.getElementsByTagName("BODY")[0].style.marginLeft = "50px";
}



</script>
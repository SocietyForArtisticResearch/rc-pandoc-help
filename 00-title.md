<div id="menuButton" onclick="openNav()"><div id="menuSymbol">&#9776; </div><span id="menuName">MENU</span></div>
<!--
    this has to be added manually to the finished HTML
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-->

---
title: Research Catalogue Extended Guide
date: February 2021
---

<!--[pdf version](RC-extended-guide.pdf "pdf extended guide pdf version")  -->



<script>

// this is a little script for the navigation

window.onload = function ( ) {
	var dynamicMenu = function( ) {
		let isMenuOpen = false;

		let toggleNav = function ( ) { 
			isMenuOpen = !isMenuOpen;

			let TOC = document.getElementById('TOC');
		    TOC.classList.toggle('showMenu');
		    
		    let menuSymbol = document.getElementById('menuSymbol');
			menuSymbol.innerHTML = isMenuOpen ? '&times;' : '&#9776;';

			// because of scrolling issue on mobile devices, body is best hidden if menu is open:
		    document.getElementById('body-text').classList.toggle('navIsOpen');
		}

		let makeLinksCloseNav = function ( ) { // links should close the navigation
			let links = document.getElementById('TOC').getElementsByTagName('A');
			for (let i = 0;i<links.length;i++) {
				links[i].onclick = function ( ) { 
				    document.getElementById('body-text').style.display = 'default';
					toggleNav( );
		 		};
			}
		}

	    document.getElementById('menuButton').onclick = function ( ) { 
			toggleNav( );
		};

		makeLinksCloseNav( );
	}

	dynamicMenu( );
}

</script>
<div id="body-text">

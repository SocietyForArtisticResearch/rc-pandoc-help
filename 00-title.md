<nav id="main"><button type="button" id="menuButton" onclick="openNav()"><div id="menuSymbol">&#9776; </div><span id="menuName">MENU</span></button></nav>
<!--
    this has to be added manually to the finished HTML
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-->

---
title: Research Catalogue Extended Guide
date: February 2024
---

<!--[pdf version](RC-extended-guide.pdf "pdf extended guide pdf version")  -->



<script>

// this is a little script for the navigation

window.onload = function ( ) {
	let createAnchorHelpers = function ( ) {
		let anchorHelper = function (headerElement) {
			let anchor_element = document.createElement("a");
			anchor_element.href = "#" + headerElement.id;
			anchor_element.classList.add("headerAnchor");
			let icon = document.createElement("img");
			icon.src = "octigon_link.svg";
			icon.classList.add("icon");
			icon.classList.add("anchor-link");
			icon.width = "16"
			icon.height = "16"
			icon.alt = "anchor"
			icon.ariaHidden = "true";
			anchor_element.appendChild(icon);
			headerElement.prepend(anchor_element);
			anchor_element.style.opacity = "0.33";
			anchor_element.title = "shareable anchor link"


			
			headerElement.onmouseover = () => { anchor_element.style.opacity = "1.0" };
			headerElement.onmouseleave = () => { anchor_element.style.opacity = "0.33" };


		}
		let allHeaders = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
		allHeaders.forEach(anchorHelper);
	}

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

	function make_hrefs_blank ( ) {
		let hrefs = document.getElementsByTagName("a");
		([].slice.call(hrefs)).map(href => href.target = "_blank");
		let toc_refs = document.querySelectorAll("#TOC a");
		([].slice.call(toc_refs)).map(href => href.target = "_self");
	}

	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos || currentScrollPos < 50.0) {
			window.document.getElementById("main").style.top = "-1px";
		} else {
			window.document.getElementById("main").style.top = "-50px";
		}
		prevScrollpos = currentScrollPos;
	} 

	dynamicMenu();
	make_hrefs_blank();
	createAnchorHelpers();

	
}

</script>
<div id="body-text">

window.addEventListener('DOMContentLoaded', function () {
    window.onload = function () {
        function createAnchorHelpers() {
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

        function dynamicMenu() {
            let isMenuOpen = false;



            let toggleNav = function () {
                isMenuOpen = !isMenuOpen;

                let TOC = document.getElementById('TOC');
                TOC.classList.toggle('showMenu');

                let menuSymbol = document.getElementById('menuSymbol');
                menuSymbol.innerHTML = isMenuOpen ? '&times;' : '&#9776;';

                // because of scrolling issue on mobile devices, body is best hidden if menu is open:
                document.getElementById('body-text').classList.toggle('navIsOpen');
            }

            function makeLinksCloseNav() { // links should close the navigation
                let links = document.getElementById('TOC').getElementsByTagName('A');
                for (let i = 0; i < links.length; i++) {
                    links[i].onclick = function () {
                        document.getElementById('body-text').style.display = 'default';
                        toggleNav();
                    };
                }
            }

            document.getElementById('menuButton').onclick = function () {
                toggleNav();
            };

            makeLinksCloseNav();
        }

        function make_hrefs_blank() {
            let hrefs = document.getElementsByTagName("a");
            ([].slice.call(hrefs)).map(href => href.target = "_self");
            let toc_refs = document.querySelectorAll("#TOC a");
            ([].slice.call(toc_refs)).map(href => href.target = "_self");
        }

        var prevScrollpos = window.scrollY;
        window.onscroll = function () {
            let currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos || currentScrollPos < 50.0) {
                window.document.getElementById("main").style.top = "-1px";
            } else {
                window.document.getElementById("main").style.top = "-50px";
            }
            prevScrollpos = currentScrollPos;
        }
        function insertAfter(newNode, referenceNode) {
            // Check if the reference node is the last child within its parent
            if (referenceNode.nextSibling) {
                // If the reference node has a next sibling, insert before the next sibling
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            } else {
                // If the reference node is the last child, append the new node to the parent node
                referenceNode.parentNode.appendChild(newNode);
            }
        }


        function makeTOCFoldable() {
            var collapsed = true;

            function toggleExpand(button) {
                collapsed ? expandAll(button) : collapseAll(button);
                collapsed = !collapsed;
            }

            function expandAll(button) {
                document.getElementById('TOC').querySelectorAll('ul > li > ul').forEach(ul => unfoldElement(ul));
                button.innerText = 'collapse';
                button.removeEventListener
            }

            function collapseAll(button) {
                document.getElementById('TOC').querySelectorAll('ul > li > ul').forEach(ul => foldElement(ul));
                button.innerText = 'expand all';
            }

            function expandAllButton() {
                const button = document.createElement('button');
                button.innerText = 'expand all';
                button.addEventListener('click', () => toggleExpand(button));
                button.style.marginTop = '40px';
                button.style.marginLeft = '25px';
                button.style.boxShadow = 'box-shadow: inset 1px 3px 1px gray';
                button.style.backgroundColor = 'none';
                button.style.border = 'unset';
                button.style.padding = '10px';
                return button;
            }

            function unfoldElement(elm) {
                //('element', elm);
                const parentLi = elm.parentElement;
                const icon = parentLi.querySelector('img.toc-icon');
                elm.style.display = 'block';
                if (icon) {
                    icon.style.transform = 'rotate(90deg)';
                }
            }

            function foldElement(elm) {
                const parentLi = elm.parentElement;
                const icon = parentLi.querySelector('img.toc-icon');
                elm.style.display = 'none';
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            }

            const toc = document.getElementById("TOC");

            if (toc) {
                const first = toc.firstElementChild;
                const button = expandAllButton();
                toc.insertBefore(button, first);

                // Find all list items within the TOC that contain nested ul elements
                const expandableItems = toc.querySelectorAll('li > ul');

                expandableItems.forEach(ul => {
                    const parentLi = ul.parentNode;
                    ul.style.display = 'none'; // Start with the menu collapsed

                    // Create the toggle icon
                    const icon = document.createElement('img');
                    icon.src = "shevron.svg"
                    icon.style.position = 'absolute';
                    icon.style.left = '-10px';
                    icon.style.cursor = 'pointer';
                    icon.style.userSelect = 'none'; // Prevent text selection on click
                    icon.className = 'toc-icon';

                    // Insert the icon before the text of the list item
                    const insideUl = parentLi.querySelector('ul');
                    if (insideUl) {
                        parentLi.insertBefore(icon, insideUl);
                    }

                    // Add a click event to toggle the display of the ul
                    icon.addEventListener('click', function () {
                        const isVisible = ul.style.display === 'none';
                        ul.style.display = isVisible ? 'block' : 'none';
                        icon.style.transform = isVisible ? 'rotate(90deg)' : 'rotate(0)';
                    });
                });
            };
        }




        dynamicMenu();
        make_hrefs_blank();
        createAnchorHelpers();
        makeTOCFoldable();
    }
});
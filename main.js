window.addEventListener('load', function () {
    // Your function code here
    make_hrefs_blank();
    createAnchorHelpers();
    makeTocFoldable();
    dynamicMenu();

    document.getElementById("menuButton").addEventListener('click', toggleDisplay);

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
        console.log("dynamic");
        let isMenuOpen = false;

        let toggleNav = function () {
            isMenuOpen = !isMenuOpen;

            let TOC = document.getElementById('TOC');
            console.log('toc classlist', TOC);
            TOC.classList.toggle('showMenu');

            console.log('toc classlist', TOC);

            let menuSymbol = document.getElementById('menuSymbol');
            menuSymbol.innerHTML = isMenuOpen ? '&times;' : '&#9776;';

            // because of scrolling issue on mobile devices, body is best hidden if menu is open:
            document.getElementById('body-text').classList.toggle('navIsOpen');
        }

        let makeLinksCloseNav = function () { // links should close the navigation
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

        document.getElementById("menuButton").addEventListener('click', toggleNav);
        makeLinksCloseNav();
    }

    function make_hrefs_blank() {         // a function that makes hyperlinks go to _blank"

        let hrefs = document.getElementsByTagName("a");
        ([].slice.call(hrefs)).map(href => href.target = "_blank");
        let toc_refs = document.querySelectorAll("#TOC a");
        ([].slice.call(toc_refs)).map(href => href.target = "_self");
    }

    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos || currentScrollPos < 50.0) {
            window.document.getElementById("main").style.top = "-1px";
        } else {
            window.document.getElementById("main").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }

    function toggleDisplay(element) {
        console.log('elm', element);
        const displayStyle = element.style.display;
        element.style.display = displayStyle === 'none' ? 'block' : 'none';
    }

    function makeTocFoldable() {
        // Add click event listeners to all list items that have child ULs
        document.querySelectorAll('#toc li > ul').forEach(function (ul) {
            // Initially hide the child ul elements
            ul.style.display = 'none';

            // Add a clickable character to toggle the display
            let toggleSpan = document.createElement('span');
            toggleSpan.textContent = '>';
            toggleSpan.className = 'toggle';
            ul.parentNode.insertBefore(toggleSpan, ul);

            // Toggle on click
            toggleSpan.onclick = function (event) {
                const isHidden = ul.style.display === 'none';
                ul.style.display = isHidden ? 'block' : 'none';
                this.textContent = isHidden ? '^' : '>';
                event.stopPropagation(); // Stop event from bubbling up
            };
        });
    }


});
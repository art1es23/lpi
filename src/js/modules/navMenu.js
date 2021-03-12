const navMenu = (headerSelector, navSelector, toggleMenuSelector, adaptiveClass, fixedClass) => {

    const header = document.querySelector(headerSelector),
        nav = document.querySelector(navSelector),
        toggleMenu = document.querySelector(toggleMenuSelector);

    function fixedMenu() {
        window.addEventListener('scroll', (e) => {
            let headerHeight = header.getBoundingClientRect().bottom;

            function scrollY() {
                return window.pageYOffset || docElem.scrollTop;
            }

            let pageScroll = scrollY();
            header.classList.remove(adaptiveClass);

            if (window.innerWidth < 1025) {
                header.classList.add(adaptiveClass);
            }

            if (pageScroll >= (headerHeight / 2)) {
                header.classList.add(fixedClass);
            } else {
                header.classList.remove(fixedClass);
            }
            console.log(pageScroll);

        });
    }

    fixedMenu();

}

export default navMenu;
const navMenu = (headerSelector, navSelector, toggleMenuSelector, adaptiveClass, fixedClass, showMobileMenuClass) => {

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

    function toggleMobileMenu() {
        // console.log(toggleMenu);
        toggleMenu.classList.remove('menu-toggle--active');
        nav.classList.remove('navigation--active');
        header.classList.remove('header--fullpage');
        document.body.classList.remove('scroll--hidden');

        toggleMenu.addEventListener('click', (e) => {
            toggleMenu.classList.toggle('menu-toggle--active');
            nav.classList.toggle('navigation--active');
            header.classList.toggle('header--fullpage');
            document.body.classList.toggle('scroll--hidden');
        });


    }

    toggleMobileMenu();
    fixedMenu();

}

export default navMenu;
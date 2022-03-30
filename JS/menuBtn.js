
        const menuBtn = document.querySelector('.menu-Btn');
        const hamburger = document.querySelector('.menu-Btn_burger');
        const nav = document.querySelector('nav');
        const menu = document.querySelector('.menu');


        menuBtn.addEventListener('click', handleMenuBtn);


        let showMenu = false;

        function handleMenuBtn() {
            if (!showMenu) {
                hamburger.classList.add('open');
                menu.classList.add('open');

                showMenu = true;
            } else {
                hamburger.classList.remove('open');
                menu.classList.remove('open');

                showMenu = false;
            }

            // console.log(hamburger.classList);
        }
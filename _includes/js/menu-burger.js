window.menu = {
    y: 0,
    isOpened: false,
    init: function () {
        'use strict';
        this.dom = document.querySelector('#header');
        this.button = this.dom.querySelector('button');
        this.menu = this.dom.querySelector('.menu');
        this.footer = document.querySelector('body > footer');
        this.links = this.menu.querySelectorAll('a');

        this.bind();

        setTimeout(function () {
            window.addEventListener('resize', this.resize.bind(this));
        }.bind(this), 300);
    },
    bind: function () {
        'use strict';

        this.button.addEventListener('click', function () {
            document.documentElement.classList.toggle('is-menu-opened');
            this.isOpened = !this.isOpened;
            this.toggleMenu();
        }.bind(this));

        window.addEventListener('scroll', this.scroll.bind(this));
    },
    toggleMenu: function () {
        'use strict';
        var i = 0;
        this.menu.setAttribute('aria-hidden', !this.isOpened);

        for(i = 0; i < this.links.length; i += 1) {
            this.links[i].setAttribute('tabindex', this.isOpened ? 0 : -1);
        }

    },
    scroll: function () {
        'use strict';
        var y = window.scrollY;

        if (y > window.innerHeight / 2) {
            this.footer.classList.add('is-visible');
        } else {
            this.footer.classList.remove('is-visible');
        }

        if (this.isOpened) {
            return;
        }

        if (this.y > y || y < 50) {
            this.dom.classList.remove('is-hidden');
        } else {
            this.dom.classList.add('is-hidden');
        }

        this.y = y;
    },
    resize: function () {
        'use strict';
        document.documentElement.classList.remove('is-menu-opened');
        this.dom.classList.remove('is-hidden');
    }
};

window.menu.init();

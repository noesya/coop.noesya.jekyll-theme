window.menu = {
    y: 0,
    isOpened: false,
    init: function () {
        'use strict';
        this.dom = document.querySelector('#header');
        this.button = this.dom.querySelector('button');

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
        }.bind(this));

        window.addEventListener('scroll', this.scroll.bind(this));
    },
    scroll: function () {
        'use strict';
        var y = window.scrollY;

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

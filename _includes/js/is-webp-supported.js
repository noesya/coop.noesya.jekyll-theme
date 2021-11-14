
(function () {
    'use strict';
    var isWebpSupported = false,
        canvas = document.createElement('canvas');
    if (canvas.getContext) {
        isWebpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') > -1;
    }
    if (!isWebpSupported) {
        document.body.classList.add('no-webp');
    }
}());

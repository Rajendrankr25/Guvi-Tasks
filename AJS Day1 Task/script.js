//Call back hell task

var countdown = document.getElementById('number');
var showWish = document.getElementById('wish');
showWish.style.visibility = 'hidden';

countdown.innerHTML = 10;
setTimeout(function () {
    countdown.innerHTML = 9;
    setTimeout(function () {
        countdown.innerHTML = 8;
        setTimeout(function () {
            countdown.innerHTML = 7;
            setTimeout(function () {
                countdown.innerHTML = 6;
                setTimeout(function () {
                    countdown.innerHTML = 5;
                    setTimeout(function () {
                        countdown.innerHTML = 4;
                        setTimeout(function () {
                            countdown.innerHTML = 3;
                            setTimeout(function () {
                                countdown.innerHTML = 2;
                                setTimeout(function () {
                                    countdown.innerHTML = 1;
                                    setTimeout(function () {
                                        showWish.style.visibility = 'visible';
                                        countdown.style.visibility = 'hidden';
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)


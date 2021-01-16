require("./index.css");

function addCode(number, hint, text1, text2, url) {
    $('.error').html(`<div class="container-floud">
<div class="col-xs-12 ground-color text-center">
<div class="container-error-404"></div>
<h2 class="h1">${text1}</h2>
<h4><a href="${url}">${text2}</a></h4>
</div>
</div>`)
    var container = $(".container-error-404");
    for (var ii = 0; ii < number.length; ii++) {
        let html = `<div class="clip"><div class="shadow"><span id="d${ii}" class="digit"></span></div></div>`;
        container.append(html);
    }
    container.append(`<div class="msg">${hint}<span class="triangle"></span></div>`);
}

function randomNum() {
    "use strict";
    return Math.floor(Math.random() * 9) + 1;
}

function setLoop(nloop, num, selector, time) {
    var i = 0;
    return setTimeout(function callback() {
        "use strict";
        if (i > nloop) {
            selector.text(num);
            return;
        }
        selector.text(randomNum());
        setTimeout(callback, time, ++i);
    }, time, 0);
}

function bumpCode(number = "404", hint = "OH!", text1 = "Sorry! Page not found", text2 = "Return to Home page", url = '/', time = 10) {
    addCode(number, hint, text1, text2, url);
    for (var ii = 0; ii < number.length; ii++) {
        let selector = $(`#d${ii}`);
        setLoop(40 * (ii + 1), number[ii], selector, time);
    }
}
window.bumpCode = bumpCode;
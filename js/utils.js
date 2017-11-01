function $(el) {
    return el.indexOf("#") >= 0 ? document.querySelector(el) : document.querySelectorAll(el);
}

Object.prototype.hide = function() {
    this.style.display = "none";
    return this;
}

Object.prototype.show = function() {
    this.style.display = "block";
    return this;
}

function randomNum(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

// function collision(od1, do2) {
//     var l1 = od.getBoundingClientRect().left;
//     var r1 = od.getBoundingClientRect().right;
//     var t1 = od.getBoundingClientRect().top;
//     var b1 = od.getBoundingClientRect().bottom;

//     var l2 = od2.getBoundingClientRect().left;
//     var r2 = od2.getBoundingClientRect().right;
//     var t2 = od2.getBoundingClientRect().top;
//     var b2 = od2.getBoundingClientRect().bottom;

//     if (l1 > r2 || t1 > b2 || r1 < l2 || b1 < t2) {

//     } else {

//     }
// }
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
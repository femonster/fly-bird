function Bird(w, h, l, t, s) {
    this.width = w;
    this.height = h;
    this.left = l;
    this.top = t;
    this.speed = s;
    this.flyTimer = null;
    this.wingTimer = null;
    this.odiv = document.createElement("div");
    if (typeof this.showBird != "function") {
        Bird.prototype.showBird = function(pobj) {
            // var odiv = document.createElement("div");
            this.odiv.style.width = this.width + "px";
            this.odiv.style.height = this.height + "px";
            this.odiv.style.backgroundImage = "url(img/allbird.png)";
            this.odiv.style.backgroundRepeat = "no-repeat";
            this.odiv.style.backgroundPosition = "0 -121px"
            this.odiv.style.position = "absolute";
            this.odiv.style.left = this.left + "px";
            this.odiv.style.top = this.top + "px";
            this.odiv.style.zIndex = "1";
            pobj.appendChild(this.odiv);
        };
        Bird.prototype.down = function() {
            var _this = this;
            this.flyTimer = setInterval(fly, 40);

            function fly() {
                _this.odiv.style.top = _this.odiv.offsetTop + _this.speed++ + "px";
                if (_this.odiv.offsetTop < 0) {
                    _this.speed = 2;
                }
                if (_this.odiv.offsetTop >= 395) {
                    _this.speed = 0;
                    clearInterval(_this.flyTimer);
                    clearInterval(_this.wingTimer);
                }
                if (_this.speed > 12) {
                    _this.speed = 12;
                }
            }
        };
        Bird.prototype.wings = function() {
            var _this = this,
                aup = ["0 -41px", "0 -80px"],
                adown = ["0 -191px", "0 0"],
                i = 0,
                j = 0;
            _this.wingTimer = setInterval(wing, 120);

            function wing() {
                if (_this.speed > 0) {
                    _this.odiv.style.backgroundPosition = adown[i++];
                    if (i == 2) { i = 0 }
                }
                if (_this.speed < 0) {
                    _this.odiv.style.backgroundPosition = aup[j++];
                    if (j == 2) { j = 0 }
                }
            }
        };
    }
}
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
            this.odiv.style.backgroundImage = "url(img/bird0.png)";
            this.odiv.style.backgroundRepeat = "no-repeat";
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
                    clearInterval(this.wingTimer);
                }
                if (_this.speed > 12) {
                    _this.speed = 12;
                }
            }
        };
        Bird.prototype.wings = function() {
            var _this = this,
                aup = ["url(img/up_bird0.png)", "url(img/up_bird1.png)"],
                adown = ["url(img/down_bird0.png)", "url(img/down_bird1.png)"],
                i = 0,
                j = 0;
            _this.wingTimer = setInterval(wing, 120);

            function wing() {
                if (_this.speed > 0) {
                    _this.odiv.style.backgroundImage = adown[i++];
                    if (i == 2) { i = 0 }
                }
                if (_this.speed < 0) {
                    _this.odiv.style.backgroundImage = aup[j++];
                    if (j == 2) { j = 0 }
                }
            }
        };
    }
}
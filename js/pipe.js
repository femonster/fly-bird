//dh 下管道的高度，gap 中间管道的高度
// 上管道的高度uh = offsetHeight - dh - gap
function Pipe() {
    this.upWrap = null;
    this.downWrap = null;
    this.dh = randomNum(0, 150);
    this.gap = randomNum(90, 160);
    this.uh = 312 - this.dh - this.gap;
    this.createDiv = function(url, height, pos, l, t) {
        var newDiv = document.createElement("div");
        newDiv.style.width = "62px";
        newDiv.style.height = height;
        newDiv.style.position = pos;
        newDiv.style.left = l;
        newDiv.style.top = t;
        newDiv.style.backgroundImage = url;
        return newDiv;
    };
    this.createPipe = function() {
        var upDiv1 = this.createDiv("url(./img/up_mod.png)", this.uh + "px");
        var upDiv2 = this.createDiv("url(./img/up_pipe.png)", "60px");

        this.upWrap = this.createDiv(null, null, "absolute", "450px");
        this.upWrap.appendChild(upDiv1);
        this.upWrap.appendChild(upDiv2);

        var downDiv1 = this.createDiv("url(./img/down_pipe.png)", "60px");
        var downDiv2 = this.createDiv("url(./img/down_mod.png)", this.dh + "px");

        this.downWrap = this.createDiv(null, null, "absolute", "450px", 363 - this.dh + "px");
        this.downWrap.appendChild(downDiv1);
        this.downWrap.appendChild(downDiv2);

        $("#wrap").appendChild(this.upWrap);
        $("#wrap").appendChild(this.downWrap);
    };
    this.movePipe = function() {
        this.upWrap.style.left = this.upWrap.offsetLeft - 5 + "px";
        this.downWrap.style.left = this.downWrap.offsetLeft - 5 + "px";
        //this.upWrap.style.transform = 'translateX(' + this.upWrap.offsetLeft - 5 + 'px)';
        //this.downWrap.style.transform = 'translateX(' + this.downWrap.offsetLeft - 5 + 'px)';
    };
}
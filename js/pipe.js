//dh 下管道的高度，mh 中间管道的高度
// 上管道的高度uh = offsetHeight - dh - mh
// 生成管道的位置距离 pos

function Pipe() {
    this.upWrap = null;
    this.downWrap = null;
    this.dh = randomNum(0, 150);
    this.gap = randomNum(150, 160);
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
    };
}



// function Pipe(pobj) {
//     this.dh = randomNum(0, 200);
//     this.mh = randomNum(150, 170);
//     // this.pos = randomNum(50, 100);
//     this.uh = pobj.offsetHeight - this.dh - this.mh;
//     // this.createTimer = null;
//     this.oupWrap = null;
//     this.odownWrap = null;
//     if (!typeof this.createPipe != "function") {
//         Pipe.prototype.createPipe = function(pobj, l) {
//             //console.log(this.dh, this.mh, this.uh, this.pos, pobj.offsetHeight);
//             this.oupWrap = document.createElement("div");
//             this.odownWrap = document.createElement("div");

//             var oupup = document.createElement("div");
//             var oupdown = document.createElement("div");

//             var odownup = document.createElement("div");
//             var odowndown = document.createElement("div");

//             this.oupWrap.appendChild(oupup);
//             this.oupWrap.appendChild(oupdown);

//             this.odownWrap.appendChild(odownup);
//             this.odownWrap.appendChild(odowndown);

//             this.oupWrap.className = "pipe p-up";
//             this.odownWrap.className = "pipe p-down";

//             oupup.className = "up-one";
//             oupdown.className = "up-two";

//             odownup.className = "down-one";
//             odowndown.className = "down-two";

//             this.odownWrap.style.left = this.oupWrap.style.left = l + "px";

//             // odownWrap.style.transform = oupWrap.style.transform = "translateX("++"px)";

//             oupup.style.height = this.uh - 60 + "px";
//             odowndown.style.height = this.dh - 60 + "px";


//             pobj.appendChild(this.oupWrap);
//             pobj.appendChild(this.odownWrap);

//         };
//         Pipe.prototype.removePipe = function() {

//         };
//         Pipe.prototype.movePipe = function() {
//             this.oupWrap.style.left = this.oupWrap.offsetLeft - 3 + "px";
//             this.odownWrap.style.left = this.odownWrap.offsetLeft - 3 + "px";
//         };

//     }

// }
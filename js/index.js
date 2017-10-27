// 开始游戏
$("#startBtn").addEventListener("click", function() {
    this.hide();
    $("#sTitle").hide();
    var pobj = $("#wrap");
    var obird = new Bird(40, 28, 50, 200, 0);
    obird.showBird(pobj);
    obird.down();
    obird.wings();
    pobj.onclick = function() {
        obird.speed = -8;
    }
}, false);
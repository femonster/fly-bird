var pipeArr = [];
var dis = randomNum(130, 250);

function randomPipe(pobj) {
    if (pipeArr.length) {
        for (var i = 0; i < pipeArr.length; i++) {
            pipeArr[i].movePipe();
        }
        if (pipeArr[pipeArr.length - 1].downWrap.offsetLeft < (450 - dis)) {
            dis = randomNum(130, 250);
            var newPipe = new Pipe();
            newPipe.createPipe();
            pipeArr.push(newPipe);
        }
        if (pipeArr[0].downWrap.offsetLeft < -50) {
            pobj.removeChild(pipeArr[0].upWrap);
            pobj.removeChild(pipeArr[0].downWrap);
            pipeArr.shift(pipeArr[0]);
        }
    }
}
// 开始游戏
$("#startBtn").addEventListener("click", function() {
    this.hide();
    $("#sTitle").hide();
    var pobj = $("#wrap");
    var obird = new Bird(40, 28, 50, 200, 0);
    obird.showBird(pobj);
    obird.down();
    obird.wings();
    var newPipe = new Pipe();
    newPipe.createPipe();
    pipeArr.push(newPipe);
    setInterval(function() {
        randomPipe(pobj);
    }, 50);
    pobj.onclick = function() {
        obird.speed = -8;
    }
}, false);
var pipeArr = [];
var dis = randomNum(130, 250);
var pipeTimer = null;

var oScore = $("#score");
var on1 = $("#num1");
var on2 = $("#num2");
var on3 = $("#num3");
var score = 0;
// 随机创建管道函数
function randomPipe(bird, pobj) {
    if (pipeArr.length) {
        for (var i = 0; i < pipeArr.length; i++) {
            pipeArr[i].movePipe();
            var x = collision(bird.odiv, pipeArr[i].downWrap);
            var y = collision(bird.odiv, pipeArr[i].upWrap);
            var z = bird.odiv.offsetTop >= 390;
            // 游戏结束
            if (x || y || z) {
                clearInterval(pipeTimer);
                bird.fallSpeed = 0;
                pobj.onclick = null;
                $("#grassLand2").className = $("#grassLand1").className = "c-grass";
                $(".shadow")[0].show();
                $("#overWrap").show();
            }
        }
        // 开始创建新的管道
        if (pipeArr[pipeArr.length - 1].downWrap.offsetLeft < (450 - dis)) {
            dis = randomNum(130, 250);
            var newPipe = new Pipe();
            newPipe.createPipe();
            pipeArr.push(newPipe);
        }

        // 删除已经移出视野的广告
        if (pipeArr[0].downWrap.offsetLeft < -50) {
            pobj.removeChild(pipeArr[0].upWrap);
            pobj.removeChild(pipeArr[0].downWrap);
            pipeArr.shift(pipeArr[0]);
        }

        //积分面板
        if (pipeArr[0].downWrap.offsetLeft == -5) {
            score++;
            if (score < 10) {
                on1.style.backgroundImage = "url(./img/" + score + ".jpg)";
            } else if (score < 100) {
                on2.show();
                on1.style.backgroundImage = "url(./img/" + parseInt(score / 10) + ".jpg)";
                on2.style.backgroundImage = "url(./img/" + score % 10 + ".jpg)";
            } else if (score < 1000) {
                on3.show();
                on1.style.backgroundImage = "url(./img/" + parseInt(score / 100) + ".jpg)";
                on2.style.backgroundImage = "url(./img/" + parseInt(score / 10) % 10 + ".jpg)";
                on3.style.backgroundImage = "url(./img/" + score % 10 + ".jpg)";
            }
            console.log(score);
        }
    }
}
// 开始游戏
$("#startBtn").addEventListener("click", function() {
    this.hide();
    $("#sTitle").hide();
    on1.show();
    var pobj = $("#wrap");

    // 创建一只鸟
    var obird = new Bird(40, 28, 50, 200, 0);
    obird.showBird(pobj);
    obird.down();
    obird.wings();

    // 创建管道（随机）
    var newPipe = new Pipe();
    newPipe.createPipe();
    pipeArr.push(newPipe);
    pipeTimer = setInterval(function() {
        randomPipe(obird, pobj);
    }, 50);
    // 点击向上飞
    pobj.onclick = function() {
        obird.speed = -8;
    }
}, false);

$("#again").addEventListener("click", function() {
    window.location.reload();
});
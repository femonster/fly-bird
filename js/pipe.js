//dh 下管道的高度，mh 中间管道的高度
// 上管道的高度uh = offsetHeight - dh - mh
// 生成管道的位置 pos
function Pipe(pobj) {
    this.dh = randomNum(0,200);
    this.mh = randomNum(150,170);
    this.pos= rendomNum();
    this.uh = pobj.offsetHeight - this.dh - this.mh;
    this.createTimer = null;
    console.log(this.dh,this.mh,this.uh,pobj.offsetHeight);
    if(!typeof this.createPipe !="function"){
        // className,位置,高度,
        // Pipe.prototype.createDiv = function(cName,sh,pos,left){
        //     var newDiv = document.createElement("div");
        //     newDiv.className=cName;
        //     newDiv.style.height=sh+"px";
        //     newDiv.style.left=left+pos+"px";
        //     return newDiv;
        // };
        Pipe.prototype.createPipe = function(pobj){

            var oupWrap = document.createElement("div");
            var odownWrap= document.createElement("div");
            var oupup = document.createElement("div");
            var oupdown = document.createElement("div");   
            var odownup =document.createElement("div");
            var odowndown=document.createElement("div"); 
            
            oupWrap.appendChild(oupup);
            oupWrap.appendChild(oupdown);

            odownWrap.appendChild(odownup);
            odownWrap.appendChild(odowndown);

            oupWrap.className="pipe p-up";
            odownWrap.className="pipe p-down";

            oupup.className="up-one";
            oupdown.className="up-two";

            odownup.className="down-one";
            odowndown.className="down-two";

            oupup.style.height=this.uh -60 +"px";
            odowndown.style.height=this.dh -60 +"px";
            console.log(this.uh -60,this.dh -60);

            pobj.appendChild(oupWrap);
            pobj.appendChild(odownWrap);
            
        };
        Pipe.prototype.removePipe = function(){
            
        };
        Pipe.prototype.randomPipe = function(){

        };

    }

}
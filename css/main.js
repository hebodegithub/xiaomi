document.getElementById('download').onmouseover=function(){
    document.getElementById('download').children[0].style.display="block";
};
document.getElementById('download').onmouseout=function(){
    document.getElementById('download').children[0].style.display="none";
};
var gwc = document.getElementsByClassName('gwc')[0];
document.getElementsByClassName('gw')[0].onmouseover=function(){
    gwc.style.display="block";
    gwc.style.transform="translate(0,-5px)";
    gwc.style._webkit_box_shadow="0px 5px 5px #e5e5e5";
};
document.getElementsByClassName('gw')[0].onmouseout=function(){
    document.getElementsByClassName('gwc')[0].style.display="none";
};
bg = document.getElementById('background');
var n=1;
function carousel(){
    n++;
    if(n>5){
        n=1;
    }
    bg.children[0].src="./images/xmad_"+n+".jpg";
}
timer = setInterval(carousel,3000);
document.getElementsByClassName('lt')[0].onclick=function(){
    clearInterval(timer);
    n--;
    if(n<1){
        n=5;
    }
    bg.children[0].src="./images/xmad_"+n+".jpg";
};
document.getElementsByClassName('gt')[0].onclick=function(){
    clearInterval(timer);
    n++;
    if(n>5){
        n=1;
    }
    bg.children[0].src="./images/xmad_"+n+".jpg";
};
var btn = document.getElementsByName('btn');
for(var i=0;i<btn.length;i++){
    (function(i){
        btn[i].onclick=function(){
        // clearInterval(timer);
        bg.children[0].src="./images/xmad_"+(i+1)+".jpg";
        // setInterval(carousel,5000);
        };
    })(i);
}
var jd = document.getElementsByClassName('jd');
jd[3].children[0].style.color="orange";
jd[0].children[1].style.display="block";
for(var i=0;i<jd.length;i++){
    (function(i){
        jd[i].onmouseover=function(){
        this.children[0].style.color="orange";
        this.children[0].style.text_decoration="underline";
        this.children[0].style.border_bottom = "1px solid red";
        this.children[1].style.display="block";
        };
        jd[i].onmouseout=function(){
            this.children[0].style.color="black";
        };
    })(i);
}
document.getElementsByClassName('fix')[0].children[1].children[0].onmouseover=function(){
    document.getElementsByClassName('fix')[0].children[0].style.display="block";
};
document.getElementsByClassName('fix')[0].children[1].children[0].onmouseout=function(){
    document.getElementsByClassName('fix')[0].children[0].style.display="none";
};
var video = document.getElementById('video');
function vod(){
    var v = document.getElementsByClassName('v')[0].getElementsByTagName('a');
    video.style.display="block";
    video.children[1].style.display="block";
    video.children[2].style.display="none";
}
video.children[2].style.display="none";
video.getElementsByTagName('button')[0].onclick=function(){
    video.children[2].children[0].pause();
    video.style.display="none";
};
video.getElementsByTagName('button')[1].onclick=function(){
    video.children[1].style.display="none";
    fadeIn(video.children[2],2000);
    video.children[2].style.display="block";
    video.children[2].children[0].play();
};
function out(){
    var i = 10;
    video.style.top+= i+"px";
}
function fadeIn(element){
    if(element.style.opacity !=1){
        var speed = speed || 30 ;
        var num = 0;
        var st = setInterval(function(){
        num++;
        element.style.opacity = num/10;
        if(num>=10)  {  clearInterval(st);  }
        },speed);
    }
}
function fadeOut(element){
    if(element.style.opacity !=0){
        var speed = speed || 30 ;
        var num = 10;
        var st = setInterval(function(){
        num--;
        element.style.opacity = num / 10 ;
        if(num<=0)  {   clearInterval(st);  }
        },speed);
    }
}

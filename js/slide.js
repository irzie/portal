/*============================================
	"toujyou.js" is written by HAKASHUN
============================================*/
/*slideというクラス属性がつけられた要素を隠す*/
$(document).ready(function(){
	$(".slide").hide();
});
/*変数を予めセットする*/
var i = 0;
var int=0;
/*ページがロードされたら、touyjouファンクションを作動させる。ここの数値は、ロードされてから、toujyou(i)を動作させるまでのタイムラグ*/
/*yattoファンクションは、1000ミリ秒立ってから作動させる*/
$(window).bind("load", function() {
    setTimeout("yatto()",0);
});

function yatto(){
	var int = setInterval("toujyou(i)",200);
}

function toujyou() {
     var slides = $('div.slide').length;
     /*slidesの数全て完了したら、動作のループを止める*/
     if (i >= slides) {
          clearInterval(int);
    }
    /*wrapperクラス（非表示状態への動作指令）、数値は表示スピード*/
    $('.slide:hidden').eq(0).animate({
    height:'toggle',
    opacity:'toggle',
    marginTop: "0.6in"
    },200)
    /*変数iに値を追加する*/
    i++;
}



$(document).ready(function(){
	$(".slide2").hide();
});
/*変数を予めセットする*/
var i = 0;
var int=0;
/*ページがロードされたら、touyjouファンクションを作動させる。ここの数値は、ロードされてから、toujyou(i)を動作させるまでのタイムラグ*/
/*yattoファンクションは、1000ミリ秒立ってから作動させる*/
$(window).bind("load", function() {
    setTimeout("yatto2()",0);
});

function yatto2(){
	var int = setInterval("toujyou2(i)",1300);
}

function toujyou2() {
     var slides = $('div.slide2').length;
     /*slidesの数全て完了したら、動作のループを止める*/
     if (i >= slides) {
          clearInterval(int);
    }
    /*wrapperクラス（非表示状態への動作指令）、数値は表示スピード*/
    $('.slide2:hidden').eq(0).animate({
    height:'toggle',
    opacity:'toggle',
    marginTop: "0.6in"
    },500)
    /*変数iに値を追加する*/
    i++;
}
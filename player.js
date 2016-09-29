	//开启严格模式
	"use strict";
	var myVideo = document.getElementById("vid");
	var btn1 = document.getElementById("btn1");
	var voi = document.getElementById("voi");
	var fast = document.getElementById("fast");
	var slow = document.getElementById("slow");
	var myImg = document.getElementById("myImg");
	var	myPlay = document.getElementById("myPlay");
	var tm = document.getElementById("tm");
	var mjin = document.getElementById("mjin");
	var jinDu = document.getElementById("jinDu");
	//声音
	var myVoice = document.getElementById("myVoice");
	var voicea = document.getElementById("voice");
	var video_voice = myVideo.volume;
	var allTime;
	var myTime;
	myPlay.onclick = function(){
		if (myVideo.paused){
			myVideo.play();		
		}else {
			myVideo.pause();	
		}
	}
	//静音
	voi.onclick = function(){
		if(myVideo.muted){
			myVideo.muted = false;
			voi.style.backgroundPosition =  "-296px -95px";
		}else {
			myVideo.muted = true;
			voi.style.backgroundPosition = "-33px -160px";
		}	
	}
	//快进
	fast.onclick = function(){
		myVideo.currentTime = myVideo.currentTime + 8;
	}
	//快退
	slow.onclick = function(){
		myVideo.currentTime = myVideo.currentTime - 8;
	}
	//图片出现隐藏
	myVideo.onplay = function () {
		myImg.style.display = "none";
		myPlay.style.backgroundPosition = "-75px -160px";
	}
	myVideo.onpause = function(){
		myImg.style.display = "block";
		myPlay.style.backgroundPosition = "-120px -160px";
	}
	myImg.onclick = function(){
		myImg.style.display = "none";
	}
	//显示时时时间
	//给myVideo即视频添加时间改变触发事件；
	window.setInterval(function(){
		 	myTime = parseInt(myVideo.currentTime);
		var miao = parseInt(myVideo.currentTime)%60;
		var fen  = parseInt(myTime/60)%60;
			allTime = myVideo.duration;
		var allmiao = parseInt(myVideo.duration)%60;
		var allfen  = parseInt(myVideo.duration/60)%60;
		var allshi = parseInt(myVideo.duration/3600);
		if(allmiao<10){
			allmiao = "0"+allmiao;
		}
		if(allfen<10){
			allfen = "0"+allfen;
		}
		if(miao<10){
			miao = "0"+miao;
		}
		if(fen<10){
			fen = "0"+fen;
		}
	 	var shi = parseInt(myTime/3600);
	 	tm.innerHTML = shi+":"+fen+":"+miao+"/"+allshi+":"+allfen+":"+allmiao;
		//进度条
		var kuan = (myTime/allTime)*400;
		mjin.style.width=kuan+"px";
	},20)
	//移动进度条

	jinDu.onclick = function(event){
		myVideo.currentTime = parseInt(event.offsetX)/400*myVideo.duration;
		
	}
	jinDu.onmousedown = function(){
		jinDu.onmousemove = function(){ myVideo.currentTime = parseInt(event.offsetX)/400*myVideo.duration;}
		document.onmouseup = function(){
		jinDu.onmousemove = null;
		}
	}
	//控制声音
	
	voice.onclick = function(event){
		myVideo.volume = event.offsetX/70;
		myVoice.style.width =myVideo.volume*70+"px";
	}		
		var SY;	
		voice.onmousedown = function(event){
		voice.onmousemove = function(){ 
			myVideo.volume = event.offsetX/70;
			myVoice.style.width =event.offsetX+"px";
		}
		document.onmouseup = function(){
		voice.onmousemove = null;
		}
	}
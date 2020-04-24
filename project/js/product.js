var bzbt= document.getElementById('bzbt');
var all=document.getElementById('all');

var triangle=new Array();
triangle[0]=document.getElementById('all-t');
triangle[1]=document.getElementById('bzbt-t');

bzbt.onclick=function () {
	triangle[0].style.display="none";
	triangle[1].style.display="block";
}

all.onclick=function () {
	triangle[1].style.display="none";
	triangle[0].style.display="block";
}

var ame=new Array();
ame[0]="美味甜甜圈";
ame[1]="芝士蛋糕";
ame[2]="闪电泡芙";
ame[3]="慕斯甜甜圈";
ame[4]="软欧圈";
ame[5]="麦芬圈";
ame[6]="起酥圈";
ame[7]="常规蛋糕";
ame[8]="果汁茶饮";

var category=new Array();
category[0]=document.getElementById('pro-1');
category[1]=document.getElementById('pro-2');
category[2]=document.getElementById('pro-3');
category[3]=document.getElementById('pro-4');
category[4]=document.getElementById('pro-5');
category[5]=document.getElementById('pro-6');
category[6]=document.getElementById('pro-7');
category[7]=document.getElementById('pro-8');
category[8]=document.getElementById('pro-9');

var img=new Array();
img[0]=document.getElementById('pic-1');
img[1]=document.getElementById('pic-2');
img[2]=document.getElementById('pic-3');
img[3]=document.getElementById('pic-4');
img[4]=document.getElementById('pic-5');
img[5]=document.getElementById('pic-6');
img[6]=document.getElementById('pic-7');
img[7]=document.getElementById('pic-8');
img[8]=document.getElementById('pic-9');

var show=document.getElementById('word');
var pic=document.getElementById('modal-content');

category[0].onclick=function() {
	word.style.display="none";
	pic.style.display="none";
	document.getElementById('title').innerText=ame[0];
	word.style.display="block";	
	pic.src=img[0].src;	
	pic.style.display="block";
}
category[1].onclick=function() {
	word.style.display="none";
	pic.style.display="none";
	document.getElementById('title').innerText=ame[1];
	word.style.display="block";	
	pic.src=img[1].src;	
	pic.style.display="block";
}
category[2].onclick=function() {
	word.style.display="none";
	pic.style.display="none";
	document.getElementById('title').innerText=ame[2];
	word.style.display="block";	
	pic.src=img[2].src;	
	pic.style.display="block";
}
category[3].onclick=function() {
	word.style.display="none";
	pic.style.display="none";
	document.getElementById('title').innerText=ame[3];
	word.style.display="block";	
	pic.src=img[3].src;	
	pic.style.display="block";
}
category[4].onclick=function() {
	word.style.display="none";
	pic.style.display="none";
	document.getElementById('title').innerText=ame[4];
	word.style.display="block";	
	pic.src=img[4].src;	
	pic.style.display="block";
}
category[5].onclick=function() {
	word.style.display="none";
	pic.style.display="none";
	document.getElementById('title').innerText=ame[5];
	word.style.display="block";	
	pic.src=img[5].src;	
	pic.style.display="block";
}
category[6].onclick=function() {
	word.style.display="none";
	pic.style.display="none";
	document.getElementById('title').innerText=ame[6];
	word.style.display="block";	
	pic.src=img[6].src;	
	pic.style.display="block";
}
category[7].onclick=function() {
	word.style.display="none";
	pic.style.display="none";
	document.getElementById('title').innerText=ame[7];
	word.style.display="block";	
	pic.src=img[7].src;	
	pic.style.display="block";
}
category[8].onclick=function() {
	word.style.display="none";
	pic.style.display="none";
	document.getElementById('title').innerText=ame[8];
	word.style.display="block";	
	pic.src=img[8].src;	
	pic.style.display="block";
}
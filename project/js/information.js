var modal = document.getElementById('myModal');
// 获取图片插入到弹窗
var img=new Array();
img[0] = document.getElementById('myImg1');
img[1] = document.getElementById('myImg2');
var modalImg = document.getElementById("img01");
img[0].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img[1].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
 
// 获取 <span> 元素，设置关闭按钮
var span = document.getElementsByClassName("close")[0];
 
// 当点击 (x), 关闭弹窗
span.onclick = function() { 
    modal.style.display = "none";
}

var left= document.getElementsByClassName("left")[0];
var right= document.getElementsByClassName("right")[0];
left.onclick =function(){
    if(modalImg.src==document.getElementById('myImg1').src){
        modalImg.src=document.getElementById('myImg2').src;
    }
    else if ( modalImg.src==document.getElementById('myImg2').src) {
        modalImg.src=document.getElementById('myImg1').src;
    }
}
right.onclick =function(){
    if(modalImg.src==document.getElementById('myImg1').src){
        modalImg.src=document.getElementById('myImg2').src;
    }
    else if ( modalImg.src==document.getElementById('myImg2').src) {
        modalImg.src=document.getElementById('myImg1').src;
    }
}
var studentArray=[["11503080201","张三","计算机科学与工程学院","软件工程","2015","2","21"],
			 ["11502070102","李四","会计学院","会计学","2015","1","19"],
			 ["11506080403","王二麻子","理学院","数学","2015","4","20"]];

var oTable = document.getElementById('head');
document.getElementById("del").onclick = del;
document.getElementById("add").onclick = add;
document.getElementById("btn_1").onclick = addData;
document.getElementById("btn_2").onclick = back;
iniData();
goPage(1,10);

     //隔行变色
     function foo1(){
        for(var i=1;i<oTable.rows.length;i++){
            if(i%2==0){
                oTable.rows[i].style.backgroundColor = '#eef1f8';
             
            }else{
                oTable.rows[i].style.backgroundColor = '#fff';
            }
        }
     };
     //高光效果
    function foo2(){
        for(var i=1;i<oTable.rows.length;i++){
            oTable.rows[i].onmouseover=function(){
                oldBg = this.style.backgroundColor;
                this.style.backgroundColor = 'pink';
            }
            oTable.rows[i].onmouseout=function(){
                this.style.backgroundColor = oldBg;
            }
        }
    };

function iniData(){  
    var i=0;
    while(i<27){    	
     	for(var j=0;j<3;++j){
       		 // 4. 把td字符添加到tr节
       		var oTr = document.createElement('tr');
       		oTr.innerHTML = "<td><input name='check' type='checkbox'/></td>" +
            "<td id='num'>" + ""+ "</td>" +
            "<td>" + studentArray[j][0] + "</td>" +
            "<td>" + studentArray[j][1] + "</td>" +
            "<td>" + studentArray[j][2] + "</td>" +
            "<td>" + studentArray[j][3] + "</td>" +
            "<td>" + studentArray[j][4] + "</td>" +
            "<td>" + studentArray[j][5] + "</td>" +
            "<td>" + studentArray[j][6] + "</td>" +
            "<td><a href='#' name='look' onclick='looks(this)'>查看</a>&nbsp&nbsp&nbsp<a href='#' name='change' onclick='changes(this)'>修改</a></td>";
            i=i+1;
            oTable.appendChild(oTr);
            if(i==27){
            	break;
            }
    	}	
    }
}

function looks(a) {
    var tr = a.parentNode.parentNode.rowIndex;            
    var oInputs = document.getElementsByName('info');
    var form = document.getElementById("form");
    document.getElementById("h-title").innerHTML="&nbsp&nbsp&nbsp查看学生信息";
    form.style.display = "block";
    oInputs[0].value=oTable.rows[tr].cells[2].innerHTML;
    oInputs[1].value=oTable.rows[tr].cells[3].innerHTML; 
    oInputs[2].value=oTable.rows[tr].cells[4].innerHTML; 
    oInputs[3].value=oTable.rows[tr].cells[5].innerHTML; 
    oInputs[4].value=oTable.rows[tr].cells[6].innerHTML; 
    oInputs[5].value=oTable.rows[tr].cells[7].innerHTML; 
    oInputs[6].value=oTable.rows[tr].cells[8].innerHTML; 
    for(var l=0;l<7;++l){
        oInputs[l].disabled="disabled";
    }
    document.getElementById("btn_1").style.opacity="0";
};

function changes(a) {
    var tr = a.parentNode.parentNode.rowIndex;            
    var oInputs = document.getElementsByName('info');
    var form = document.getElementById("form");
    document.getElementById("h-title").innerHTML="&nbsp&nbsp&nbsp修改学生信息";
    form.style.display = "block";
    oInputs[0].value=oTable.rows[tr].cells[2].innerHTML;
    oInputs[1].value=oTable.rows[tr].cells[3].innerHTML; 
    oInputs[2].value=oTable.rows[tr].cells[4].innerHTML; 
    oInputs[3].value=oTable.rows[tr].cells[5].innerHTML; 
    oInputs[4].value=oTable.rows[tr].cells[6].innerHTML; 
    oInputs[5].value=oTable.rows[tr].cells[7].innerHTML; 
    oInputs[6].value=oTable.rows[tr].cells[8].innerHTML; 
    document.getElementById("btn_1").innerText="保存";
    document.getElementById("btn_1").style.opacity="1";
     for(var l=0;l<7;++l){
        oInputs[l].disabled="";
    }
    document.getElementById("btn_1").onclick=function(){
        var c=formCheck();
        if(c){
            oTable.rows[tr].cells[2].innerHTML = oInputs[0].value
            oTable.rows[tr].cells[3].innerHTML = oInputs[1].value
            oTable.rows[tr].cells[4].innerHTML = oInputs[2].value
            oTable.rows[tr].cells[5].innerHTML = oInputs[3].value 
            oTable.rows[tr].cells[6].innerHTML = oInputs[4].value 
            oTable.rows[tr].cells[7].innerHTML = oInputs[5].value 
            oTable.rows[tr].cells[8].innerHTML = oInputs[6].value 
            form.style.display = "none";
        }
    };
};

function goPage(pno, psize) {
    var table = document.getElementById("head");
    var length = table.rows.length - 1;//表格所有行数(所有记录数)
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页
    if (length / pageSize > parseInt(length / pageSize)) {
        totalPage = parseInt(length / pageSize) + 1;
    } else {
        totalPage = parseInt(length / pageSize);
    }
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize + 1;//开始显示的行
    var endRow = currentPage * pageSize;//结束显示的行
    endRow = (endRow > length) ? length : endRow;
    //遍历显示数据实现分页
    for (var i = 0; i < (length + 1); i++) {
        if ((i >= startRow && i <= endRow)) {
            table.rows[i].cells[1].innerHTML=i;
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }
        if(i==0){
        	table.rows[i].style.display = "";
        }
    }
    var tip1 = document.getElementById("span1");
    var tip2 = document.getElementById("span2");
    tip1.innerHTML = currentPage;
    tip2.innerHTML = length;

    var before = document.getElementById("up");
    before.onclick = function () {
        if (currentPage > 1) {
            goPage(currentPage - 1, psize);
        }
        else alert("已经是第一页了！");
    };
    var after = document.getElementById("down");
    after.onclick = function () {
        if (currentPage < totalPage) {
            goPage(currentPage + 1, psize);
        }
        else alert("已经是最后一页了！");
    };
        foo1(); //隔行变色
        foo2();//高光效果
}

function checkAll() {
    var _check = document.getElementsByName("check");
    var _value = _check[0].checked;
    for (var i = 1; i < _check.length; i++) {
        if (oTable.rows[i].style.display!="none") {
            _check[i].checked = _value;
        }
    }

}

function del() {
    var Isdel = false;
    var _check = document.getElementsByName("check");
    for (var i = 0; i < _check.length; i++) {
        if (_check[i].checked == true) {
            Isdel = true;
            break;
        }
    }
    if (!Isdel) {
        alert("未勾选任何选项");
        return;
    }
    var value = confirm("请确认是否删除");
    if (value) {
        for (var j = 1; j < _check.length+1 ; ++j) {
            for (var j = 1; j < _check.length ; ++j) {
                 if (_check[j].checked == true) {
                    var tr =_check[j].parentNode.parentNode;
                    var table=tr.parentNode;
    		        table.removeChild(tr);
                    break;
                }
            }
        }
         goPage(1,10);      
    } 
}

function addData(){
    var oInputs = document.getElementsByName('info');
    var oTr = document.createElement('tr');
    oTr.innerHTML = "<td><input name='check' type='checkbox'/></td>" +
            "<td id='num'>" + ""+ "</td>" +
            "<td>" + oInputs[0].value + "</td>" +
            "<td>" + oInputs[1].value + "</td>" +
            "<td>" + oInputs[2].value + "</td>" +
            "<td>" + oInputs[3].value + "</td>" +
            "<td>" + oInputs[4].value + "</td>" +
            "<td>" + oInputs[5].value + "</td>" +
            "<td>" + oInputs[6].value + "</td>" +
            "<td><a href='#' name='look' onclick='looks(this)'>查看</a>&nbsp&nbsp&nbsp<a href='#' name='change' onclick='changes(this)'>修改</a></td>";
    var c=formCheck();
    if(c){
        oTable.appendChild(oTr);
        alert("添加成功！");
        goPage(1, 10);
        back();
    }
}

function add(){
    var form=document.getElementById('form');
    form.style.display="block";
    var oInputs = document.getElementsByName('info');
    for(var i=0;i<7;++i){
        oInputs[i].value="";
        oInputs[i].disabled="";
    }
    document.getElementById("btn_1").innerText="提交";
    document.getElementById("btn_1").style.opacity="1";
}

function back(){
    var form=document.getElementById('form');
    form.style.display="none";
}


function formCheck(){
    var c=true;
    var num=/^1\d{10}$/;
    var name=/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
    var colleege=/^[\u4e00-\u9fa5]+$/;
    var grade=/^(19|20)\d{2}$/;
    var clazz=/^\+?[1-9][0-9]*$/;
    var oInputs = document.getElementsByName('info');
    if(!num.test(oInputs[0].value)){
        alert("请输入11位学号！");
        c=false;
    }
    if(!name.test(oInputs[1].value)){
        alert("请输入正确的姓名！");
        c=false;
    }
    if(!colleege.test(oInputs[2].value)){
        alert("请输入正确的学院！");
        c=false;
    }
    if(!colleege.test(oInputs[3].value)){
        alert("请输入正确的专业！");
        c=false;
    }
    if(!grade.test(oInputs[4].value)){
        alert("请输入正确的年级！");
        c=false;
    }
    if(!clazz.test(oInputs[5].value)){
        alert("请输入正确的班级！");
        c=false;
    }
    if(!clazz.test(oInputs[6].value)){
        alert("请输入正确的年龄！");
        c=false;
    }
    return c;
}
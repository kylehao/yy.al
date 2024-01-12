  //显示层和隐含层
  function MenuSwitch(PopMenuObj) {
       var  CurrentObj;
       CurrentObj = eval(PopMenuObj);
       if (CurrentObj){
          if (CurrentObj.style.visibility == 'hidden'){
              CurrentObj.style.visibility = 'visible';
          }else{
              CurrentObj.style.visibility = 'hidden';
          }
      }
  }

//弹出整个页面
    function Todoopen(URLPage){
       parent.location.href=URLPage;
       }

//在同一个页面或者框架中显示  
 function Todoopenself(URLPage){
    self.location.href=URLPage;
       }

//下下级页面
function Todoopen1(URLPage){
       parent.parent.location.href=URLPage;
       }

//下下级页面
function Todoopen4(URLPage){
       parent.parent.parent.location.href=URLPage;
       }

//targetname：同级页面的名
    function Todoopen2(URLPage){
       vpage.location.href=URLPage;
       
       }

//targetname：同级页面的名点击后目标位置出现
function Todoopen3(URLPage){
       vpage.location.href=URLPage;
       document.body.scrollLeft=parseInt(document.body.clientWidth);
       }

//targetname：诗海津筏同级页面的名点击后目标位置出现
function Todoopen5(URLPage){
    parent.parent.document.body.scrollLeft=parseInt(parent.document.body.clientWidth)/2;   
    parent.page2.location.href=URLPage;
       
       }

 //注册窗口
 function opennewwindow(url)
 {
  var name="regist";
  window.open(url,name,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=yes,width=448,height=420");
 }

 //登录窗口
 function openloginwindow(url)
 {
  var name="login";
  window.open(url,name,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=yes,width=346,height=280");
 }

 //弹出典故窗口
 function openDianguWindow(url)
 {
 var name="diangu";
 window.open(url,name,"resizable=yes,menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes, width=400,height=480");
 }

 
 //弹出对联搜索窗口
 function openSeaWindow(url){
 	var name="search";
	window.open(url,name,"width=584,height=440");
}


 //打开翻页数的链接
  function DoMenu(MenuValue){
      location.href=MenuValue;
      return true;
   }

//页面出现在最左边
function GoHead(){
   parent.document.body.scrollLeft=0;
}

//动画按钮
function ShowImg(ImgName,ImgFlag) {
      if (ImgFlag==1){
	     TheImg = eval(ImgName+"F.src");
      }else{
	     TheImg = eval(ImgName+"B.src");
	  }
      document [ImgName].src = TheImg;
      return true;
   }


//收集诗词

 function openscreen(url)
 {
  var name="regist";
  window.open(url,name,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=yes,width=736,height=426");
 }

 function opencontact(email)
 {
  var name="contact";
  window.open(email,name,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=yes,width=500,height=288");
 }

//


function RecordOption(Flag)
  {
  var length = document.recordfrm.elements.length 
  var recordindex 
  var selectedstring 
  selectedstring="" 
  for (var i=(length-1); i>=0; i--) 
  { 
    recordindex  = document.recordfrm.elements[i].name.indexOf("record"); 
    if (recordindex  != -1) { 
        if (document.recordfrm.elements[i].checked){ 
           if (selectedstring == "") 
              selectedstring = document.recordfrm.elements[i].value; 
           else { 
              selectedstring = selectedstring  + "," + document.recordfrm.elements[i].value;
           } 
        } 
    } 
  } 
  if (selectedstring != "") { 
           window.location="DelFrm.asp?SelectedItems=" + selectedstring; 
     } 
    
  else {
       alert("请选择要删除的记录!");
   }
  return; 
  }

function selectall()
  {
  var setcheck,length;
  length = document.recordfrm.elements.length ;
  if (document.recordfrm.setall.value == 0){
      document.recordfrm.setall.value = 1;
      setcheck = true;
  }else{
      document.recordfrm.setall.value = 0;
      setcheck = false;
  }
  for (var i=0; i<length; i++) { 
      if (document.recordfrm.elements[i].name.indexOf("record") != -1) 
         document.recordfrm.elements[i].checked = setcheck; 
  } 
  return;
  }
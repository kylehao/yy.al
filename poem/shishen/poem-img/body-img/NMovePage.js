  var MoveMSpeed=4;
  var MoveFSpeed=0;
  var Pause=false;
  var CurInt=0;
  var Direct=1;
  var TimeInt=0;
  var ScrollFlag=false;
  var MouseX,MouseY;

  function ScrollPause(){
      Pause=!Pause;
  }

  function ScrollMNow(){
      if (!Pause) {
         document.body.scrollLeft=parseInt(document.body.scrollLeft)+ (Direct * MoveMSpeed);
         CurInt=CurInt-MoveMSpeed;
         if(CurInt<0){
           clearInterval(TimeInt);
           TimeInt=0;
         }
      }
  }

  function ScrollFNow(){
      if (!Pause) {
         MoveFSpeed=CurInt/8;
         document.body.scrollLeft=parseInt(document.body.scrollLeft)+ (Direct * MoveFSpeed);
         CurInt=CurInt-MoveFSpeed;
         if(CurInt<0){
           clearInterval(TimeInt);
           TimeInt=0;
         }
      }
  }


  function ScrollScreenBegin(Flag){
    var CurWidth=parseInt(document.body.clientWidth);
    Pause=false;
    if (Flag=='FL'){
       CurInt=parseInt(document.body.scrollLeft);
       Direct=-1;
       if (!Pause) {
         if (TimeInt==0) {
           TimeInt=setInterval("ScrollFNow()",30);
         }
       }
    }
    if (Flag=='FR'){
       CurInt=parseInt(document.body.scrollWidth)-parseInt(document.body.scrollLeft)-CurWidth;
       Direct=1;
       if (!Pause) {
         if (TimeInt==0) {
           TimeInt=setInterval("ScrollFNow()",30);
         }
       }
    }

    if (Flag=='ML'){
       CurInt=parseInt(document.body.scrollLeft);
       Direct=-1;
       if (!Pause) {
         if (TimeInt==0) {
           TimeInt=setInterval("ScrollMNow()",30);
         }
       }
    }
    if (Flag=='MR'){
       CurInt=parseInt(document.body.scrollWidth)-parseInt(document.body.scrollLeft)-CurWidth;
       Direct=1;
       if (!Pause) {
         if (TimeInt==0) {
           TimeInt=setInterval("ScrollMNow()",30);
         }
       }
    }
  }


  function ScrollScreenEnd(Flag){
        clearInterval(TimeInt);
        TimeInt=0;
        Pause=true;
  }


  function MoveScreen() {
    var CursorX;
    if (ScrollFlag) {
       CursorX=window.event.x;
       document.body.scrollLeft=parseInt(document.body.scrollLeft) - (CursorX-MouseX);
       MouseX=CursorX;
    }
  }

  function MoveStar() {
    ScrollFlag=true;
    MouseX=window.event.x;
  }

  function MoveStop() {
    ScrollFlag=false;
  }
//一屏一屏的滚动
function scrollonescreen()
{ var key,l;
      key=window.event.keyCode;
      //alert(key);
  if (key=='39'){
        //alert(parseInt(document.body.clientWidth));
        document.body.scrollLeft=document.body.scrollLeft+parseInt(document.body.clientWidth)-70;
     }
  if (key=="37")
     { document.body.scrollLeft=document.body.scrollLeft-parseInt(document.body.clientWidth)+70;
     }
            
}


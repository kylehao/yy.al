function copy(ob) {
  var obj=findObj(ob); if (obj) { 
  obj.select();js=obj.createTextRange();js.execCommand("Copy");}
}

function cut(ob) {
  var obj=findObj(ob); if (obj) { 
  obj.select();js=obj.createTextRange();js.execCommand("Cut");}
}

function findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function charPYStr(){
return 'ABCDEFGHIJKLMNOPQRSTUVYWXZ';
}

function ftPYStr(){
return 'abcdefghijklmnopqrstuvywxz';
}

function traditionalized(cc){
	var str='';
	for(var i=0;i<cc.length;i++){
		if(charPYStr().indexOf(cc.charAt(i))!=-1)
			str+=ftPYStr().charAt(charPYStr().indexOf(cc.charAt(i)));
		else
			str+=cc.charAt(i);
	}
	return str;
}

function simplized(cc){
	var str='';
	for(var i=0;i<cc.length;i++){
		if(ftPYStr().indexOf(cc.charAt(i))!=-1)
			str+=charPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)));
		else
			str+=cc.charAt(i);
	}
	return str;
}

function convert(){
	if(h1.value==0)
		txt.value=simplized(txt.value);
	else
		txt.value=traditionalized(txt.value);
}
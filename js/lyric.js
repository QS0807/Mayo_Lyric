var control=false;
function RomanjiToHiragana(string,ID,pID){
	var btn = document.getElementById(ID);
	btn.onclick=function(){
	if(control){
		document.getElementById(pID).innerHTML=string;
		control=false;
	}
	else{
		
		var result=wanakana.toHiragana(string);
	document.getElementById(pID).innerHTML=result;
	control=true;
	}
	}
}
function translate(){
	var input = document.getElementById('ime');
wanakana.bind(input);
}
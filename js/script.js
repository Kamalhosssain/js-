//js

//number as string
let R = "5" + 3 + 2 ;
function num_string(){
	document.getElementById('n_st').innerHTML = R ;
}

//booleans
let p=5;
let r=5;
let m=6;
function booleans(){
	document.getElementById('booleans').innerHTML=(p==r)+"<br>" +(p==m);
}
//number and string adding
let k= 16 +"volvo";
function numberstring(){
	document.getElementById('n_s').innerHTML=k;
}
//multiplication
let a=3
let b=(100+50)*a

function arithmetic(){
document.getElementById('artih').innerHTML = b;
}
//multiplication
let num1=10
let num2=5
let num3=num1*num2
function multiplication(){
document.getElementById('multi').innerHTML = num3;
}
//addition
let x=10
let y=5
let z=x+y
function addition(){
document.getElementById('addi').innerHTML = z;
}
//tag name
function tagname(){
	var info = document.getElementsByTagName('h3');
	alert(info.length); 
}
//calculation
var number1=5
var number2=3
var number3=number1+number2
function calculation(){
	document.getElementById('value').innerHTML=number3;
}

//show/hide
function textshow(){
	document.getElementById('text').style.display='block'
}
function texthide(){
	document.getElementById('text').style.display='none'
}
//color change
function colorchange(){
	document.getElementById('c_c').style.color='blue'
}
//bulb on/off
function bulbOn(){
	document.getElementById('bulb').src='images/bulbon.gif';
}
function bulbOff(){
	document.getElementById('bulb').src='images/bulboff.gif';
}
//show date
function showDate(){
	document.getElementById('s_d').innerHTML= Date();
}
//text change
function textchanged(){
	document.getElementById('t_ch').innerHTML="hello";


}

//text change
function textchange(){
	document.getElementsByClassName('t_c')[1].innerHTML="hello";


}

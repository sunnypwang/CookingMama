var menuName = "Instant Noodle";
var names = ["-","Ready?", "Pour water in the pot", "Boil it","Put the noodle in and wait","It's finish. Enjoy!"];
var valTime = ["-",false,false,false,true,false];
var valTemp = ["-",false,false,true,false,false];
var time = ["-",0,0,0,60,0];
var temp = ["-",0,0,30,0,0];
var maxStep = 5;

function setMenu(){
	menuName = document.getElementById("menuLabel").value;
}

function startSelMenu(){
	var x = document.getElementById("selMenu").value;
	if(x=="001"){
		menuName = "Instant Noodle";
		names =  ["-","Ready?", "Pour water in the pot", "Boil it","Put the noodle in and wait","It's finish. Enjoy!"];
		valTime = ["-",false,false,false,true,false];
		valTemp = ["-",false,false,true,false,false];
		time = ["-",0,0,0,60,0];
		temp = ["-",0,0,30,0,0];
		maxStep = 5;
	}else if(x=="002"){
		menuName = "Soup 1";
		names =  ["-","Ready?", "Pour water in the pot", "Boil it","Put the beef in and wait","It's finish. Enjoy!"];
		valTime = ["-",false,false,false,true,false];
		valTemp = ["-",false,false,true,false,false];
		time = ["-",0,0,0,180,0];
		temp = ["-",0,0,20,0,0];
		maxStep = 5;
	}else if(x=="003"){
		menuName = "Soup 2";
		names =  ["-","Ready?", "Pour water in the pot", "Boil it","Put the pork in and wait","It's finish. Enjoy!"];
		valTime = ["-",false,false,false,true,false];
		valTemp = ["-",false,false,true,false,false];
		time = ["-",0,0,0,200,0];
		temp = ["-",0,0,24,0,0];
		maxStep = 5;
	}else if(x=="004"){
		menuName = "Soup 3";
		names =  ["-","Ready?", "Pour water in the pot", "Boil it","It's finish. Enjoy!","-"];
		valTime = ["-",false,false,false,true,false];
		valTemp = ["-",false,false,true,false,false];
		time = ["-",0,0,0,0,0];
		temp = ["-",0,0,35,0,0];
		maxStep = 4;
	}
	load();
}

function setStep1() { 
	maxStep = 1;
	document.getElementById("add1").style.visibility = "hidden";
}
function setStep2() { 
	maxStep = 2;
	document.getElementById("add2").style.visibility = "hidden";
}
function setStep3() { 
	maxStep = 3;
	document.getElementById("add3").style.visibility = "hidden";
}
function setStep4() { 
	maxStep = 4;
	document.getElementById("add4").style.visibility = "hidden"; 
}
function setStep5() { 
	maxStep = 5;
}
function setAndLoad1(){
	setStep1();
	load();
}
function setAndLoad2(){
	setStep2();
	load();
}
function setAndLoad3(){
	setStep3();
	load();
}
function setAndLoad4(){
	setStep4();
	load();
}
function setAndLoad5(){
	setStep5();
	load();
}
function enableBtn2() {
	document.getElementById("f02").style.visibility = "visible";
	document.getElementById("or1").style.visibility = "hidden";
	document.getElementById("st1").style.visibility = "hidden";
	setStep1();
}
function enableBtn3() {
	document.getElementById("f03").style.visibility = "visible";
	document.getElementById("or2").style.visibility = "hidden";
	document.getElementById("st2").style.visibility = "hidden";
	setStep2();
}
function enableBtn4() {
	document.getElementById("f04").style.visibility = "visible";
	document.getElementById("or3").style.visibility = "hidden";
	document.getElementById("st3").style.visibility = "hidden";
	setStep3();
}
function enableBtn5() {
	document.getElementById("f05").style.visibility = "visible";
	document.getElementById("or4").style.visibility = "hidden";
	document.getElementById("st4").style.visibility = "hidden";
	setStep4();
}

function setName1(){
	names[1] = document.getElementById("nameLabel1").value;
}
function setName2(){
	names[2] = document.getElementById("nameLabel2").value;
}
function setName3(){
	names[3] = document.getElementById("nameLabel3").value;
}
function setName4(){
	names[4] = document.getElementById("nameLabel4").value;
}
function setName5(){
	names[5] = document.getElementById("nameLabel5").value;
}
function setValTime1(){
	valTime[1] = document.getElementById("timeCkBx1");
}
function setValTemp1(){
	valTemp[1] = document.getElementById("tempCkBx1");
}
function setTime1(){
	time[1] = document.getElementById("timeIn1").value;
}
function setTemp1(){
	temp[1] = document.getElementById("tempIn1").value;
}
function setValTime2(){
	valTime[2] = document.getElementById("timeCkBx2");
}
function setValTemp2(){
	valTemp[2] = document.getElementById("tempCkBx2");
}
function setTime2(){
	time[2] = document.getElementById("timeIn2").value;
}
function setTemp2(){
	temp[2] = document.getElementById("tempIn2").value;
}
function setValTime3(){
	valTime[3] = document.getElementById("timeCkBx3");
}
function setValTemp3(){
	valTemp[3] = document.getElementById("tempCkBx3");
}
function setTime3(){
	time[3] = document.getElementById("timeIn3").value;
}
function setTemp3(){
	temp[3] = document.getElementById("tempIn3").value;
}
function setValTime4(){
	valTime[4] = document.getElementById("timeCkBx4");
}
function setValTemp4(){
	valTemp[4] = document.getElementById("tempCkBx4");
}
function setTime4(){
	time[4] = document.getElementById("timeIn4").value;
}
function setTemp4(){
	temp[4] = document.getElementById("tempIn4").value;
}
function setValTime5(){
	valTime[5] = document.getElementById("timeCkBx5");
}
function setValTemp5(){
	valTemp[5] = document.getElementById("tempCkBx5");
}
function setTime5(){
	time[5] = document.getElementById("timeIn5").value;
}
function setTemp5(){
	temp[5] = document.getElementById("tempIn5").value;
}




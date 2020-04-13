const x = document.getElementsByClassName("assign");
const y = ["Zack complains about head armor in warmup","A Zach","A Chanan","Table slam","Simcha gives bad advice","noT TilTEd","Someone gives up",
"rush B","WHY NO ROTATE","Boost me","Yonah Buys auto","Lose Sg's round 2","5 stack","Disconnect","Random Pause","3 awps","mid rush pistol","terrible bomb drop","Always one in quad","Most MVP = Most Valuable",
"Smurf on other team","rank trash talk","Haaaaaacking","Cmon peek me... dies","Background Noise","dont be a loser", "Dying to bomb when you defintley needed to","que god sac"];




function newGame() {
	const z =[];
	for (o=0; z.length<10; o++){
		var a = y[Math.floor(Math.random() * 28) + 0]; 
		if (z.includes(a) == false){z.push(a)};
	}
	
	for (i=0; i<10; i++){
		x[i].innerHTML = z[i];
		x[i].style.backgroundColor = "red";
	}
}

function tlchange(){
	document.getElementById("tl").innerHTML = "";
	document.getElementById("tl").style.backgroundColor = "green";
}
document.getElementById("tl").onclick = tlchange;

function tmchange(){
	document.getElementById("tm").innerHTML = "";
	document.getElementById("tm").style.backgroundColor = "green";
}
document.getElementById("tm").onclick = tmchange;

function trchange(){
	document.getElementById("tr").innerHTML = "";
	document.getElementById("tr").style.backgroundColor = "green";
}
document.getElementById("tr").onclick = trchange;

function mlchange(){
	document.getElementById("ml").innerHTML = "";
	document.getElementById("ml").style.backgroundColor = "green";
}
document.getElementById("ml").onclick = mlchange;

function mmchange(){
	document.getElementById("mm").innerHTML = "";
	document.getElementById("mm").style.backgroundColor = "green";
}
document.getElementById("mm").onclick = mmchange;

function mrchange(){
	document.getElementById("mr").innerHTML = "";
	document.getElementById("mr").style.backgroundColor = "green";
}
document.getElementById("mr").onclick = mrchange;

function blchange(){
	document.getElementById("bl").innerHTML = "";
	document.getElementById("bl").style.backgroundColor = "green";
}
document.getElementById("bl").onclick = blchange;

function bmchange(){
	document.getElementById("bm").innerHTML = "";
	document.getElementById("bm").style.backgroundColor = "green";
}
document.getElementById("bm").onclick = bmchange;

function brchange(){
	document.getElementById("br").innerHTML = "";
	document.getElementById("br").style.backgroundColor = "green";
}
document.getElementById("br").onclick = brchange;
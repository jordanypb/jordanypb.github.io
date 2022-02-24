
var dayofWeek = prompt ("What is today?");

if (dayofWeek == "Monday"){
	alert("Go to Design");
}

else if (dayofWeek == "Tuesday"){
	alert("Go to Lakeshore");

}

else {
	alert("Go home!");
}

function addTwoNumbers(x,y) {
	if (x==0) {
		return("Try Again")
	} else {
	return x+y;
	}
}

var dayofweek = prompt ("What is today?");

function classScheule(dayofWeek, weekType) {
	if (dayofweek == "Monday" && weekType == "A"){
	alert("Go to Design");
}

}else if (dayofweek == "Tuesday") {
	alert("Go to Lakeshore");
}else {
	alert("Go home!");

}

classScheule("Monday");
var answer = addTwoNumbers(0,4);
console.log(answer);
console.log(check);

var anotherAnswer = addTwoNumbers(199,465);
console.log(anotherAnswer);

var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.write('<h1>' + greeting + '</h1>');


var giftCard = 100;
while (giftCard >= 0) {
	console.log ("You have a balance of ; $" + giftCard);
	giftCard = giftCard - 10;
	if (giftCard == 50) {
		console.log("You have $50 left. You should consider saving")
	}

}
console.log("You're broke")

for (var giftCard = 100; giftCard>=0; giftCard--){
	console.log(giftCard);
	if (giftCard == 50) {
		console.log ("Now you have neought to buy a bike");
	}
}

function NFT (NFTname, rarity, mintprice, salesprice) {

this.NFTname = "SnappySalimanders";

this.rarity = 1;

this.mintprice = 0.08;

this.salesprice = 5;

this.checkAvailability = function() {

return this.mintprice - this.salesprice;

};

}

var disneyHotel = new Hotel('Animal Kingdom Lodge', 100, 25);

console.log(disneyHotel.name);

console.log("Number of rooms booked:" + disneyHotel.booked);

console.log(disneyHotel.checkAvailability());

var modelS = {

make: "Tesla",

model: "Model S",

cost: 70000,

preowned: false,

miles: 0,

finalCost: function(discount) {

this.cost = this.cost - (this.cost * (discount/100));

return this.cost;

}

};

var modelX = {

make: "Tesla",

model: "Model X",

cost: 100000,

preowned: true,

miles: 50000,

finalCost: function(discount) {

this.cost = this.cost - (this.cost * (discount/100));

return this.cost;

}

};

var updatedMiles = modelX.miles + 10000;

console.log(modelS.make);

console.log(modelS.model);

console.log(modelX.finalCost(30));

console.log(updatedMiles);

console.log(modelS.make.toUpperCase());

window.onload = function() {
	//var greeting;
	//vvar element = document.getElementById("intro");

	var button = document.querySelector("button");
	button.addEventListener("click", addText);

	//document.write('<h1> + greeting + '</h1>');
	//element.insertAdjacentHTML ("afterbegin", "<h1>" + greeting + "</h1>");


function addText(){
	var textField = document.getElementById("textfield");
	var msg = "<h1> YOU AH GAE</h1>";
	textField.innerHTML = msg;
}

}
/*
var student = "Jordan";
var isEnrolled = true 
var testscore = 95;
var testscore2 = 90;
var averagescore = (testscore + testscore2)/2;
console.log("test Average:" + averagescore);
console.log ("Student: " + student);

var roster = ["Bowen", "Ariel","Noah","Diego"];
var student = roster[0];
console.log ("Student: " + student);
*/
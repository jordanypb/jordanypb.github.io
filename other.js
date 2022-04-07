window.onload = function() {
	var greeting;
	var element = document.getElementById("intro");

	var button = document.querySelector("button");
	button.addEventListener("click", addText);

	//document.write('<h1> + greeting + '</h1>');
	//element.insertAdjacentHTML ("afterbegin", "<h1>" + greeting + "</h1>");


function addText(){
	var textField = document.getElementById("textfield");
	var msg = "<h1> This text was added!</h1>";
	textField.innerHTML = msg;
}

}

window.addEventListener("click", () => {
    console.log("Welcome!");
  });
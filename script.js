var wrapperEle = document.querySelector(".wrapper");
var scramblerEle = document.querySelector(".scrambler");

var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
// var animals2 = [];

function animalLoop(array) {
	for (let i = 0; i < array.length; i++) {
		if (animals[i] === "dog") {
			doggo();
		} else if (animals[i] === "cat") {
			Ahole();
		} else {
			oceanDweller();
		}
	}
}

function randomAnimals(array) {
	array = array.sort(() => Math.random() - 0.5);
	wrapperEle.innerHTML = " ";
	animalLoop(array);
}

function doggo(){
			var ele = document.createElement("div");
			ele.innerHTML = "borf borf";
			wrapperEle.appendChild(ele);
}

function Ahole(){
			var ele = document.createElement("div");
			ele.innerHTML = "I am a cat";
			wrapperEle.appendChild(ele);
}

function oceanDweller(){
			var ele = document.createElement("div");
			ele.innerHTML = "I'm an animal";
			wrapperEle.appendChild(ele);
}

animalLoop(animals);

scramblerEle.addEventListener("click", function () {
	randomAnimals(animals);
});
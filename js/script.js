document.addEventListener('DOMContentLoaded', function (event){


var addDiv = document.getElementById('add');
var newItemDiv = document.getElementById('newitem');
var input = document.querySelector('.show input[type="text"]');
var addBtn = document.querySelector('.show button');
var ul = document.getElementById('ul');
var divClass = addDiv.getAttribute('class');
var form = document.querySelector('form');



 function addText(e) {
	 e.preventDefault();
	var text = input.value;
	if(text) {
	var newLi = document.createElement('li');
	newLi.textContent = text;
	ul.appendChild(newLi);
	var delBtn = document.createElement('button');
	delBtn.textContent = 'X';
	delBtn.onclick = function() {
		newLi.remove();
	}
	newLi.appendChild(delBtn);
	}
	newItemDiv.setAttribute('class', 'hide');
	addDiv.setAttribute('class', 'show');
	input.value = '';
}

newItemDiv.onclick = function() {
	if (divClass == 'show') {
		addDiv.setAttribute('class', 'hide');
		newItemDiv.setAttribute('class', 'show');
		addBtn.onclick = addText;
	}

}
});
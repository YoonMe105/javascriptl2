const getform = document.getElementById('form');
const gettextbox = document.getElementById('textbox');

const getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
	addnew();

	e.preventDefault();
});

function addnew(todo){

	var todotext = gettextbox.value;

	if(todo){
		todotext = todo.value;
	}

	if(todotext){
		const li = document.createElement('li');

		if(todo && todo.done){
			li.classList.add('done');
		}

		li.appendChild(document.createTextNode(todotext));
		getul.appendChild(li);

		gettextbox.value = "";
		updatelocalstorage();

		// left click
		li.addEventListener('click',function(){
			li.classList.toggle('done');
			updatelocalstorage();
		});

		// right click
		li.addEventListener('contextmenu',function(){
			li.remove();
			updatelocalstorage();
		});


	}

}

function updatelocalstorage(){

	const getlis = document.querySelectorAll('li');

	// console.log(getlis);

	const todo = [];

	getlis.forEach(function(getli){
		todo.push({
			text:getli.textContent,
			done:getli.classList.contains('done')
		});
	});

	// console.log(todo);

	localStorage.setItem('todos',JSON.stringify(todo));

}

var getlstodos = JSON.parse(localStorage.getItem('todos'));
// console.log(getlstodos);

if(getlstodos){
    getlstodos.forEach(function(getlstodo){
        // console.log(getlstodo);
        // console.log(getlstodo.text);
        addnew(getlstodo);
    });
}
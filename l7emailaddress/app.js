// console.log('hallo')
const geteaddress = document.getElementById('email');
const gettxtarea = document.getElementById('message');
const getbtn = document.querySelector('.sendbtn');
const getecontainer = document.querySelector('.email-container');

geteaddress.focus()

geteaddress.addEventListener('keyup',function(e){
	createemailaddress(e.target.value);
});

function createemailaddress(value){
	// console.log(value);

	// split by ,
	// const eitems = value.split(',');
	// console.log(eitems);

	// remove space
	// const eitems = value.split(',').filter(rmempty=> rmempty.trim() !== '');
	// console.log(eitems);

	// remove empty
	const eitems = value.split(',').filter(rmempty=> rmempty.trim() !== '').map(rmempty=> rmempty.trim());
	// console.log(eitems);

	getecontainer.innerHTML = '';

	eitems.forEach(function(eitem){
		const setspan = document.createElement('span');
		setspan.textContent = eitem;
		// console.log(setspan);
		setspan.classList.add('email-item');
		getecontainer.appendChild(setspan);
	});
}

getbtn.addEventListener('click',function(e){
	sendemail();

	e.preventDefault();

	gettxtarea.value = '';
	geteaddress.value = '';
	getecontainer.innerHTML = '';

});

function sendemail(){
	const gettxtvalue = gettxtarea.value;
	const getitems = document.querySelectorAll('.email-item');
	// console.log(getitems);

	var persons = [];

	if(getitems.length > 0 && gettxtvalue){
		getitems.forEach(function(getitem){

			persons.push({
				email:getitem.textContent,
				message:gettxtvalue
			});
		});
		// console.log(persons);

		window.alert(`We delivered your email`);
	
	}else{
		window.alert('Enter Message');
		gettxtarea.focus();
	}
}
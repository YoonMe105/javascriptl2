const getinput = document.getElementById('search');
const getul = document.getElementById('memberlist');
const getlis = document.getElementsByTagName('li');
// console.log(getlis);

const atozm1btn = document.getElementById('sortatozm1');
const atozm2btn = document.getElementById('sortatozm2');
const ztoam1btn = document.getElementById('sortztoam1');
const ztoam2btn = document.getElementById('sortztoam2');

getinput.addEventListener('keyup',filter);


function filter(){

	var inputval = this.value.toLowerCase();
	// console.log(inputval);

	for(var x = 0; x < getlis.length ; x++){

		let getaval = getlis[x].querySelector('a').innerText.toLowerCase();
		// console.log(getaval);

		if(getaval.indexOf(inputval) > -1){
			getlis[x].style.display = "";
		}else{
			getlis[x].style.display = "none";
		}

	}
}

atozm1btn.addEventListener('click',sortingazm1);
ztoam1btn.addEventListener('click',sortingzam1);
atozm2btn.addEventListener('click',sortingazm2);
ztoam2btn.addEventListener('click',sortingzam2);


// Method 1

function sortingazm1(){

	let lis = [];

	for(var x=0;x < getlis.length; x++){
		lis.push(getlis[x].textContent);

		// console.log(lis);
	}

	let azlis = lis.sort();

	getul.innerText = '';

	azlis.forEach(function(azli){

		const newli = document.createElement('li');
		const newlink = document.createElement('a');
		newlink.href = 'javascript:void(0)';
		newlink.appendChild(document.createTextNode(azli));
		// console.log(newlink);

		newli.appendChild(newlink);

		getul.appendChild(newli);

	});
}

function sortingzam1(){

	let lis = [];

	for(var x=0;x < getlis.length; x++){
		lis.push(getlis[x].textContent);

		// console.log(lis);
	}

	let azlis = lis.sort().reverse();

	getul.innerText = '';

	azlis.forEach(function(azli){

		const newli = document.createElement('li');
		const newlink = document.createElement('a');
		newlink.href = 'javascript:void(0)';
		newlink.appendChild(document.createTextNode(azli));
		// console.log(newlink);

		newli.appendChild(newlink);

		getul.appendChild(newli);

	});
}

// Method 2

function sortingazm2(){

	var shouldswitch = true;
	var switching = true;


	do{
		switching = false;
	
		var x = 0;

		for(x; x < getlis.length-1 ; x++){
			shouldswitch = false;

			if(getlis[x].textContent.toLowerCase() > getlis[x+1].textContent.toLowerCase()){
				shouldswitch = true;
				break;
			}
		}

		if(shouldswitch){
			getlis[x].parentNode.insertBefore(getlis[x+1],getlis[x]);

			switching = true;
		}
	}while(switching);
}

function sortingzam2(){

	var shouldswitch = true;
	var switching = true;

	do{
		switching = false;

		var i = 0;

		for(i ; i < getlis.length-1 ; i++){
			shouldswitch = false;

			if(getlis[i].textContent.toLowerCase() < getlis[i+1].textContent.toLowerCase()){
				shouldswitch = true;
				break;
			}
		}

		if(shouldswitch){
			getlis[i].parentNode.insertBefore(getlis[i+1],getlis[i]);

			switching = true;
		}
	}while(switching);
}
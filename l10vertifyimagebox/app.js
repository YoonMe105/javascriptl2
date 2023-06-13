const database = [
	{
		question:"Choose Traffic Light ?",
		a:"./img/traffic.jpg",
		b:"./img/mountain.jpg",
		c:"./img/ambulance.jpg",
		d:"./img/airport.jpg",
		correctanswer:"a"
	},
	{
		question:"Choose Mountain ?",
		a:"./img/ambulance.jpg",
		b:"./img/mountain.jpg",
		c:"./img/traffic.jpg",
		d:"./img/airport.jpg",
		correctanswer:"b"
	},
	{
		question:"Choose Ambulance Truck ?",
		a:"./img/ambulance.jpg",
		b:"./img/airport.jpg",
		c:"./img/traffic.jpg",
		d:"./img/mountain.jpg",
		correctanswer:"a"
	},
	{
		question:"Choose Airport ?",
		a:"./img/traffic.jpg",
		b:"./img/mountain.jpg",
		c:"./img/ambulance.jpg",
		d:"./img/airport.jpg",
		correctanswer:"d"
	},
];

const getcontainer = document.querySelector('.container');
const getquestion = document.getElementById('question');
const getanswers = document.querySelectorAll('.answer');

const geta_img = document.getElementById('a_img');
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');

const getbtn = document.querySelector('.btn');

let curridx = 0,
	score = 0;


startquestion();

function startquestion(){

	removeanswer();

	const currentqes = database[curridx];

	// console.log(currentqes);

	getquestion.textContent = currentqes.question;
	geta_img.src = currentqes.a;
	getb_img.src = currentqes.b;
	getc_img.src = currentqes.c;
	getd_img.src = currentqes.d;

}

function getsingleanswer(){

	let answer;

	getanswers.forEach(function(getanswer){

		if(getanswer.checked){
			answer = getanswer.id;
		}

	});

	// console.log(answer);

	return answer;
}

// getsingleanswer();

getbtn.addEventListener('click',function(){

	let answer = getsingleanswer();
	// console.log(answer);

	if(answer){

		if(answer === database[curridx].correctanswer){
			score++;
		}

		curridx++;

		if(curridx < database.length){
			startquestion();
		}else{

			getcontainer.innerHTML = `

				<h3>Total Score : ${score*25}</h3>
				<h4>You answered corrected at ${score} / ${database.length} questions.</h4>
				<!-- <button type="button" class="btn" ondblclick="location.reload()">Double Click To Reload</button> -->
				<button type="button" class="btn" ondblclick="doubleclick()">Double Click To Reload</button>
			`;
		}

	}else{
		window.alert('Choose One Answer');
	}
});

function removeanswer(){
	getanswers.forEach(function(getanswer){
		return getanswer.checked = false;
	});
}

let clicktimes = 0;

function doubleclick(){
	// console.log('hay i am working');

	if(clicktimes === 0){
		clicktimes = new Date().getTime();
		// console.log(clicktimes);
	}else{

		if((new Date().getTime() - clicktimes) < 1000){
			location.reload();

			clicktimes = 0;
		}else{
			// clicktimes = new Date().getTime();
			clicktimes = Date.now();

		}
	}

}
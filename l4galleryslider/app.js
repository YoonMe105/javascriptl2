const getimgs = document.querySelectorAll('.img');

const getmodal = document.querySelector('.modal');
const getmodalimg = document.querySelector('.modal-image');
const getcaption = document.querySelector('.caption');
const getbtnclose = document.querySelector('.btn-close');

for(var x = 0; x < getimgs.length ; x++){
	getimgs[x].addEventListener('click',function(){
		shownow(this);
	});
}

function shownow(ele){
	// console.log(ele);

	getmodal.style.display = 'block';
	getmodalimg.src = ele.src;
	getcaption.textContent = ele.alt;
}

getbtnclose.addEventListener('click',function(){
	getmodal.style.display = 'none';
});

document.addEventListener('click',function(e){

	if(e.target === getmodal){
		getmodal.style.display = 'none';
	}
});
// Get UI
const getloginbtn = document.getElementById('login-modal');
const getmodal = document.getElementById('loginmodal');
const closebtn = document.getElementById('btn-close');

getloginbtn.addEventListener('click',function(){
	openmodal();
});

closebtn.addEventListener('click',function(){
	closemodal();
});

window.onclick = function(e){
	if(e.target === getmodal){
		closemodal();
	}
}


function openmodal(){
	getmodal.style.display = "block";
}

function closemodal(){
	getmodal.style.display = "none";
}
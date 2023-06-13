// Get UI
const getimgboxes = document.querySelectorAll('.imagebox');

getimgboxes.forEach(function(getimgbox,idx){

	getimgbox.addEventListener('click',function(){
		showimg(idx);
	});

});

function showimg(idx){
	// console.log(idx);

	getimgboxes.forEach(function(getimgbox,curidx){
		// console.log('curidx =',curidx);

		if(idx === curidx){

			getimgbox.classList.add('show');

			getimgbox.addEventListener('click',function(e){
				
				if(e.target.className === 'btn-close'){
					getimgbox.classList.remove('show');
				}

				if(e.target.className === 'btn'){
					const subbtn = getimgboxes[idx].querySelector('.btn');
					subbtn.textContent = "Subscribed";
				}
			});
			

		}else{
			getimgbox.classList.remove('show');
		}
	})
}
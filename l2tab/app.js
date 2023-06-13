var gettablinks = document.getElementsByClassName('tablinks');
var gettabpanes = document.getElementsByClassName('tab-pane');
var getbtnclose = document.querySelectorAll('.close');

// console.log(gettablinks, gettabpanes, getbtnclose);

var tabpanes = Array.from(gettabpanes);
// console.log(tabpanes);

function getpane(evn, linkid) {

	tabpanes.forEach(function (tabpane) {
		tabpane.style.display = "none";
	});

	for (var x = 0; x < gettablinks.length; x++) {

		gettablinks[x].className = gettablinks[x].className.replace('active', '');

		getbtnclose[x].addEventListener('click', function () {
			this.parentElement.style.display = "none";
		});

	}

	document.getElementById(linkid).style.display = "block";

	evn.currentTarget.className += " active";

}

document.getElementById('autoclick').click();
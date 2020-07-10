



let colorStatus = false;

function changeColor() {
		if (colorStatus==false) {
			let getCl = document.getElementById('blink');
			getCl.setAttribute('class', 'one'); 
			colorStatus = !colorStatus;
		}
		else {
			let getCl = document.getElementById('blink');
			getCl.setAttribute('class', 'two'); 
			colorStatus = !colorStatus;
		}
		setTimeout(changeColor,3500);
}








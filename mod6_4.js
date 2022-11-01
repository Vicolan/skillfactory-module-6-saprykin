function getNumbers(from, to) {
	let current = from;
	
	prompt('currentStart');
	prompt('currentStop');

 
	let timerId = setInterval(function() {
	  console.log(current);
	  if (current == to) {
		 clearInterval(timerId);
	  }
	  current++;
	}, 1000);
 }
 

 getNumbers(9, 15);
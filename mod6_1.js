

let arr = [true, 22, 572, 83, 11, 15, 62, 99, 45, 445, '', 'd', null, 'str'];

function getEl(arr) {
	let getOdd = 0;
	let getEven = 0;
	let getOther = 0;
	
	for (let i = 0; i < arr.length; i++){
		 if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
			getOther++;
		 } else {
			  if (arr[i] % 2 === 0) {
				getEven++;
			  } else {
				getOdd++;
			  }
		 }
		}
		 return[getOdd, getEven, getOther];
	

}
let result = getEl(arr);

console.log("Нечетных чисел " + result[0]);
	console.log("Четных чисел " + result[1]);
	console.log("Остальных элементов " + result[2]);



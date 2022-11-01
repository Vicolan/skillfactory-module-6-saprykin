// function isPrimeNumber(num){
// 	if ((num < 2) || (num > 1000)) {
// 		 return "задано не верно!,";
// 	} else {
// 		 for (let i = 2; i < num; i++){
// 			  if (num % i === 0) {
// 					return false;
// 			  }
// 		 }
// 		 return true;
// 	}
// }



// let numb = isPrimeNumber(100);



// console.log("Число " + numb + ' is Prime = ');





function isPrimeNumber(num){
	if ((num < 2) || (num > 1000)) {
		 return "введено не корректно!";
	} else {
		 for (let i = 2; i < num; i++){
			  if (num % i === 0) {
					return false;
			  }
		 }
		 return true;
	}
}

let randNum = Math.floor(Math.random() * 1500);
let p = isPrimeNumber(randNum);
console.log("Число " + randNum + ' простое = ' + p);
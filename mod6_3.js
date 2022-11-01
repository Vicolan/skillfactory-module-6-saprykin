function sum(x) {
	return function(y) {
		 return x + y;
	};
}

let f = sum(6);
console.log( f(0), f(9) );

console.log( sum(2)(2), sum(2)(2), sum(40)(7) );
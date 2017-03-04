var userInput = [-5,100,20,40];

// printReverse(userInput);


// function printReverse(arr) {
// 	var arrLength = arr.length;
// 	for (var i = (arrLength-1); i >=0; i--) {
// 		console.log(arr[i]);
// 	}
// }


//IS UNIFORM STARTS


// function isUniform(arr) {
	
// 	var first= arr[0];

// 	//if at least 2 numbers aren't equal console.log false

// 	for (i = 1; i <arr.length; i++) {

// 	if( arr[i] !== first ){
// 		return false;
// 			}
// 		}
// 	return true;
// 	}


// sumArray(userInput);

// function sumArray(arr) {
// 	var sum = 0;
// 	arr.forEach(function(entry){
// 		sum+= entry;
// 	})
// 	console.log(sum);
// }


function max(arr){

	var maxNumber = 0;

	for (var i =0; i < arr.length; i++){
		
		if ( maxNumber < arr[i] ){
			maxNumber=arr[i];
		}	
	}
	return maxNumber;
}
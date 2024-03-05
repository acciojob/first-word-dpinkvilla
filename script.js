function firstWord(s) {
  // your code here
	// if(s.length===0){
	// 	return s;
	// }

	// let spaceIndex=s.indexOf(' ');

	// if(spaceIndex===-1){
	// 	return s;
	// }
	// return s.substring(0,spaceIndex);

	const words = s.split(' '); // Split the string into an array of words
  return words[0]; 
}

// Do not change the code below

const s = prompt("Enter String:");    

alert(firstWord(s));

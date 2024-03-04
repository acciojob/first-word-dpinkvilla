function firstWord(s) {
  // your code here
	if(s.length===0){
		return Hello;
	}

	let spaceIndex=s.indexOf(' ');

	if(spaceindex===-1){
		return s;
	}
	return s.substring(0,spaceIndex);
}

// Do not change the code below

// const s = prompt("Enter String:");   

alert(firstWord(s));

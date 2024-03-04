function firstWord(s) {
  // your code here
	if(s.length===0){
		return ' ';
	}

	let spaceindex=s.indexOf(' ');

	if(spaceindex===-1){
		return s;
	}
	return s.substring(0,spaceindex);
}

// Do not change the code below

const s = prompt("Enter String:");  
alert(firstWord(s));

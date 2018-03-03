// Challenge #1

    var thestring = "jumbo shrimp";
	var words = thestring.split(" ");

	var word1 = words[0];
	var word2 = words[1];

  if (thescore(word1) > thescore(word2) ) {
      document.getElementById("challenge-1").innerHTML = word1; 
  } else { 
     document.getElementById("challenge-1").innerHTML = word2; 
  }

function thescore(str) {
	var out = 0;
    var len = str.length;
	for (pos=0; pos<len; pos++) {
		out += (str.charCodeAt(pos) - 64);
	}
	return out;
}
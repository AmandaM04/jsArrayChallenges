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

// Challenge #2

//take an array of numbers (create an array)
var arrayofNumbers = [1,2,3,4,5,6,7,8,9];

//count the elements in array
var arraycount = arrayofNumbers.length;

//for each number in array
for (i = 0; i <arraycount; i++) { 

  //if number is a 3 
  if (arrayofNumbers[i] == 3) {
  //make it a 7
  arrayofNumbers[i] = 7;
  }
  //if number is 7
  else if (arrayofNumbers[i] == 7) {
  //make it a 3
  arrayofNumbers[i] = 3;

  //else do nothing
  }
}

//convert array to string
arrayofNumbers.toString();

//output the array that changes 3's to 7's and 7's to 3's
document.getElementById("challenge-2").innerHTML = arrayofNumbers; 



// Challenge #3

//create an array with 3+ numbers all the same except for 1 unique#

//loop through the numbers to find the number that is different

//Display the unique number

var input = document.getElementById('input'),
 	output = document.getElementById('output');

function removeText (string) {
	var regex = /(?:[\u0000-\u007f]|[\u00a0-\u00ff]|[\u2000-\u206f]|[\u20a0-\u20cf])/g;

  return string.replace(regex, '');
}

// textVal = removeText(input.value);

// output.textContent = textVal;

// Timeout variable
var t = 0;

// Convert the input textarea and show it as output
function updateOutput() {
	var textVal = removeText(input.value);
	output.textContent = textVal;
}

// Update the output after a period of inactivity
input.onkeyup = input.onchange = input.onpaste = function () {
	clearTimeout(t);
	t = setTimeout(updateOutput, 375);
};
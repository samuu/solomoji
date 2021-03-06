
var input = document.getElementById('input'),
 	output = document.getElementById('output');

function removeText (string) {
	var regex = /(?:[\u0000-\u007f]|[\u00a0-\u00ff]|[\u2000-\u206f]|[\u20a0-\u20cf])/g;

  return string.replace(regex, '');
}

output.textContent = removeText(input.value);
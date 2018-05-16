function update() {
	const originalText = document.getElementById("input").value	
	document.getElementById("output").value = retardify(originalText)
}

function retardify(input) {
	var output = ""
	var lastWasUpper = false
	
	for (var i = 0; i < input.length; i++) {
		// Just so it's mixed up a little
		if (!lastWasUpper && Math.random() >= 0.6 || lastWasUpper && Math.random() >= 0.4) {
			output += input[i].toLowerCase()
			lastWasUpper = false
		}
		else {
			output += input[i].toUpperCase()
			lastWasUpper = true
		}
	}

	return output
}

document.getElementById("outputLabel").innerText = retardify(document.getElementById("outputLabel").innerText)
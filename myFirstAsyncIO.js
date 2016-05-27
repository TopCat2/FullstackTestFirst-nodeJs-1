fs = require('fs');
input = fs.readFile(process.argv[2], useInput);

function useInput(err, result) {
	console.log((result.toString().split("\n").length - 1));
}
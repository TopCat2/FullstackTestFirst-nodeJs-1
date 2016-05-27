fs = require('fs');
input = fs.readFileSync(process.argv[2]).toString();

found = input.match(/\n/g);
if (found === null) {
	console.log(0);
} else {
	console.log(found.length);
}

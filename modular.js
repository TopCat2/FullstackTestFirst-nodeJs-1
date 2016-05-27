forFilteredFiles = require('./theModule.js');

forFilteredFiles(process.argv[2], process.argv[3], function(err, x) {
	if (err) {
		console.log("There was an error:", err);
	} else { 
		console.log (x);
	}
});
fs = require('fs');

var dirPath = process.argv[2];
var fileSuffix = "." + process.argv[3];

fs.readdir(dirPath, showFiles);

function showFiles(err, data) {
	data.forEach(function(fn) {
		if (fn.endsWith(fileSuffix)) {
			console.log(fn);
		}
	})
};
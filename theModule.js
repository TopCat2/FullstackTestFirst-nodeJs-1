fs = require('fs');

function forFilteredFiles(dirPath, fileExt, callback) {
	var dirPath = process.argv[2];
	var fileSuffix = "." + fileExt;

	fs.readdir(dirPath, showFiles);

	function showFiles(err, data) {
		if (err) {
			return callback(err);
		}
		data.forEach(function(fn) {
			if (fn.endsWith(fileSuffix)) {
				return callback(null, fn);
			}
		})
	};
};


module.exports = forFilteredFiles;

const storage = require('node-persist');

async function read(){
	await storage.init({
		dir: 'storage'
	});

	storage.forEach(function(key, value) {
		console.log(key, value);
	});
}

read();
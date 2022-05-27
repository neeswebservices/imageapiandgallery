const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = process.env.PORT ?? 5500;
const fileArray = [];
const directoryPath = path.join(__dirname, 'images');
const cors = require('cors');
app.use(cors());

app.use(express.static('public'));

function base64_encode(file) {
	var bitmap = fs.readFileSync(file);
	return new Buffer(bitmap).toString('base64');
}

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.get('/randimage', (req, res) => {
	fs.readdir(directoryPath, async (err, files) => {
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		}
		files.forEach((file) => {
			fileArray.push(file);
		});
		function getRandom() {
			return Math.floor(Math.random() * fileArray.length);
		}
		var base64str = base64_encode('./images/' + fileArray[getRandom()]);
		// const buffer = Buffer.from(base64str, 'base64');
		// Jimp.read(buffer, (err, res) => {
		// 	if (err) throw new Error(err);
		// 	res.write('resized.jpg');
		// });
		return res.json({ img: base64str });
		// return res.render('image', { base64img: base64str });
	});
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});

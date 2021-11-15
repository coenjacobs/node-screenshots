const express = require('express')
const capture = require('capture-website')
const app = express()
const port = 3000

app.use('/images', express.static('images'))

app.get('/screenshot', (request, response) => {
	let url = request.query.url;
	let target = 'images/screenshot-' + Date.now().toString() + '.png';

	capture.file(url,target, {
		headers: {
			'Cookie-Installing-Permission': 'all',
		}
	}).then(function(result) {
  		response.json({
  			'url': url,
  			'screenshot': target,
  		});
	}, function(err) {
		response.json({
			'error': 'Something went wrong, you broke it',
		});
	});

})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

const express = require('express')

const app = express()

app.get('/', (res, req) => res.send('vdv'))

app.listen(5000, () => {
	console.log('server started')
})

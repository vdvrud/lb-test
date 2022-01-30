const express = require('express')

const app = express()

app.get('/', (res, req) => res.json('vdv'))

app.listen(5000, () => {
	console.log('server started')
})

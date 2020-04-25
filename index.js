const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '/public')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))

//Setup server
app.listen(PORT,()=>{
  console.log(`Web server is up and running on port ${PORT}!`)
})
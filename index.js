const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=> {
   res.setHeader('Content-Type','text/html')
   res.status(200).sendFile(path.join(__dirname,'/public','/index.html'))
})

app.post('/', (req, res) => {
    res.json({"a": "b"})

})

app.listen(process.env.PORT, () => {
    console.log(`Server listinig on ${process.env.PORT}`)
})
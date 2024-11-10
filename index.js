console.log('zohaib aur zohaib');
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hellooo World!')
})
app.get('/home',(req,res)=>{
    res.send('<h1>ZOHAIB RAJPUT</h1>')
})
app.get('/yt',(req,res)=>{
    res.send('<h1>YOUTUBE</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wldn4444:wndhks@juwan.yjzeq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB Connected..'))
  .catch(err=>console.log(err))

app.get('/', (req,res)=> res.send('Hello World'))
app.listen(port, ()=> console.log(`Example app listening on port${port}!`))

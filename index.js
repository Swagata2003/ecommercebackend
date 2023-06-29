// require('dotenv').config('../.env')
const connectToMongo=require('./db');
const express = require('express')
var cors=require('cors')

connectToMongo();
const app = express()
// const port = process.env.PORT2||5000
const BASE_URL=process.env.BASE_URL1||"http://localhost:5000";



app.use(cors())
app.use(express.json())

//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/account',require('./routes/account'))
app.use('/api/cart',require('./routes/cart'))
app.use('/api/wishlist',require('./routes/wishlist'))
app.use('/api/orders',require('./routes/order'))



app.get('/', (req, res) => {
  res.send('Hello Swagata!')
})

app.listen(BASE_URL, () => {
  console.log(`e-commerce backend listening at ${BASE_URL}`)
})

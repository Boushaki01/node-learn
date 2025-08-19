const express = require('express')
const app = express()
const productRoutes = require('./routes/products')
const port = 3000


app.use (express.json()); // Middleware parsing JSON
app.use ('/products', productRoutes); // Product Routes

app.listen(port, ()=>{
    console.log(`Server is running in http://localhost:${port}`);
})

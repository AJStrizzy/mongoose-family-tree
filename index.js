const express = require ('express');
const app = express();

app.use(express.urlencoded({extended: false}))

// Mongoose 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/familyTree')

// Shortcut to the mongoose connection
const db = mongoose.connection
db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.host}: ${db.port}`)
})

db.on('error', (err) => {
    console.log(`Database error: ${err}`)
})

app.get('/', (req, res) => {
    res.send('Mongoose')
})


const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

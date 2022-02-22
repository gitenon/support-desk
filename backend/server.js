const express = require('express')
const dotenv = require('dotenv').config()
//const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express() // initialise app variable

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req,res) =>{
    // res.send("HELLO TOUS!")
    res.status(201).json({ message: 'Welcome guys'})
    // res.json({ message: 'Welcome guys'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))


//app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))

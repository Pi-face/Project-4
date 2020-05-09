const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')
const app = express();
// connect database
connectDB();

//Init middleware body parser
app.use(bodyParser.json())

app.get('/', (req,res)=> 
res.json({msg: 'Welcome to the flash cards API...'})
);

//Define Routes-----------------------------------------
app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/flashcards',require('./routes/flashcards'));
app.use('/api/categories',require('./routes/categories'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`server started on port ${PORT}`));
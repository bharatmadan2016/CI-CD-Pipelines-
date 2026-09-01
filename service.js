const express = require('express'); 
const dotenv = require('dotenv'); 
dotenv.config(); 

const app = express(); 

const PORT = 3002; 
app.listen(PORT , (()=> {
    console.log("Server Started Successfully")
})); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();


app.use(cors()); 
app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("🚀 SUCCESS: MongoDB Connected!"))
    .catch(err => console.error("❌ Connection failed:", err.message));

const cartRoutes = require('./routes/cartroutes'); 
app.use('/api/cart', cartRoutes); //


const userRoutes = require('./routes/uesrroutes'); 
app.use('/api/users', userRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
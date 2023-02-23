const express = require('express');
const app = express();


const mongoose = require('mongoose');
const dotenv = require('dotenv');
mongoose.set('strictQuery', false);

dotenv.config();
app.use(express.json());
//DB connect
mongoose.connect(
    process.env.DB_CONNECT, {useNewUrlParser: true}, () => console.log('Connect to DB!')
);


//Import Route
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute),


app.listen(3000, (err) => {
    if (!err) {
        console.log("successfully connected to the port ", 3000);
    } else {
        console.log("error occured ", err);
    }
});

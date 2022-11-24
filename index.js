const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// init mongoose
mongoose.connect(process.env.MONGO_URI);

const con = mongoose.connection;
con.on('open', error => {
    if(!error){
        console.log('DB connection successful');
    }else{
        console.log(`DB connection failed with error: ${error}`);
    }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/shipAction', require('./routes/shipsAction'));

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
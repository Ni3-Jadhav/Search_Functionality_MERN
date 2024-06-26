const express = require('express');
const mongoose = require('mongoose');
const bodyPar = require('body-parser');
const cors = require('cors');
const router = require('./Routes/userRoutes')
const db = require('./Config/mongoDB')


const expressApp = express();

expressApp.use(bodyPar.json());;
expressApp.use(cors());
expressApp.use(express.json());

expressApp.use('/User', router);


const port = 4000;
expressApp.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server Has Started on Port ${port}`);
    };
});

db.connect();
const mongoose = require('mongoose');


const usreSchema = new mongoose.Schema({
    F_Name: String,
    L_Name: String,
    Email_Id: String,
    Mobile_No: String,
});

const firstMomgoDB = mongoose.model('firstMongoDB', usreSchema);

module.exports = firstMomgoDB;
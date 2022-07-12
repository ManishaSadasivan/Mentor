const mongoose = require('mongoose');

const Creatementor= mongoose.Schema(
    {
        Mentorname:{type: String},
        id:{type: String},
        Department:{type: String}
       
    }
)

const CreatementorModel = mongoose.model('questions',Creatementor)
module.exports=CreatementorModel;
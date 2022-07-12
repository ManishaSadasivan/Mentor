const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const router= express.Router();
const bodyParser = require('body-parser')
const {postnewMentor,getMentordetails,getChangeMentor}= require('./function/function')
const PORT=3000;
const app = express();
// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


const URL ="mongodb+srv://quizzapp:quizzapp@cluster0.hekzf.mongodb.net/?retryWrites=true&w=majority";
app.get('/hello',function(req, res){
    res.send("hello")
})
router.route('/postnewMentor').get(postnewMentor);
router.route('/getMentordetails').get(getMentordetails);
router.route('/getChangeMentor').get(getChangeMentor);
mongoose.connect(URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on port ${PORT}`)
    })
    
}

).catch(err => console.log(err));
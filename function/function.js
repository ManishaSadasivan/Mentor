const CreatementorModel=require('../model/Creatementor.js')

const getMentordetails=async(req,res) =>{
    try{
        const Mentor=await CreatementorModel.find({})
    if(Mentor)
    {
        res.json(Mentor)
    }
    }
    catch(err){
        console.log(err)
    }
    }
    
    const getChangeMentor=async(req,res) =>{
        try{
            const Changementor= await CreatementorModel.findByIdAndUpdate(req.params.id,req.body);
            if(Changementor){
                res.send("updated successfully")
            }
        }
        catch(err){
            console.log(err)
        }
            
        }
        
    const postnewMentor=async(req,res) =>{
    try{
    const Mentor= new CreatementorModel({
        Mentornamee: req.body.Mentor,
        id:req.body.Mentor,
        Department:req.body.Mentor
    })
    console.log(Mentor);
}
catch(err){console.log(err)}
    }


    module.exports={postnewMentor,getMentordetails,getChangeMentor}
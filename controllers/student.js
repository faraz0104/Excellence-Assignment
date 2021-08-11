import { student } from "../models/student.js";




export const addstudent = (req,res)=>
{
    console.log("You are in addstudent function")
    const students =new student(
        
        {
         studentName : req.body.studentName,
         email : req.body.email,
         first_round : req.body.first_round,
         second_round : req.body.second_round,
         third_round : req.body.third_round
    })
    students.save()
    .then(
        (result)=>{
            res.send('{"result" : "Success" }')

             
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}


export const getStudent = (req,res)=>
{
    
        console.log("You are in getstudent function")
    student.aggregate(
        [{ $group :{
            _id:null,
            "firstRoundAvg":{
                $avg:"$first_round"
               
            },
            "secondRoundAvg":{
                $avg:"$second_round"
               
            },
            "thirdRoundAvg":{
                $avg:"$third_round"
               
            },
        }
    }])
    .then(
           (result)=>{res.send(result)}
        )
    .catch((err)=>{console.log(err)})
    }




   
import mongoose from 'mongoose'
const Schema= mongoose.Schema

const studentSchema = new Schema({
    studentName:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
   
    first_round:{
        type:Number,
        required:true
    },
    second_round:{
        type:Number,
        required:true
    },
    third_round:{
        type:Number,
        required:true
    }
},{
  
    timestamps: false,
    underscored: true
  });

export const student=mongoose.model('student',studentSchema)

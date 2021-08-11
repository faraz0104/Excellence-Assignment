import express from "express"
import {addstudent,getStudent} from "../controllers/student.js"

const router = express.Router();

//pathnames
router.post("/add",addstudent);
router.get("/getAvgMark",getStudent);


//export to starst.js
export default router
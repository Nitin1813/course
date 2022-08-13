

const express = require("express")
const routers = express.Router()
const Course  = require("../models/course")
routers.get('/',async(req, res)=>{
   try{
    const course = await Course.find()
    res.json(course)
   }catch(err){
    res.send("Err" + err)
   }
})
routers.post('/', async(req,res)=>{
    const course = new Course({
        Id: req.body.Id,
        name: req.body.name,
        Image_url : req.body.Image_url,
        University_name: req.body.University_name
    })
    try{
       const c1= await course.save()
       res.json(c1)
    }catch(err){
        res.send("error" +err )
    }
})

module.exports = routers
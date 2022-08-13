const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const url = "mongodb://localhost/Courses"
const DB =`mongodb+srv://Nitin:Cafe123@cluster0.hzvyojr.mongodb.net/course?retryWrites=true&w=majority`
const Course  = require("./models/course")
mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
  console.log("Connection Done")
}).catch(()=>{
  console.log("Error In Connection1")
})
const con = mongoose.connection
con.on('open',()=>{
console.log("Connected");
})

const routers = require("./routers/courses");
 
const app = express();
app.use(express.json())
app.use("/courses",routers)
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',async(req, res)=>{
  try{
   const course = await Course.find()
   res.json(course)
  }catch(err){
   res.send("Err" + err)
  }
})
app.get("/create", function (req, res) {
    res.sendFile(__dirname + "/template/createCourse.html");
  });
  app.get("/update", function (req, res) {
    res.sendFile(__dirname + "/template/updateCourse.html");
  });
  app.get("/delete", function (req, res) {
    res.sendFile(__dirname + "/template/deleteCourse.html");
  });

app.post('/create', async(req,res)=>{
  const course = new Course({
     
      name: req.body.name,
      Image_url : req.body.Image_url,
      University_name: req.body.University_name,
      Faculty_Profile: req.body.Faculty_Profile,
      Course_Duration:req.body.Course_Duration,
      Cost:req.body.Cost,
      Sample_certificate:req.body.Sample_certificate,
      Eligiblity:req.body.Eligiblity
  })
  try{
     const c1= await course.save()
     res.json(c1)
  }catch(err){
      res.send("error" +err )
  }
})


app.listen(3000, function () {
  console.log("The site is deployed in port 3000");
});

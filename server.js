const express = require("express");
const app = express();

//Creating Router() object

let router = express.Router();

// Provide all routes here, this is for Home page.

router.get("/",function(req,res){
  res.json({"message" : "Hello World"});
});

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.

app.use("/api",router);

// Listen to this Port

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
const express = require("express");


const app = express();



// app.get("/getBlogs" , (req, res) => {
    
// })

// app.post("/addBlogs" , (req, res) => {
//  //logic
// })

// app.put("/updateBlog" , (req, res) => {

// })

// app.delete("/deleteBlog" , (req, res) => {

// })


app.get("/blogs" , (req, res) => {
    res.send(req.headers)
})

app.post("/blogs" , (req, res) => {
 //logic
})

app.put("/blogs/:id" , (req, res) => {
    //logic
    // console.log(req.params.id)
    // console.log(req.headers)
    // console.log(  "res headers" , JSON.parse(req.headers.name))
   res.send({"name" : "nishant"})
})

app.delete("/blogs/:id" , (req, res) => {

})



app.get("/" , (req,res) => {
    res.send("hello")
})

app.listen(3000 , () => {
    console.log("server started")
})
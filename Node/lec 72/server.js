
const express = require("express");

const app = express();








app.get("/", function (req, res) {
    res.status(502).send("get req")
});

app.post("/", function (req, res) {
    res.send("post req");
});
app.post("/",  (req, res) => {
    
    res.send("post req");
});




app.patch("/", function (req, res) {
    res.send("patch req");
});

app.put("/", function (req, res) {
    
    res.send("put req");
});


app.delete("/", function (req, res) {
    res.send("delete req");
});


app.listen(3000, () => {
    console.log("server started");
});

// async function fetchData(){

//     const res = await fetch("http://localhost:3000/" , {
//         method : "POST"
//     }) 

//     console.log(data)

// }

// fetchData()

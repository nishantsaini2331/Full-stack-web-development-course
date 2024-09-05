const express = require("express")

const app = express();
const fs = require("fs")

app.use(express.json())


function fun(req, res, next) {
    // console.log(req);
    req.nishant = "saini"
    console.log("hello");
    next()
}

function fun2(req, res, next) {
    // console.log(req);
    req.channel = "codethread"
    console.log("hello 2");
    next()
}

app.use(fun) // middleware
app.use(fun2)

app.get("/blogs", logDetails,(req, res  ,next) => {
    try {
        dsf
        return res.status(200).json({ message: "hello ji" })
    } catch(err) {
        console.log(err);
        return res.status(500).json({message : "please try again"})
    }

})


function logDetails(req,res, next){
    let data  = Date.now() +  " " + req.method
    fs.appendFile(__dirname + "/logFile.txt" , `${data}\n` , (err) => {
        next()
    } )
}

app.post("/blogs", logDetails ,(req, res) => {
    console.log(req.method);
    console.log(req.nishant);
    console.log(req.channel);
    return res.status(200).json({ message: "post method" })
})

app.use((req, res, next) => {
    // console.log("sss");
    res.status(500).json({ message: "not found" })

})


app.use((err, req, res, next) => {
    console.error("err.stack")
    res.status(500).send('Something broke!')
})


app.listen(3000, () => {
    console.log("server started");
})
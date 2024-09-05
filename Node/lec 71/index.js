const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// app.METHOD(path , handler)

function dynamicData(req, res, route) {
    fs.readFile(__dirname + "/index.html", { encoding: "utf-8" }, (err, data) => {
        if (err) {
            throw new Error("Not found");
        } else {
            data = data.replace("[path]", route == "" ? "Code thread" : route);
            res.send(data);
        }
    });
}

// app.get("/", (request, response) => {
//     // console.log("hello");
//     // response.json({ message: "hello ji" });
//     dynamicData(request, response, "");
// });

// app.get("/contactus", (request, response) => {
//     dynamicData(request, response, "contactus");
// });

// app.get("/about", (request, response) => {
//     dynamicData(request, response, "about");
// });

app.get([ "/" , "/about" , "/contactus"], (request, response) => {
    let path = request.url.split("/")[1]
        fs.readFile(__dirname + "/index.html", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                throw new Error("Not found");
            } else {
                data  = data.replace("[path]" , path == "" ? "Code thread" : path)
                response.send(data);
            }
        })
});

// app.use()

// app.post("/", (req, res) => {
//     res.send("hello");
// });

// app.put("/user", (req, res) => {
//     res.send("Got a PUT request at /user");
// });

// app.delete("/user", (req, res) => {
//     res.send("Got a DELETE request at /user");
// });

app.listen(3000, () => {
    console.log("chl gaya bhaiye server");
});

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    let filePath = __dirname + "/index.html";

    // console.log(req.url)

    if (req.url == "/" || req.url == "/about"|| req.url == "/contactus") {
        let path = req.url.split("/")[1].toUpperCase();
        console.log(req.method)
        fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
            if (err) {
                throw new Error("Not found");
            } else {
                data  = data.replace("[path]" , path == "" ? "Code thread" : path)
                res.end(data);
            }
        });
    } else {
        return res.end(JSON.stringify({ message: "not found" }));
    }
});

server.listen(3000, () => {
    console.log("server started");
});

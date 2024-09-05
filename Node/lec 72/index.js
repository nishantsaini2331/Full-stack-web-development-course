const http = require("http");

const server = http.createServer(function (req, res) {
    // console.log()
    if (req.method == "GET") {
        res.statusCode = 501
        res.end("get method");
    } else if (req.method == "POST") {
        res.end("POST method");
    } else if (req.method == "PUT") {
        res.end("PUT method");
    } else if (req.method == "PATCH") {
        res.end("PATCH method");
    } else if (req.method == "DELETE") {
        res.end("DELETE method");
    }
});

server.listen(3000, () => {
    console.log("server started");
});

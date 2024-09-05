const express = require("express")
const fs = require("fs")

const app = express();


app.use(express.json())
let path = __dirname + "/todos.json"


app.post("/todos", (req, res) => {
    try {
        // const {title , description} = req.body;
        const { userid } = req.headers

        // or
        // const title = req.body.title;
        // const description = req.body.description;

        fs.readFile(path, { encoding: "utf-8" }, (err, todos) => {

            todos = todos ? JSON.parse(todos) : []
            todos.push({ ...req.body, isChecked: false, id: todos.length + 1, userid })

            fs.writeFile(path, JSON.stringify(todos), { encoding: "utf-8" }, (err) => {
                if (err) {
                    return res.status(500).json({ "message": "please try again" })
                } else {
                    return res.status(200).json({ message: "Todo added/created successfully" })
                }
            })

        })

    } catch (err) {
        return res.status(500).json({ "message": "please try again" })
    }
})

app.get("/todos", (req, res) => {
    const { userid } = req.headers
    try {
        fs.readFile(path, { encoding: "utf-8" }, (err, todos) => {
            todos = todos ? JSON.parse(todos) : []
            todos = todos.filter(todo => userid == todo.userid)
            return res.status(200).json({ todos })
        })

    } catch (err) {
        return res.status(500).json({ "message": "please try again" })
    }

})

app.delete("/todos/:id", (req, res) => {

    const { userid } = req.headers

    if (!userid) {
        return res.json({ message: "You are not logged in" })
    }
    try {

        // todos.splice(Number(req.params.id) - 1, 1)

        // or

        fs.readFile(path, { encoding: "utf-8" }, (err, todos) => {

            todos = todos ? JSON.parse(todos) : []

            const filteredTodo = todos.filter(todo => todo.id != req.params.id || todo.userid != userid)
            // console.log(filteredTodo);
            fs.writeFile(path, JSON.stringify(filteredTodo), { encoding: "utf-8" }, (err) => {
                if (err) {
                    return res.status(500).json({ "message": "please try again" })
                } else {
                    return res.status(200).json({ message: "Todo deleted successfully" })
                }
            })

        })

    } catch (err) {
        return res.status(500).json({ "message": "please try again" })
    }
})

app.put("/todos/:id", (req, res) => {
    try {

        // 3 -> updated
        fs.readFile(path, { encoding: "utf-8" }, (err, todos) => {

            todos = todos ? JSON.parse(todos) : []

            const index = todos.findIndex(todo => todo.id == req.params.id)

            todos[index] = { ...todos[index], ...req.body }


            fs.writeFile(path, JSON.stringify(todos), { encoding: "utf-8" }, (err) => {
                if (err) {
                    return res.status(500).json({ "message": "please try again" })
                } else {
                    return res.status(200).json({ "message": "Todo updated successfully" })
                }
            })

        })



    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "please try again" })
    }
})

app.get("/", (req, res) => {
    return res.status(200).json({
        "message": "kya hal hai bhai ke"
    })
})

app.listen(3000, () => {
    console.log("server started");
}) 
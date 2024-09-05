const express = require("express");


const app = express();

app.use(express.json())

let blogs = []

app.post("/blogs", (req, res) => {
    blogs.push({ ...req.body, id: blogs.length + 1 })
    return res.json({ message: "blog created successfully" })
})

app.get("/blogs", (req, res) => {


    let publicBlogs = blogs.filter(blog => !blog.draft)
    return res.json({ publicBlogs })
})


app.get("/blogs/:id", (req, res) => {
    const { id } = req.params
    let searchBlog = blogs.filter(blog => blog.id == id)

    return res.json({ searchBlog })
})

app.patch("/blogs/:id", (req, res) => {
    const { id } = req.params

    // let index = blogs.findIndex(blog => blog.id == id )
 
    // blogs[index] = {...blogs[index] , ...req.body}

    let updatedBlogs = blogs.map((blog, index) => blog.id == id ? ({ ...blogs[index], ...req.body }) : blog)

    blogs = [...updatedBlogs]

    return res.json({ message: "Blog updated successfully", updatedBlogs })

})

app.delete("/blogs/:id", (req, res) => {

})

app.listen(3000, () => {
    console.log("Server Started");
}) 
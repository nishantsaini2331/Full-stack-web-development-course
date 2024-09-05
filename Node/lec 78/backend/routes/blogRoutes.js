const express = require("express");
const route = express.Router();


route.post("/blogs", (req, res) => {
    blogs.push({ ...req.body, id: blogs.length + 1 });
    return res.json({ message: "blog created successfully" });
});

route.get("/blogs", (req, res) => {
    let publicBlogs = blogs.filter((blog) => !blog.draft);
    return res.json({ publicBlogs });
});

route.get("/blogs/:id", (req, res) => {
    const { id } = req.params;
    let searchBlog = blogs.filter((blog) => blog.id == id);

    return res.json({ searchBlog });
});

route.patch("/blogs/:id", (req, res) => {
    const { id } = req.params;

    // let index = blogs.findIndex(blog => blog.id == id )

    // blogs[index] = {...blogs[index] , ...req.body}

    let updatedBlogs = blogs.map((blog, index) =>
        blog.id == id ? { ...blogs[index], ...req.body } : blog
    );

    blogs = [...updatedBlogs];

    return res.json({ message: "Blog updated successfully", updatedBlogs });
});

route.delete("/blogs/:id", (req, res) => {});

module.exports = route 
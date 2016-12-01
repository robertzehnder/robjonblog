var Schema = require("./db/schema.js");
var mongoose = require("mongoose")
var express = require("express")
var parser  = require("body-parser");
var app = express()
var Post = Schema.Post

app.use("/assets", express.static("public"))
app.use(parser.json({extended: true}));
app.set("view engine", "hbs");

app.listen(1234, ()=> {
  console.log("Express is working");
})

app.get("/", (req,res) => {
    res.render("posts");
})

app.get("/api/posts", (req,res) => {
  Post.find({}, (err,posts) => {
    res.json(posts)
  })
})

app.get("/api/posts/:_id", (req,res) => {
  Post.findOne({_id: req.params._id}, (err,post) => {
    res.json(post)
  })
})

// app.get("/api/:post", (req,res) => {
//   Post.findOne({title: "Title 1"}, (err,post) => {
//     res.json(post)
//   })
// })
//
app.put("/api/posts/:_id", (req, res) => {
  Post.findOneAndUpdate({_id: req.params._id}, req.body, {new:true}, (err,post) => {
    res.json(post)
  })
})
//
app.delete("/api/posts/:_id", (req,res) => {
 console.log("delete route");
 Post.findOneAndRemove({_id: req.params._id}, (err, post) => {
   res.json(post)
 })
})

app.post("/api/posts", (req,res) => {
  Post.create(req.body).then(function(post){
    res.json(post)
  })
})

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/robjonblog')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("BOOM");
})

var Schema = mongoose.Schema

var PostSchema = new Schema({
  title: String,
  body: String
})

var AuthorSchema = new Schema({
  name: String,
  posts: [{type: Schema.ObjectId, ref: "Post"}]
})

var Post = mongoose.model("Post", PostSchema)
var Author = mongoose.model("Author", AuthorSchema)

module.exports = {
  Post,
  Author
}

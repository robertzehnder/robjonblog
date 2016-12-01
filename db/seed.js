var Schema = require("./schema.js");

var Post = Schema.Post
var Author = Schema.Author

Post.remove({}, err => {
  if(err){
    console.log(err)
  }
});

Author.remove({}, err => {
  if(err){
    console.log(err)
  }
});

var names = ["Rob", "Bob", "Jeff"]

var post1 = new Post({
  title: "Title 1",
  body: "Body 1 Body 1 Body 1 Body 1 Body 1 Body 1"
})
var post2 = new Post({
  title: "Title 2",
  body: "Body 2 Body 2 Body 2 Body 2 Body 2 Body 2"
})
var post3 = new Post({
  title: "Title 3",
  body: "Body 3 Body 3 Body 3 Body 3 Body 3 Body 3"
})
var post4 = new Post({
  title: "Title 4",
  body: "Body 4 Body 4 Body 4 Body 4 Body 4 Body 4"
})
var post5 = new Post({
  title: "Title 5",
  body: "Body 5 Body 5 Body 5 Body 5 Body 5 Body 5"
})

var author1 = new Author({
  name: "Author1",
  posts: [post1, post3, post5]
})

var author2 = new Author({
  name: "Author2",
  posts: [post4]
})

var author3 = new Author({
  name: "Author3",
  posts: [post2]
})

posts = [post1,post2,post3,post4,post5]

for (i of posts) {
  i.save((err, i) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(i);
    }
  })
}

authors = [author1, author2, author3]

for (i of authors) {
  i.save((err, i) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(i);
    }
  })
}

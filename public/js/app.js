angular.module("rjb", [
    "ui.router",
    "ngResource"
  ])
  .config(["$stateProvider", Router])
  .factory("Posts", ['$resource', PostsFactory])
  .controller("indexController", ["$state","Posts", indexControllerFunction])
  .controller("showController", ["$state","Posts", "$stateParams", showControllerFunction])

  function Router($stateProvider) {
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "/assets/js/ng-views/welcome.html"
    })
    .state("index", {
      url: "/index",
      controller: "indexController",
      controllerAs: "vm",
      templateUrl: "/assets/js/ng-views/index.html"
    })
    .state("show", {
      url: "/show/:_id",
      controller: "showController",
      controllerAs: "vm",
      templateUrl: "/assets/js/ng-views/show.html"
    })
  }
  function PostsFactory($resource) {
    return $resource("api/posts/:_id", {}, {
      update: {method:"PUT"}
    })
  }

  function showControllerFunction($state, Posts, $stateParams) {
    this.post = Posts.get({_id: $stateParams._id})
    this.update = function () {
      this.post.$update({_id: $stateParams._id})
      $state.go("index")
    }
    this.destroy = function () {
      console.log("potato");
      this.post.$delete({_id: $stateParams._id})
      $state.go("index")
    }
  }

  function indexControllerFunction($state, Posts){
    this.posts = Posts.query()
    this.newPost = new Posts()
    this.create = function(){
      this.newPost.$save().then((post) => {
        $state.go("show", { _id: post._id})
      })
    }
  }

  // function indexControllerFunction($state,Posts) {
  //   this.posts = Posts.query()
  //   this.newPost = new Posts();
  //   this.create = function() {
  //     this.newPost.$save().then(function(post) {
  //       $state.go("index")
  //     })
  //   }
  // }

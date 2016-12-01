angular.module("rjb", [
    "ui.router",
    "ngResource"
  ])
  .config(["$stateProvider", Router])
  .controller("welcomeController", [welcomeControllerFunction])

  function Router($stateProvider) {
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "./ang-views/welssdaccome.html"
    })
  }

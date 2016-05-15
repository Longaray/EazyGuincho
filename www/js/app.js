// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: '/index',
      templateUrl: 'index.html',
      controller: 'IndexControl'
    })
    /*.state('lists', {
      url: '/list',
      templateUrl: 'templates/list.html',
      controller: 'ListCtrl'
    })*/
    .state('lists', {
      url: '/list',
      views: {
          templateUrl: 'templates/list.html',
          controller: 'ListCtrl'
      }
    })
    $urlRouterProvider.otherwise('/tirabugs');
})

.controller('IndexControl', function($scope, $state) {
        $scope.getList = function() {
            //alert('Index Alert ng-click')
            console.log('Index - getListMethod');
            $state.go('lists');
        };
})

.controller('ListCtrl', function($scope, $state) {
        $scope.getGuincho = function() {
            alert('List Alert with ng-click')
            //$state.go('lists');
        };
});

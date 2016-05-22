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
    })
    /*
    .state('list', {
      url: "/list",
      abstract: true,
      controller: 'ListCtrl',
      templateUrl: function() {
        if (ionic.Platform.isAndroid()) {
            return  "templates/list.html";
        }
        return "templates/list.html";
      }
    })*/
    $urlRouterProvider.otherwise('/index');
})

.controller('IndexControl', function($scope, $state) {
        $scope.getList = function() {
            //alert('Index Alert ng-click')
            console.log('Index - getListMethod');
            $state.go('lists');
        };
})

//TODO: Corrigir o template list.html para ter o mesmo valor
.controller('ListCtrl', function($scope,$ionicModal) {
	$scope.toDoListItems = [
  {
      placa: 'HTM 2175',
      nome: 'Zé do Guincho',
      cnh: '1111muitaroda',
      cpf: '0888888888888-25',
      tds: $scope.tds
  }, {
    name: 'Tony Reboque',
    time: '40 minutos',
    value: 'R$ 400',
  },
   {
    name: 'Pedro Te Busca',
    time: '30 minutos',
    value: 'R$ 300',
  }];
  
  $scope.tds = [
    { text: "Carro", checked: true },
    { text: "Caminhão", checked: false },
    { text: "Moto", checked: false }
  ];

 //Pega a lista com os guinchos
 $ionicModal.fromTemplateUrl('/templates/list.html', {
      id: '1',
      scope: $scope,
      animation: 'slide-in-up'
 }).then(function(modal) { $scope.modal1 = modal;}); 
  
 //Abre o cadastro de guinchos
 $ionicModal.fromTemplateUrl('/templates/cadastro.html', {
      id: '2',
      scope: $scope,
      animation: 'slide-in-up'
 }).then(function(modal) { $scope.modal2 = modal;});
 
 //Método de abrir os modais
 $scope.openModal = function(index) {
      if (index == 1) $scope.modal1.show();
      else $scope.modal2.show();
  };
  
 //Método de fechar os modais
 $scope.closeModal = function() {
   $scope.modal1.hide();
   $scope.modal2.hide();
 };
 
 //Cleanup the modal when we're done with it!
 $scope.$on('$destroy', function() {
   $scope.modal1.remove();
   $scope.modal2.remove();
 });

 //TODO: Achar uma maneira menos tosca
 //TODO: checkbox not saving
 //Adiciona Guincho na Lista
 $scope.Save = function(data){
    $scope.toDoListItems.push({
      placa: data.placa,
      nome: data.nome,
      cnh: data.cnh,
      cpf: data.cpf,
      tds: data.tds
    });
    data.placa = '';
    data.nome = '';
    data.cnh = '';
    data.cpf = '';
    data.tds = $scope.tds;
    $scope.closeModal();
  };
});

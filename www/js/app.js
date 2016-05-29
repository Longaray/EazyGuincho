// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase'])

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

//TODO: Corrigir o template list.html para ter o mesmo valor
.controller('ListCtrl', function($scope,$ionicModal) {
	$scope.listItems = [
  {
    plate: 'HTM 2175',
    time: '30 minutos',
    name: 'Zé do Guincho',
    cnh: '1111muitaroda',
    cpf: '0111111111111-11',
    value: '500',
    rank: '5'
  },
  {
    name: 'Tony Reboque',
    time: '40 minutos',
    plate: 'BMW 8888',
    cnh: '8888888888888',
    cpf: '0888888888888-88',
    value: '300',
    rank: '5'
  },
  {
    name: 'Pedro Te Busca',
    time: '20 minutos',
    plate: 'IJM 1515',
    cnh: 'javenceu37',
    cpf: '37373737373737-27',
    value: '300',
    rank: '5'
  }];
  
  $scope.ServiceType = [
    { text: "Carro", checked: true, km: 10.00, hour: 10.00 },
    { text: "Caminhão", checked: false, km: 50.00, hour: 50.00},
    { text: "Moto", checked: false, km: 5.00, hour: 5.00 }
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
 
  $ionicModal.fromTemplateUrl('/templates/guincho.html', {
      id: '3',
      scope: $scope,
      animation: 'slide-in-up'
 }).then(function(modal) { $scope.modal3 = modal;});
 
  $ionicModal.fromTemplateUrl('/templates/review.html', {
      id: '4',
      scope: $scope,
      animation: 'slide-in-up'
  }).then(function(modal) { $scope.modal4 = modal;});
 
 //Método de abrir os modais
 $scope.openModal = function(index, data) {
      $scope.guincho = data;
      if (index == 1) $scope.modal1.show();
      if (index == 2) $scope.modal2.show();
      if (index == 3) $scope.modal3.show();
      if (index == 4) $scope.modal4.show();
  };
  
 //Método de fechar os modais
 $scope.closeModal = function(index) {
   if (index == 1) $scope.modal1.hide();
   if (index == 2) $scope.modal2.hide();
   if (index == 3) $scope.modal3.hide();
   if (index == 4) $scope.modal4.hide();
 };
 
  $scope.closeAllModal = function() {
   $scope.modal1.hide();
   $scope.modal2.hide();
   $scope.modal3.hide();
   $scope.modal4.hide();
 };
 
 //Cleanup the modal when we're done with it!
 $scope.$on('$destroy', function() {
   $scope.modal1.remove();
   $scope.modal2.remove();
   $scope.modal3.remove();
   $scope.modal4.remove();
 });

//Carro
// -- p/km
// -- p/h
 //TODO: Achar uma maneira menos tosca
 //TODO: checkbox not saving
 //Adiciona Guincho na Lista
 $scope.Save = function(data){
    $scope.listItems.push({
      plate: data.placa,
      name: data.nome,
      cnh: data.cnh,
      cpf: data.cpf,
      carro_km: data.carro_km,
      carro_hora: data.carro_hora,
      caminhao_km: data.caminhao_km,
      caminhao_hora: data.caminhao_hora,
      moto_km: data.moto_km,
      moto_hora: data.moto_hora
    });
    data.placa = '';
    data.nome = '';
    data.cnh = '';
    data.cpf = '';
    data.carro_km = '';
    data.carro_hora = '';
    data.caminhao_km = '';
    data.caminhao_hora = '';
    data.moto_km = '';
    data.moto_hora = '';
    
    $scope.closeAllModal();
  };
  
 $scope.callGuincho = function(data){
    //O usuário confirmando, 
    //será apresentado uma tela onde ele 
    //poderá confirmar a chegada do guincho 
    //e realizar sua avaliação do serviço prestado.
    
    //TODO: Async call guincho   
    $scope.openModal(4, data);
    
    //$scope.closeAllModal();
  };
});

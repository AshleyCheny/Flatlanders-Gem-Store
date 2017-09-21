// it's a good habit to put the script in a closure
(function(){

  // data object
  var gems = [
    { name: 'Azurite', price: 2.95 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 }
  ];

  // create a module(app)
  var app = angular.module("gemStore", [ ]);

  // create a controller for the app and assign the property to the controller
  app.controller('StoreController', function(){
    this.products = gems;
  });
})();

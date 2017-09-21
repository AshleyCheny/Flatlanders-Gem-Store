// it's a good habit to put the script in a closure
(function(){

  // data object
  var gem = {
    name: 'Azurite',
    price: 2.95,
    canPurchase: false,
    soldOut: false
  };

  // create a module(app)
  var app = angular.module("gemStore", [ ]);

  // create a controller for the app and assign the property to the controller
  app.controller('StoreController', function(){
    this.product = gem;
  });
})();

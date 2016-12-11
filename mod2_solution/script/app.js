(function(){
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);



  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController (ShoppingListCheckOffService){

    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getItems();

    toBuy.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
      toBuy.itemsQuantity = ShoppingListCheckOffService.getQuantity();
      };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService){

    var AlreadyBought = this;

    AlreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

    AlreadyBought.itemsQuantity = ShoppingListCheckOffService.getBoughtItems();

  }


  function ShoppingListCheckOffService () {
    var service = this;

    var items = [
      {name:"Cookies", quantity:10},
      {name:"Granola", quantity:5},
      {name:"Cerveja", quantity:20},
      {name:"Leite Condensado", quantity:5},
      {name:"Fígado", quantity:8}
    ];

    service.getQuantity = function(){
      return items.length;
    };

    var boughtItems=[];

    service.getItems = function(){
      return items;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };

    service.getBoughtQuantity = function(){
      return boughtItems.length;
    };


    service.removeItem = function(itemIdex){
      boughtItems.push(items[itemIdex]);
      items.splice(itemIdex,1);
    };


  }


})();

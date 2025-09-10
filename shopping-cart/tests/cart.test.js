const {add, remove, getTotal }= require('../cart.js');

describe("add",function(){

    test("should add item to the cart with correct quantities",function(){
        const cart = [];
        add(cart,"apple",3)
        expect(cart).toEqual([{item : "apple", quantity: 3}]);
    });

    test("should add item with 0 quantity", function(){
        const cart = [];
        add(cart,"orange",0);
        expect(cart).toEqual([{item : "orange", quantity: 0}]);
    });

    test("should not add item with negative quantity ", function(){
        const cart = [];
        add(cart,"plum",-5);
        expect(cart).toEqual([])
    });

});

describe("remove",function(){


});

describe("getTotal",function(){

});
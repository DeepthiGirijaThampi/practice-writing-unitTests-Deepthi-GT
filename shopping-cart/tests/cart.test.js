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

    test("should remove an existing item with a valid name and quantity",function(){
        const cart = [{item : "apple",quantity : 2}];
        remove(cart,"apple");
        expect(cart).toEqual([]);

    });

    test("should not remove item not in cart",function(){
        const cart = [{item : "apple",quantity : 3}];
        remove(cart,"banana");
        expect(cart).toEqual([{item : "apple",quantity : 3}]);
    });

    test("should remove the last item from the cart",function(){
        const cart = [
                        {item : "apple",quantity : 3},
                        {item : "banana",quantity : 2}
                     ];

        remove(cart,"banana");
        expect(cart).toEqual([{item : "apple",quantity : 3}]);
    });

});

describe("getTotal",function(){
  test("should calculate the total items correctly",function(){
    const cart = [
                    {item: "apple", quantity: 2},
                    {item: "orange", quantity: 3}
                 ];
    expect(getTotal(cart)).toEqual(5);

  });

  test("should return 0 for an empty cart ",function(){
    const cart = [];
    expect(getTotal(cart)).toEqual(0);
  });

  test("should calculate the total if there are large quantities",function(){
    const cart = [
                    {item: "apple", quantity: 20},
                    {item: "orange", quantity: 30}
                ];
    expect(getTotal(cart)).toEqual(50);

  });
});
function addItem(cart,item,quantity){
  if(quantity <0) return;
  cart.push({item,quantity});
}

function removeItem(cart,item){
  const index = cart.findIndex((entry) => entry.item === item);
  if(index !== -1){
    cart.splice(index,1);
  }
}

function getTotalItems(cart){
  let total = 0;
  for(let i = 0;i<cart.length;i++){
    total += cart[i].quantity
  }
  return total;
}


module.exports = {
    add : addItem,
    remove : removeItem,
    getTotal : getTotalItems
}
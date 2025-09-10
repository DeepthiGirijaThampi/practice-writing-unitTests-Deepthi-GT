function addItem(cart,item,quantity){
  if(quantity <0) return;
  cart.push({item,quantity});
}

function removeItem(cart,item){
  const index = cart.indexOf(item);
  if(index !== -1){
    cart.splice(index,1);
  }
}

function getTotalItems(cart){
  return cart.length;
}


module.exports = {
    add : addItem,
    remove : removeItem,
    getTotal : getTotalItems
}
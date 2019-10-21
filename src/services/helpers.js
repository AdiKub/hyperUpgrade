export const getCount = (pc, json) => {
  let number = 0;
  for (let num in json) {
    if (pc._id === json[num].pc._id) {
      number = num
    }
  }
  return number
};

export const getTotalPrice=(pcCart)=>{
  let productTotalPrice = 0;
  pcCart && pcCart.map((product)=> productTotalPrice += 
    (product.pc.price.replace(/\D/g, "") * product.number))
  return productTotalPrice;
}

export const getTotalCount =(pcCart)=>{
  let productTotalCount = 0;
  pcCart && pcCart.map((pc)=> productTotalCount+=pc.number)
  return productTotalCount;
}
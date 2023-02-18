
let slNo = 0;
document.getElementById('rose-btn').addEventListener('click',function(){
    slNo += 1;
    const title = getInnerTextById('rose-title');
    const price = getInnerTextById('rose-price');
    const qty = getInnerTextById('rose-qty');

    const totalPrice = price * qty;
    setProductInCart (slNo,title,price,qty,totalPrice);
   
})
document.getElementById('combo-pack-btn').addEventListener('click',function(){
    slNo += 1;
    const title = getInnerTextById('combo-pack-title');
    const price = getInnerTextById('combo-pack-price');
    const qty = getInnerTextById('combo-pack-qty');

    const totalPrice = price * qty;
    setProductInCart (slNo,title,price,qty,totalPrice);
   
})
document.getElementById('pink-sun-flower-btn').addEventListener('click',function(){
    slNo += 1;
    const title = getInnerTextById('pink-sun-flower-title');
    const price = getInnerTextById('pink-sun-flower-price');
    const qty = getInnerTextById('pink-sun-flower-qty');

    const totalPrice = price * qty;
    setProductInCart (slNo,title,price,qty,totalPrice);
   
})
document.getElementById('premimum-combo-btn').addEventListener('click',function(){
    slNo += 1;
    const title = getInnerTextById('premimum-combo-title');
    const price = getInnerTextById('premimum-combo-price');
    const qty = getInnerTextById('premimum-combo-qty');

    const totalPrice = price * qty;
    setProductInCart (slNo,title,price,qty,totalPrice);
   
})
document.getElementById('yellow-rose-btn').addEventListener('click',function(){
    slNo += 1;
    const title = getInnerTextById('yellow-rose-title');
    const price = getInnerTextById('yellow-rose-price');
    const qty = getInnerTextById('yellow-rose-qty');

    const totalPrice = price * qty;
    setProductInCart (slNo,title,price,qty,totalPrice);
   
})



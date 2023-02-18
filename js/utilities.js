function getInnerTextById(innerTextId){

    const innerText = document.getElementById(innerTextId).innerText;
    return innerText;


}

function setProductInCart (slNo,title,price,qty,totalPrice){

    const cartContainer = document.getElementById('container');

    const tr = document.createElement('tr');

    tr.innerHTML = `

    <td  class="text-lg font-bold">${slNo}</td>
    <td class="text-lg font-bold">${title}</td>
    <td  class="text-lg font-bold">${price}</td>
    <td  class="text-lg font-bold">${qty}</td>
    <td class="text-lg font-bold">${totalPrice}</td>
    
    `
    cartContainer.appendChild(tr);
}
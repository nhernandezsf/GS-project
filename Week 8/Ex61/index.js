const form = document.querySelector('form');
const list = document.querySelector('#list');
 
form.addEventListener('submit', function (e){
    e.preventDefault();
    const prod = form.elements.product;
    const quan = form.elements.qty;
    addProduct(prod.value, quan.value);
    prod.value ='';
    quan.value ='';
});
 
const addProduct = (prod, quan) => {
    const newProd = document.createElement('li');
    newProd.innerText = (`${quan} ${prod}s`);
    list.appendChild(newProd);
};
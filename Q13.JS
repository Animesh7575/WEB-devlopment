productList = JSON.parse(localStorage.getItem('productList')) || [];

function renderProductList() {
  const productListElement = document.getElementById('product-list');

   productListElement.innerHTML = '';

   productList.forEach((product, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = product.name;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteProduct(index));

    listItem.appendChild(deleteButton);
    productListElement.appendChild(listItem);
  });
}


function deleteProduct(index) {
  
  productList.splice(index, 1);
  localStorage.setItem('productList', JSON.stringify(productList));

  
  renderProductList();
}

renderProductList();
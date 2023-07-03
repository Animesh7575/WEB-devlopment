function editEmail(index) {
   
    const newEmail = prompt('Enter the new email address:');
    productList[index].email = newEmail;
  
    localStorage.setItem('productList', JSON.stringify(productList));
  
     renderProductList();
  }
  
    function renderProductList() {
    const productListElement = document.getElementById('product-list');
  
    productListElement.innerHTML = '';
  
    productList.forEach((product, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = product.name + ' - ' + product.email;
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit Email';
      editButton.addEventListener('click', () => editEmail(index));
  
      listItem.appendChild(editButton);
      productListElement.appendChild(listItem);
    });
  }
document.addEventListener('DOMContentLoaded', () => {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      const productsContainer = document.getElementById('products-container');

      data.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productName = document.createElement('div');
        productName.classList.add('product-name');
        productName.textContent = product.name;

        const productPrice = document.createElement('div');
        productPrice.classList.add('product-price');
        productPrice.textContent = `Preço: ${product.price}`;

        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Comprar';

        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(buyButton);
        productsContainer.appendChild(productCard);
      });
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));
});

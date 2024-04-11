document.addEventListener('DOMContentLoaded', () => {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      const productsContainer = document.getElementById('products-container');

      data.forEach(product => {
        const productHtml = product.htmlCode;
        const productElement = document.createElement('div');
        productElement.innerHTML = productHtml;
        productsContainer.appendChild(productElement);
      });
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));
});

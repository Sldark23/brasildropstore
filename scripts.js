document.addEventListener('DOMContentLoaded', () => {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        const scriptElement = document.createElement('script');
        scriptElement.src = product.buyButtonUrl;
        scriptElement.classList.add('ymp-script');
        document.body.appendChild(scriptElement);
      });
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));
});

function buyProduct(productName) {
    alert("Félicitations ! Vous allez être redirigé vers notre plateforme de paiement sécurisée pour le produit : " + productName);
}

// Changement de couleur du menu au défilement
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        header.style.padding = '1rem 5%';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.padding = '1.5rem 5%';
    }
});

# Gabostech-solutions site : Fichier script.js  
  
function buyProduct(productName) {  
    alert("Félicitations ! Vous allez être redirigé vers notre plateforme de paiement sécurisée pour le produit : " + productName);  
    // Ici, vous remplacerez plus tard par vos liens Lemon Squeezy ou Gumroad  
    // window.location.href = "VOTRE_LIEN_DE_PAIEMENT";  
}  
  
// Animation simple au défilement  
window.addEventListener('scroll', () => {  
    const header = document.querySelector('header');  
    header.style.background = window.scrollY > 50 ? 'rgba(10, 10, 10, 0.9)' : 'transparent';  
});  

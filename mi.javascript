// Script para hacer el menú más interactivo (opcional)
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".menu-item");
  
  menuItems.forEach(item => {
    item.addEventListener("click", function() {
      alert("¡Has seleccionado " + item.querySelector("h2").textContent + "!");
    });
  });
});

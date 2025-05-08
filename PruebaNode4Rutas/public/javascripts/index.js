// Puedes agregar algún efecto como resaltar la tarjeta clickeada o un sonido
document.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("mousedown", () => {
      card.style.transform = "scale(0.97)";
    });
    card.addEventListener("mouseup", () => {
      card.style.transform = "scale(1.03)";
    });
  });
  
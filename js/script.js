// Toggle para mostrar/esconder detalhes dos projetos
function toggleProjeto(el) {
  el.classList.toggle('active');
}

// Toggle para abrir/fechar o menu hambúrguer
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");

  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  // Fechar menu ao clicar em um link (opcional)
  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
    });
  });
});

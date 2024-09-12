// Selecciona todos los botones, modales y botones de cierre
const botones = document.querySelectorAll("[id^='boton']");
const modales = document.querySelectorAll("[id^='modal-content']");
const botonesCerrar = document.querySelectorAll("[id^='cerrar']");

// Función para mostrar solo el modal seleccionado y ocultar los demás
const mostrarModal = (index) => {
  modales.forEach((modal, i) => {
    modal.style.display = i === index ? "block" : "none";
  });
};

// Asigna el evento 'click' a cada botón para mostrar el modal correspondiente
botones.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    mostrarModal(index);
  });
});

// Asigna el evento 'click' a cada botón de cierre para ocultar su modal correspondiente
botonesCerrar.forEach((botonCerrar, index) => {
  botonCerrar.addEventListener("click", () => {
    modales[index].style.display = "none";
  });
});

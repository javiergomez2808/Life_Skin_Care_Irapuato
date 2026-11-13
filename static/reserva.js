// Reserva en línea: el texto de los botones «Reservar en línea» (data-reserva-texto) en el idioma elegido.
// Los enlaces llevan a https://reservas.angelgomezp.dev/lifeskin; los de cada tratamiento, con ?servicio=<clave>.
(function () {
  var TEXTOS = { es: "Reservar en línea", en: "Book online" };
  var selector = document.getElementById("language-select");

  function aplicar(lang) {
    var texto = TEXTOS[lang] || TEXTOS.es;
    document.querySelectorAll("[data-reserva-texto]").forEach(function (boton) {
      boton.textContent = texto;
    });
  }

  var guardado = null;
  try {
    guardado = localStorage.getItem("siteLanguage");
  } catch (e) {}
  aplicar(guardado && TEXTOS[guardado] ? guardado : selector ? selector.value : "es");
  if (selector) {
    selector.addEventListener("change", function (event) {
      aplicar(event.target.value);
    });
  }
})();

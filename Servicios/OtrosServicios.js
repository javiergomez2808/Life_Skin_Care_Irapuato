document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      htmlLang: "es",
      title: "Otros Servicios Estéticos | Life Skin Care Irapuato",
      description:
        "Tratamientos antiaging y eliminación de verrugas con Plamapen en Life Skin Care Irapuato.",
      reserveNav: "Reserva",
      selectEs: "Español",
      heroPill: "Cuidado Estético Avanzado",
      heroTitle: "Otros Servicios",
      intro:
        "Complementa tu cuidado estético con nuestros tratamientos antiaging y de eliminación de verrugas. Tecnología avanzada, resultados visibles y atención profesional en Irapuato.",
      reserveUs: "Reserva con nosotros",
      backServices: "Volver a servicios",
      sectionTitle: "Tratamientos Disponibles",
      sectionText: "Selecciona una tarjeta para desplegar su contenido completo.",
      contactTitle: "Reserva con nosotros",
      contactText:
        "Para programar una cita, contáctanos directamente y confirma disponibilidad.",
      contactHint:
        "Incluye el tratamiento, la fecha y la hora que prefieres al enviar tu mensaje.",
      footerText: "Life Skin Care Irapuato. Todos los derechos reservados.",
      footerLabel: "Servicios",
      footerReserve: "Reserva",
      cardHint: "Ver descripción",
      cards: [
        {
          eyebrow: "Eliminación de Verrugas",
          title: "Precisión, seguridad y cuidado estético",
          summary: "Tecnología Plamapen para remover lesiones cutáneas sin cirugía.",
          price: "Precio según tamaño y ubicación",
          description:
            "El tratamiento con Plamapen utiliza energía de plasma para eliminar verrugas y pequeñas imperfecciones de forma precisa y segura.",
          list: [
            "Procedimiento no invasivo y controlado.",
            "Mínima cicatrización y rápida recuperación.",
            "Resultados estéticos y efectivos.",
            "Mejora apariencia y salud de la piel."
          ],
          priceDisclaimer: "ⓘ El precio puede variar según el tamaño y la ubicación de la verruga. Se recomienda una valoración previa antes de iniciar el tratamiento.",
          note: "Una solución moderna y confiable para el cuidado estético de tu piel."
        }
      ]
    },
    en: {
      htmlLang: "en",
      title: "Other Aesthetic Services | Life Skin Care Irapuato",
      description:
        "Antiaging treatments and wart removal with Plamapen at Life Skin Care Irapuato.",
      reserveNav: "Book",
      selectEs: "Spanish",
      heroPill: "Advanced Aesthetic Care",
      heroTitle: "Other Services",
      intro:
        "Complement your aesthetic care with our antiaging and wart removal treatments. Advanced technology, visible results and professional attention in Irapuato.",
      reserveUs: "Book with us",
      backServices: "Back to services",
      sectionTitle: "Available Treatments",
      sectionText: "Select a card to view the full description of each treatment.",
      contactTitle: "Book with us",
      contactText:
        "To schedule an appointment, contact us directly and confirm availability.",
      contactHint:
        "Include the treatment, preferred date and time when sending your message.",
      footerText: "Life Skin Care Irapuato. All rights reserved.",
      footerLabel: "Services",
      footerReserve: "Book",
      cardHint: "View description",
      cards: [
        {
          eyebrow: "Wart Removal",
          title: "Precision, safety and aesthetic care",
          summary: "Plamapen technology to remove skin lesions without surgery.",
          price: "Price based on size and location",
          description:
            "The Plamapen treatment uses plasma energy to precisely and safely remove warts and small skin imperfections.",
          list: [
            "Non-invasive and controlled procedure.",
            "Minimal scarring and fast recovery.",
            "Effective and aesthetically pleasing results.",
            "Improves the appearance and health of the skin."
          ],
          priceDisclaimer: "ⓘ Price may vary based on the size and location of the wart. A prior assessment is recommended before starting the treatment.",
          note: "A modern and reliable solution for the aesthetic care of your skin."
        }
      ]
    }
  };

  const selector = document.getElementById("language-select");
  const metaDescription = document.querySelector('meta[name="description"]');
  const introButtons = document.querySelectorAll(".hero__actions a");
  const serviceCards = document.querySelectorAll(".service-card");
  const footerLinks = document.querySelectorAll(".footer__links a");
  const footerCopy = document.querySelector(".footer p");

  function setText(selectorText, value) {
    const element = document.querySelector(selectorText);
    if (element) element.textContent = value;
  }

  function renderCard(card, cardTranslations, content) {
    if (!card || !cardTranslations) return;

    const eyebrow = card.querySelector(".service-card__eyebrow");
    const title = card.querySelector(".service-card__summary h3");
    const summaryParagraphs = card.querySelectorAll(".service-card__summary p");
    const detailParagraphs = card.querySelectorAll(".service-card__panel p:not(.small)");
    const priceDisclaimer = card.querySelector(".service-card__panel .price-disclaimer");
    const note = card.querySelector(".service-card__panel .muted.small:not(.price-disclaimer)");
    const list = card.querySelector(".checklist");
    const hintLabel = card.querySelector(".service-card__hint span");

    if (eyebrow) eyebrow.textContent = cardTranslations.eyebrow;
    if (title) title.textContent = cardTranslations.title;
    if (summaryParagraphs[0]) summaryParagraphs[0].textContent = cardTranslations.summary;
    if (cardTranslations.price && summaryParagraphs[1])
      summaryParagraphs[1].textContent = cardTranslations.price;
    if (hintLabel) hintLabel.textContent = content.cardHint;

    if (detailParagraphs[0]) detailParagraphs[0].textContent = cardTranslations.description;

    if (list && cardTranslations.list) {
      const items = list.querySelectorAll("li");
      items.forEach((item, index) => {
        if (cardTranslations.list[index]) item.textContent = cardTranslations.list[index];
      });
    }

    if (priceDisclaimer && cardTranslations.priceDisclaimer)
      priceDisclaimer.textContent = cardTranslations.priceDisclaimer;
    if (note) note.textContent = cardTranslations.note;
  }

  function applyTranslations(lang) {
    const content = translations[lang] || translations.es;

    document.documentElement.lang = content.htmlLang;
    document.title = content.title;
    if (metaDescription) metaDescription.setAttribute("content", content.description);

    setText(".topbar .btn", content.reserveNav);
    if (selector) {
      selector.setAttribute(
        "aria-label",
        lang === "en" ? "Language selector" : "Selector de idioma"
      );
      if (selector.options[0]) selector.options[0].textContent = content.selectEs;
      if (selector.options[1]) selector.options[1].textContent = "English";
    }

    setText(".hero .pill", content.heroPill);
    setText(".hero h1", content.heroTitle);
    setText(".intro .lead", content.intro);

    if (introButtons[0]) introButtons[0].textContent = content.reserveUs;
    if (introButtons[1]) introButtons[1].textContent = content.backServices;

    setText("#otrosservicios .section__head h2", content.sectionTitle);
    setText("#otrosservicios .section__head .muted", content.sectionText);
    setText("#contact .section__head h2", content.contactTitle);
    setText("#contact .section__head .muted", content.contactText);
    setText(".contact__card .muted.small", content.contactHint);

    serviceCards.forEach((card, index) => {
      renderCard(card, content.cards[index], content);
    });

    if (footerCopy) {
      footerCopy.innerHTML = '&copy; <span id="year"></span> ' + content.footerText;
      const year = document.getElementById("year");
      if (year) year.textContent = String(new Date().getFullYear());
    }

    if (footerLinks[0]) footerLinks[0].textContent = content.footerLabel;
    if (footerLinks[1]) footerLinks[1].textContent = content.footerReserve;
  }

  const saved = localStorage.getItem("siteLanguage");
  const initialLang = saved && translations[saved] ? saved : (selector ? selector.value : "es");
  if (selector) selector.value = initialLang;
  applyTranslations(initialLang);

  if (selector) {
    selector.addEventListener("change", (event) => {
      const lang = event.target.value;
      applyTranslations(lang);
      localStorage.setItem("siteLanguage", lang);
    });
  }
});

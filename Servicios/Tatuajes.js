document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      htmlLang: "es",
      title: "Eliminación de Tatuajes en Irapuato | Life Skin Care",
      description:
        "Eliminación de tatuajes con tecnología láser avanzada en Life Skin Care Irapuato. Procedimiento seguro, progresivo y mínimamente invasivo.",
      reserveNav: "Reserva",
      selectEs: "Español",
      heroPill: "Tecnología Láser Avanzada",
      heroTitle: "Eliminación de Tatuajes",
      intro:
        "Recupera la naturalidad de tu piel con nuestra tecnología láser avanzada para eliminación de tatuajes. Procedimiento seguro, progresivo y adaptable a distintos tipos de piel y pigmentos.",
      reserveUs: "Reserva con nosotros",
      backServices: "Volver a servicios",
      sectionTitle: "Tratamiento Disponible",
      sectionText: "Selecciona la tarjeta para desplegar el contenido completo.",
      contactTitle: "Reserva con nosotros",
      contactText:
        "Para programar una cita, contáctanos directamente y confirma disponibilidad.",
      contactHint:
        "Incluye el tratamiento, la fecha y la hora que prefieres al enviar tu mensaje.",
      footerText: "Life Skin Care Irapuato. Todos los derechos reservados.",
      footerLabel: "Tatuajes",
      footerReserve: "Reserva",
      cardHint: "Ver descripción",
      cards: [
        {
          eyebrow: "Eliminación de Tatuajes",
          title: "Tecnología láser para una piel renovada",
          summary: "Procedimiento seguro y eficaz para eliminar pigmentos progresivamente.",
          description:
            "Utilizamos tecnología láser avanzada para fragmentar las partículas de tinta y permitir que el organismo las elimine de forma natural.",
          list: [
            "Reducción progresiva y visible del tatuaje.",
            "Procedimiento seguro y mínimamente invasivo.",
            "Adaptable a distintos tipos de piel y pigmentos.",
            "Ideal para eliminar o atenuar tatuajes."
          ],
          note: "Profesionalismo y cuidado para recuperar la naturalidad de tu piel."
        }
      ]
    },
    en: {
      htmlLang: "en",
      title: "Tattoo Removal in Irapuato | Life Skin Care",
      description:
        "Tattoo removal with advanced laser technology at Life Skin Care Irapuato. Safe, progressive and minimally invasive procedure.",
      reserveNav: "Book",
      selectEs: "Spanish",
      heroPill: "Advanced Laser Technology",
      heroTitle: "Tattoo Removal",
      intro:
        "Restore your skin's natural appearance with our advanced laser technology for tattoo removal. A safe, progressive procedure adaptable to different skin types and pigments.",
      reserveUs: "Book with us",
      backServices: "Back to services",
      sectionTitle: "Available Treatment",
      sectionText: "Select the card to view the full description.",
      contactTitle: "Book with us",
      contactText:
        "To schedule an appointment, contact us directly and confirm availability.",
      contactHint:
        "Include the treatment, preferred date and time when sending your message.",
      footerText: "Life Skin Care Irapuato. All rights reserved.",
      footerLabel: "Tattoo Removal",
      footerReserve: "Book",
      cardHint: "View description",
      cards: [
        {
          eyebrow: "Tattoo Removal",
          title: "Laser technology for renewed skin",
          summary: "A safe and effective procedure to progressively eliminate pigments.",
          description:
            "We use advanced laser technology to fragment ink particles and allow the body to eliminate them naturally.",
          list: [
            "Progressive and visible tattoo reduction.",
            "Safe and minimally invasive procedure.",
            "Adaptable to different skin types and pigments.",
            "Ideal for eliminating or fading tattoos."
          ],
          note: "Professionalism and care to restore the natural look of your skin."
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
    const note = card.querySelector(".service-card__panel .muted.small");
    const list = card.querySelector(".checklist");
    const hintLabel = card.querySelector(".service-card__hint span");

    if (eyebrow) eyebrow.textContent = cardTranslations.eyebrow;
    if (title) title.textContent = cardTranslations.title;
    if (summaryParagraphs[0]) summaryParagraphs[0].textContent = cardTranslations.summary;
    if (hintLabel) hintLabel.textContent = content.cardHint;
    if (detailParagraphs[0]) detailParagraphs[0].textContent = cardTranslations.description;

    if (list && cardTranslations.list) {
      const items = list.querySelectorAll("li");
      items.forEach((item, index) => {
        if (cardTranslations.list[index]) item.textContent = cardTranslations.list[index];
      });
    }

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

    setText("#tatuajes .section__head h2", content.sectionTitle);
    setText("#tatuajes .section__head .muted", content.sectionText);
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

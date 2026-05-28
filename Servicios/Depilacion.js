document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      htmlLang: "es",
      title: "Depilación y Estética | Life Skin Care Irapuato",
      description:
        "Depilación láser Soprano Titanium en Life Skin Care Irapuato. Tecnología avanzada, resultados visibles y duraderos para tu piel.",
      reserveNav: "Reserva",
      selectEs: "Español",
      heroPill: "Estética Avanzada",
      heroTitle: "Depilación y Tratamientos Estéticos",
      intro:
        "Descubre nuestros tratamientos de depilación láser y estética avanzada en Irapuato, diseñados para cuidar tu piel, mejorar tu apariencia y darte confianza con tecnología de vanguardia.",
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
      footerLabel: "Depilación",
      footerReserve: "Reserva",
      cardHint: "Ver descripción",
      cards: [
        {
          eyebrow: "Depilación Láser",
          title: "Soprano Titanium",
          summary: "Belleza sin límites, confianza sin dolor.",
          summaryExtra: "La depilación láser más avanzada, rápida y segura.",
          description:
            "Soprano Titanium combina innovación y bienestar para ofrecer una experiencia de depilación láser cómoda, rápida y efectiva.",
          list: [
            "Tecnología avanzada que cuida tu piel.",
            "Tratamiento prácticamente sin dolor.",
            "Resultados visibles y duraderos.",
            "Ideal para diferentes tipos de piel."
          ],
          note: "\"Tecnología que cuida tu piel, resultados que enamoran.\""
        },
      ]
    },
    en: {
      htmlLang: "en",
      title: "Hair Removal & Aesthetics | Life Skin Care Irapuato",
      description:
        "Soprano Titanium laser hair removal at Life Skin Care Irapuato. Advanced technology with visible and long-lasting results.",
      reserveNav: "Book",
      selectEs: "Spanish",
      heroPill: "Advanced Aesthetics",
      heroTitle: "Hair Removal & Aesthetic Treatments",
      intro:
        "Discover our laser hair removal and advanced aesthetic treatments in Irapuato, designed to care for your skin, enhance your appearance and boost your confidence with cutting-edge technology.",
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
      footerLabel: "Hair Removal",
      footerReserve: "Book",
      cardHint: "View description",
      cards: [
        {
          eyebrow: "Laser Hair Removal",
          title: "Soprano Titanium",
          summary: "Beauty without limits, confidence without pain.",
          summaryExtra: "The most advanced, fast and safe laser hair removal.",
          description:
            "Soprano Titanium combines innovation and wellbeing to offer a comfortable, fast and effective laser hair removal experience.",
          list: [
            "Advanced technology that cares for your skin.",
            "A virtually pain-free treatment.",
            "Visible and long-lasting results.",
            "Suitable for different skin types."
          ],
          note: "\"Technology that cares for your skin, results you'll love.\""
        },
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
    if (cardTranslations.summaryExtra && summaryParagraphs[1])
      summaryParagraphs[1].textContent = cardTranslations.summaryExtra;
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

    setText("#depilacion .section__head h2", content.sectionTitle);
    setText("#depilacion .section__head .muted", content.sectionText);
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

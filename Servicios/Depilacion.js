document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      htmlLang: "es",
      title: "Depilación y Estética | Life Skin Care Irapuato",
      description:
        "Depilación láser Soprano Titanium, antiaging, eliminación de tatuajes y verrugas en Life Skin Care Irapuato.",
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
        {
          eyebrow: "Antiaging",
          title: "Juventud y vitalidad para tu piel",
          summary:
            "Tratamiento especializado para restaurar firmeza y luminosidad.",
          description:
            "El tratamiento antiaging combate los signos visibles del envejecimiento mediante técnicas avanzadas y activos especializados que estimulan la regeneración celular.",
          list: [
            "Reduce líneas de expresión y arrugas.",
            "Mejora firmeza y elasticidad.",
            "Favorece luminosidad y uniformidad.",
            "Estimula producción natural de colágeno.",
            "Brinda frescura y bienestar inmediato."
          ],
          note: "Un ritual de belleza diseñado para devolver juventud y resplandor natural."
        },
        {
          eyebrow: "Eliminación de Tatuajes",
          title: "Tecnología láser para una piel renovada",
          summary:
            "Procedimiento seguro y eficaz para eliminar pigmentos progresivamente.",
          description:
            "Utilizamos tecnología láser avanzada para fragmentar las partículas de tinta y permitir que el organismo las elimine de forma natural.",
          list: [
            "Reducción progresiva y visible del tatuaje.",
            "Procedimiento seguro y mínimamente invasivo.",
            "Adaptable a distintos tipos de piel y pigmentos.",
            "Ideal para eliminar o atenuar tatuajes."
          ],
          note: "Profesionalismo y cuidado para recuperar la naturalidad de tu piel."
        },
        {
          eyebrow: "Eliminación de Verrugas",
          title: "Precisión, seguridad y cuidado estético",
          summary:
            "Tecnología Plamapen para remover lesiones cutáneas sin cirugía.",
          description:
            "El tratamiento con Plamapen utiliza energía de plasma para eliminar verrugas y pequeñas imperfecciones de forma precisa y segura.",
          list: [
            "Procedimiento no invasivo y controlado.",
            "Mínima cicatrización y rápida recuperación.",
            "Resultados estéticos y efectivos.",
            "Mejora apariencia y salud de la piel."
          ],
          note: "Una solución moderna y confiable para el cuidado estético de tu piel."
        }
      ]
    },
    en: {
      htmlLang: "en",
      title: "Hair Removal & Aesthetics | Life Skin Care Irapuato",
      description:
        "Soprano Titanium laser hair removal, antiaging, tattoo and wart removal at Life Skin Care Irapuato.",
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
        {
          eyebrow: "Antiaging",
          title: "Youth and vitality for your skin",
          summary:
            "A specialized treatment to restore firmness and radiance.",
          description:
            "The antiaging treatment combats visible signs of aging through advanced techniques and specialized active ingredients that stimulate cell regeneration.",
          list: [
            "Reduces expression lines and wrinkles.",
            "Improves firmness and elasticity.",
            "Enhances radiance and skin evenness.",
            "Stimulates natural collagen production.",
            "Provides immediate freshness and wellbeing."
          ],
          note: "A beauty ritual designed to restore youth and natural glow."
        },
        {
          eyebrow: "Tattoo Removal",
          title: "Laser technology for renewed skin",
          summary:
            "A safe and effective procedure to progressively eliminate pigments.",
          description:
            "We use advanced laser technology to fragment ink particles and allow the body to eliminate them naturally.",
          list: [
            "Progressive and visible tattoo reduction.",
            "Safe and minimally invasive procedure.",
            "Adaptable to different skin types and pigments.",
            "Ideal for eliminating or fading tattoos."
          ],
          note: "Professionalism and care to restore the natural look of your skin."
        },
        {
          eyebrow: "Wart Removal",
          title: "Precision, safety and aesthetic care",
          summary:
            "Plamapen technology to remove skin lesions without surgery.",
          description:
            "The Plamapen treatment uses plasma energy to precisely and safely remove warts and small skin imperfections.",
          list: [
            "Non-invasive and controlled procedure.",
            "Minimal scarring and fast recovery.",
            "Effective and aesthetically pleasing results.",
            "Improves the appearance and health of the skin."
          ],
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

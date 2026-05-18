document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      htmlLang: "es",
      title: "Faciales y Estética | Life Skin Care Irapuato",
      description:
        "Limpiezas faciales, faciales con aparatología, depilación láser y tratamientos antiaging en Life Skin Care Irapuato.",
      reserveNav: "Reserva",
      selectEs: "Español",
      heroPill: "Cuidado Facial y Estético",
      heroTitle: "Faciales y Tratamientos Estéticos",
      intro:
        "Descubre tratamientos faciales y estéticos diseñados para limpiar, revitalizar y transformar tu piel con tecnología avanzada, bienestar y cuidado profesional.",
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
      footerTreatments: "Tratamientos",
      footerReserve: "Reserva",
      cardHint: "Ver descripción",
      consistTitle: "¿En qué consiste?",
      benefitsTitle: "Beneficios principales",
      cards: [
        {
          eyebrow: "Limpiezas Faciales",
          title: "Pureza, frescura y cuidado para tu piel",
          summary:
            "Tratamiento esencial para mantener la piel sana, luminosa y libre de impurezas.",
          description:
            "La limpieza facial profesional elimina células muertas, exceso de grasa y contaminantes, preparando la piel para absorber mejor nutrientes y tratamientos posteriores.",
          consistList: [
            "Higienización profunda de la piel.",
            "Exfoliación suave para retirar células muertas.",
            "Extracción cuidadosa de impurezas.",
            "Aplicación de mascarillas y productos específicos según el tipo de piel.",
            "Hidratación y protección final para mantener el equilibrio cutáneo."
          ],
          benefitsList: [
            "Piel más limpia, fresca y oxigenada.",
            "Reducción de imperfecciones y puntos negros.",
            "Mejora de la textura y luminosidad.",
            "Preparación ideal para otros tratamientos faciales.",
            "Sensación inmediata de bienestar y cuidado personal."
          ],
          note:
            "En Life Skin Care Irapuato, la limpieza facial se convierte en un ritual de belleza y salud en un ambiente de serenidad y profesionalismo."
        },
        {
          eyebrow: "Faciales con Aparatología",
          title: "Tecnología avanzada para una piel radiante",
          summary:
            "Equipos especializados que potencian limpieza, hidratación y rejuvenecimiento.",
          description:
            "Los faciales con aparatología combinan técnicas profesionales con tecnología de vanguardia para ofrecer soluciones personalizadas según cada tipo de piel.",
          consistList: [
            "Uso de equipos como radiofrecuencia, ultrasonido, microdermoabrasión y alta frecuencia.",
            "Tratamientos adaptados para signos de envejecimiento, acné, manchas y deshidratación.",
            "Aplicación de productos dermocosméticos potenciados con aparatología.",
            "Sesiones seguras y efectivas realizadas por profesionales capacitados."
          ],
          benefitsList: [
            "Rejuvenecimiento y firmeza de la piel.",
            "Reducción de líneas de expresión y arrugas.",
            "Mejora de textura, luminosidad y tono cutáneo.",
            "Tratamiento eficaz de imperfecciones y problemas específicos.",
            "Resultados visibles y duraderos."
          ],
          note:
            "La unión perfecta entre ciencia y estética para transformar tu piel y realzar tu belleza natural."
        },
        {
          eyebrow: "Depilación Láser",
          title: "Soprano Titanium",
          summary: "Belleza sin límites, confianza sin dolor.",
          summaryExtra: "La depilación láser más avanzada, rápida y segura para una piel suave y radiante.",
          description:
            "Soprano Titanium transmite innovación y bienestar mediante una experiencia de depilación láser cómoda, avanzada y segura.",
          list: [
            "Tecnología que cuida tu piel, resultados que enamoran.",
            "Depilación láser sin dolor, solo libertad.",
            "Tu piel merece lo mejor."
          ],
          note:
            "Ideal para quienes buscan suavidad, confianza y resultados estéticos con tecnología de alta precisión."
        },
        {
          eyebrow: "Antiaging",
          title: "Juventud y vitalidad para tu piel",
          summary:
            "Tratamiento diseñado para combatir signos visibles del envejecimiento.",
          description:
            "El tratamiento antiaging ayuda a restaurar la firmeza, mejorar la luminosidad y estimular la regeneración celular mediante técnicas avanzadas y productos especializados.",
          consistList: [
            "Limpieza profunda y preparación de la piel.",
            "Aplicación de activos antioxidantes y reafirmantes.",
            "Uso de aparatología especializada para potenciar resultados.",
            "Masajes faciales que favorecen la circulación y oxigenación.",
            "Hidratación intensiva y protección final."
          ],
          benefitsList: [
            "Reducción de líneas de expresión y arrugas.",
            "Mejora de la firmeza y elasticidad cutánea.",
            "Piel más luminosa, uniforme y revitalizada.",
            "Prevención del envejecimiento prematuro.",
            "Sensación inmediata de frescura y bienestar."
          ],
          note:
            "Un ritual de belleza y cuidado integral pensado para devolverle a tu piel su juventud y resplandor natural."
        }
      ]
    },
    en: {
      htmlLang: "en",
      title: "Facials & Aesthetics | Life Skin Care Irapuato",
      description:
        "Professional facials, device-assisted treatments, laser hair removal and antiaging treatments at Life Skin Care Irapuato.",
      reserveNav: "Book",
      selectEs: "Spanish",
      heroPill: "Facial & Aesthetic Care",
      heroTitle: "Facials & Aesthetic Treatments",
      intro:
        "Discover facial and aesthetic treatments designed to cleanse, revitalize and transform your skin with advanced technology, wellbeing and professional care.",
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
      footerTreatments: "Treatments",
      footerReserve: "Book",
      cardHint: "View description",
      consistTitle: "What does it include?",
      benefitsTitle: "Main benefits",
      cards: [
        {
          eyebrow: "Professional Facials",
          title: "Purity, freshness and care for your skin",
          summary:
            "An essential treatment to keep skin healthy, radiant and free of impurities.",
          description:
            "Professional facial cleansing removes dead cells, excess oil and contaminants, preparing the skin to better absorb nutrients and subsequent treatments.",
          consistList: [
            "Deep skin cleansing.",
            "Gentle exfoliation to remove dead cells.",
            "Careful extraction of impurities.",
            "Application of masks and specific products according to skin type.",
            "Intensive hydration and final protection to maintain skin balance."
          ],
          benefitsList: [
            "Cleaner, fresher and more oxygenated skin.",
            "Reduction of blemishes and blackheads.",
            "Improved texture and radiance.",
            "Ideal preparation for other facial treatments.",
            "Immediate feeling of wellbeing and personal care."
          ],
          note:
            "At Life Skin Care Irapuato, the facial cleansing becomes a beauty and wellness ritual in an atmosphere of serenity and professionalism."
        },
        {
          eyebrow: "Device-Assisted Facials",
          title: "Advanced technology for radiant skin",
          summary:
            "Specialized equipment that enhances cleansing, hydration and rejuvenation.",
          description:
            "Device-assisted facials combine professional techniques with cutting-edge technology to offer personalized solutions for each skin type.",
          consistList: [
            "Use of equipment such as radiofrequency, ultrasound, microdermabrasion and high frequency.",
            "Treatments adapted for signs of aging, acne, spots and dehydration.",
            "Application of dermocosmetic products enhanced with technology.",
            "Safe and effective sessions performed by trained professionals."
          ],
          benefitsList: [
            "Skin rejuvenation and firmness.",
            "Reduction of expression lines and wrinkles.",
            "Improved texture, radiance and skin tone.",
            "Effective treatment of blemishes and specific problems.",
            "Visible and long-lasting results."
          ],
          note:
            "The perfect union of science and aesthetics to transform your skin and enhance your natural beauty."
        },
        {
          eyebrow: "Laser Hair Removal",
          title: "Soprano Titanium",
          summary: "Beauty without limits, confidence without pain.",
          summaryExtra: "The most advanced, fast and safe laser hair removal for smooth, radiant skin.",
          description:
            "Soprano Titanium delivers innovation and wellbeing through a comfortable, advanced and safe laser hair removal experience.",
          list: [
            "Technology that cares for your skin, results you'll love.",
            "Pain-free laser hair removal, pure freedom.",
            "Your skin deserves the best."
          ],
          note:
            "Ideal for those seeking smoothness, confidence and aesthetic results with high-precision technology."
        },
        {
          eyebrow: "Antiaging",
          title: "Youth and vitality for your skin",
          summary:
            "A treatment designed to combat visible signs of aging.",
          description:
            "The antiaging treatment helps restore firmness, improve radiance and stimulate cell regeneration through advanced techniques and specialized products.",
          consistList: [
            "Deep cleansing and skin preparation.",
            "Application of antioxidant and firming active ingredients.",
            "Use of specialized equipment to enhance results.",
            "Facial massages that promote circulation and oxygenation.",
            "Intensive hydration and final protection."
          ],
          benefitsList: [
            "Reduction of expression lines and wrinkles.",
            "Improved skin firmness and elasticity.",
            "More radiant, even and revitalized skin.",
            "Prevention of premature aging.",
            "Immediate feeling of freshness and wellbeing."
          ],
          note:
            "A comprehensive beauty and care ritual designed to restore your skin's youth and natural glow."
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

  function renderList(list, values) {
    const items = list ? list.querySelectorAll("li") : [];
    items.forEach((item, index) => {
      if (values[index]) item.textContent = values[index];
    });
  }

  function renderCard(card, cardTranslations, content) {
    if (!card || !cardTranslations) return;

    const eyebrow = card.querySelector(".service-card__eyebrow");
    const title = card.querySelector(".service-card__summary h3");
    const summaryParagraphs = card.querySelectorAll(".service-card__summary p");
    const detailParagraphs = card.querySelectorAll(".service-card__panel p:not(.small)");
    const note = card.querySelector(".service-card__panel .muted.small");
    const lists = card.querySelectorAll(".checklist");
    const hintLabel = card.querySelector(".service-card__hint span");

    if (eyebrow) eyebrow.textContent = cardTranslations.eyebrow;
    if (title) title.textContent = cardTranslations.title;
    if (summaryParagraphs[0]) summaryParagraphs[0].textContent = cardTranslations.summary;
    if (cardTranslations.summaryExtra && summaryParagraphs[1])
      summaryParagraphs[1].textContent = cardTranslations.summaryExtra;
    if (hintLabel) hintLabel.textContent = content.cardHint;

    if (detailParagraphs[0]) detailParagraphs[0].textContent = cardTranslations.description;

    if (lists.length >= 2) {
      if (detailParagraphs[1])
        detailParagraphs[1].innerHTML = `<strong>${content.consistTitle}</strong>`;
      if (detailParagraphs[2])
        detailParagraphs[2].innerHTML = `<strong>${content.benefitsTitle}</strong>`;
      renderList(lists[0], cardTranslations.consistList || []);
      renderList(lists[1], cardTranslations.benefitsList || []);
    } else {
      renderList(lists[0], cardTranslations.list || []);
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

    setText("#faciales .section__head h2", content.sectionTitle);
    setText("#faciales .section__head .muted", content.sectionText);
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

    if (footerLinks[0]) footerLinks[0].textContent = content.footerTreatments;
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

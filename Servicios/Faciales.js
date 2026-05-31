document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      htmlLang: "es",
      title: "Faciales y Estética | Life Skin Care Irapuato",
      description:
        "Limpiezas faciales, faciales con aparatología, tratamientos antiaging, para acné, despigmentante e hidratación en Life Skin Care Irapuato.",
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
          price: "Precio desde $450.00 MXN",
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
          price: "Precio desde $500.00 MXN",
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
          eyebrow: "Antiaging",
          title: "Juventud y vitalidad para tu piel",
          summary:
            "Tratamiento diseñado para combatir signos visibles del envejecimiento.",
          price: "Precio desde $2,300.00 MXN",
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
        },
        {
          eyebrow: "Tratamiento Facial para Acné",
          title: "Purifica y renueva tu piel",
          summary: "Diseñado para pieles con imperfecciones, brotes y exceso de grasa.",
          price: "Precio desde $500.00 MXN",
          description:
            "Purifica y renueva tu piel con nuestro tratamiento facial especializado para acné. Diseñado para pieles con imperfecciones, brotes y exceso de grasa, este procedimiento ayuda a limpiar profundamente los poros, controlar la producción de sebo y disminuir la inflamación causada por el acné. Ideal para adolescentes y adultos que buscan una piel más limpia, uniforme y saludable.",
          list: [
            "Limpieza profunda y desintoxicación facial.",
            "Ayuda a reducir puntos negros y brotes activos.",
            "Controla el exceso de grasa y brillo facial.",
            "Favorece la regeneración y recuperación de la piel."
          ],
          note:
            "En nuestro spa utilizamos productos especializados y técnicas suaves que ayudan a mejorar la apariencia de la piel sin irritarla, brindando una experiencia relajante y efectiva."
        },
        {
          eyebrow: "Tratamiento Facial Despigmentante",
          title: "Luminosidad y uniformidad para tu piel",
          summary: "Reduce manchas y mejora el tono y textura de la piel.",
          description:
            "Devuelve luminosidad y uniformidad a tu piel con nuestro tratamiento despigmentante facial. Este procedimiento está diseñado para disminuir manchas ocasionadas por el sol, acné, edad o cambios hormonales, ayudando a mejorar el tono y textura de la piel. Ideal para quienes desean una piel más uniforme, radiante y rejuvenecida.",
          list: [
            "Ayuda a reducir manchas y marcas visibles.",
            "Unifica el tono de la piel de manera progresiva.",
            "Aporta luminosidad y frescura al rostro.",
            "Favorece una apariencia más joven y saludable."
          ],
          note:
            "Cada sesión combina ingredientes despigmentantes y técnicas profesionales que ayudan a revitalizar la piel mientras disfrutas de un momento de relajación y bienestar."
        },
        {
          eyebrow: "Tratamiento Facial de Hidratación",
          title: "Suavidad, elasticidad y frescura",
          summary: "Hidratación profunda para pieles secas, deshidratadas o apagadas.",
          price: "Precio desde $500.00 MXN",
          description:
            "Recupera la suavidad, elasticidad y frescura de tu piel con nuestro tratamiento facial de hidratación profunda. Diseñado para pieles secas, deshidratadas o apagadas, este facial ayuda a restaurar la humedad natural del rostro y proteger la barrera cutánea. Ideal para quienes buscan una piel más luminosa, suave y revitalizada.",
          list: [
            "Hidratación profunda y nutrición facial.",
            "Mejora la elasticidad y suavidad de la piel.",
            "Ayuda a reducir la sensación de resequedad y tirantez.",
            "Aporta luminosidad y apariencia saludable al rostro."
          ],
          note:
            "En cada sesión utilizamos productos hidratantes de alta calidad y técnicas relajantes que brindan bienestar mientras tu piel recupera su equilibrio natural."
        }
      ]
    },
    en: {
      htmlLang: "en",
      title: "Facials & Aesthetics | Life Skin Care Irapuato",
      description:
        "Professional facials, device-assisted treatments, antiaging, acne, depigmentation and hydration treatments at Life Skin Care Irapuato.",
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
          price: "Price from $450.00 MXN",
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
          price: "Price from $500.00 MXN",
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
          eyebrow: "Antiaging",
          title: "Youth and vitality for your skin",
          summary:
            "A treatment designed to combat visible signs of aging.",
          price: "Price from $2,300.00 MXN",
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
        },
        {
          eyebrow: "Facial Treatment for Acne",
          title: "Purify and renew your skin",
          summary: "Designed for skin with blemishes, breakouts and excess oil.",
          price: "Price from $500.00 MXN",
          description:
            "Purify and renew your skin with our specialized facial treatment for acne. Designed for skin with blemishes, breakouts and excess oil, this procedure helps deeply cleanse pores, control sebum production and reduce inflammation caused by acne. Ideal for teens and adults looking for cleaner, more even and healthier skin.",
          list: [
            "Deep cleansing and facial detoxification.",
            "Helps reduce blackheads and active breakouts.",
            "Controls excess oil and facial shine.",
            "Promotes skin regeneration and recovery."
          ],
          note:
            "In our spa we use specialized products and gentle techniques that help improve skin appearance without irritating it, providing a relaxing and effective experience."
        },
        {
          eyebrow: "Depigmentation Facial Treatment",
          title: "Radiance and evenness for your skin",
          summary: "Reduces spots and improves skin tone and texture.",
          description:
            "Restore radiance and evenness to your skin with our facial depigmentation treatment. This procedure is designed to diminish spots caused by sun exposure, acne, age or hormonal changes, helping to improve skin tone and texture. Ideal for those who want more uniform, radiant and rejuvenated skin.",
          list: [
            "Helps reduce visible spots and marks.",
            "Progressively evens out skin tone.",
            "Brings radiance and freshness to the face.",
            "Promotes a younger and healthier appearance."
          ],
          note:
            "Each session combines depigmenting ingredients and professional techniques that help revitalize skin while you enjoy a moment of relaxation and wellbeing."
        },
        {
          eyebrow: "Facial Hydration Treatment",
          title: "Softness, elasticity and freshness",
          summary: "Deep hydration for dry, dehydrated or dull skin.",
          price: "Price from $500.00 MXN",
          description:
            "Restore the softness, elasticity and freshness of your skin with our deep facial hydration treatment. Designed for dry, dehydrated or dull skin, this facial helps restore the natural moisture of the face and protect the skin barrier. Ideal for those seeking more luminous, soft and revitalized skin.",
          list: [
            "Deep hydration and facial nourishment.",
            "Improves skin elasticity and softness.",
            "Helps reduce the feeling of dryness and tightness.",
            "Brings radiance and a healthy appearance to the face."
          ],
          note:
            "In each session we use high-quality moisturizing products and relaxing techniques that provide wellbeing while your skin recovers its natural balance."
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
    if (cardTranslations.price && summaryParagraphs[1])
      summaryParagraphs[1].textContent = cardTranslations.price;
    if (cardTranslations.summaryExtra && summaryParagraphs[2])
      summaryParagraphs[2].textContent = cardTranslations.summaryExtra;
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

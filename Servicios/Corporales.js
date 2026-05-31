document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      htmlLang: "es",
      title: "Tratamientos Corporales | Life Skin Care Irapuato",
      description:
        "Tratamientos corporales reductivos, HIFEM, anticelulíticos y postquirúrgicos en Life Skin Care Irapuato.",
      reserveNav: "Reserva",
      selectEs: "Español",
      heroPill: "Bienestar corporal",
      heroTitle: "Reductivos Corporales",
      intro:
        "Descubre nuestros tratamientos corporales en Irapuato, diseñados para moldear tu figura, reafirmar tu piel, apoyar tu recuperación y renovar tu bienestar.",
      reserveUs: "Reserva con nosotros",
      backServices: "Volver a servicios",
      sectionTitle: "Tratamientos Corporales",
      sectionText: "Selecciona una tarjeta para desplegar su contenido completo.",
      contactTitle: "Reserva con nosotros",
      contactText:
        "Para programar una cita, contáctanos directamente y confirma disponibilidad.",
      contactHint: 
        "Incluye el tratamiento, la fecha y la hora que prefieres al enviar tu mensaje.",
      footerText: "Life Skin Care Irapuato. Todos los derechos reservados.",
      footerMassages: "Corporales",
      footerReserve: "Reserva",
      cardHint: "Ver descripción",
      consistTitle: "¿En qué consiste?",
      benefitsTitle: "Beneficios principales",
      cards: [
        {
          eyebrow: "Reductivos Corporales",
          title: "Moldea tu figura y revitaliza tu cuerpo",
          summary:
            "Tratamiento integral para reducir medidas, mejorar la textura de la piel y favorecer la eliminación de toxinas.",
          price: "Precio desde $3,000.00 MXN",
          description:
            "Este tratamiento combina técnicas manuales y aparatología avanzada para lograr una reducción efectiva de medidas, mejorar la textura de la piel y favorecer la eliminación de toxinas. En Life Skin Care Irapuato lo ofrecemos como una experiencia completa que une tradición, innovación y bienestar.",
          consistList: [
            "Maderoterapia: masaje con instrumentos de madera que estimula la circulación y ayuda a moldear la silueta.",
            "Mascarillas corporales: aplicación de activos naturales que nutren y tonifican la piel.",
            "Envolturas: técnicas que favorecen la sudoración y eliminación de líquidos retenidos.",
            "Aparatología especializada: equipos que potencian los resultados, como cavitación, radiofrecuencia o presoterapia."
          ],
          benefitsList: [
            "Reducción de medidas y mejora del contorno corporal.",
            "Estimulación del metabolismo y eliminación de toxinas.",
            "Piel más firme, suave y tonificada.",
            "Sensación de ligereza y bienestar integral."
          ],
          note:
            "En Life Skin Care Irapuato, el tratamiento reductivo integral se convierte en un ritual de belleza y salud, diseñado para transformar tu cuerpo y renovar tu energía."
        },
        {
          eyebrow: "HIFEM",
          title: "Tonificación avanzada, aumento de glúteo y firmeza corporal",
          summary:
            "Energía electromagnética focalizada para fortalecer músculo, reducir grasa localizada y mejorar la firmeza.",
          description:
            "El tratamiento con HIFEM (High-Intensity Focused Electromagnetic) utiliza energía electromagnética focalizada para provocar contracciones musculares intensas y profundas, imposibles de lograr con ejercicio convencional. Estas contracciones estimulan el crecimiento y fortalecimiento muscular, favorecen la reducción de grasa localizada y potencian la firmeza de los tejidos.",
          consistList: [
            "Aplicación de ondas electromagnéticas en zonas específicas como abdomen, glúteos, brazos o piernas.",
            "Sesiones cómodas y no invasivas, realizadas en cabina especializada.",
            "Contracciones musculares equivalentes a miles de repeticiones en pocos minutos.",
            "Procedimiento seguro y eficaz, sin tiempo de recuperación."
          ],
          benefitsList: [
            "Aumento y tonificación de glúteos, logrando mayor volumen y firmeza.",
            "Reducción de grasa localizada en abdomen, brazos y muslos.",
            "Mejora de la definición y fuerza muscular.",
            "Tratamiento reafirmante que mejora la elasticidad y firmeza de la piel.",
            "Resultados visibles desde las primeras sesiones."
          ],
          note:
            "En Life Skin Care Irapuato, el tratamiento HIFEM se ofrece como una alternativa innovadora para quienes buscan esculpir su figura, reafirmar su cuerpo y potenciar su energía física con tecnología de última generación."
        },
        {
          eyebrow: "Anticelulíticos",
          title: "Suavidad, firmeza y armonía corporal",
          summary:
            "Tratamientos diseñados para reducir la apariencia de la celulitis y mejorar la textura de la piel.",
          description:
            "Los tratamientos anticelulíticos están diseñados para reducir la apariencia de la celulitis, mejorar la textura de la piel y favorecer la circulación. En Life Skin Care Irapuato combinamos técnicas manuales, aparatología y productos especializados para lograr resultados visibles y duraderos.",
          consistList: [
            "Masajes reductivos y drenaje linfático para estimular la circulación.",
            "Uso de aparatología avanzada como radiofrecuencia, cavitación, presoterapia o maderoterapia.",
            "Aplicación de geles y mascarillas con activos reafirmantes y lipolíticos.",
            "Protocolos personalizados según el tipo y grado de celulitis."
          ],
          benefitsList: [
            "Reducción de la apariencia de la celulitis.",
            "Piel más firme, suave y uniforme.",
            "Estimulación del metabolismo y eliminación de toxinas.",
            "Mejora de la circulación y oxigenación de los tejidos.",
            "Sensación de ligereza y bienestar corporal."
          ],
          note:
            "En Life Skin Care Irapuato, los tratamientos anticelulíticos se convierten en una experiencia integral que combina ciencia, estética y bienestar, ayudándote a recuperar la confianza en tu cuerpo."
        },
        {
          eyebrow: "Postquirúrgicos",
          title: "Recuperación segura y bienestar integral",
          summary:
            "Tratamientos especializados para acompañar la recuperación después de una cirugía estética o médica.",
          price: "Precio desde $5,000.00 MXN",
          description:
            "Los tratamientos postquirúrgicos están diseñados para acompañar el proceso de recuperación después de una cirugía estética o médica. En Life Skin Care Irapuato aplicamos técnicas especializadas y en base a las indicaciones médicas que favorecen la pronta recuperación, la cicatrización, reducen la inflamación y ayudan al cuerpo a recuperar su equilibrio de manera más rápida y cómoda.",
          consistList: [
            "Drenaje linfático manual: estimula la eliminación de líquidos retenidos y toxinas.",
            "Masajes suaves y terapéuticos: favorecen la circulación y reducen la inflamación.",
            "Aparatología especializada: equipos como ultrasonido clínico, presoterapia o radiofrecuencia para acelerar la recuperación.",
            "Cuidados personalizados: protocolos adaptados al tipo de cirugía y necesidades individuales."
          ],
          benefitsList: [
            "Reducción de la inflamación y los hematomas.",
            "Mejora de la cicatrización y regeneración de tejidos.",
            "Disminución del dolor y sensación de incomodidad.",
            "Recuperación más rápida y segura.",
            "Prevención de fibrosis.",
            "Bienestar físico y emocional durante el proceso postquirúrgico."
          ],
          note:
            "En Life Skin Care Irapuato, los tratamientos postquirúrgicos se realizan con profesionalismo y cuidado, ofreciendo un acompañamiento integral que apoya tu recuperación y realza los resultados de tu cirugía."
        }
      ]
    },

    en: {
      htmlLang: "en",
      title: "Body Treatments | Life Skin Care Irapuato",
      description:
        "Body contouring, HIFEM, anti-cellulite and post-surgical treatments at Life Skin Care Irapuato.",
      reserveNav: "Book",
      selectEs: "Spanish",
      heroPill: "Body Wellness",
      heroTitle: "Body Contouring Treatments",
      intro:
        "Discover our body treatments in Irapuato, designed to sculpt your figure, firm your skin, support your recovery and renew your wellbeing.",
      reserveUs: "Book with us",
      backServices: "Back to services",
      sectionTitle: "Body Treatments",
      sectionText: "Select a card to view the full description of each treatment.",
      contactTitle: "Book with us",
      contactText:
        "To schedule an appointment, contact us directly and confirm availability.",
      contactHint:
        "Include the treatment, preferred date and preferred time when sending your message.",
      footerText: "Life Skin Care Irapuato. All rights reserved.",
      footerMassages: "Body Treatments",
      footerReserve: "Book",
      cardHint: "View description",
      consistTitle: "What does it include?",
      benefitsTitle: "Main benefits",
      cards: [
        {
          eyebrow: "Body Contouring Treatments",
          title: "Sculpt your figure and revitalize your body",
          price: "Price from $3,000.00 MXN",
          summary:
            "A comprehensive treatment to reduce measurements, improve skin texture and support toxin elimination.",
          description:
            "This treatment combines manual techniques and advanced equipment to achieve effective measurement reduction, improve skin texture and support toxin elimination. At Life Skin Care Irapuato, we offer it as a complete experience that brings together tradition, innovation and wellbeing.",
          consistList: [
            "Wood therapy: massage with wooden tools that stimulates circulation and helps sculpt the silhouette.",
            "Body masks: application of natural active ingredients that nourish and tone the skin.",
            "Body wraps: techniques that promote sweating and the elimination of retained fluids.",
            "Specialized equipment: devices that enhance results, such as cavitation, radiofrequency or pressotherapy."
          ],
          benefitsList: [
            "Reduction of measurements and improved body contour.",
            "Metabolism stimulation and toxin elimination.",
            "Firmer, smoother and more toned skin.",
            "A feeling of lightness and overall wellbeing."
          ],
          note:
            "At Life Skin Care Irapuato, the comprehensive body contouring treatment becomes a beauty and wellness ritual designed to transform your body and renew your energy."
        },
        {
          eyebrow: "HIFEM",
          title: "Advanced toning, glute enhancement and body firmness",
          summary:
            "Focused electromagnetic energy to strengthen muscle, reduce localized fat and improve firmness.",
          description:
            "HIFEM (High-Intensity Focused Electromagnetic) treatment uses focused electromagnetic energy to trigger intense and deep muscle contractions that are impossible to achieve with conventional exercise. These contractions stimulate muscle growth and strengthening, support localized fat reduction and improve tissue firmness.",
          consistList: [
            "Application of electromagnetic waves on specific areas such as the abdomen, glutes, arms or legs.",
            "Comfortable, non-invasive sessions performed in a specialized treatment room.",
            "Muscle contractions equivalent to thousands of repetitions in just a few minutes.",
            "A safe and effective procedure with no recovery time."
          ],
          benefitsList: [
            "Glute enhancement and toning for greater volume and firmness.",
            "Reduction of localized fat in the abdomen, arms and thighs.",
            "Improved muscle definition and strength.",
            "Firming treatment that improves skin elasticity and firmness.",
            "Visible results from the first sessions."
          ],
          note:
            "At Life Skin Care Irapuato, HIFEM is offered as an innovative alternative for those seeking to sculpt their figure, firm their body and boost their physical energy with latest-generation technology."
        },
        {
          eyebrow: "Anti-Cellulite Treatments",
          title: "Smoothness, firmness and body harmony",
          summary:
            "Treatments designed to reduce the appearance of cellulite and improve skin texture.",
          description:
            "Anti-cellulite treatments are designed to reduce the appearance of cellulite, improve skin texture and support circulation. At Life Skin Care Irapuato, we combine manual techniques, equipment and specialized products to achieve visible and long-lasting results.",
          consistList: [
            "Body contouring massages and lymphatic drainage to stimulate circulation.",
            "Use of advanced equipment such as radiofrequency, cavitation, pressotherapy or wood therapy.",
            "Application of gels and masks with firming and lipolytic active ingredients.",
            "Personalized protocols according to the type and degree of cellulite."
          ],
          benefitsList: [
            "Reduction in the appearance of cellulite.",
            "Firmer, smoother and more even-looking skin.",
            "Metabolism stimulation and toxin elimination.",
            "Improved circulation and tissue oxygenation.",
            "A feeling of lightness and body wellbeing."
          ],
          note:
            "At Life Skin Care Irapuato, anti-cellulite treatments become a complete experience that combines science, aesthetics and wellbeing, helping you regain confidence in your body."
        },
        {
          eyebrow: "Post-Surgical Treatments",
          title: "Safe recovery and complete wellbeing",
          summary:
            "Specialized treatments to support recovery after aesthetic or medical surgery.",
          price: "Price from $5,000.00 MXN",
          description:
            "Post-surgical treatments are designed to support the recovery process after aesthetic or medical surgery. At Life Skin Care Irapuato, we apply specialized techniques based on medical indications to support faster recovery, promote healing, reduce inflammation and help the body regain balance in a quicker and more comfortable way.",
          consistList: [
            "Manual lymphatic drainage: stimulates the elimination of retained fluids and toxins.",
            "Gentle therapeutic massages: support circulation and reduce inflammation.",
            "Specialized equipment: devices such as clinical ultrasound, pressotherapy or radiofrequency to accelerate recovery.",
            "Personalized care: protocols adapted to the type of surgery and individual needs."
          ],
          benefitsList: [
            "Reduction of inflammation and bruising.",
            "Improved healing and tissue regeneration.",
            "Decreased pain and discomfort.",
            "Faster and safer recovery.",
            "Fibrosis prevention.",
            "Physical and emotional wellbeing throughout the post-surgical process."
          ],
          note:
            "At Life Skin Care Irapuato, post-surgical treatments are performed with professionalism and care, offering comprehensive support that helps your recovery and enhances the results of your surgery."
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

    const summaryParagraphs = card.querySelectorAll(".service-card__summary p");
    const detailParagraphs = card.querySelectorAll(".service-card__panel p");
    const lists = card.querySelectorAll(".checklist");
    const hintLabel = card.querySelector(".service-card__hint span");
    const eyebrow = card.querySelector(".service-card__eyebrow");
    const title = card.querySelector(".service-card__summary h3");
    const note = card.querySelector(".service-card__panel .muted.small");

    if (eyebrow) eyebrow.textContent = cardTranslations.eyebrow;
    if (title) title.textContent = cardTranslations.title;
    if (summaryParagraphs[0]) summaryParagraphs[0].textContent = cardTranslations.summary;
    if (cardTranslations.price && summaryParagraphs[1])
      summaryParagraphs[1].textContent = cardTranslations.price;
    if (hintLabel) hintLabel.textContent = content.cardHint;

    if (detailParagraphs[0]) detailParagraphs[0].textContent = cardTranslations.description;
    if (detailParagraphs[1]) detailParagraphs[1].innerHTML = `<strong>${content.consistTitle}</strong>`;
    if (detailParagraphs[2]) detailParagraphs[2].innerHTML = `<strong>${content.benefitsTitle}</strong>`;

    renderList(lists[0], cardTranslations.consistList);
    renderList(lists[1], cardTranslations.benefitsList);

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

    setText("#corporales .section__head h2", content.sectionTitle);
    setText("#corporales .section__head .muted", content.sectionText);


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

    if (footerLinks[0]) footerLinks[0].textContent = content.footerMassages;
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

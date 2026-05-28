document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      htmlLang: "es",
      title: "Cursos y Capacitaciones | Life Skin Care Irapuato",
      description:
        "Cursos y capacitaciones profesionales en masaje, bienestar y estética en Life Skin Care Irapuato.",
      reserveNav: "Reserva",
      selectEs: "Español",
      heroPill: "Cursos y Capacitaciones",
      heroTitle: "Formación Profesional",
      intro:
        "Descubre nuestros cursos y talleres profesionales en masaje, bienestar y estética, diseñados para desarrollar habilidades prácticas con enfoque humano, técnico y especializado.",
      reserveUs: "Reserva con nosotros",
      backServices: "Volver a servicios",
      sectionTitle: "Cursos y Capacitaciones",
      sectionText: "Selecciona una tarjeta para conocer el contenido completo de cada curso o taller.",
      contactTitle: "Reserva con nosotros",
      contactText:
        "Para programar una cita, contáctanos directamente y confirma disponibilidad.",
      contactHint:
        "Incluye el curso o taller de tu interés, la fecha y la hora que prefieres al enviar tu mensaje.",
      footerText: "Life Skin Care Irapuato. Todos los derechos reservados.",
      footerLabel: "Cursos",
      footerReserve: "Reserva",
      cardHint: "Ver descripción",
      consistTitle: "¿Qué aprenderás?",
      benefitsTitle: "Beneficios del curso",
      cards: [
        {
          eyebrow: "Masaje Profesional",
          title: "Formación integral para terapeutas especializados",
          summary:
            "En Life Skin Care Irapuato ofrecemos capacitaciones en el área de masaje profesional diseñado para formar terapeutas altamente capacitados.",
          description:
            "En Life Skin Care Irapuato ofrecemos capacitaciones en el área de masaje profesional diseñado para formar terapeutas altamente capacitados, con conocimientos en técnicas tradicionales y complementarias aplicadas a distintos padecimientos. Nuestro programa combina teoría y práctica para garantizar un aprendizaje completo y de calidad.",
          consistList: [
            "Masaje deportivo y terapéutico con enfoque profesional.",
            "Uso de ventosas y moxas.",
            "Vendaje neuromuscular aplicado a lesiones y condiciones específicas.",
            "Masaje visceral, que favorece la salud digestiva.",
            "Masaje de drenaje linfático, ideal para procesos de recuperación y bienestar integral."
          ],
          benefitsList: [
            "Formación práctica con técnicas modernas y tradicionales.",
            "Conocimiento aplicado a distintos padecimientos y necesidades del cliente.",
            "Certificación que respalda tu preparación profesional.",
            "Desarrollo de habilidades para trabajar en spas, clínicas y proyectos independientes."
          ],
          note:
            "Este curso está pensado para quienes desean convertirse en terapeutas profesionales, con una visión integral del bienestar y la salud, combinando técnicas manuales y complementarias con un enfoque humano y especializado."
        },
        {
          eyebrow: "Drenaje Linfático",
          title: "Formación profesional en bienestar y estética",
          summary:
            "En Life Skin Care Irapuato ofrecemos un curso especializado en drenaje linfático manual, diseñado para capacitar terapeutas en una técnica fundamental.",
          description:
            "En Life Skin Care Irapuato ofrecemos un curso especializado en drenaje linfático manual, diseñado para capacitar terapeutas en una técnica fundamental dentro del mundo de la estética y la salud. Este programa combina teoría y práctica para que los participantes dominen la técnica con precisión y seguridad.",
          consistList: [
            "Principios del sistema linfático y su importancia en la salud.",
            "Técnicas manuales de drenaje linfático aplicada al cuerpo.",
            "Aplicación práctica en casos reales, con supervisión profesional.",
            "Cuidados posteriores y recomendaciones para los clientes."
          ],
          benefitsList: [
            "Formación completa en una técnica altamente demandada en spas y clínicas.",
            "Certificación que respalda tu preparación profesional.",
            "Desarrollo de habilidades para mejorar la salud y estética de los clientes.",
            "Conocimiento práctico que te permitirá ofrecer un servicio seguro y efectivo."
          ],
          note:
            "Este curso está pensado para quienes desean convertirse en terapeutas especializados, ampliando sus conocimientos en técnicas de bienestar y estética con un enfoque integral."
        },
        {
          eyebrow: "Masaje Relajante",
          title: "Adéntrate al mundo maravilloso del masaje",
          summary:
            "En Life Skin Care Irapuato ofrecemos un taller de masaje relajante ideal para principiantes que desean adquirir conocimientos básicos y prácticos.",
          description:
            "En Life Skin Care Irapuato ofrecemos un taller de masaje relajante ideal para principiantes que desean adquirir conocimientos básicos y prácticos en esta técnica. El programa está diseñado para enseñar de manera clara y profesional los fundamentos del masaje relajante, sus beneficios, indicaciones y contraindicaciones, así como la correcta aplicación de la técnica.",
          consistList: [
            "Principios y objetivos del masaje relajante.",
            "Beneficios principales: reducción del estrés, mejora de la circulación y bienestar integral.",
            "Indicaciones y contraindicaciones: cuándo aplicar el masaje y en qué casos evitarlo.",
            "Técnica de masaje relajante: movimientos, ritmo y presión adecuados.",
            "Práctica guiada para desarrollar seguridad y confianza en la aplicación."
          ],
          benefitsList: [
            "Formación accesible y clara, ideal para quienes inician en el mundo del masaje.",
            "Conocimiento teórico y práctico para aplicar de forma segura.",
            "Certificación que respalda tu aprendizaje.",
            "Desarrollo de habilidades que pueden aplicarse en el ámbito personal o profesional."
          ],
          note:
            "Este taller está pensado para quienes desean iniciarse en el masaje relajante con bases sólidas, aprendiendo de manera práctica y profesional en un ambiente de bienestar y cuidado."
        },
        {
          eyebrow: "Lomi Lomi Nu",
          title: "Aprende el arte del masaje hawaiano",
          summary:
            "En Life Skin Care Irapuato ofrecemos un taller de Lomi Lomi Nu, una técnica ancestral originaria de Hawái caracterizada por movimientos largos y fluidos.",
          description:
            "En Life Skin Care Irapuato ofrecemos un taller de Lomi Lomi Nu, una técnica ancestral originaria de Hawái que se caracteriza por movimientos largos, fluidos y envolventes que buscan armonizar cuerpo, mente y espíritu. Este taller está diseñado para quienes desean iniciarse en una técnica profunda y transformadora, ideal tanto para principiantes como para terapeutas que buscan ampliar sus conocimientos.",
          consistList: [
            "Historia y filosofía del masaje Lomi Lomi Nu.",
            "Beneficios físicos y emocionales de la técnica.",
            "Indicaciones y contraindicaciones para su aplicación.",
            "Movimientos característicos: largos, rítmicos y envolventes.",
            "Práctica guiada para desarrollar sensibilidad y fluidez en la técnica."
          ],
          benefitsList: [
            "Formación en una técnica única y altamente valorada en el mundo del bienestar.",
            "Certificación que respalda tu aprendizaje profesional.",
            "Desarrollo de habilidades para ofrecer un masaje relajante y profundo.",
            "Experiencia enriquecedora que conecta tradición y modernidad."
          ],
          note:
            "Este taller está pensado para quienes desean aprender una técnica de masaje que no solo relaja el cuerpo, sino que también equilibra la energía y promueve la conexión interior."
        },
        {
          eyebrow: "Maderoterapia",
          title: "Aprende la técnica reductiva y reafirmante más demandada",
          summary:
            "En Life Skin Care Irapuato ofrecemos un taller de maderoterapia, diseñado para capacitar a terapeutas y principiantes en el uso de instrumentos de madera.",
          description:
            "En Life Skin Care Irapuato ofrecemos un taller de maderoterapia, diseñado para capacitar a terapeutas y principiantes en el uso de instrumentos de madera que ayudan a moldear la silueta, reducir medidas y mejorar la firmeza de la piel. Este curso combina teoría y práctica para dominar la técnica con seguridad y profesionalismo.",
          consistList: [
            "Principios de la maderoterapia y su origen.",
            "Beneficios estéticos y terapéuticos de la técnica.",
            "Indicaciones y contraindicaciones para su aplicación.",
            "Uso correcto de los instrumentos de madera en diferentes zonas del cuerpo.",
            "Protocolos reductivos, anticelulíticos y reafirmantes.",
            "Práctica guiada para adquirir destreza y confianza."
          ],
          benefitsList: [
            "Formación en una técnica altamente demandada en spas y centros de estética.",
            "Certificación que respalda tu preparación profesional.",
            "Desarrollo de habilidades para ofrecer tratamientos reductivos y reafirmantes.",
            "Conocimiento práctico que te permitirá diferenciarte en el mercado del bienestar."
          ],
          note:
            "Este taller está pensado para quienes desean ampliar sus conocimientos en terapias corporales, aprendiendo una técnica efectiva y natural que combina tradición y resultados visibles."
        },
        {
          eyebrow: "Ayurveda",
          title: "Formación en la técnica ancestral de la India",
          summary:
            "En Life Skin Care Irapuato ofrecemos un curso de masaje ayurveda, diseñado para capacitar terapeutas y principiantes en una técnica holística.",
          description:
            "En Life Skin Care Irapuato ofrecemos un curso de masaje ayurveda, diseñado para capacitar terapeutas y principiantes en una técnica holística que busca equilibrar cuerpo, mente y espíritu. Este programa combina teoría y práctica para que los participantes dominen el uso de aceites tibios y movimientos envolventes característicos de la tradición ayurvédica.",
          consistList: [
            "Principios de la medicina ayurvédica y su relación con el masaje.",
            "Beneficios físicos, energéticos y emocionales del masaje ayurveda.",
            "Indicaciones y contraindicaciones para su aplicación.",
            "Técnicas de masaje con aceites tibios y movimientos envolventes.",
            "Estimulación de puntos energéticos para equilibrar los doshas.",
            "Práctica guiada para desarrollar sensibilidad y fluidez en la técnica."
          ],
          benefitsList: [
            "Formación en una técnica ancestral con alta demanda en spas y centros holísticos.",
            "Certificación que respalda tu preparación profesional.",
            "Desarrollo de habilidades para ofrecer un masaje relajante y energético.",
            "Conocimiento práctico que te permitirá diferenciarte en el mundo del bienestar."
          ],
          note:
            "Este curso está pensado para quienes desean aprender una técnica que no solo relaja el cuerpo, sino que también equilibra la energía y promueve la conexión interior."
        }
      ]
    },
    en: {
      htmlLang: "en",
      title: "Courses & Training | Life Skin Care Irapuato",
      description:
        "Professional courses and workshops in massage, wellness and aesthetics at Life Skin Care Irapuato.",
      reserveNav: "Book",
      selectEs: "Spanish",
      heroPill: "Courses & Training",
      heroTitle: "Professional Training",
      intro:
        "Discover our professional courses and workshops in massage, wellness and aesthetics, designed to build practical skills with a human, technical and specialized approach.",
      reserveUs: "Book with us",
      backServices: "Back to services",
      sectionTitle: "Courses & Workshops",
      sectionText: "Select a card to view the full content of each course or workshop.",
      contactTitle: "Book with us",
      contactText:
        "To schedule an appointment, contact us directly and confirm availability.",
      contactHint:
        "Include the course or workshop you're interested in, your preferred date and time when sending your message.",
      footerText: "Life Skin Care Irapuato. All rights reserved.",
      footerLabel: "Courses",
      footerReserve: "Book",
      cardHint: "View description",
      consistTitle: "What you'll learn",
      benefitsTitle: "Course benefits",
      cards: [
        {
          eyebrow: "Professional Massage",
          title: "Comprehensive training for specialized therapists",
          summary:
            "Life Skin Care Irapuato offers professional massage training designed to develop highly skilled therapists.",
          description:
            "Life Skin Care Irapuato offers professional massage training designed to develop highly skilled therapists with knowledge of traditional and complementary techniques applied to various conditions. Our program combines theory and practice to ensure complete, high-quality learning.",
          consistList: [
            "Sports and therapeutic massage with a professional focus.",
            "Use of cupping and moxa.",
            "Neuromuscular taping applied to injuries and specific conditions.",
            "Visceral massage to support digestive health.",
            "Lymphatic drainage massage, ideal for recovery and overall wellbeing."
          ],
          benefitsList: [
            "Hands-on training with modern and traditional techniques.",
            "Applied knowledge for various client conditions and needs.",
            "Certification that validates your professional preparation.",
            "Skills to work in spas, clinics and independent projects."
          ],
          note:
            "This course is designed for those who want to become professional therapists with a comprehensive view of wellness and health, combining manual and complementary techniques with a human and specialized approach."
        },
        {
          eyebrow: "Lymphatic Drainage",
          title: "Professional training in wellness and aesthetics",
          summary:
            "Life Skin Care Irapuato offers a specialized course in manual lymphatic drainage, designed to train therapists in a fundamental technique.",
          description:
            "Life Skin Care Irapuato offers a specialized course in manual lymphatic drainage, designed to train therapists in a fundamental technique within the world of aesthetics and health. This program combines theory and practice so that participants can master the technique with precision and confidence.",
          consistList: [
            "Principles of the lymphatic system and its importance for health.",
            "Manual lymphatic drainage techniques applied to the body.",
            "Practical application in real cases, with professional supervision.",
            "Aftercare and recommendations for clients."
          ],
          benefitsList: [
            "Complete training in a highly sought-after technique in spas and clinics.",
            "Certification that validates your professional preparation.",
            "Skills to improve clients' health and aesthetics.",
            "Practical knowledge to offer a safe and effective service."
          ],
          note:
            "This course is designed for those who want to become specialized therapists, expanding their knowledge in wellness and aesthetic techniques with a comprehensive approach."
        },
        {
          eyebrow: "Relaxing Massage",
          title: "Enter the wonderful world of massage",
          summary:
            "Life Skin Care Irapuato offers a relaxing massage workshop ideal for beginners looking to gain basic practical knowledge.",
          description:
            "Life Skin Care Irapuato offers a relaxing massage workshop ideal for beginners who want to acquire basic and practical knowledge of this technique. The program is designed to teach the fundamentals of relaxing massage in a clear and professional way, including its benefits, indications, contraindications and correct application.",
          consistList: [
            "Principles and objectives of relaxing massage.",
            "Key benefits: stress reduction, improved circulation and overall wellbeing.",
            "Indications and contraindications: when to apply the massage and when to avoid it.",
            "Relaxing massage technique: appropriate movements, rhythm and pressure.",
            "Guided practice to build confidence and skill in application."
          ],
          benefitsList: [
            "Accessible and clear training, ideal for those starting out in massage.",
            "Theoretical and practical knowledge for safe application.",
            "Certification that validates your learning.",
            "Skills applicable in personal or professional settings."
          ],
          note:
            "This workshop is designed for those who want to learn relaxing massage on solid foundations, gaining practical and professional experience in a wellness-focused environment."
        },
        {
          eyebrow: "Lomi Lomi Nu",
          title: "Learn the art of Hawaiian massage",
          summary:
            "Life Skin Care Irapuato offers a Lomi Lomi Nu workshop, an ancestral Hawaiian technique known for its long, flowing and enveloping movements.",
          description:
            "Life Skin Care Irapuato offers a Lomi Lomi Nu workshop, an ancestral Hawaiian technique characterized by long, flowing and enveloping movements that seek to harmonize body, mind and spirit. This workshop is designed for those who wish to learn a deep and transformative technique, ideal for both beginners and therapists looking to expand their knowledge.",
          consistList: [
            "History and philosophy of Lomi Lomi Nu massage.",
            "Physical and emotional benefits of the technique.",
            "Indications and contraindications for its application.",
            "Characteristic movements: long, rhythmic and enveloping.",
            "Guided practice to develop sensitivity and fluidity in the technique."
          ],
          benefitsList: [
            "Training in a unique and highly valued technique in the wellness world.",
            "Certification that validates your professional learning.",
            "Skills to offer a deeply relaxing massage.",
            "An enriching experience that connects tradition and modernity."
          ],
          note:
            "This workshop is designed for those who want to learn a massage technique that not only relaxes the body but also balances energy and promotes inner connection."
        },
        {
          eyebrow: "Wood Therapy",
          title: "Learn the most in-demand body contouring and firming technique",
          summary:
            "Life Skin Care Irapuato offers a wood therapy workshop designed to train therapists and beginners in the use of wooden tools.",
          description:
            "Life Skin Care Irapuato offers a wood therapy workshop designed to train therapists and beginners in the use of wooden instruments that help sculpt the silhouette, reduce measurements and improve skin firmness. This course combines theory and practice to master the technique with confidence and professionalism.",
          consistList: [
            "Principles of wood therapy and its origins.",
            "Aesthetic and therapeutic benefits of the technique.",
            "Indications and contraindications for its application.",
            "Correct use of wooden instruments on different body areas.",
            "Slimming, anti-cellulite and firming protocols.",
            "Guided practice to build skill and confidence."
          ],
          benefitsList: [
            "Training in a highly sought-after technique in spas and aesthetic centers.",
            "Certification that validates your professional preparation.",
            "Skills to offer slimming and firming treatments.",
            "Practical knowledge to stand out in the wellness market."
          ],
          note:
            "This workshop is designed for those who want to expand their knowledge in body therapies, learning an effective and natural technique that combines tradition with visible results."
        },
        {
          eyebrow: "Ayurveda",
          title: "Training in the ancestral tradition of India",
          summary:
            "Life Skin Care Irapuato offers an Ayurveda massage course designed to train therapists and beginners in a holistic technique.",
          description:
            "Life Skin Care Irapuato offers an Ayurveda massage course designed to train therapists and beginners in a holistic technique that seeks to balance body, mind and spirit. This program combines theory and practice so participants can master the use of warm oils and the enveloping movements characteristic of the Ayurvedic tradition.",
          consistList: [
            "Principles of Ayurvedic medicine and its connection to massage.",
            "Physical, energetic and emotional benefits of Ayurveda massage.",
            "Indications and contraindications for its application.",
            "Massage techniques using warm oils and enveloping movements.",
            "Stimulation of energy points to balance the doshas.",
            "Guided practice to develop sensitivity and fluidity in the technique."
          ],
          benefitsList: [
            "Training in an ancestral technique with high demand in spas and holistic centers.",
            "Certification that validates your professional preparation.",
            "Skills to offer a relaxing and energizing massage.",
            "Practical knowledge to stand out in the wellness world."
          ],
          note:
            "This course is designed for those who want to learn a technique that not only relaxes the body but also balances energy and promotes inner connection."
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
    if (hintLabel) hintLabel.textContent = content.cardHint;

    if (detailParagraphs[0]) detailParagraphs[0].textContent = cardTranslations.description;
    if (detailParagraphs[1])
      detailParagraphs[1].innerHTML = `<strong>${content.consistTitle}</strong>`;
    if (detailParagraphs[2])
      detailParagraphs[2].innerHTML = `<strong>${content.benefitsTitle}</strong>`;

    renderList(lists[0], cardTranslations.consistList || []);
    renderList(lists[1], cardTranslations.benefitsList || []);

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

    setText("#cursos .section__head h2", content.sectionTitle);
    setText("#cursos .section__head .muted", content.sectionText);
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

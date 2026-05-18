document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      htmlLang: "es",
      title: "Masajes | Life Skin Care Irapuato",
      description:
        "Masajes relajantes, terapéuticos y especializados en Life Skin Care Irapuato.",
      reserveNav: "Reserva",
      selectEs: "Español",
      heroPill: "Bienestar corporal",
      heroTitle: "Nuestros masajes",
      intro:
        "Descubre nuestros tratamientos de spa, masajes terapéuticos y experiencias de bienestar en Irapuato, diseñados para relajar el cuerpo, cuidar tu piel y renovar tu energía.",
      reserveUs: "Reserva con nosotros",
      backServices: "Volver a servicios",
      sectionTitle: "Masajes disponibles",
      sectionText: "Selecciona una tarjeta para ver la descripción completa de cada experiencia.",
      contactTitle: "Reserva con nosotros",
      contactText:
        "Para programar una cita, contáctanos directamente y confirma disponibilidad.",
      contactHint:
        "Incluye el masaje, la fecha y la hora que prefieres al enviar tu mensaje.",
      footerText: "Life Skin Care Irapuato. Todos los derechos reservados.",
      footerMassages: "Masajes",
      footerReserve: "Reserva",
      cardHint: "Ver descripción",
      cards: [
        {
          eyebrow: "Masaje relajante",
          title: "Desconecta y recupera el equilibrio",
          summary:
            "Movimientos suaves y armoniosos para disminuir el estrés y renovar tu energía.",
          price: "Precio desde $600.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "El masaje relajante ayuda a liberar tensiones, reducir el estrés y recuperar el equilibrio del cuerpo mediante movimientos suaves y armoniosos.",
          ideal:
            "Ideal para quienes necesitan una pausa real dentro de la rutina.",
          list: [
            "Disminuye la ansiedad y el cansancio acumulado.",
            "Relaja los músculos y mejora la calidad del descanso.",
            "Favorece el bienestar físico y mental."
          ],
          note:
            "En Life Skin Care Irapuato cada sesión se realiza en un ambiente cálido, con música suave y aromaterapia."
        },
        {
          eyebrow: "Descontracturante",
          title: "Alivio profundo para zonas tensionadas",
          summary:
            "Trabajo firme en espalda, cuello y hombros para liberar nudos musculares.",
          price: "Precio desde $600.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "Este masaje trabaja zonas de mayor rigidez como espalda, cuello y hombros mediante técnicas profundas que liberan contracturas y mejoran la movilidad.",
          list: [
            "Maniobras firmes y profundas para liberar contracturas.",
            "Favorece la circulación y la oxigenación de los tejidos.",
            "Contribuye a mejorar la postura, la movilidad y el descanso.",
            "Reduce el dolor y la fatiga muscular de forma inmediata."
          ],
          note:
            "Se realiza con precisión terapéutica y un enfoque totalmente personalizado."
        },
        {
          eyebrow: "Shiatsu",
          title: "Equilibrio y energía a través del tacto",
          summary:
            "Presión manual en puntos clave para armonizar cuerpo y mente.",
          price: "Precio desde $700.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "El Shiatsu utiliza presión con dedos y palmas en puntos específicos del cuerpo para equilibrar la energía vital y aliviar tensiones.",
          list: [
            "Se aplica con dedos, palmas y manos en puntos estratégicos.",
            "Estimula la circulación energética y sanguínea.",
            "Ayuda a reducir el estrés, la ansiedad y las molestias musculares.",
            "Se realiza sin aceites y con ropa cómoda."
          ],
          note:
            "Una experiencia de tradición oriental con enfoque relajante y terapéutico."
        },
        {
          eyebrow: "Tuina",
          title: "Armonía corporal desde la medicina china",
          summary:
            "Presiones, estiramientos y movilizaciones para equilibrar el Qi.",
          price: "Precio desde $600.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "El masaje Tuina combina presiones, estiramientos y movilizaciones para estimular el flujo de energía (Qi) y favorecer la salud integral.",
          list: [
            "Trabaja puntos energéticos, articulaciones y tejidos blandos.",
            "Estimula el flujo de energía a través de los meridianos.",
            "Mejora la circulación, el sistema linfático y la movilidad.",
            "Apoya procesos de recuperación física y manejo del estrés crónico."
          ],
          note:
            "La intensidad se ajusta de acuerdo con las necesidades de cada paciente."
        },
        {
          eyebrow: "Tailandés",
          title: "Flexibilidad, energía y movilidad",
          summary:
            "Estiramientos asistidos y presión profunda con un ritmo fluido.",
          price: "Precio desde $600.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "Técnica ancestral que combina estiramientos asistidos, similares al yoga, con presiones profundas.",
          list: [
            "Mejora la flexibilidad, la postura y la movilidad articular.",
            "Estimula el sistema circulatorio y linfático.",
            "Reduce el estrés físico y mental.",
            "Activa el flujo energético del cuerpo."
          ],
          note:
            "Ideal para quienes buscan una experiencia más activa y terapéutica."
        },
        {
          eyebrow: "Lomi Lomi Nui",
          title: "La danza sanadora de Hawái",
          summary:
            "Movimientos largos y envolventes para liberar bloqueos físicos y emocionales.",
          price: "Precio desde $600.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "Técnica tradicional de Hawái caracterizada por movimientos largos y fluidos que relajan el cuerpo y la mente.",
          list: [
            "Promueve la relajación profunda y la renovación interior.",
            "Libera tensiones musculares y emocionales.",
            "Estimula la circulación y la energía vital.",
            "Integra cuerpo, mente y espíritu en una sola experiencia."
          ],
          note:
            "Una propuesta sensorial envolvente inspirada en el ritmo del mar."
        },
        {
          eyebrow: "Ritual de piedras calientes",
          title: "Calor terapéutico y relajación profunda",
          summary:
            "Termoterapia con masaje relajante para liberar tensión muscular.",
          price: "Precio desde $800.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "Utiliza 37 piedras volcánicas calientes colocadas en puntos estratégicos del cuerpo para liberar tensiones musculares.",
          list: [
            "Relajación muscular intensa y sostenida.",
            "Reduce el estrés y la ansiedad.",
            "Mejora la circulación y la oxigenación corporal.",
            "Genera una sensación de equilibrio físico y energético."
          ],
          note:
            "Una opción ideal para quienes buscan descanso profundo con un componente térmico."
        },
        {
          eyebrow: "Terapéutico",
          title: "Cuidado integral para la recuperación física",
          summary:
            "Maniobras profundas y precisas para aliviar dolor, rigidez y limitación de movimiento.",
          price: "Precio desde $450.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "Combina técnicas profundas para tratar lesiones, contracturas y mejorar la movilidad.",
          list: [
            "Trabaja músculos y tejidos blandos con un objetivo clínico.",
            "Ayuda a mejorar la postura y la movilidad.",
            "Reduce la fatiga y las molestias articulares.",
            "Apoya la rehabilitación y la prevención de recaídas."
          ],
          note:
            "Combina alivio inmediato con una intención terapéutica clara."
        },
        {
          eyebrow: "Deportivo",
          title: "Recuperación avanzada y prevención",
          summary:
            "Masaje profundo con técnicas complementarias para deportistas y personas con alta demanda física.",
          price: "Precio desde $600.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "Masaje especializado para deportistas que puede incluir técnicas como ventosas, acupuntura, moxas y vendaje neuromuscular.",
          list: [
            "Acelera la recuperación después del esfuerzo físico.",
            "Reduce el dolor muscular y articular.",
            "Mejora la movilidad, la flexibilidad y el rendimiento.",
            "Ayuda a prevenir lesiones y mantener un soporte funcional adecuado."
          ],
          note:
            "Enfoque integral para cuerpos sometidos a exigencia física constante."
        },
        {
          eyebrow: "Drenaje linfático",
          title: "Ligereza y depuración corporal",
          summary:
            "Movimientos suaves para estimular el sistema linfático y disminuir la retención de líquidos.",
          price: "Precio desde $600.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "Técnica delicada y precisa que favorece la eliminación de toxinas y líquidos retenidos, brindando una sensación marcada de ligereza.",
          list: [
            "Reduce la hinchazón y la retención de líquidos.",
            "Mejora la circulación linfática y sanguínea.",
            "Apoya procesos posquirúrgicos y recuperación estética.",
            "Ofrece relajación profunda sin maniobras invasivas."
          ],
          note:
            "Se adapta a cada necesidad con una ejecución suave y profesional."
        },
        {
          eyebrow: "Ayurveda",
          title: "Equilibrio integral y renovación",
          summary:
            "Masaje con enfoque holístico para armonizar cuerpo, mente y energía.",
          price: "Precio desde $600.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "El masaje Ayurveda utiliza aceites y maniobras fluidas para apoyar el equilibrio integral del cuerpo y promover una relajación profunda.",
          list: [
            "Favorece la relajación profunda y el bienestar general.",
            "Ayuda a armonizar el cuerpo, la mente y la energía.",
            "Estimula la circulación y la nutrición de la piel.",
            "Aporta una experiencia sensorial restauradora."
          ],
          note:
            "Una experiencia holística inspirada en la tradición de la India."
        },
        {
          eyebrow: "Miyana",
          title: "Bienestar delicado y restaurador",
          summary:
            "Técnica suave para relajar, armonizar y generar una sensación de ligereza.",
          price: "Precio desde $600.00 MXN",
          duration: "Duración: 45 minutos",
          description:
            "Miyana ofrece una experiencia de relajación suave y envolvente enfocada en restaurar el equilibrio y el bienestar corporal.",
          list: [
            "Promueve la relajación y el descanso profundo.",
            "Ayuda a liberar la tensión acumulada.",
            "Aporta una sensación de equilibrio y calma.",
            "Se adapta con suavidad a las necesidades de cada persona."
          ],
          note:
            "Ideal para quienes buscan una experiencia gentil y renovadora."
        }
      ]
    },
    en: {
      htmlLang: "en",
      title: "Massages | Life Skin Care Irapuato",
      description:
        "Relaxing, therapeutic and specialized massages at Life Skin Care Irapuato.",
      reserveNav: "Book",
      selectEs: "Spanish",
      heroPill: "Body Wellness",
      heroTitle: "Our Massages",
      intro:
        "Discover our spa treatments, therapeutic massages and wellness experiences in Irapuato, designed to relax the body, care for your skin and renew your energy.",
      reserveUs: "Book with us",
      backServices: "Back to services",
      sectionTitle: "Available massages",
      sectionText: "Select a card to view the full description of each experience.",
      contactTitle: "Book with us",
      contactText:
        "To schedule an appointment, contact us directly and confirm availability.",
      contactHint:
        "Include the massage, preferred date and preferred time when sending your message.",
      footerText: "Life Skin Care Irapuato. All rights reserved.",
      footerMassages: "Massages",
      footerReserve: "Book",
      cardHint: "View description",
      cards: [
        {
          eyebrow: "Relaxing Massage",
          title: "Disconnect and regain balance",
          summary:
            "Gentle, harmonious movements to reduce stress and renew your energy.",
          price: "Price from $600.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "The relaxing massage helps release tension, reduce stress and restore body balance through gentle and harmonious movements.",
          ideal: "Ideal for anyone who needs a real pause within their routine.",
          list: [
            "Reduces anxiety and accumulated fatigue.",
            "Relaxes muscles and improves rest quality.",
            "Supports physical and mental wellbeing."
          ],
          note:
            "At Life Skin Care Irapuato, each session takes place in a warm environment with soft music and aromatherapy."
        },
        {
          eyebrow: "Deep Tissue Relief",
          title: "Deep relief for tense areas",
          summary:
            "Focused work on the back, neck and shoulders to release muscle knots.",
          price: "Price from $600.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "This massage works on areas with greater stiffness such as the back, neck and shoulders through deep techniques that release contractures and improve mobility.",
          list: [
            "Firm, deep maneuvers to release contractures.",
            "Supports circulation and tissue oxygenation.",
            "Helps improve posture, mobility and rest.",
            "Reduces pain and muscle fatigue immediately."
          ],
          note:
            "Performed with therapeutic precision and a fully personalized approach."
        },
        {
          eyebrow: "Shiatsu",
          title: "Balance and energy through touch",
          summary:
            "Manual pressure on key points to harmonize body and mind.",
          price: "Price from $700.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "Shiatsu uses finger and palm pressure on specific body points to balance vital energy and relieve tension.",
          list: [
            "Applied with fingers, palms and hands on strategic points.",
            "Stimulates energetic and blood circulation.",
            "Helps reduce stress, anxiety and muscle discomfort.",
            "Performed without oils and with comfortable clothing."
          ],
          note:
            "An experience rooted in Eastern tradition with a relaxing and therapeutic approach."
        },
        {
          eyebrow: "Tuina",
          title: "Body harmony through Chinese medicine",
          summary:
            "Pressure, stretching and mobilization to balance Qi.",
          price: "Price from $600.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "Tuina massage combines pressure, stretching and mobilization to stimulate energy flow (Qi) and support overall health.",
          list: [
            "Works on energy points, joints and soft tissues.",
            "Stimulates energy flow through meridians.",
            "Improves circulation, lymphatic flow and mobility.",
            "Supports physical recovery and chronic stress management."
          ],
          note:
            "Intensity is adjusted according to each client's needs."
        },
        {
          eyebrow: "Thai Massage",
          title: "Flexibility, energy and mobility",
          summary:
            "Assisted stretches and deep pressure with a fluid rhythm.",
          price: "Price from $600.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "An ancestral technique that combines yoga-like assisted stretches with deep pressure.",
          list: [
            "Improves flexibility, posture and joint mobility.",
            "Stimulates the circulatory and lymphatic systems.",
            "Reduces physical and mental stress.",
            "Activates the body's energy flow."
          ],
          note:
            "Ideal for those seeking a more active and therapeutic experience."
        },
        {
          eyebrow: "Lomi Lomi Nui",
          title: "The healing dance of Hawaii",
          summary:
            "Long, enveloping movements to release physical and emotional blockages.",
          price: "Price from $600.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "A traditional Hawaiian technique characterized by long, flowing movements that relax the body and mind.",
          list: [
            "Promotes deep relaxation and inner renewal.",
            "Releases muscular and emotional tension.",
            "Stimulates circulation and vital energy.",
            "Integrates body, mind and spirit in one experience."
          ],
          note:
            "An immersive sensory experience inspired by the rhythm of the sea."
        },
        {
          eyebrow: "Hot Stone Ritual",
          title: "Therapeutic warmth and deep relaxation",
          summary:
            "Heat therapy with relaxing massage to release muscle tension.",
          price: "Price from $800.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "It uses 37 hot volcanic stones placed on strategic points of the body to release muscular tension.",
          list: [
            "Intense and lasting muscle relaxation.",
            "Reduces stress and anxiety.",
            "Improves circulation and body oxygenation.",
            "Creates a sense of physical and energetic balance."
          ],
          note:
            "An ideal option for those seeking deep rest with a thermal component."
        },
        {
          eyebrow: "Therapeutic Massage",
          title: "Comprehensive care for physical recovery",
          summary:
            "Deep, precise maneuvers to relieve pain, stiffness and limited movement.",
          price: "Price from $450.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "It combines deep techniques to treat injuries, contractures and improve mobility.",
          list: [
            "Works muscles and soft tissues with a clinical objective.",
            "Helps improve posture and mobility.",
            "Reduces fatigue and joint discomfort.",
            "Supports rehabilitation and relapse prevention."
          ],
          note:
            "It combines immediate relief with a clear therapeutic intention."
        },
        {
          eyebrow: "Sports Massage",
          title: "Advanced recovery and prevention",
          summary:
            "Deep massage with complementary techniques for athletes and people with high physical demand.",
          price: "Price from $600.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "A specialized massage for athletes that may include techniques such as cupping, acupuncture, moxa and neuromuscular taping.",
          list: [
            "Speeds recovery after physical effort.",
            "Reduces muscle and joint pain.",
            "Improves mobility, flexibility and performance.",
            "Helps prevent injuries and maintain proper functional support."
          ],
          note:
            "A comprehensive approach for bodies under constant physical demand."
        },
        {
          eyebrow: "Lymphatic Drainage",
          title: "Lightness and body detox",
          summary:
            "Gentle movements to stimulate the lymphatic system and reduce fluid retention.",
          price: "Price from $600.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "A delicate and precise technique that supports the elimination of toxins and retained fluids, providing a clear feeling of lightness.",
          list: [
            "Reduces swelling and fluid retention.",
            "Improves lymphatic and blood circulation.",
            "Supports post-surgical processes and aesthetic recovery.",
            "Offers deep relaxation without invasive maneuvers."
          ],
          note:
            "Adapted to each need with a gentle and professional execution."
        },
        {
          eyebrow: "Ayurveda",
          title: "Holistic balance and renewal",
          summary:
            "A holistic massage to harmonize body, mind and energy.",
          price: "Price from $600.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "Ayurveda massage uses oils and flowing maneuvers to support the body's overall balance and promote deep relaxation.",
          list: [
            "Encourages deep relaxation and general wellbeing.",
            "Helps harmonize body, mind and energy.",
            "Stimulates circulation and skin nourishment.",
            "Provides a restorative sensory experience."
          ],
          note:
            "A holistic experience inspired by the tradition of India."
        },
        {
          eyebrow: "Miyana",
          title: "Gentle and restorative wellbeing",
          summary:
            "A soft technique to relax, harmonize and create a feeling of lightness.",
          price: "Price from $600.00 MXN",
          duration: "Duration: 45 minutes",
          description:
            "Miyana offers a soft and enveloping relaxation experience focused on restoring balance and body wellbeing.",
          list: [
            "Promotes relaxation and deep rest.",
            "Helps release accumulated tension.",
            "Creates a feeling of balance and calm.",
            "Gently adapts to each person's needs."
          ],
          note:
            "Ideal for those seeking a gentle and renewing experience."
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
    if (element) {
      element.textContent = value;
    }
  }

  function renderCard(card, cardTranslations, hintText) {
    if (!card || !cardTranslations) {
      return;
    }

    const summaryParagraphs = card.querySelectorAll(".service-card__summary p");
    const detailParagraphs = card.querySelectorAll(".service-card__panel p");
    const detailListItems = card.querySelectorAll(".checklist li");
    const hintLabel = card.querySelector(".service-card__hint span");
    const eyebrow = card.querySelector(".service-card__eyebrow");
    const title = card.querySelector(".service-card__summary h3");

    if (eyebrow) eyebrow.textContent = cardTranslations.eyebrow;
    if (title) title.textContent = cardTranslations.title;
    if (summaryParagraphs[0]) summaryParagraphs[0].textContent = cardTranslations.summary;
    if (summaryParagraphs[1]) summaryParagraphs[1].textContent = cardTranslations.price;
    if (summaryParagraphs[2]) summaryParagraphs[2].textContent = cardTranslations.duration;
    if (hintLabel) hintLabel.textContent = hintText;

    if (detailParagraphs[0]) detailParagraphs[0].textContent = cardTranslations.description;

    if (cardTranslations.ideal) {
      if (detailParagraphs[1]) {
        detailParagraphs[1].innerHTML = "<strong>" + cardTranslations.ideal + "</strong>";
      }
      if (detailParagraphs[2]) {
        detailParagraphs[2].textContent = cardTranslations.note;
      }
    } else if (detailParagraphs[1]) {
      detailParagraphs[1].textContent = cardTranslations.note;
    }

    detailListItems.forEach((item, index) => {
      if (cardTranslations.list[index]) {
        item.textContent = cardTranslations.list[index];
      }
    });
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

    setText("#masajes .section__head h2", content.sectionTitle);
    setText("#masajes .section__head .muted", content.sectionText);
    setText("#contact .section__head h2", content.contactTitle);
    setText("#contact .section__head .muted", content.contactText);
    setText(".contact__card .muted.small", content.contactHint);

    serviceCards.forEach((card, index) => {
      renderCard(card, content.cards[index], content.cardHint);
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

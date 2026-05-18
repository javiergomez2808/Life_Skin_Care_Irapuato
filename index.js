const i18n = {
  es: {
    html_lang: "es",
    title: "Life Skin Care Irapuato",
    meta_description:
      "Life Skin Care Irapuato ofrece masajes, faciales, tratamientos corporales y paquetes en un ambiente en calma y moderno.",
    nav_services: "Servicios",
    nav_about: "Acerca de Nosotros",
    nav_reviews: "Resenas",
    nav_book: "Reserva",
    nav_cursos: "Cursos",
    language_label: "Selector de idioma",
    hero_pill: "Amamos Cuidar Tu Piel",
    hero_prev: "Imagen anterior",
    hero_next: "Imagen siguiente",
    hero_dots: "Seleccionar imagen",
    hero_lead:
      "Masajes terapeuticos, tratamientos faciales, tratamientos corporales y paquetes de spa disenados para ayudarte a relajarte y sentirte de maravilla.",
    hero_book: "Reserva con nosotros",
    hero_explore: "Explora nuestros Servicios",
    stat_rating: "Calificacion",
    stat_specialists: "Especialistas",
    stat_days: "Dias Abiertos",
    services_title: "Nuestros Servicios",
    service_masajes: "Masajes",
    service_corporales: "Corporales",
    service_faciales: "Faciales",
    service_depilacion: "Depilacion E-Light",
    service_aparatologia: "Aparatologia",
    service_anticelulitico: "Anticelulitico",
    service_cursos: "Cursos",
    service_postquirurgicos: "Postquirurgicos",
    service_hifem: "HIFEM",
    service_drenaje: "Drenaje Linfatico",
    service_eliminaciones: "Eliminaciones",
    about_title: "Acerca de Life Skin Care",
    about_text:
      "Somos un grupo de profesionistas en diversas areas que nos preocupamos por cuidar a nuestros pacientes en cada una de nuestras areas brindando servicio y profesionalismo para su bienestar.",
    about_h1: "Cuidado Profesional",
    about_p1:
      "Especialistas capacitados y con vasta experiencia en el cuidado de tu cuerpo y bienestar.",
    about_h2: "Limpieza + Productos Amigables",
    about_p2:
      "Formulas respetuosas con la piel, libres de irritantes agresivos siempre que sea posible.",
    about_h3: "Espacios Relajantes",
    about_p3: "Iluminacion suave y habitaciones tranquilas disenadas para relajarse.",
    hours_title: "Horario",
    hours_mf: "Lunes-Viernes",
    hours_sat: "Sabados",
    hours_sun: "Domingos",
    hours_closed: "Cerrado",
    reviews_title: "Resenas",
    reviews_subtitle:
      "Lo que dicen nuestros clientes sobre su experiencia en Life Skin Care Irapuato.",
    reviews_aria: "Resenas de clientes",
    review_prev: "Resena anterior",
    review_next: "Siguiente resena",
    review_dots: "Seleccionar resena",
    contact_title: "Reserva con nosotros",
    contact_text:
      "Para programar una cita, pongase en contacto con nosotros directamente. Estaremos encantados de ayudarle y confirmar la disponibilidad.",
    contact_whatsapp: "WhatsApp:",
    contact_note:
      "Incluye el servicio, la fecha y la hora que prefieres al ponerte en contacto con nosotros.",
    footer_services: "Servicios",
    footer_book: "Reserva",
  },
  en: {
    html_lang: "en",
    title: "Life Skin Care Irapuato",
    meta_description:
      "Life Skin Care Irapuato offers massages, facials, body treatments, and packages in a calm, modern environment.",
    nav_services: "Services",
    nav_about: "About Us",
    nav_reviews: "Reviews",
    nav_book: "Book",
    nav_cursos: "Courses",
    language_label: "Language selector",
    hero_pill: "We Love Caring For Your Skin",
    hero_prev: "Previous image",
    hero_next: "Next image",
    hero_dots: "Select image",
    hero_lead:
      "Therapeutic massages, facial treatments, body treatments, and spa packages designed to help you relax and feel amazing.",
    hero_book: "Book With Us",
    hero_explore: "Explore Our Services",
    stat_rating: "Rating",
    stat_specialists: "Specialists",
    stat_days: "Open Days",
    services_title: "Our Services",
    service_masajes: "Massages",
    service_corporales: "Body Treatments",
    service_faciales: "Facials",
    service_depilacion: "E-Light Hair Removal",
    service_aparatologia: "Aesthetic Devices",
    service_anticelulitico: "Anti-Cellulite",
    service_cursos: "Courses",
    service_postquirurgicos: "Post-Surgical",
    service_hifem: "HIFEM",
    service_drenaje: "Lymphatic Drainage",
    service_eliminaciones: "Removal Treatments",
    about_title: "About Life Skin Care",
    about_text:
      "We are a multidisciplinary team focused on caring for every patient, delivering high-quality service and professional attention for your wellbeing.",
    about_h1: "Professional Care",
    about_p1: "Skilled specialists with broad experience in wellness and body care.",
    about_h2: "Cleanliness + Skin-Friendly Products",
    about_p2: "Skin-respectful formulas, free from harsh irritants whenever possible.",
    about_h3: "Relaxing Spaces",
    about_p3: "Soft lighting and quiet rooms designed for deep relaxation.",
    hours_title: "Hours",
    hours_mf: "Monday-Friday",
    hours_sat: "Saturday",
    hours_sun: "Sunday",
    hours_closed: "Closed",
    reviews_title: "Reviews",
    reviews_subtitle:
      "What our clients say about their experience at Life Skin Care Irapuato.",
    reviews_aria: "Client reviews",
    review_prev: "Previous review",
    review_next: "Next review",
    review_dots: "Select review",
    contact_title: "Book With Us",
    contact_text:
      "To schedule an appointment, contact us directly. We will be happy to help and confirm availability.",
    contact_whatsapp: "WhatsApp:",
    contact_note:
      "Please include your preferred service, date, and time when contacting us.",
    footer_services: "Services",
    footer_book: "Book",
  },
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setAttr(selector, attr, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attr, value);
}

function applyLanguage(lang) {
  const t = i18n[lang] || i18n.es;

  document.documentElement.lang = t.html_lang;
  document.title = t.title;
  setAttr('meta[name="description"]', "content", t.meta_description);

  setText('.nav a[href="#services"]', t.nav_services);
  setText('.nav a[href="#about"]', t.nav_about);
  setText('.nav a[href="#reviews"]', t.nav_reviews);
  setText('.nav a[href="#contact"]', t.nav_book);
  setText('.nav a[href="#cursos"]', t.nav_cursos);
  setText('label[for="language-select"]', t.language_label);
  setAttr("#language-select", "aria-label", t.language_label);

  setText(".pill", t.hero_pill);
  setAttr(".hero .carousel__btn.prev", "aria-label", t.hero_prev);
  setAttr(".hero .carousel__btn.next", "aria-label", t.hero_next);
  setAttr(".hero .carousel__dots", "aria-label", t.hero_dots);
  setText(".lead", t.hero_lead);
  setText('.hero__actions .btn[href="#contact"]', t.hero_book);
  setText(".hero__actions .btn--ghost", t.hero_explore);
  setText(".hero__stats .stat:nth-child(1) .stat__label", t.stat_rating);
  setText(".hero__stats .stat:nth-child(2) .stat__label", t.stat_specialists);
  setText(".hero__stats .stat:nth-child(3) .stat__label", t.stat_days);

  setText("#services .section__head h2", t.services_title);
  setText('.service-card[href="./Servicios/Masajes.html"] h3', t.service_masajes);
  setText('.service-card[href="./Servicios/Corporales.html"] h3', t.service_corporales);
  setText('.service-card[href="./Servicios/Faciales.html"] h3', t.service_faciales);
  setText('.service-card[href="./Servicios/Depilacion.html"] h3', t.service_depilacion);
  setText('.service-card[href="./Servicios/Aparatos.html"] h3', t.service_aparatologia);
  setText('.service-card[href="./Servicios/Anticelulitico.html"] h3', t.service_anticelulitico);
  setText('.service-card[href="./Servicios/Cursos.html"] h3', t.service_cursos);
  setText(
    '.service-card[href="./Servicios/Postquirurgicos.html"] h3',
    t.service_postquirurgicos
  );
  setText('.service-card[href="./Servicios/HIFEM.html"] h3', t.service_hifem);
  setText('.service-card[href="./Servicios/Drenaje.html"] h3', t.service_drenaje);
  setText('.service-card[href="./Servicios/Eliminacion.html"] h3', t.service_eliminaciones);

  setText("#about .section__head h2", t.about_title);
  setText("#about .section__head .muted", t.about_text);
  setText("#about .highlight:nth-child(1) h3", t.about_h1);
  setText("#about .highlight:nth-child(1) p", t.about_p1);
  setText("#about .highlight:nth-child(2) h3", t.about_h2);
  setText("#about .highlight:nth-child(2) p", t.about_p2);
  setText("#about .highlight:nth-child(3) h3", t.about_h3);
  setText("#about .highlight:nth-child(3) p", t.about_p3);
  setText(".hours h3", t.hours_title);
  setText(".hours__list li:nth-child(1) span:first-child", t.hours_mf);
  setText(".hours__list li:nth-child(2) span:first-child", t.hours_sat);
  setText(".hours__list li:nth-child(3) span:first-child", t.hours_sun);
  setText(".hours__list li:nth-child(3) span:last-child", t.hours_closed);

  setText("#reviews .section__head h2", t.reviews_title);
  setText("#reviews .section__head .muted", t.reviews_subtitle);
  setAttr("#reviews .carousel", "aria-label", t.reviews_aria);
  setAttr("#reviews .carousel__btn.prev", "aria-label", t.review_prev);
  setAttr("#reviews .carousel__btn.next", "aria-label", t.review_next);
  setAttr("#reviews .carousel__dots", "aria-label", t.review_dots);

  setText("#contact .section__head h2", t.contact_title);
  setText("#contact .section__head .muted", t.contact_text);
  setText("#contact .contact__line strong", t.contact_whatsapp);
  setText("#contact .muted.small", t.contact_note);

  setText('.footer__links a[href="#services"]', t.footer_services);
  setText('.footer__links a[href="#contact"]', t.footer_book);
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("language-select");
  if (!selector) return;

  const saved = localStorage.getItem("siteLanguage");
  const initialLang = saved && i18n[saved] ? saved : selector.value || "es";

  selector.value = initialLang;
  applyLanguage(initialLang);

  selector.addEventListener("change", (event) => {
    const lang = event.target.value;
    applyLanguage(lang);
    localStorage.setItem("siteLanguage", lang);
  });
});
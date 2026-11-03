
const translations = {
  kk: {
    navVenues: "Тойханалар",
    navServices: "Қызметтер",
    navHow: "Қалай жұмыс істейді?",
    addService: "+ Қызмет қосу",

    eyebrow: "✦ Қазақстандағы мерекелік платформа",
    heroTitle: "Ерекше сәттер осында басталады.",
    heroText:
      "Армандаған тойыңызға арналған үздік орындар мен мамандарды бір жерден табыңыз.",

    cityLabel: "ҚАЛА",
    serviceLabel: "ҚЫЗМЕТ ТҮРІ",
    dateLabel: "ІС-ШАРА КҮНІ",
    search: "Іздеу →",

    venues: "🏛️ Тойханалар",
    hosts: "🎤 Асабалар",
    photo: "📸 Фотографтар",
    decor: "✨ Безендіру",

    statOne: "Бірыңғай платформа",
    statTwo: "Қызметтерді қарау",
    statThree: "Тегін демо",

    allInOne: "БАРЛЫҒЫ БІР ЖЕРДЕ",
    servicesTitle: "Қызметтер әлемі",
    servicesText:
      "Ерекше күніңізге қажет нәрсенің бәрі.",

    venuesDesc: "Керемет мерекелік орындар →",
    hostsDesc: "Кәсіби жүргізушілер →",
    photoDesc: "Естен кетпес кадрлар →",
    decorDesc: "Сәнді декорациялар →",

    special: "АРНАЙЫ ТАҢДАУ",
    popularTitle: "Танымал ұсыныстар",
    demoNote:
      "Бұл ұсыныстар — демонстрациялық үлгілер.",

    pricePending: "Бағасы нақтыланады",
    view: "Қарау →",
    hostProfile: "🎤 Асаба · Үлгі профиль",
    photoProfile: "📸 Фото және видео · Үлгі",

    easy: "ОҢАЙ ӘРІ ЫҢҒАЙЛЫ",
    howTitle: "Қалай жұмыс істейді?",

    stepOneTitle: "Қызметті табыңыз",
    stepOneText:
      "Қалаңызды, қызмет түрін және күнді таңдаңыз.",

    stepTwoTitle: "Салыстырыңыз",
    stepTwoText:
      "Фотосуреттер мен бағаларды салыстырыңыз.",

    stepThreeTitle: "Брондаңыз",
    stepThreeText:
      "Болашақта онлайн брондау мүмкіндігі қосылады.",

    partnerEyebrow: "БІЗБЕН БІРГЕ ДАМЫҢЫЗ",
    partnerTitle: "Өз қызметіңізді танытыңыз",
    partnerText:
      "Тойхана, асаба немесе фотографсыз ба? Болашақта өз профиліңізді ашып, клиенттер таба аласыз.",
    partnerButton: "Серіктес болу →",

    footerText: "Ерекше сәттер осында басталады.",

    chooseDate: "Алдымен іс-шара күнін таңдаңыз!",
    demoAlert:
      "Бұл функция келесі кезеңде қосылады.",
    partnerAlert:
      "Серіктестерді тіркеу жүйесі әзірленуде."
  },

  ru: {
    navVenues: "Банкетные залы",
    navServices: "Услуги",
    navHow: "Как это работает?",
    addService: "+ Добавить услугу",

    eyebrow: "✦ Платформа мероприятий Казахстана",
    heroTitle: "Особенные моменты начинаются здесь.",
    heroText:
      "Найдите лучшие площадки и специалистов для вашего идеального торжества в одном месте.",

    cityLabel: "ГОРОД",
    serviceLabel: "ТИП УСЛУГИ",
    dateLabel: "ДАТА МЕРОПРИЯТИЯ",
    search: "Поиск →",

    venues: "🏛️ Банкетные залы",
    hosts: "🎤 Ведущие",
    photo: "📸 Фотографы",
    decor: "✨ Оформление",

    statOne: "Единая платформа",
    statTwo: "Просмотр услуг",
    statThree: "Бесплатное демо",

    allInOne: "ВСЁ В ОДНОМ МЕСТЕ",
    servicesTitle: "Мир услуг",
    servicesText:
      "Всё необходимое для вашего особенного дня.",

    venuesDesc: "Лучшие площадки для праздника →",
    hostsDesc: "Профессиональные ведущие →",
    photoDesc: "Незабываемые кадры →",
    decorDesc: "Стильные декорации →",

    special: "НАШ ВЫБОР",
    popularTitle: "Популярные предложения",
    demoNote:
      "Представленные предложения являются демонстрационными.",

    pricePending: "Цена уточняется",
    view: "Смотреть →",
    hostProfile: "🎤 Ведущий · Демо-профиль",
    photoProfile: "📸 Фото и видео · Демо",

    easy: "ПРОСТО И УДОБНО",
    howTitle: "Как это работает?",

    stepOneTitle: "Найдите услугу",
    stepOneText:
      "Выберите город, тип услуги и дату.",

    stepTwoTitle: "Сравните",
    stepTwoText:
      "Сравните фотографии и цены.",

    stepThreeTitle: "Забронируйте",
    stepThreeText:
      "В будущем появится онлайн-бронирование.",

    partnerEyebrow: "РАЗВИВАЙТЕСЬ ВМЕСТЕ С НАМИ",
    partnerTitle: "Расскажите о своих услугах",
    partnerText:
      "У вас банкетный зал? Вы ведущий или фотограф? В будущем вы сможете создать профиль и находить клиентов.",
    partnerButton: "Стать партнёром →",

    footerText: "Особенные моменты начинаются здесь.",

    chooseDate: "Сначала выберите дату мероприятия!",
    demoAlert:
      "Эта функция появится на следующем этапе.",
    partnerAlert:
      "Система регистрации партнёров разрабатывается."
  }
};

let currentLang =
  localStorage.getItem("shanyraq_language") || "kk";

if (!translations[currentLang]) {
  currentLang = "kk";
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLang = lang;

  localStorage.setItem("shanyraq_language", lang);

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];

    if (value !== undefined) {
      el.textContent = value;
    }
  });

  document.getElementById("langKk")
    .classList.toggle("active", lang === "kk");

  document.getElementById("langRu")
    .classList.toggle("active", lang === "ru");
}

document.getElementById("langKk")
  .addEventListener("click", () => setLanguage("kk"));

document.getElementById("langRu")
  .addEventListener("click", () => setLanguage("ru"));

setLanguage(currentLang);

const dateInput = document.getElementById("date");

const today = new Date();

const localToday = new Date(
  today.getTime() -
  today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localToday;

document.getElementById("searchForm")
  .addEventListener("submit", e => {
    e.preventDefault();

    const city =
      document.getElementById("city").value;

    const service =
      document.getElementById("service").value;

    const date = dateInput.value;

    if (!date) {
      alert(translations[currentLang].chooseDate);
      return;
    }

    if (service === "venues") {
      const params = new URLSearchParams({
        city: city,
        date: date
      });

      window.location.href =
        "venues.html?" + params.toString();
    } else {
      alert(translations[currentLang].demoAlert);
    }
  });

document.querySelectorAll(".demo-btn")
  .forEach(button => {
    button.addEventListener("click", () => {
      alert(translations[currentLang].demoAlert);
    });
  });

document.getElementById("partnerButton")
  .addEventListener("click", () => {
    alert(translations[currentLang].partnerAlert);
  });

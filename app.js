(() => {
  'use strict';

  /* ===== Предметы. Новый клиент = одна запись здесь ===== */
  // x — центр наклейки по ширине комнаты, y — где наклейка «стоит» (низ), w — ширина. Всё в % от картинки.
  const ITEMS = [
    {
      id: 'solzao', room: 'bath', kind: 'brand', delta: 15,
      sticker: 'assets/stickers/bath-gel.webp', x: 45, y: 58, w: 9.5, rot: 4,
      brand: 'Solzao', product: 'Гель для душа Sugar Head',
      photo: 'assets/packshots/solzao.webp', // Яндекс Диск из брифа, Sugar Head 400 мл фронтально
      text: 'Мама зашла в душ и пять минут делала вид, что не слышит стук в дверь. Ещё бы! Гель Solzão пахнет жжёной карамелью, бразильским орехом и абсолютным счастьем. С ним даже обычный душ превращается в маленький побег от повседневности — туда, где сладко, беззаботно и никуда не нужно спешить.',
      promo: 'Промокод SOLZAO: скидка 10% до 1 декабря',
      button: 'Купить гель',
      url: 'https://ozon.ru/product/gel-dlya-dusha-parfyumirovannyy-uvlazhnyayushchiy-naturalnyy-solzao-sugar-head-s-maslom-1695488103/?hs=1&utm_campaign=vendor_org_223103&utm_medium=cpc&utm_source=game'
    },
    {
      id: 'artfact', room: 'bath', kind: 'brand', delta: 15,
      sticker: 'assets/stickers/bath-box.webp', x: 58.5, y: 52.3, w: 18, rot: -3,
      brand: 'ART&FACT. x НЭН', product: 'Набор «Ну и денек!»',
      photo: 'assets/packshots/artfact.webp', // мокап из брифа: коробка и все средства целиком, как просил бренд
      text: 'Этому дню мама поставила бы ноль звездочек из ста. Для таких вечеров подойдет набор ART&FACT., чтобы смыть с себя всё лишнее: гель-эксфолиант для тела и пилинг для лица выравнивают тон и рельеф кожи, маска питает и завершает ритуал.',
      promo: 'Промокод NENPLAY: скидка 15% на наборы на Ozon до 31 декабря',
      button: 'Купить набор',
      url: 'https://clc.to/nenafplay'
    },
    {
      id: 'bath-phone', room: 'bath', kind: 'trap', delta: -15,
      sticker: 'assets/stickers/bath-phone.webp', x: 35.5, y: 58, w: 9, rot: -12,
      label: 'Лента в телефоне', // для разбора вечера в финале
      title: 'Зачем, ну зачем было открывать ленту?',
      text: 'За двадцать минут мама добыла три рецепта сырников, схему, как складывать детские футболки по-японски, и список поделок в сад к Новому году. Книжка так и лежит открытой на четырнадцатой странице.'
    },
    {
      // Бабл вместо картинки: кричат снизу, из-под двери (хвостик вниз, tail: 'right' — из-за края справа).
      // Новые «Ма-а-ам!» в других комнатах — такие же записи с bubble
      id: 'bath-mom', room: 'bath', kind: 'trap', delta: -15,
      bubble: ['Ма-а-ам!', 'Ма-а-ам!'], tail: 'down', x: 66.5, y: 77.5, rot: -4,
      label: '«Ма-а-ам! Ма-а-ам!»', // для разбора вечера в финале
      title: 'Зачем, ну зачем было вылезать из ванны?',
      text: 'Вместо ванны мама получила поиски синего фломастера, подпись в дневнике, сок с верхней полки и разбор, кто первый начал (оба). Вода за это время остыла.'
    },

    /* ----- Кухня ----- */
    {
      id: 'biomio', room: 'kitchen', kind: 'brand', delta: 15,
      sticker: 'assets/stickers/kitchen-tablets.webp', x: 36.5, y: 54.6, w: 14.5, rot: -4,
      brand: 'BioMio', product: 'Таблетки для посудомоечной машины',
      photo: 'assets/packshots/biomio.webp', // Яндекс Диск из брифа, ракурс 3/4
      text: 'Мама загрузила посудомойку и наконец-то может выдохнуть. Даже детские бутылочки не придётся перемывать: таблетки BioMio с 92% ингредиентов натурального происхождения позаботятся о чистоте посуды и помогут избавиться от неприятных запахов. А у мамы появится немного времени на себя.',
      promo: 'Промокод BIOMIO действует до 30 ноября',
      button: 'Купить таблетки',
      url: 'https://ozon.ru/product/tabletki-dlya-posudomoechnoy-mashiny-eko-biomio-all-in-one-s-efirnym-maslom-evkalipta-16g-50-sht-1600410219/?hs=1&utm_campaign=vendor_org_223103&utm_medium=cpc&utm_source=game'
    },
    {
      id: 'flowwow', room: 'kitchen', kind: 'brand', delta: 15,
      sticker: 'assets/stickers/kitchen-cupcakes.webp', x: 80.5, y: 57.3, w: 15.5, rot: 3,
      brand: 'Флаувау', product: 'Цветочные капкейки',
      photo: 'assets/packshots/flowwow.webp', photoFit: 'cover', // фото от Анастасии 09.11: не упаковка на белом, а кадр — показываем во всю ширину
      text: 'Маме подарили цветочные капкейки, и их, в отличие от букета, можно съесть. На Флаувау легко подобрать десерт с ее любимой начинкой, чтобы сделать чаепитие еще приятнее.',
      button: 'Выбрать капкейки',
      url: 'https://flowwow.com/bakery-products/cvetochnaya-simfoniya-eksklyuz/?utm_source=nan&utm_medium=game&utm_campaign=cupcake'
    },
    {
      id: 'kitchen-plate', room: 'kitchen', kind: 'trap', delta: -15,
      sticker: 'assets/stickers/kitchen-plate.webp', x: 56.5, y: 59, w: 16.5, rot: -3,
      label: 'Доела за детьми', // для разбора вечера в финале
      title: 'Зачем, ну зачем было доедать за детьми?',
      text: 'На ужин маме достались три холодные макаронины, надкусанная котлета и корка от бутерброда. Себе она так и не положила.'
    },
    {
      // Уведомление вместо картинки: рабочий чат из брифа
      id: 'kitchen-chat', room: 'kitchen', kind: 'trap', delta: -15,
      notice: { from: 'Рабочий чат', text: 'Глянешь одним глазком?' }, x: 63, y: 47.5, rot: -3,
      label: 'Рабочий чат', // для разбора вечера в финале
      title: 'Зачем, ну зачем было открывать рабочий чат?',
      text: 'Одним глазком мама глянула на сорок минут: поправила чужую презентацию и пообещала прислать таблицу к утру. Чайник за это время вскипел и остыл.'
    },

    /* ----- Спальня ----- */
    {
      id: 'divan', room: 'bedroom', kind: 'brand', delta: 15,
      // кровать вырезана из самого фона и стоит ровно поверх нарисованной, поэтому не качается (still)
      sticker: 'assets/stickers/bedroom-bed.webp', x: 49.66, y: 83.2, w: 73.54, rot: 0, still: true,
      brand: 'divan.ru', product: 'Кровать «Суна»',
      photo: 'assets/packshots/divan.webp', photoFit: 'cover', // интерьерный кадр из папки бренда в Drive
      text: 'Мама легла поперек кровати прямо в джинсах и вставать не собирается. «Суна» мягкая и объемная, с округлой спинкой, названа в честь карельской реки. Внутри ящик для белья: туда уберутся одеяла со шкафа.',
      promo: 'Промокод PROMODIVAN26: 3000 бонусов, активировать до 29 января',
      button: 'Посмотреть кровать',
      url: 'https://www.divan.ru/landing/kareliya/?utm_source=marcom&utm_medium=smi&utm_campaign=nen_game'
    },
    {
      id: 'bago', room: 'bedroom', kind: 'brand', delta: 15,
      sticker: 'assets/stickers/bedroom-diffuser.webp', x: 77, y: 50.7, w: 9.5, rot: 3,
      brand: 'BAGO home', product: 'Диффузор «Свежий хлопок», 50 мл',
      photo: 'assets/packshots/bago.webp', photoFit: 'cover', // фото с Яндекс Диска из брифа
      text: 'Белье мама так и не развесила, но в спальне все равно пахнет свежими простынями. У диффузора BAGO home аромат хлопка, лилии и амбры, а 50 мл хватает на четыре-шесть недель в комнате 5–15 м².',
      button: 'Купить диффузор',
      url: 'https://wildberries.ru/catalog/0/search.aspx?search=WW1275842'
    },
    {
      id: 'bedroom-laundry', room: 'bedroom', kind: 'trap', delta: -15,
      sticker: 'assets/stickers/bedroom-laundry.webp', x: 67.5, y: 97.5, w: 31, rot: 3,
      label: 'Корзина белья', // для разбора вечера в финале
      title: 'Зачем, ну зачем было разбирать белье?',
      text: 'Итог вечера: развешаны детские футболки, пижама мужа и одиннадцать носков без пары. Мамина кофта так и лежит на дне корзины.'
    },
    {
      id: 'bedroom-chat', room: 'bedroom', kind: 'trap', delta: -15,
      notice: { from: 'Родительский чат', text: 'Завтра всем принести шишки!' }, x: 33, y: 37, rot: -3,
      label: 'Родительский чат', // для разбора вечера в финале
      title: 'Зачем, ну зачем было открывать родительский чат?',
      text: 'Сто двадцать сообщений спустя у мамы три задачи: найти шишки к восьми утра, подежурить на ярмарке и скинуться на подарок учительнице. На часах половина первого.'
    },

    /* ----- Гостиная ----- */
    {
      id: 'smclinic', room: 'living', kind: 'brand', delta: 15,
      sticker: 'assets/stickers/living-calendar.webp', x: 31.5, y: 45.5, w: 17, rot: -3,
      brand: 'СМ-Клиника', product: 'Чекап «Женское здоровье»',
      photo: null, // в брифе только логотип (Drive закрыт), сайт клиники за защитой от ботов — ждем файл
      text: 'Мама записалась на чекап, хотя обычно записывает к врачам только детей. Программу «Женское здоровье» в «СМ-Клиника» проходят за два дня в одном медцентре, там же делают УЗИ и МРТ молочных желез и маммографию.',
      disclaimer: 'Имеются противопоказания. Необходимо проконсультироваться со специалистом.', // обязательная строка, мелким шрифтом
      button: 'Выбрать чекап',
      url: 'https://www.smclinic.ru/diagnosis/programmy-check-up/ginekologiya/zhenskoe-zdorove/?utm_source=nen.ru&utm_medium=referral&utm_campaign=ginekologicheskiy_chek_up'
    },
    {
      id: 'avenir', room: 'living', kind: 'brand', delta: 15,
      sticker: 'assets/stickers/living-crochet.webp', x: 63, y: 61, w: 15.5, rot: 4,
      brand: 'Avenir', product: 'Набор для вязания крючком',
      photo: 'assets/packshots/avenir.webp', // набор на белом фоне из папки бренда (Nextcloud из брифа)
      text: 'Мама с ребенком вязали полчаса и ни разу не взяли в руки телефон. В наборе Avenir все, чтобы связать брелок (аксолотля, единорога или осьминога), и инструкция на русском, бумажная и видео. Упаковка яркая, подарочная.',
      button: 'Выбрать набор',
      url: 'https://ozon.ru/highlight/podborka-tovarov-5022801/?utm_campaign=vendor_org_4584_NEN_game_november2026&utm_content=axolotl&utm_medium=game&utm_source=NEN'
    },
    {
      id: 'makebug', room: 'living', kind: 'brand', delta: 15,
      sticker: 'assets/stickers/living-orchid.webp', x: 42, y: 67.4, w: 15, rot: -2,
      brand: 'Makebug', product: '3D-конструктор «Орхидеи»',
      photo: 'assets/packshots/makebug.webp', // коробка Moth Orchid из Dropbox бренда
      text: 'Мама собирает орхидею из картона. Детали Makebug нужно только выдавить и соединить, клей и ножницы не понадобятся. Цветы похожи на настоящие по форме, окраске и деталям, а поливать их не надо.',
      promo: 'Промокод GAME15 действует до 22 апреля 2027 года',
      button: 'Выбрать цветок',
      url: 'https://ozon.ru/highlight/podborka-tovarov-5027079/?utm_campaign=vendor_org_4584_for_mom&utm_content=autumn2026&utm_medium=refferal&utm_source=NEN_game&utm_term=MB_flowers'
    },
    {
      id: 'living-homework', room: 'living', kind: 'trap', delta: -15,
      sticker: 'assets/stickers/living-homework.webp', x: 29, y: 93, w: 26, rot: -4,
      label: 'Проверка домашки', // для разбора вечера в финале
      title: 'Зачем, ну зачем было проверять домашку?',
      text: 'Сорок минут мама вспоминала, как решать задачи про два поезда, и нашла ошибку в ответах учебника. Ее кружка на столике так и стоит полной.'
    },
    {
      id: 'living-call', room: 'living', kind: 'trap', delta: -15,
      notice: { from: 'Бабушка', text: 'Покажи внуков по видео!' }, x: 63, y: 84, rot: -3,
      label: 'Видеозвонок с бабушкой', // для разбора вечера в финале
      title: 'Зачем, ну зачем было отвечать на видеозвонок?',
      text: 'Час мама держала телефон перед детьми и пересказывала новости из сада. За весь звонок на экране ни разу не появилось ее лицо, только детские макушки.'
    },

    /* ----- Детская ----- */
    {
      id: 'alilo', room: 'kids', kind: 'brand', delta: 15,
      sticker: 'assets/stickers/kids-bunny.webp', x: 50.5, y: 53.2, w: 11, rot: -3,
      brand: 'alilo', product: 'Умный Зайка R1',
      photo: 'assets/packshots/alilo.webp', // голубой Умный Зайка R1, фото прислала Анастасия 09.11
      text: 'Младший уснул под белый шум, и мама впервые за вечер села. Умный Зайка alilo подходит детям с рождения: поёт колыбельные, рассказывает сказки, а силиконовые ушки светятся, как ночник.',
      button: 'Купить зайку',
      url: 'https://ozon.ru/product/interaktivnaya-igrushka-alilo-umnyy-zayka-r1-siniy-igrushka-dlya-novorozhdennyh-belyy-shum-154861814/?at=1pSo1_d4c011dSnew2wqom2NNI3u_qad&from_sku=3692463845&hs=1&oos_search=false&utm_campaign=vendor_org_4584_mom_game&utm_content=Nov&utm_medium=game&utm_source=NEN&utm_term=R1'
    },
    {
      id: 'abumba', room: 'kids', kind: 'brand', delta: 15,
      sticker: 'assets/stickers/kids-book.webp', x: 50, y: 89, w: 17, rot: 4,
      brand: 'Abumba', product: 'Говорящая книга-фингербук',
      photo: 'assets/packshots/abumba.webp', // из Dropbox бренда, фон срезан
      text: 'Дети заняты дольше трех минут, и мама успевает выпить чай горячим. В говорящей книге Abumba больше 300 озвученных картинок и больше 100 заданий на речь, память и логику. Громкость регулируется.',
      promo: 'Промокод FING15: скидка 15% до 31 декабря',
      button: 'Выбрать книгу',
      url: 'https://ozon.ru/highlight/podborka-tovarov-5017834/?utm_campaign=vendor_org_4584_game&utm_content=october&utm_medium=refferal&utm_source=NEN&utm_term=vov'
    },
    {
      id: 'kids-craft', room: 'kids', kind: 'trap', delta: -15,
      sticker: 'assets/stickers/kids-craft.webp', x: 74.5, y: 54.3, w: 20, rot: 2,
      label: 'Поделка в сад', // для разбора вечера в финале
      title: 'Зачем, ну зачем было доделывать поделку?',
      text: 'К полуночи ежик из пластилина и семечек готов, листья приклеены ровно. Под ногтями у мамы до утра будет пластилин.'
    },
    {
      id: 'kids-mom', room: 'kids', kind: 'trap', delta: -15,
      bubble: ['Мам, полежи', 'со мной!'], tail: 'down', x: 32, y: 41, rot: 4,
      label: '«Мам, полежи со мной!»', // для разбора вечера в финале
      title: 'Зачем, ну зачем было ложиться рядом?',
      text: 'Мама прилегла на пять минут и проснулась в два часа ночи на краю детской кровати, в джинсах и под одеялом с динозаврами.'
    }
  ];

  const ROOMS = {
    bath: {
      icon: 'assets/icons/bath.webp',
      name: 'Ванная', bg: 'assets/bath-bg.webp', w: 1024, h: 1536,
      fx: 45, // какая точка картинки по ширине в центре экрана, когда бока срезаются
      heroes: []
    },
    kitchen: {
      icon: 'assets/icons/kitchen.webp',
      name: 'Кухня', bg: 'assets/kitchen-bg.webp', w: 1024, h: 1536,
      fx: 55,
      heroes: []
    },
    bedroom: {
      icon: 'assets/icons/bedroom.webp',
      name: 'Спальня', bg: 'assets/bedroom-bg.webp', w: 1024, h: 1536,
      fx: 49,
      heroes: []
    },
    living: {
      icon: 'assets/icons/living.webp',
      name: 'Гостиная', bg: 'assets/living-bg.webp', w: 1024, h: 1536,
      fx: 48,
      heroes: []
    },
    kids: {
      icon: 'assets/icons/kids.webp',
      name: 'Детская', bg: 'assets/kids-bg.webp', w: 1024, h: 1536,
      fx: 50,
      heroes: []
    },
    // Коридор: один фон на обложку, правила и выбор комнаты. Таблички стоят на дверях (x, y — центр таблички)
    hall: {
      name: 'Коридор', bg: 'assets/hall-bg.webp', w: 1024, h: 1536,
      fx: 50,
      // мама с сумками (Codex в стиле генератора НЭН), только на обложке; детей добавим рядом
      heroes: [
        { src: 'assets/stickers/mom-cover.webp', x: 51.5, y: 80, w: 40, views: ['cover'] },
        // дети стоят перед мамой, полные сил: старшая с рисунком, младший с соком и без сапога
        { src: 'assets/stickers/kid-girl.webp', x: 29.5, y: 85, w: 27, views: ['cover'] },
        { src: 'assets/stickers/kid-boy.webp', x: 72.5, y: 85.5, w: 22.5, views: ['cover'] }
      ],
      // баблы комнат: x — центр, y — кончик хвостика. Два ряда, внутри безопасной зоны телефона
      doors: [
        { room: 'bath', x: 27, y: 38 },
        { room: 'kitchen', x: 50, y: 35 },
        { room: 'bedroom', x: 73, y: 38 },
        { room: 'living', x: 37, y: 57 },
        { room: 'kids', x: 63, y: 57 }
      ]
    }
  };
  // Пока нет квартиры-хаба, после попапа идем в следующую комнату по порядку
  const ORDER = ['bath', 'kitchen', 'bedroom', 'living', 'kids'];

  /* ===== Обложка (текст из брифа) и правила (черновик в стиле НЭН) ===== */
  const COVER = {
    title: 'Помоги маме прийти в себя',
    button: 'Играть'
  };
  const RULES = {
    title: 'Как играть',
    // первый абзац — текст из брифа, в него вставлена деталь про самокат
    lead: 'Мама только что вернулась домой с двумя детьми, четырьмя пакетами, сменкой, самокатом (самокат не ее, но несет его, конечно, она) и последними 2% сил. Где-то в квартире есть все, что поможет ей немного восстановиться. Главное, не потратить остатки энергии по дороге.',
    steps: [
      'Выбирайте любую комнату: мама все равно нужна везде.',
      'В каждой комнате выберите одну вещь. Передумать не получится, вечер не перематывается.',
      'Одни вещи заряжают маму, другие снова тратят ее на всех вокруг. Рабочий чат, например, только притворяется безобидным.',
      'Когда мама обойдет все пять комнат, станет ясно, в каком состоянии она дотянула до ночи.'
    ],
    button: 'Начать вечер'
  };

  /* ===== Финалы: заголовки из брифа, тексты — черновики ===== */
  // Ловушка отнимает 15%, как бренд дает, но ниже 1% заряд не падает, поэтому итог зависит от порядка.
  // Перебор всех порядков: 5 полезных выборов — 77%, 4 — 47 или 61%, 3 — 17, 31 или 46%, 2 — 1, 16 или 31%, 1 и 0 — 1–16%.
  // Пороги 47 и 17: 4–5 полезных всегда «пришла в себя», 3 всегда «держится», 2 и меньше почти всегда «энергосбережение»
  const FINALS = [
    { min: 47, tier: 'high', title: 'Ей удалось прийти в себя',
      text: 'Вечер получился почти про нее. Завтра снова сад, рабочий чат и шишки к восьми утра, но спать мама легла не на нуле.' },
    { min: 17, tier: 'mid', title: 'Она по-прежнему держится на последних процентах',
      text: 'Пару раз маме почти удалось выдохнуть, но из соседней комнаты снова звали. До утра она дотянет, а вечер можно пройти еще раз.' },
    { min: 0, tier: 'low', title: 'Она окончательно перешла в режим энергосбережения',
      text: 'Весь вечер ушел на других, и мама уснула прямо в джинсах. Хорошо, что вечер можно пройти еще раз и найти, что вернет ей силы.' }
  ];

  const START = 2;
  const state = { charge: START, done: {} };

  const $ = (id) => document.getElementById(id);
  const scene = $('scene');
  const world = $('world');

  /* ===== Типографика: короткие слова не висят в конце строки ===== */
  const nbsp = (s) => s
    .replace(/(?<=^|[\s(«])([а-яёА-ЯЁ]{1,2}|[—–])\s+/g, '$1\u00A0')
    .replace(/(\d)\s+(?=[а-яё%])/g, '$1\u00A0');

  /* ===== Батарейка ===== */
  function renderBattery() {
    const v = Math.max(1, Math.min(100, state.charge));
    $('batteryNum').textContent = `${v}%`;
    // Палочки по 10%: 2% — одна, после первого +15% — две, так рост заметен сразу
    const lit = Math.max(1, Math.ceil(v / 10));
    [...$('batteryBars').children].forEach((bar, i) => bar.classList.toggle('on', i < lit));
    const b = $('battery');
    b.classList.toggle('is-low', v < 10);
    b.classList.toggle('is-mid', v >= 10 && v < 40);
  }

  /* ===== Комната ===== */
  /* Картинка по высоте экрана; если шире экрана — срезаем бока вокруг точки fx */
  let current = 'hall';
  function fit() {
    const room = ROOMS[current];
    const W = scene.clientWidth, H = scene.clientHeight;
    const ww = H * room.w / room.h;
    const left = ww <= W
      ? (W - ww) / 2
      : Math.min(0, Math.max(W - ww, W / 2 - ((room.fx ?? 50) / 100) * ww));
    world.style.left = `${left}px`;
  }
  window.addEventListener('resize', fit);

  function renderRoom(roomId) {
    current = roomId;
    const room = ROOMS[roomId];
    $('roomName').textContent = room.name;
    $('sceneBg').src = room.bg;
    $('sceneBlur').src = room.bg;
    world.style.aspectRatio = `${room.w} / ${room.h}`;
    fit();
    world.querySelectorAll('.hero, .sticker, .door').forEach((n) => n.remove());
    scene.classList.toggle('is-chosen', Boolean(state.done[roomId]));

    room.heroes.filter((h) => !h.views || h.views.includes(view)).forEach((h) => {
      const img = document.createElement('img');
      img.className = 'hero';
      img.src = h.src;
      img.alt = '';
      place(img, h);
      world.appendChild(img);
    });

    (room.doors && view === 'hub' ? room.doors : []).forEach((d) => {
      const done = Boolean(state.done[d.room]);
      const btn = document.createElement('button');
      btn.className = `door${done ? ' is-done' : ''}`;
      btn.type = 'button';
      btn.disabled = done;
      btn.innerHTML = `<img class="door__icon" src="${ROOMS[d.room].icon}" alt=""><span class="door__name">${esc(ROOMS[d.room].name)}</span>${done ? '<span class="door__check" aria-hidden="true">✓</span>' : ''}`;
      btn.setAttribute('aria-label', done ? `${ROOMS[d.room].name}, уже пройдена` : ROOMS[d.room].name);
      btn.style.left = `${d.x}%`;
      btn.style.top = `${d.y}%`;
      btn.addEventListener('click', () => go('room', d.room));
      world.appendChild(btn);
    });

    ITEMS.filter((it) => it.room === roomId).forEach((it) => {
      const btn = document.createElement('button');
      btn.className = `sticker sticker--${it.kind}${it.bubble || it.notice ? ' sticker--text' : ''}${it.still ? ' sticker--still' : ''}`;
      btn.type = 'button';
      btn.dataset.id = it.id;
      const label = it.kind === 'brand' ? `${it.brand}: ${it.product}`
        : it.bubble ? it.bubble.join(' ')
        : it.notice ? `${it.notice.from}: ${it.notice.text}` : 'Предмет в комнате';
      btn.setAttribute('aria-label', label);
      const face = it.bubble
        ? `<span class="bubble bubble--${it.tail || 'down'}">${it.bubble.map(esc).join('<br>')}</span>`
        : it.notice
          ? `<span class="notice"><span class="notice__from">${esc(it.notice.from)}</span><span class="notice__text">${esc(nbsp(it.notice.text))}</span></span>`
          : `<img src="${it.sticker}" alt="" draggable="false">`;
      btn.innerHTML = `${face}<span class="check" aria-hidden="true">✓</span>`;
      place(btn, it);
      btn.style.setProperty('--rot', `${it.rot || 0}deg`);
      if (state.done[roomId] === it.id) btn.classList.add('is-picked');
      btn.addEventListener('click', () => choose(roomId, it));
      world.appendChild(btn);
    });
  }

  function place(node, p) {
    node.style.left = `${p.x}%`;
    node.style.bottom = `${100 - p.y}%`;
    if (p.w) node.style.width = `${p.w}%`;
  }

  /* ===== Выбор: один на комнату, без отмены ===== */
  function choose(roomId, it) {
    if (state.done[roomId]) return;
    state.done[roomId] = it.id;
    state.charge = Math.max(1, state.charge + it.delta);
    scene.classList.add('is-chosen');
    scene.querySelector(`[data-id="${it.id}"]`).classList.add('is-picked');
    renderBattery();
    openSheet(it);
    flashBattery(it.delta);
  }

  /* Сколько заряда прибавилось или ушло, видно только на батарейке в момент выбора */
  function flashBattery(delta) {
    const b = $('battery');
    b.querySelector('.battery-delta')?.remove();
    b.classList.remove('is-gain', 'is-loss');
    if (!delta) return;
    const tag = document.createElement('span');
    tag.className = `battery-delta ${delta > 0 ? 'plus' : 'minus'}`;
    tag.textContent = delta > 0 ? `+${delta}%` : `−${Math.abs(delta)}%`;
    b.appendChild(tag);
    void b.offsetWidth;   // перезапуск анимации, если выбрали подряд
    b.classList.add(delta > 0 ? 'is-gain' : 'is-loss');
    setTimeout(() => { tag.remove(); b.classList.remove('is-gain', 'is-loss'); }, 2600);
  }

  function openSheet(it) {
    const body = $('sheetBody');
    const title = $('sheetTitle');
    // процентов в попапе нет: прибавку или потерю показывает батарейка в шапке
    if (it.delta > 0) title.textContent = 'Маме стало лучше';
    else if (it.delta < 0) title.textContent = nbsp(it.title || 'Стало только хуже');
    else title.textContent = 'Ничего не изменилось';

    if (it.kind === 'brand') {
      body.innerHTML = `
        <div class="packshot${it.photoFit === 'cover' ? ' packshot--cover' : ''}${it.photo ? '' : ' packshot--empty'}">${it.photo
          ? `<img src="${it.photo}" alt="${esc(it.product)}">`
          : `здесь будет фото ${esc(it.brand)}`}</div>
        <p class="brand-line"><b>${esc(it.brand)}</b> ${esc(it.product)}</p>
        <p class="copy">${esc(nbsp(it.text))}</p>
        ${it.promo ? `<p class="promo">${esc(nbsp(it.promo))}</p>` : ''}
        ${it.disclaimer ? `<p class="disclaimer">${esc(nbsp(it.disclaimer))}</p>` : ''}
        <a class="btn" href="${it.url}" target="_blank" rel="noopener">${esc(it.button)}</a>
        <p class="ad">Реклама. Рекламодатель ${esc(it.brand)}, erid —</p>`;
    } else {
      // Редакционные попапы: без кнопок. Все попапы закрываются крестиком или тапом мимо
      body.innerHTML = `<p class="copy copy--last">${esc(nbsp(it.text))}</p>`;
    }
    $('sheetWrap').hidden = false;
    document.body.classList.add('sheet-open');   // шапка с батарейкой над затемнением
    requestAnimationFrame(() => $('sheetWrap').classList.add('is-open'));
  }

  function closeSheet() {
    const w = $('sheetWrap');
    if (w.hidden) return;
    w.classList.remove('is-open');
    document.body.classList.remove('sheet-open');
    setTimeout(() => { w.hidden = true; }, 220);
    // после попапа — обратно в коридор; когда пройдены все пять комнат — финал
    if (view === 'room' && state.done[current]) {
      setTimeout(() => (ORDER.every((r) => state.done[r]) ? showFinal() : go('hub')), 450);
    }
  }

  /* ===== Финал: заряд, разбор вечера, витрина всех товаров ===== */
  function showFinal() {
    const v = Math.max(1, Math.min(100, state.charge));
    const f = FINALS.find((x) => v >= x.min);
    const shop = ITEMS.filter((it) => it.kind === 'brand').map((it) => `
      <article class="shop__item">
        <div class="shop__img${it.photo && it.photoFit === 'cover' ? ' shop__img--cover' : ''}"><img src="${it.photo || it.sticker}" alt="" loading="lazy"></div>
        <div class="shop__body">
          <p class="shop__brand"><b>${esc(it.brand)}</b> ${esc(it.product)}</p>
          ${it.promo ? `<p class="shop__promo">${esc(nbsp(it.promo))}</p>` : ''}
          ${it.disclaimer ? `<p class="shop__note">${esc(nbsp(it.disclaimer))}</p>` : ''}
          <a class="btn btn--sm" href="${it.url}" target="_blank" rel="noopener">${esc(it.button)}</a>
          <p class="ad">Реклама. Рекламодатель ${esc(it.brand)}, erid —</p>
        </div>
      </article>`).join('');
    $('finalCard').innerHTML = `
      <img class="final__mom final__mom--${f.tier}" src="assets/stickers/mom-${f.tier}.webp" alt="">
      <div class="final__score final__score--${f.tier}">
        <span class="final__pct">${v}%</span>
        <span class="final__label">заряд к концу вечера</span>
      </div>
      <h2 class="final__title">${esc(nbsp(f.title))}</h2>
      <p class="final__text">${esc(nbsp(f.text))}</p>
      <h3 class="final__h">${nbsp('Что помогает маме прийти в себя')}</h3>
      <div class="shop">${shop}</div>
      <button class="btn final__again" type="button" id="again">Пройти еще раз</button>`;
    $('again').addEventListener('click', restart);
    view = 'final';
    document.body.dataset.view = 'final';
    $('toHall').hidden = true;
    const fin = $('final');
    fin.hidden = false;
    fin.scrollTop = 0;
    requestAnimationFrame(() => fin.classList.add('is-open'));
    history.replaceState(null, '', '#final');
  }

  function restart() {
    state.charge = START; state.done = {};
    const fin = $('final');
    fin.classList.remove('is-open');
    setTimeout(() => { fin.hidden = true; }, 250);
    renderBattery();
    go('hub');
  }

  /* ===== Экраны ===== */
  let view = 'cover';
  function renderIntro() {
    const card = $('introCard');
    if (view === 'cover') {
      card.innerHTML = `
        <button class="btn btn--cover" type="button" data-go="rules">${esc(COVER.button)}</button>`;
    } else {
      card.innerHTML = `
        <h2 class="intro__title intro__title--sm">${esc(RULES.title)}</h2>
        <p class="intro__text">${esc(nbsp(RULES.lead))}</p>
        <ol class="rules">${RULES.steps.map((t) => `<li>${esc(nbsp(t))}</li>`).join('')}</ol>
        <button class="btn" type="button" data-go="hub">${esc(RULES.button)}</button>`;
    }
  }
  function apply(v, roomId) {
    view = v;
    renderRoom(v === 'room' ? roomId : 'hall');
    const intro = $('intro');
    intro.hidden = !(v === 'cover' || v === 'rules');
    intro.classList.toggle('intro--cover', v === 'cover');
    $('coverHead').hidden = v !== 'cover';
    if (!intro.hidden) renderIntro();
    document.body.dataset.view = v;
    $('toHall').hidden = v !== 'room';
    history.replaceState(null, '', v === 'room' ? `#${roomId}` : v === 'cover' ? location.pathname + location.search : `#${v}`);
  }
  function go(v, roomId) {
    scene.classList.add('is-switching');
    setTimeout(() => {
      apply(v, roomId);
      scene.classList.remove('is-switching');
    }, 280);
  }
  $('intro').addEventListener('click', (e) => {
    const b = e.target.closest('[data-go]');
    if (b) go(b.dataset.go);
  });
  $('toHall').addEventListener('click', () => go('hub'));

  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  $('sheetWrap').addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeSheet();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSheet(); });

  // Превью: сброс по двойному касанию названия игры в шапке, чтобы пробовать разные предметы
  $('gameTitle').addEventListener('dblclick', () => {
    state.charge = START; state.done = {};
    renderBattery(); apply(view === 'room' ? 'room' : view, current);
  });

  // высота шапки разная на телефоне и десктопе: «Коридор», финал и правила встают под нее
  const head = document.querySelector('.plate--top');
  new ResizeObserver(() => {
    const h = head.offsetHeight;
    if (h) document.documentElement.style.setProperty('--head-h', `${h}px`);
  }).observe(head);

  for (let i = 0; i < 10; i++) $('batteryBars').appendChild(document.createElement('i'));
  ITEMS.forEach((it) => { if (it.photo) new Image().src = it.photo; });
  renderBattery();
  // Превью: #kitchen или #bedroom в адресе открывает сразу эту комнату
  // #rules, #hub, #bath… открывают нужный экран, без адреса — обложка
  const fromHash = location.hash.slice(1);
  const isFinal = fromHash.startsWith('final');
  if (ROOMS[fromHash] && fromHash !== 'hall') apply('room', fromHash);
  else if (fromHash === 'rules' || fromHash === 'hub') apply(fromHash);
  else apply(isFinal ? 'hub' : 'cover');
  if (fromHash === 'final') {
    // превью финала: #final открывает его со случайными выборами, #final-high / -mid / -low — нужный
    ORDER.forEach((r) => { const opts = ITEMS.filter((x) => x.room === r); state.done[r] = opts[Math.floor(Math.random() * opts.length)].id; });
  }
  const forced = { 'final-high': 'brand', 'final-low': 'trap' }[fromHash];
  if (forced || fromHash === 'final-mid') {
    ORDER.forEach((r, i) => {
      const want = fromHash === 'final-mid' ? (i < 3 ? 'brand' : 'trap') : forced;
      state.done[r] = ITEMS.find((x) => x.room === r && x.kind === want).id;
    });
  }
  if (isFinal && ORDER.every((r) => state.done[r])) {
    state.charge = START;
    ORDER.forEach((r) => { state.charge = Math.max(1, state.charge + ITEMS.find((x) => x.id === state.done[r]).delta); });
    renderBattery();
    showFinal();
  }
})();

({
  block: 'b-page',
  title: 'Simple CV page with BEM',
  head: [
    { elem: 'css', url: 'index.css'},
    { elem: 'core', block: 'i-jquery'},
    { elem: 'js', url: 'index.js' }
  ],
  content: [
    {
      attrs: { style: 'padding: 10px 25px 1px 50px;' },
      content: {
        block: 'b-link',
        mods: { inner: 'yes' },
        url: 'https://github.com/Shuhrat/bem-cv',
        content: [
          {
            block: 'b-icon',
            url: 'https://github.com/favicon.png'
          },
          {
            elem: 'inner',
            content: 'Simple CV\'s BEM blocks'
          }
        ]
      }
    },
    {
      block: 'b-question-layout',
      title: 'Общие вопросы',
      data: [
        {
          question : 'Фамилия, имя, отчество',
          answer: 'Шадмонкулов Шухрат Салохидинович'
        },
        {
          question : 'Е-mail',
          answer: {
            block: 'b-link',
            url: 'mailto:shuhrat@emfy.com',
            content: 'shuhrat@emfy.com',
            atts: {
              subject: 'Hello from Yandex dudes'
            }
          }
        },
        {
          question : 'Телефон',
          answer: '+7(903) 218 86 62'
        },
        {
          question : 'Год рождения',
          answer: '1985'
        },
        {
          question : 'Город, в котором живёте',
          answer: 'Москва'
        },
        {
          question: 'Вуз, факультет, специальность, кафедра',
          answer: {
            block: 'b-text-list',
            items: [
              { content: 'РУДН' },
              { content: 'Факультет физико-математических и естественных наук' },
              { content: 'Кафедра информационных технологий' }
            ]
          }
        },
        {
          question: 'Год окончания вуза',
          answer: '2011'
        },
        {
          question : 'На каком уровне владеете английским языком?',
          answer: 'Upper-Intermediate'
        },
        {
          question: 'Чего вы ожидаете от участия в Школе?',
          answer: [
            {
              block: 'b-text',
              content: 'Единственный способ стать умнее &ndash; играть с более умным противником.<br>Основы шахмат, 1883 г.',
              attrs: {
                style: 'text-align: right;'
              }
            },
            '<br>',
            {
              block: 'b-text',
              content: 'Повышение квалификации, приобретение опыта и знакомство с интересными людьми'
            }
          ]
        },
        {
          question: 'Откуда вы о нас узнали?',
          answer: 'На Я.Субботнике, 28/07/2012'
        },
        {
          question: 'Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?',
          answer: {
          block: 'b-text-list',
          items: [
            { content: 'На стажировке: всё свободное, включая сб. и вс.' },
            { content: 'На работе в Яндексе: сколько потребуется' }
          ]
        }
        }
      ]
    },
    {
      block: 'b-question-layout',
      title: 'Опыт разработки',
      data: [
        {
          question: 'Расскажите нам о вашем опыте разработки. Ничего не упускайте: это может быть как серьезный интерфейс, так и просто домашняя страничка.',
          answer: [
            {
              block: 'b-text-list',
              items: [
                {
                  block: 'b-link',
                  url:'http://interpremium.ru',
                  content: 'Интернет магазин "Интерпремиум"'
                },
                'Backend архитектура, разработка модулей под Ubercart, программирование фронтэнда так и бэкэнда'
              ]
            },

            {
              block: 'b-text-list',
              items: [
                {
                  block: 'b-link',
                  content: 'Панель управления "Multishop"',
                  mods: {pseudo: 'yes'}
                },
                'Разработал систему(на Друпале) для централизованного контроля несколькими интернет магазинами, где Multishop вступает в роле сервера а магазини как клиент.'
              ]
            },

            {
              block: 'b-image-grid',
              data: [
                {
                  block: 'b-link',
                  url: 'http://farm9.staticflickr.com/8421/7800931300_1a39b3d666_b.jpg',
                  mods: { fancybox: 'yes' },
                  content: {
                    tag: 'img',
                    attrs: {
                      src: 'http://farm9.staticflickr.com/8421/7800931300_1a39b3d666_s.jpg'
                    }
                  }
                },
                {
                  block: 'b-link',
                  url: 'http://farm9.staticflickr.com/8288/7800931032_1fdfcf6aba_b.jpg',
                  mods: { fancybox: 'yes' },
                  content: {
                    tag: 'img',
                    attrs: {
                      src: 'http://farm9.staticflickr.com/8288/7800931032_1fdfcf6aba_s.jpg'
                    }
                  }
                },
                {
                  block: 'b-link',
                  url: 'http://farm9.staticflickr.com/8431/7800930260_5d739a6f00_b.jpg',
                  mods: { fancybox: 'yes' },
                  content: {
                    tag: 'img',
                    attrs: {
                      src: 'http://farm9.staticflickr.com/8431/7800930260_5d739a6f00_s.jpg'
                    }
                  }
                },
                {
                  block: 'b-link',
                  url: 'http://farm9.staticflickr.com/8290/7800929802_757b792ba0_b.jpg',
                  mods: { fancybox: 'yes' },
                  content: {
                    tag: 'img',
                    attrs: {
                      src: 'http://farm9.staticflickr.com/8290/7800929802_757b792ba0_s.jpg'
                    }
                  }
                },
                {
                  block: 'b-link',
                  url: 'http://farm8.staticflickr.com/7255/7800929382_6c800fe860_b.jpg',
                  mods: { fancybox: 'yes' },
                  content: {
                    tag: 'img',
                    attrs: {
                      src: 'http://farm8.staticflickr.com/7255/7800929382_6c800fe860_s.jpg'
                    }
                  }
                }
              ]
            },
            {
              block: 'b-text',
              content: [
                'Принимал участие во всех проектах ',
                {
                  block: 'b-link',
                  url: 'http://emfy.com',
                  content: 'Emfy',
                  target: '_blank'
                }
              ]
            }
          ]
        },
        {
          question : 'Какие языки программирования, фреймворки и технологии вы использовали? Сложились ли у вас личные предпочтения?',
          answer: {
            block: 'b-text-list',
            items: [
              'Языки: <strong>C, Delphi(Turbo Pascal), php, js</strong>',
              'Библиотеки/Фреймворки/технологии: <strong>Drupal CMF, CodeIgniter, jQuery, Backbone, Bootstrap, XML/XSLT, Ajax</strong>',
              'Все зависить от поставленной задачи, для быстой веб-разработки предпочетаю Drupal CMF'
            ]
          }
        },
        {
          question : 'Какие редакторы и среды разработки вы использовали? Чем обычно пользуетесь?',
          answer: {
            block: 'b-text-list',
            items: [
              '<strong>Delphi, e-texteditor, textmate, Sublime Text2, phpStorm</strong>',
              'Раньше на работе использовал e-texteditor a дома textmate, обожаю их минимализм, за выходом Sublime Text2 начал работать на нем пока не попробовал phpStorm'
            ]
          }
        },
        {
          question : 'С какими ОС приходилось сталкиваться? Для каких целей вы их использовали?',
          answer: {
            block: 'b-text-list',
            items: [
              [
                {
                  tag: 'strong',
                  content: 'MacOS'
                },
                ' домашный компютер, использую для учебы(скринкасты, лекции, программирование), развлечение'
              ],
              [
                {
                  tag: 'strong',
                  content: 'Windows'
                },
                ' на работе'
              ],
              [
                {
                  tag: 'strong',
                  content: 'CentOS'
                },
                ' на работе в качестве веб-сервера,'
              ]
            ]
          }
        },
        {
          question : 'Приходилось ли вам пользоваться системами контроля версий? Если да, то какими? Какая из них вам нравится больше всего?',
          answer: [
            'Использую только ',
            {
              block: 'b-link',
              url:'http://www.git.org/',
              content: 'GIT'
            }
          ]
        },
        {
          question : 'Использовали ли вы системы постановки и ведения задач?',
          answer: [
            {
              block: 'b-link',
              url:'http://www.wunderlist.com/',
              content: 'Wunderlist',
              target: '_blank'
            },
            '&ndash; повседневно <br>',
            {
              block: 'b-link',
              url:'http://teamer.ru',
              content: 'Teamer',
              target: '_blank'
            },
            '&ndash; на работе'
          ]
        },
        {
          question : 'Какие полезные для фронтенд-разработчика ресурсы вы используете и можете посоветовать?',
          answer: [
            {
              block: 'b-text-list',
              items: [
                {
                  block: 'b-link',
                  url: 'http://shichuan.github.com/javascript-patterns/',
                  content: 'JavaScript Patterns Collection',
                  target: '_blank'
                },
                {
                  block: 'b-link',
                  url:'http://net.tutsplus.com/',
                  content: 'JavaScript Гарден',
                  target: '_blank'
                },
                {
                  block: 'b-link',
                  url:'http://shamansir.github.com/JavaScript-Garden/',
                  content: 'net tuts+',
                  target: '_blank'
                },
                {
                  block: 'b-link',
                  url: 'http://www.jspatterns.com/',
                  content: 'JSPatterns.com',
                  target: '_blank'
                },
                {
                  block: 'b-link',
                  url:'http://addyosmani.com/blog/',
                  content: 'Блог Addy Osmani',
                  target: '_blank'
                },
                {
                  block: 'b-link',
                  url:'http://noteskeeper.ru/',
                  content: 'Блог Владимира Кузнецова'
                },
                {
                  block: 'b-link',
                  url:'http://chikuyonok.ru/',
                  content: 'Блог Сергея Чикуёнка',
                  target: '_blank'
                },
                {
                  block: 'b-link',
                  url:'http://habrahabr.ru/',
                  content: 'Хабр',
                  target: '_blank'
                },
                {
                  block: 'b-link',
                  url:'http://www.smashingmagazine.com',
                  content: 'Smashingmagazine',
                  target: '_blank'
                },
                {
                  block: 'b-link',
                  url:'http://clubs.ya.ru/ui/',
                  content: 'Я.Клуб "Разработка интерфейсов"',
                  target: '_blank'
                },
                {
                  block: 'b-link',
                  url:'http://www.artgorbunov.ru/bb/soviet',
                  content:'Советы Дизайн-бюро Артёма Горбунова',
                  target: '_blank'
                }
              ]
            }
          ]
        },
        {
          question : 'Работали ли вы где-нибудь? Какие у вас были должностные обязанности? Есть ли опыт работы в команде?',
          answer: [
            'Работаю программистом в ',
            {
              block: 'b-link',
              url: 'http://emfy.com',
              content: 'Emfy',
              target: '_blank'
            }
          ]
        }
      ]
    },
    {
      block: 'b-question-layout',
      title: ' Технические вопросы',
      data: [
        {
          question: 'Перечислите известные вам инструменты и приёмы для отладки кода в разных браузерах.',
          answer: {
            block: 'b-text-list',
            items: [
              'Firebug',
              'Web Developer Toolbar',
              'Firebug Lite',
              'Webkit Developer Tools',
              'IE Developer Toolbar',
              {
                block: 'b-link',
                url: 'http://jsbeautifier.org/',
                content: 'jsbeautifier'
              }
            ]
          }
        },
        {
          question: 'Опишите своими словами, что происходит в браузерах при клике на ссылку yandex.ru (полнота ответа — на ваше усмотрение).',
          answer: [
            'Если в браузере включена поддержка джаваскрипта, то вызываются соответствующие события(mousedown, mouseup, onclick) после происходить "всплытие" вызова события к родительским элементам и так до корневого элемента DOM, если вызов нигде не останавливается то браузер запрашивает соответствующий урл. ',
            'Происходить это следующим образом, система ищет в файле hosts ip адрес домена, если находить то запрашивает урл по найденному ip адресу, иначе запрашивает ip адрес домена у DNS сервера ',
            'Итак у нас есть ip адрес домена, браузер формирует пакет добавляет туда куча информации(cookie, encoding, etc) и передает маршрутизатору то другому маршрутизатору пока цепочко не достигнет адресата или истечет время жизни пакета, ',
            'когда сервер получить пакет, он формирует другой пакет и отправляет браузеру'
          ]
        },
        {
          question: 'Предположим, что мы представляем автосалон по продаже японских и немецких автомобилей. У нас есть базовые классы и примеры их использования. Допишите недостающий код.',
          answer: {
            block: 'b-highlighter',
            content: {
              block: 'b-code',
              language: 'javascript',
              content: [
                "/*", '<br>',
                " * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach", '<br>',
                " */", '<br>',
                "if (typeof Array.prototype.forEach !== 'function') {", '<br>',
                "  Array.prototype.forEach = function (callback, thisArg) {", '<br>',
                "    var T, k;", '<br>',
                "    if (this == null) {", '<br>',
                "      throw new TypeError('this is null or not defined');", '<br>',
                "    }", '<br>',
                "", '<br>',
                "    var O = Object(this);", '<br>',
                "    var len = O.length >>> 0; // Hack to convert O.length to a UInt32", '<br>',
                "", '<br>',
                "    if ({}.toString.call(callback) != '[object Function]') {", '<br>',
                "      throw new TypeError(callback + ' is not a function');", '<br>',
                "    }", '<br>',
                "", '<br>',
                "    if (thisArg) {", '<br>',
                "      T = thisArg;", '<br>',
                "    }", '<br>',
                "    k = 0;", '<br>',
                "    while (k < len) {", '<br>',
                "      var kValue;", '<br>',
                "      if (k in O) {", '<br>',
                "        kValue = O[ k ];", '<br>',
                "        callback.call(T, kValue, k, O);", '<br>',
                "      }", '<br>',
                "      k++;", '<br>',
                "    }", '<br>',
                "  };", '<br>',
                "}", '<br>',
                "", '<br>',
                "/*", '<br>',
                " * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/filter", '<br>',
                " */", '<br>',
                "if (typeof Array.prototype.filter !== 'function') {", '<br>',
                "  Array.prototype.filter = function (fun /*, thisp */) {", '<br>',
                "    'use strict';", '<br>',
                "", '<br>',
                "    if (this === void 0 || this === null)", '<br>',
                "      throw new TypeError();", '<br>',
                "", '<br>',
                "    var t = Object(this);", '<br>',
                "    var len = t.length >>> 0;", '<br>',
                "    if (typeof fun !== 'function')", '<br>',
                "      throw new TypeError();", '<br>',
                "", '<br>',
                "    var res = [];", '<br>',
                "    var thisp = arguments[1];", '<br>',
                "    for (var i = 0; i < len; i++) {", '<br>',
                "      if (i in t) {", '<br>',
                "        var val = t[i]; // in case fun mutates this", '<br>',
                "        if (fun.call(thisp, val, i, t))", '<br>',
                "          res.push(val);", '<br>',
                "      }", '<br>',
                "    }", '<br>',
                "", '<br>',
                "    return res;", '<br>',
                "  };", '<br>',
                "}", '<br>',
                "", '<br>',
                "/*", '<br>',
                " * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/map", '<br>',
                " */", '<br>',
                "if (typeof Array.prototype.map !== 'function') {", '<br>',
                "  Array.prototype.map = function (callback, thisArg) {", '<br>',
                "    var T, A, k;", '<br>',
                "", '<br>',
                "    if (this == null) {", '<br>',
                "      throw new TypeError(' this is null or not defined');", '<br>',
                "    }", '<br>',
                "", '<br>',
                "    var O = Object(this);", '<br>',
                "    var len = O.length >>> 0;", '<br>',
                "    if ({}.toString.call(callback) != '[object Function]') {", '<br>',
                "      throw new TypeError(callback + ' is not a function');", '<br>',
                "    }", '<br>',
                "", '<br>',
                "    if (thisArg) {", '<br>',
                "      T = thisArg;", '<br>',
                "    }", '<br>',
                "", '<br>',
                "    A = new Array(len);", '<br>',
                "    k = 0;", '<br>',
                "    while (k < len) {", '<br>',
                "      var kValue, mappedValue;", '<br>',
                "      if (k in O) {", '<br>',
                "        kValue = O[ k ];", '<br>',
                "        mappedValue = callback.call(T, kValue, k, O);", '<br>',
                "        A[ k ] = mappedValue;", '<br>',
                "      }", '<br>',
                "      k++;", '<br>',
                "    }", '<br>',
                "", '<br>',
                "    return A;", '<br>',
                "  };", '<br>',
                "}", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Создает экземпляр Машины", '<br>',
                " * @this {Car}", '<br>',
                " * @param {string} manufacturer Производитель", '<br>',
                " * @param {string} model Модель", '<br>',
                " * @param {number} year Год производство", '<br>',
                " */", '<br>',
                "function Car(manufacturer, model, year) {", '<br>',
                "  if (!(this instanceof Car)) {", '<br>',
                "    return new Car(manufacturer, model, year);", '<br>',
                "  }", '<br>',
                "", '<br>',
                "  this.manufacturer = manufacturer;", '<br>',
                "  this.model = model;", '<br>',
                "  this.year = year || (function(){", '<br>',
                "    var date = new Date();", '<br>',
                "    return date.getFullYear();", '<br>',
                "  }());", '<br>',
                "}", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Objects toString method, overwritten to return car information", '<br>',
                " * @return {String}", '<br>',
                " */", '<br>',
                "Car.prototype.toString = function () {", '<br>',
                "  return this.getInfo();", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Information about car.", '<br>',
                " * returns car manufacturer, model, and year", '<br>',
                " * @return {String}", '<br>',
                " */", '<br>',
                "Car.prototype.getInfo = function () {", '<br>',
                "  return this.manufacturer + ' ' + this.model + ' ' + this.year;", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Detailed information about car", '<br>',
                " * @return {String}", '<br>',
                " */", '<br>',
                "Car.prototype.getDetailedInfo = function () {", '<br>',
                "  return 'Производитель: ' + this.manufacturer + '. Модель: ' + this.model + '. Год: ' + this.year;", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Sets car price", '<br>',
                " * Price is an instance of Price", '<br>',
                " * @see Price", '<br>',
                " * @param value", '<br>',
                " */", '<br>',
                "Car.prototype.setPrice = function (value) {", '<br>',
                "  try {", '<br>',
                "    this.price = new Price(value);", '<br>',
                "  } catch(e) {", '<br>',
                "  }", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Создает экземпляр Автосалона", '<br>',
                " * @this {CarDealer}", '<br>',
                " * @param {string} name Название автосалона", '<br>',
                " */", '<br>',
                "function CarDealer(name) {", '<br>',
                "  if (!(this instanceof CarDealer)) {", '<br>',
                "    return new CarDealer(name);", '<br>',
                "  }", '<br>',
                "", '<br>',
                "  this.name = name;", '<br>',
                "  this.cars = [];", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Adds one or more cars to the object", '<br>',
                " * Method can be chained", '<br>',
                " * @see Car", '<br>',
                " * @param {object} car Car object", '<br>',
                " * @return {self}", '<br>',
                " */", '<br>',
                "CarDealer.prototype.add = function() {", '<br>',
                "  var self = this,", '<br>',
                "      args = Array.prototype.slice.call(arguments);", '<br>',
                "", '<br>',
                "  args.forEach(function(car) {", '<br>',
                "    if (!(car instanceof Car)) {", '<br>',
                "      throw {", '<br>',
                "        'name': 'TypeError',", '<br>',
                "        'message': 'Wrong argument type'", '<br>',
                "      }", '<br>',
                "    }", '<br>',
                "", '<br>',
                "    this.cars.push(car);", '<br>',
                "  }, self);", '<br>',
                "", '<br>',
                "  return self;", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Установить цену на машину", '<br>',
                " * @see Car, Price", '<br>',
                " * @param {string} car идентификатор машины", '<br>',
                " * @param {string} price стоимость", '<br>',
                " */", '<br>',
                "CarDealer.prototype.setPrice = function(id, price) {", '<br>',
                "  var self = this;", '<br>',
                "", '<br>',
                "  self.cars.forEach(function (car) {", '<br>',
                "    if (car.getInfo() === id) {", '<br>',
                "      car.setPrice(price);", '<br>',
                "    }", '<br>',
                "  });", '<br>',
                "", '<br>',
                "  return self;", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * List cars' information of the object", '<br>',
                " * @see Car", '<br>',
                " * @return {String}", '<br>',
                " */", '<br>',
                "CarDealer.prototype.list = function() {", '<br>',
                "  var self = this,", '<br>',
                "      cars = [];", '<br>',
                "", '<br>',
                "  cars = self.cars.map(function (car) {", '<br>',
                "    return car.getInfo()", '<br>',
                "  });", '<br>',
                "", '<br>',
                "  return cars.join(', ');", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Lists cars filtered by Country", '<br>',
                " * applies provided function getCountry to the car object to filter", '<br>',
                " * @see Car", '<br>',
                " * @see getCountry (function)", '<br>',
                " * @param country", '<br>',
                " * @return {String}", '<br>',
                " */", '<br>',
                "CarDealer.prototype.listByCountry = function(country) {", '<br>',
                "  var self = this,", '<br>',
                "      cars = [];", '<br>',
                "", '<br>',
                "  cars = self.cars.filter(function (car) {", '<br>',
                "    return getCountry.call(car) === country;", '<br>',
                "  });", '<br>',
                "", '<br>',
                "  return cars.join(', ');", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Lists cars with converted to the rouble prices", '<br>',
                " * @see Car, Price", '<br>',
                " * @return {String}", '<br>',
                " */", '<br>',
                "CarDealer.prototype.listInRouble = function() {", '<br>',
                "  var self = this,", '<br>',
                "      cars = [];", '<br>',
                "", '<br>',
                "  cars = self.cars.map(function (car) {", '<br>',
                "    return car.getInfo() + ' ' + car.price.inRouble();", '<br>',
                "  });", '<br>',
                "", '<br>',
                "  return cars.join(', ');", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * @return {String}", '<br>',
                " */", '<br>',
                "function getCountry() {", '<br>',
                "  switch (this.manufacturer.toLowerCase()) {", '<br>',
                "    case 'bmw':", '<br>',
                "    case 'audi':", '<br>',
                "      return 'Germany';", '<br>',
                "", '<br>',
                "    case 'toyota':", '<br>',
                "      return 'Japan';", '<br>',
                "  }", '<br>',
                "};", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Price object", '<br>',
                " * @param value", '<br>',
                " * @return {Price}", '<br>',
                " * @constructor", '<br>',
                " */", '<br>',
                "function Price(value) {", '<br>',
                "  if (!(this instanceof Price)) {", '<br>',
                "    return new Price(value);", '<br>',
                "  }", '<br>',
                "", '<br>',
                "  if (/^(€|¥)[0-9]+$/.test(value)) {", '<br>',
                "    this.symbol = value.charAt(0);", '<br>',
                "    this.price = value.slice(1);", '<br>',
                "    this.currency = (this.symbol === '€') ? 'EUR' : 'JPY';", '<br>',
                "  } else {", '<br>',
                "    throw {", '<br>',
                "      'name': 'TypeError',", '<br>',
                "      'message': 'Price can be set only in two currencies: JPY and EUR.'", '<br>',
                "    }", '<br>',
                "  }", '<br>',
                "}", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Price formatter", '<br>',
                " * @param value", '<br>',
                " * @return {String}", '<br>',
                " */", '<br>',
                "Price.prototype.formatPrice = function(value) {", '<br>',
                "  value = value || this.price;", '<br>',
                "  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');", '<br>',
                "}", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Objects toString method, overwritten to return formatted price", '<br>',
                " * @return {String}", '<br>',
                " */", '<br>',
                "Price.prototype.toString = function() {", '<br>',
                "  return this.symbol + this.formatPrice();", '<br>',
                "}", '<br>',
                "", '<br>',
                "/**", '<br>',
                " * Convert price to rouble", '<br>',
                " * @return {String}", '<br>',
                " */", '<br>',
                "Price.prototype.inRouble = function() {", '<br>',
                "  var EUR_rate = 39.6028,", '<br>',
                "      JPY_rate = 41.1459 / 100,", '<br>',
                "      price;", '<br>',
                "", '<br>',
                "  price = this.price * ((this.currency === 'EUR') ? EUR_rate : JPY_rate);", '<br>',
                "  return this.formatPrice(price.toFixed(2)) + ' руб.'", '<br>',
                "};"
              ]
            }
          }
        },
        {
          question: 'Найдите все текстовые файлы (*.txt), в имени которых содержится «yandex», а в содержимом — «школа разработки интерфейсов».',
          answer: {
            block: 'b-highlighter',
            content: {
              block: 'b-code',
              language: 'bash',
              content: "grep -l 'школа разработки интерфейсов' *yandex*.txt"
            }
          }
        },
        {
          question: 'Дана программа, реализованная одновременно на Bash, Python и Perl. Программа принимает произвольное количество аргументов и печатает их количество. Нужно добавить опцию -v для verbose-режима, в котором дополнительно выводится значение каждого из аргументов.',
          answer: [
            {
              block: 'b-highlighter',
              content: {
                block: 'b-code',
                language: 'bash',
                content: [
                  ' #!/usr/bin/env bash', '<br>',
                  '', '<br>',
                  'usage() {', '<br>',
                  'cat << EOF', '<br>',
                  'Usage: printargs.sh [OPTIONS] [ARGUMENTS]', '<br>',
                  '  Print the number of arguments.', '<br>',
                  '', '<br>',
                  'OPTIONS:', '<br>',
                  '  -h      print help message', '<br>',
                  '  -m MSG  custom message', '<br>',
                  '  -v MSG  custom message [verbose mode]', '<br>',
                  '', '<br>',
                  'Examples:', '<br>',
                  '  printargs.sh a b c', '<br>',
                  '  printargs.sh -m \'Arguments count: \' a b c', '<br>',
                  '  printargs.sh -v a b c', '<br>',
                  '  printargs.sh -h', '<br>',
                  '', '<br>',
                  'EOF', '<br>',
                  '}', '<br>',
                  '', '<br>',
                  'while getopts "hmv:" OPTION', '<br>',
                  'do', '<br>',
                  '    case $OPTION in', '<br>',
                  '        h)', '<br>',
                  '            usage', '<br>',
                  '            exit 1', '<br>',
                  '            shift;;', '<br>',
                  '        m)', '<br>',
                  '            MESSAGE=$OPTARG', '<br>',
                  '            shift;shift;;', '<br>',
                  '        v)', '<br>',
                  '            VERBOSE=true', '<br>',
                  '            shift;;', '<br>',
                  '    esac', '<br>',
                  'done', '<br>',
                  '', '<br>',
                  'COUNT=0', '<br>',
                  '', '<br>',
                  'for ARG in $@; do', '<br>',
                  '  if [[ $VERBOSE ]]; then', '<br>',
                  '    echo $ARG', '<br>',
                  '  fi', '<br>',
                  '', '<br>',
                  '  let COUNT+=1', '<br>',
                  'done', '<br>',
                  '', '<br>',
                  'if [[ "$MESSAGE" != "" ]]; then', '<br>',
                  '    echo $MESSAGE', '<br>',
                  'fi', '<br>',
                  '', '<br>',
                  'echo $COUNT'
                ]
              }
            },
            '<hr>',
            {
              block: 'b-highlighter',
              content: {
                block: 'b-code',
                language: 'perl',
                content: [
                  '#!/usr/bin/env perl', '<br>',
                  '', '<br>',
                  'use strict;', '<br>',
                  'use Getopt::Long;', '<br>',
                  'use Pod::Usage;', '<br>',
                  '', '<br>',
                  'my $help;', '<br>',
                  'my $message = /'/';', '<br>',
                  'my $verbose;', '<br>',
                  '', '<br>',
                  '@ARGV and GetOptions(', '<br>',
                  '    "h" => \$help,', '<br>',
                  '    "m:s" => \$message,', '<br>',
                  '    "v" => \$verbose', '<br>',
                  ') or pod2usage(1);', '<br>',
                  'pod2usage(-verbose => 2, -exitval => 2) if $help;', '<br>',
                  '', '<br>',
                  'my $count = 0;', '<br>',
                  '', '<br>',
                  'foreach $a(@ARGV) {', '<br>',
                  '    if($verbose != 0) {', '<br>',
                  '        print $a . "\\n";', '<br>',
                  '    }', '<br>',
                  '    $count++;', '<br>',
                  '}', '<br>',
                  '', '<br>',
                  'if($message ne "") {', '<br>',
                  '    print($message . "\\n");', '<br>',
                  '}', '<br>',
                  '', '<br>',
                  'print($count . "\\n");', '<br>',
                  '', '<br>',
                  '__END__', '<br>',
                  '', '<br>',
                  '=head1 NAME', '<br>',
                  '', '<br>',
                  '    printargs.pl - Print the number of arguments.', '<br>',
                  '', '<br>',
                  '=head1 SYNOPSIS', '<br>',
                  '', '<br>',
                  '    printargs.pl [options] [arguments]', '<br>',
                  '', '<br>',
                  '=head1 OPTIONS', '<br>',
                  '', '<br>',
                  '    -h      Show help message.', '<br>',
                  '', '<br>',
                  '    -m MSG  Specify a custom message.', '<br>',
                  '', '<br>',
                  '    -v      Verbose mode, list all accepted arguments.', '<br>',
                  '', '<br>',
                  '=head1 EXAMPLE', '<br>',
                  '', '<br>',
                  '    printargs.sh a b c', '<br>',
                  '', '<br>',
                  '    printargs.sh -m \'Arguments count: \' a b c', '<br>',
                  '', '<br>',
                  '    printargs.sh -v a b c', '<br>',
                  '', '<br>',
                  '    printargs.sh -h'
                ]
              }
            },
            '<hr>',
            {
              block: 'b-highlighter',
              content: {
                block: 'b-code',
                language: 'python',
                content: [
                  '#!/usr/bin/env python', '<br>',
                  '', '<br>',
                  'import argparse', '<br>',
                  '', '<br>',
                  'parser = argparse.ArgumentParser(description=\'Print the number of arguments.\')', '<br>',
                  'parser.add_argument(\'arguments\', metavar=\'ARG\', type=str, nargs=\'*\', help=\'some arguments\')', '<br>',
                  'parser.add_argument(\'-m\', dest=\'message\', default=\'\', help=\'custom message\')', '<br>',
                  'parser.add_argument(\'-v\', dest=\'verbose\', default=\'\', help=\'verbose model\')', '<br>',
                  '', '<br>',
                  'args = parser.parse_args()', '<br>',
                  '', '<br>',
                  'count = 0', '<br>',
                  '', '<br>',
                  'for a in args.arguments:', '<br>',
                  '    if  args.verbose != \'\':', '<br>',
                  '      print(a)', '<br>',
                  '    count += 1', '<br>',
                  '', '<br>',
                  'if args.message != \'\':', '<br>',
                  '    print(args.message)', '<br>',
                  '', '<br>',
                  'print(count)'
                ]
              }
            }
          ]
        },
        {
          question: 'Расскажите, в каком объёме и при каких обстоятельствах вы изучали следующие темы: языки программирования (императивные/декларативные, разные системы типов), структуры (классы, структуры данных, примитивные типы), парадигмы (события, ООП, параллельность/асинхронность, кеширование), алгоритмы (парсинг, сортировка, поиск), паттерны.',
          answer: 'Программирования, алгоритмы, структуры, парадигмы: в рамках университетской программы, допольнительно смотрю видео уроки/лекции Lullabot, Lyunda.com, Pluralsight, Standford, MIT'
        }
      ]
    },
    {
      block: 'i-metrika',
      counter: 16513258
    }
  ]
})

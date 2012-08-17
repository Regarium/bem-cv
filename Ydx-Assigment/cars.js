/*
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach
 */
if (typeof Array.prototype.forEach !== 'function') {
  Array.prototype.forEach = function (callback, thisArg) {
    var T, k;
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    var O = Object(this);
    var len = O.length >>> 0; // Hack to convert O.length to a UInt32

    if ({}.toString.call(callback) != "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }

    if (thisArg) {
      T = thisArg;
    }
    k = 0;
    while (k < len) {
      var kValue;
      if (k in O) {
        kValue = O[ k ];
        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
}

/*
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/filter
 */
if (typeof Array.prototype.filter !== 'function') {
  Array.prototype.filter = function (fun /*, thisp */) {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, t))
          res.push(val);
      }
    }

    return res;
  };
}

/*
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/map
 */
if (typeof Array.prototype.map !== 'function') {
  Array.prototype.map = function (callback, thisArg) {
    var T, A, k;

    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }

    var O = Object(this);
    var len = O.length >>> 0;
    if ({}.toString.call(callback) != "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }

    if (thisArg) {
      T = thisArg;
    }

    A = new Array(len);
    k = 0;
    while (k < len) {
      var kValue, mappedValue;
      if (k in O) {
        kValue = O[ k ];
        mappedValue = callback.call(T, kValue, k, O);
        A[ k ] = mappedValue;
      }
      k++;
    }

    return A;
  };
}

/**
 * Создает экземпляр Машины
 * @this {Car}
 * @param {string} manufacturer Производитель
 * @param {string} model Модель
 * @param {number} year Год производство
 */
function Car(manufacturer, model, year) {
  if (!(this instanceof Car)) {
    return new Car(manufacturer, model, year);
  }

  this.manufacturer = manufacturer;
  this.model = model;
  this.year = year || (function(){
    var date = new Date();
    return date.getFullYear();
  }());
}

/**
 * Objects toString method, overwritten to return car information
 * @return {String}
 */
Car.prototype.toString = function () {
  return this.getInfo();
};

/**
 * Information about car.
 * returns car manufacturer, model, and year
 * @return {String}
 */
Car.prototype.getInfo = function () {
  return this.manufacturer + ' ' + this.model + ' ' + this.year;
};

/**
 * Detailed information about car
 * @return {String}
 */
Car.prototype.getDetailedInfo = function () {
  return 'Производитель: ' + this.manufacturer + '. Модель: ' + this.model + '. Год: ' + this.year;
};

/**
 * Sets car price
 * Price is an instance of Price
 * @see Price
 * @param value
 */
Car.prototype.setPrice = function (value) {
  try {
    this.price = new Price(value);
  } catch(e) {
  }
};

/**
 * Создает экземпляр Автосалона
 * @this {CarDealer}
 * @param {string} name Название автосалона
 */
function CarDealer(name) {
  if (!(this instanceof CarDealer)) {
    return new CarDealer(name);
  }

  this.name = name;
  this.cars = [];
};

/**
 * Adds one or more cars to the object
 * Method can be chained
 * @see Car
 * @param {object} car Car object
 * @return {self}
 */
CarDealer.prototype.add = function() {
  var self = this,
      args = Array.prototype.slice.call(arguments);

  args.forEach(function(car) {
    if (!(car instanceof Car)) {
      throw {
        'name': 'TypeError',
        'message': 'Wrong argument type'
      }
    }

    this.cars.push(car);
  }, self);

  return self;
};

/**
 * Установить цену на машину
 * @see Car, Price
 * @param {string} car идентификатор машины
 * @param {string} price стоимость
 */
CarDealer.prototype.setPrice = function(id, price) {
  var self = this;

  self.cars.forEach(function (car) {
    if (car.getInfo() === id) {
      car.setPrice(price);
    }
  });

  return self;
};

/**
 * List cars' information of the object
 * @see Car
 * @return {String}
 */
CarDealer.prototype.list = function() {
  var self = this,
      cars = [];

  cars = self.cars.map(function (car) {
    return car.getInfo()
  });

  return cars.join(', ');
};

/**
 * Lists cars filtered by Country
 * applies provided function getCountry to the car object to filter
 * @see Car
 * @see getCountry (function)
 * @param country
 * @return {String}
 */
CarDealer.prototype.listByCountry = function(country) {
  var self = this,
      cars = [];

  cars = self.cars.filter(function (car) {
    return getCountry.call(car) === country;
  });

  return cars.join(', ');
};

/**
 * Lists cars with converted to the rouble prices
 * @see Car, Price
 * @return {String}
 */
CarDealer.prototype.listInRouble = function() {
  var self = this,
      cars = [];

  cars = self.cars.map(function (car) {
    return car.getInfo() + ' ' + car.price.inRouble();
  });

  return cars.join(', ');
};

/**
 * @return {String}
 */
function getCountry() {
  switch (this.manufacturer.toLowerCase()) {
    case 'bmw':
    case 'audi':
      return 'Germany';

    case 'toyota':
      return 'Japan';
  }
};

/**
 * Price object
 * @param value
 * @return {Price}
 * @constructor
 */
function Price(value) {
  if (!(this instanceof Price)) {
    return new Price(value);
  }

  if (/^(€|¥)[0-9]+$/.test(value)) {
    this.symbol = value.charAt(0);
    this.price = value.slice(1);
    this.currency = (this.symbol === '€') ? 'EUR' : 'JPY';
  } else {
    throw {
      'name': 'TypeError',
      'message': 'Price can be set only in two currencies: JPY and EUR.'
    }
  }
}

/**
 * Price formatter
 * @param value
 * @return {String}
 */
Price.prototype.formatPrice = function(value) {
  value = value || this.price;
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
}

/**
 * Objects toString method, overwritten to return formatted price
 * @return {String}
 */
Price.prototype.toString = function() {
  return this.symbol + this.formatPrice();
}

/**
 * Convert price to rouble
 * @return {String}
 */
Price.prototype.inRouble = function() {
  var EUR_rate = 39.6028,
      JPY_rate = 41.1459 / 100,
      price;

  price = this.price * ((this.currency === 'EUR') ? EUR_rate : JPY_rate);
  return this.formatPrice(price.toFixed(2)) + ' руб.'
};

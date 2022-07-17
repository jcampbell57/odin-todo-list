/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.seconds) : 0; // Add years and months

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isWithinRange` to `isWithinInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   isWithinRange(
 *     new Date(2014, 0, 3),
 *     new Date(2014, 0, 1), new Date(2014, 0, 7)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   isWithinInterval(
 *     new Date(2014, 0, 3),
 *     { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var time = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var startTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start).getTime();
  var endTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
class tasks {
    // real
    // static all = []
    // placeholder content
    static all = [
        {
            name: 'Finish Date Filter',
            date: `2022-07-16`,
            project: ``,
            priority: 'high',
            complete: 'false',
        },
        {
            name: 'Finish local storage',
            date: `2022-07-17`,
            project: ``,
            priority: 'high',
            complete: 'false',
        },
        {
            name: 'Space Needle',
            date: `2022-07-27`,
            project: `Business trip`,
            priority: 'high',
            complete: 'false',
        },
        {
            name: 'Troll under the bridge',
            date: `2022-07-27`,
            project: `Business trip`,
            priority: 'medium',
            complete: 'false',
        },
        {
            name: 'Pike place coffee meeting',
            date: `2022-07-26`,
            project: `Business trip`,
            priority: 'medium',
            complete: 'false',        
        },
    ];

    static toDelete = [];

    

    constructor (newTask) {
        this.name = newTask
        this.date = date
        this.project = project
        this.priority = priority
        this.complete = complete
    }



};



class projects {
    // real
    // static all = []
    // placeholder content
    static all = [
        {
            name: 'Business trip',
            selected: 'false'    
        },
    ];



    constructor (projectName) {
        this.name = projectName
        this.selected = selected
    }



}





/***/ }),

/***/ "./src/assets/calendar-edit.svg":
/*!**************************************!*\
  !*** ./src/assets/calendar-edit.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11bc74ef4a949980ebf8.svg";

/***/ }),

/***/ "./src/assets/calendar-range.svg":
/*!***************************************!*\
  !*** ./src/assets/calendar-range.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eff04cf8dead8e68a7ba.svg";

/***/ }),

/***/ "./src/assets/calendar-today.svg":
/*!***************************************!*\
  !*** ./src/assets/calendar-today.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3faae0cf01e4ecd160ef.svg";

/***/ }),

/***/ "./src/assets/checkbox-blank.svg":
/*!***************************************!*\
  !*** ./src/assets/checkbox-blank.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcc9a49980346cbbe75f.svg";

/***/ }),

/***/ "./src/assets/checkbox-marked.svg":
/*!****************************************!*\
  !*** ./src/assets/checkbox-marked.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9176c6d3b82f0db4593a.svg";

/***/ }),

/***/ "./src/assets/checklist.svg":
/*!**********************************!*\
  !*** ./src/assets/checklist.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bfe3d460ccbd8aaeef2.svg";

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/interactive.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAdditionIcon": () => (/* binding */ createAdditionIcon),
/* harmony export */   "createChecklistIcon": () => (/* binding */ createChecklistIcon),
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "createTodayIcon": () => (/* binding */ createTodayIcon),
/* harmony export */   "createWeekIcon": () => (/* binding */ createWeekIcon),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "setTaskFilter": () => (/* binding */ setTaskFilter)
/* harmony export */ });
/* harmony import */ var _assets_checkbox_blank_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/checkbox-blank.svg */ "./src/assets/checkbox-blank.svg");
/* harmony import */ var _assets_checkbox_marked_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/checkbox-marked.svg */ "./src/assets/checkbox-marked.svg");
/* harmony import */ var _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/checklist.svg */ "./src/assets/checklist.svg");
/* harmony import */ var _assets_calendar_today_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/calendar-today.svg */ "./src/assets/calendar-today.svg");
/* harmony import */ var _assets_calendar_range_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/calendar-range.svg */ "./src/assets/calendar-range.svg");
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/plus.svg */ "./src/assets/plus.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/calendar-edit.svg */ "./src/assets/calendar-edit.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/add/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isWithinInterval/index.js");















// Icon & button generators 
const _createCheckboxIcon = (td, task, i) => {
    const checkboxIcon = document.createElement('img');
    if (task.complete === 'true') {
        checkboxIcon.src = _assets_checkbox_marked_svg__WEBPACK_IMPORTED_MODULE_1__
    } else {
        checkboxIcon.src = _assets_checkbox_blank_svg__WEBPACK_IMPORTED_MODULE_0__;
    }
    checkboxIcon.setAttribute('class', 'icon');
    checkboxIcon.setAttribute('id', `${i}`);
    checkboxIcon.addEventListener('click', (e) => _markComplete(e))
    td.appendChild(checkboxIcon);
} 

const createChecklistIcon = (li) => {
    const checklistIcon = document.createElement('img');
    checklistIcon.src = _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_2__;
    checklistIcon.setAttribute('class', 'icon')
    li.appendChild(checklistIcon);
}

const _createEditIcon = (td) => {
    const newEditIcon = document.createElement('img');
    newEditIcon.src = _assets_edit_svg__WEBPACK_IMPORTED_MODULE_6__;
    newEditIcon.setAttribute('class', 'icon');
    // event listener to open task card
    newEditIcon.addEventListener('click', (e) => _showTaskCard(e))
    td.appendChild(newEditIcon);
}

const _createCalendarEditIcon = (td) => {
    const newCalendarEditIcon = document.createElement('img');
    newCalendarEditIcon.src = _assets_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_7__;
    newCalendarEditIcon.setAttribute('class', 'icon editDateIcon')
    newCalendarEditIcon.addEventListener('click', (e) => {
    })
    td.appendChild(newCalendarEditIcon);
}

const _createDeleteIcon = (container, i) => {
    // create image and assign attributes
    const newDeleteIcon = document.createElement('img');
    newDeleteIcon.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_8__;
    newDeleteIcon.setAttribute('class', 'icon deleteItem')
    newDeleteIcon.setAttribute('id', `${i}`)
    // add event listener
    if (container.getAttribute('class') === 'taskCloseContainer') {
        // Event listener to delete task
        newDeleteIcon.addEventListener('click', (e) => _deleteTask(e))
    } else if (container.getAttribute('class') === 'project' || 
    container.classList.contains('project')) {
        // Event listener to delete project
        newDeleteIcon.classList.add(`deleteProject${i}`)        
        newDeleteIcon.classList.add(`hidden`)        
        newDeleteIcon.addEventListener('click', (e) => _deleteProject(e, i))        
        // display trash icon on hover
        container.addEventListener('mouseenter', () => {
            const trashIcon = document.querySelector(`.deleteProject${i}`)
            trashIcon.classList.remove('hidden')
        })
        // hide trash icon 
        container.addEventListener('mouseleave', () => {
            const trashIcon = document.querySelector(`.deleteProject${i}`)
            trashIcon.classList.add('hidden')
        })    
    } else {
        console.log(container)
        console.log('this is strange');
    }
    // append to container
    container.appendChild(newDeleteIcon)
}

const createAdditionIcon = (li) => {
    const newAdditionIcon = document.createElement('img');
    newAdditionIcon.src = _assets_plus_svg__WEBPACK_IMPORTED_MODULE_5__;
    newAdditionIcon.setAttribute('class', 'icon')
    li.appendChild(newAdditionIcon);
}

const createTodayIcon = (li) => {
    const newTodayIcon = document.createElement('img');
    newTodayIcon.src = _assets_calendar_today_svg__WEBPACK_IMPORTED_MODULE_3__;
    newTodayIcon.setAttribute('class', 'icon')
    li.appendChild(newTodayIcon);
}

const createWeekIcon = (li) => {
    const newWeekIcon = document.createElement('img');
    newWeekIcon.src = _assets_calendar_range_svg__WEBPACK_IMPORTED_MODULE_4__;
    newWeekIcon.setAttribute('class', 'icon')
    li.appendChild(newWeekIcon);
}

const _createAddButton = (container, i) => {
    const addBtn = document.createElement('button');
    addBtn.setAttribute('class', 'addBtn');
    addBtn.innerText = "submit";
    if (container.classList.contains('cardRow3')) {
        // convert card to form? and change this event listener to trigger when form submits
        addBtn.setAttribute('id', `${i}`);
        addBtn.addEventListener('click', (e) => _submitTaskCard(e))
    } else if (i.getAttribute('class') === 'addProjectForm') {
        addBtn.classList.add('projectAddBtn');
    } else if (i.getAttribute('class') === 'addTaskForm') {
        addBtn.classList.add('taskAddBtn');
    };
    container.appendChild(addBtn);
}

const _createCancelButton = (container, i) => {
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('class', 'cancelBtn');
    cancelBtn.setAttribute('id', `${i}`);
    cancelBtn.innerText = "cancel";
    if (container.getAttribute('class') === 'cardRow3') {
        cancelBtn.addEventListener('click', () => displayTasks(i))
    };
    container.appendChild(cancelBtn);   
}



// Container AND icon generators (For task listing and task card)
const createCheckboxContainer = (tr, task, i) => {
    const checkboxContainer = document.createElement('td');
    checkboxContainer.setAttribute('class', 'checkboxContainer');
    _createCheckboxIcon(checkboxContainer, task, i);
    tr.appendChild(checkboxContainer);
}

const createDateContainer = (tr, task, i) => {
    const dateContainer = document.createElement('td');
    dateContainer.setAttribute('class', 'dateContainer');
    if (tr.classList.contains('editDateContainer')) {
        dateContainer.innerHTML = `<input class='taskCardDate${i}' type='date' value='${task.date}'>`
    } else {
    dateContainer.innerText = `${task.date}`
    }
    tr.appendChild(dateContainer);
}

const createDeleteContainer = (tr) => {
    const closeContainer = document.createElement('td');
    closeContainer.setAttribute('class', 'taskCloseContainer');
    _createDeleteIcon(closeContainer);
    tr.appendChild(closeContainer);
}



// Form generator
const createForm = (form) => {
    
    const formRow1 = document.createElement('div');
    formRow1.setAttribute('class', 'formRow');
    
    const formRow2 = document.createElement('div');
    formRow2.setAttribute('class', 'formRow');
    formRow2.setAttribute('id', 'formButtons');

    const formRow3 = document.createElement('div');
    formRow3.setAttribute('id', 'hidden');

    // row one: assign input according to class of form
    // row three: assign error class and text according to class of form
    if (form.getAttribute('class') === 'addProjectForm') {
        formRow1.innerHTML = "<input type='text' id='newProjectInput' name='newProjectInput'></input>";
        formRow3.setAttribute('class', 'newProjErrorContainer');
        formRow3.innerText = 'Name your project!'
    } else if (form.getAttribute('class') === 'addTaskForm') {
        formRow1.innerHTML = "<input type='text' id='newTaskInput' name='newTaskInput'></input>";
        formRow3.setAttribute('class', 'newTaskErrorContainer');
        formRow3.innerText = 'Name your task!'
    } else {
        console.log('this is strange')
    }
    // row two: submit and cancel buttons
    _createAddButton(formRow2, form);
    _createCancelButton(formRow2, form);
       
    form.appendChild(formRow1);
    form.appendChild(formRow2);
    form.appendChild(formRow3);
}





// DOM modification functions

// PROJECTS
// Display entire array of projects to menu
const displayProjects = () => {
    // Grab projects menu
    const projectsMenu = document.querySelector('#projectsMenu');

    // Clear projects menu
    const oldProjCount = projectsMenu.childElementCount
    for (let i=0; i<oldProjCount; i++) {
        projectsMenu.firstChild.remove();
    }

    // Add single project to menu (called below)
    const _displayProject = (newProj, i) => {
        const newProjectContainer = document.createElement('li');
        newProjectContainer.classList.add(`project`)
        newProjectContainer.setAttribute('id', `${i}`)
        // assign class to selected project 
        if (newProj.selected === 'true') {
            newProjectContainer.classList.add('selected')
        }

        // event listener to filter tasklist by project name     
        newProjectContainer.addEventListener('click', (e) => {
            // if deleting project, do not set filter
            if (e.target.classList.contains('deleteItem')) {
                return;
            };
            setTaskFilter(newProjectContainer)
        })
    
        createChecklistIcon(newProjectContainer);
        const newProjectText = document.createElement('span');
        newProjectText.textContent = newProj.name;
        newProjectContainer.appendChild(newProjectText)
        _createDeleteIcon(newProjectContainer, i);
        projectsMenu.appendChild(newProjectContainer);
    } 

    // Append all tasks to tasklist
    let i=0
    _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.forEach(project => {
        _displayProject(project, i)
        i++
    });
}



// Delete project
const _deleteProject = (e) => {
    // Identify project to delete
    const doomedIndex = e.target.getAttribute('id');
    const doomedName = _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all[doomedIndex].name;

    // delete project
    _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.splice(doomedIndex, 1);
    displayProjects();

    // delete all tasks in doomed project
    // could change from splice to deleted propery with hidden class to use in stats table with completed property //
    // mark tasks for deletion
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all.forEach((task, index) => {
        if (task.project === doomedName) {
            _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.toDelete.push(task.name)
        }
    })
    // delete marked tasks
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.toDelete.forEach(doomedTask => {
        _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all.forEach((task, index) => {
            if (task.name === doomedTask) {
                _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all.splice(index, 1)
            }
        })
    }) 

    // If doomed project was selected, revert tasklist to all tasks
    const contentTitle = document.querySelector('.contentTitle');
    const allTasksClassList = document.querySelector('.allTasks').classList
    if (contentTitle.textContent === doomedName) {
        contentTitle.textContent = 'All tasks' 
        allTasksClassList.add('selected')
    }

    // refresh tasklist
    displayTasks();
}





// TASKS
// Display entire array of tasks to tasklist
const displayTasks = () => {

    // Grab tasklist
    const tasklist = document.querySelector('#taskList');
    
    // clear tasklist
    const oldTaskCount = tasklist.childElementCount
    for (let i=0; i<oldTaskCount; i++) {
        tasklist.firstChild.remove();
    }
    

    // Add single task to tasklist display
    const _createTaskListing = (task, i) => {
        // create task container
        const newListing = document.createElement('tr');
        newListing.setAttribute('class', `task listing${i}`);
        // complete filter to assign class
        if (task.complete === 'true') {
            newListing.classList.add('complete')
        }
        // assign priority class
        if (task.priority === 'high') {
            newListing.classList.add('highPriority');
        } else if (task.priority === 'medium') {
            newListing.classList.add('mediumPriority');
        } else if (task.priority === 'low') {
            newListing.classList.add('lowPriority');
        }

        newListing.setAttribute('id', `${i}`);
        
        // add checkbox
        createCheckboxContainer(newListing, task, i);
        
        // add task
        const taskContainer = document.createElement('td');
        taskContainer.setAttribute('class', `taskContainer${i}`);
        // complete filter for strikethrough
        if (task.complete === 'true') {
            taskContainer.setAttribute('id', 'complete');
        }
        taskContainer.innerText = `${task.name}`;
        newListing.appendChild(taskContainer);

        // add date
        createDateContainer(newListing, task);

        // add edit button
        const editContainer = document.createElement('td');
        editContainer.setAttribute('class', 'editContainer');
        _createEditIcon(editContainer);
        newListing.appendChild(editContainer);

        // add delete button
        createDeleteContainer(newListing);

        //append task to tasklist
        tasklist.appendChild(newListing);



        // set display filter
        const filter = document.querySelector('.contentTitle').textContent
        // date filters

        // All tasks
        if (filter === 'All tasks') {
            return;

        // Due Today
        } else if (filter === 'Due today') {
            // hide if no due date
            if (task.date === '') {
                newListing.classList.add('hidden');
                return;
            }
            
            // grab today's date and task date
            const today = new Date();
            const taskDate = new Date(task.date)
            
            // hide if not due today
            if (today.getMonth() !== taskDate.getMonth() ||
                today.getDate() - 1 !== taskDate.getDate() ||
                today.getFullYear() !== taskDate.getFullYear() ) {
                    newListing.classList.add('hidden');
            }
        
        // Due this week
        } else if (filter === 'Due this week') {
            console.log(filter);

            // hide if no due date
            if (task.date === '') {
                newListing.classList.add('hidden');
                return;
            }
            
            // grab week dates and task due date date
            const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date())
            const endOfWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(today, {days: 7})
            // midnight due date
            const taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(task.date)), {days: 1, hours: 23, minutes: 59})
            
            // hide if not due this week
            console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(taskDate, {
                start: today,
                end: endOfWeek
            }))
            console.log(newListing)

            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(taskDate, {
                start: today,
                end: endOfWeek,
            }) === false) {
                console.log('yay')
                newListing.classList.add('hidden')
                return
            }
        } 

        // project filter
        _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.forEach(project => {
            if (project.name === filter) {
                if (task.project !== filter) {
                    newListing.classList.add('hidden');
                };    
            }
        })
        
    }
    

    // Create and hide task card in tasklist display
    const _createTaskCard = (task, i) => {
        // CREATE TASK CARD
        const newCardContainer = document.createElement('tr')
        newCardContainer.setAttribute('class', `task card${i}`);
        newCardContainer.setAttribute('id', `hidden`);

        // complete filter to assign class
        if (task.complete === 'true') {
            newCardContainer.classList.add('complete')
        }       

        // assign priority class
        if (task.priority === 'high') {
            newCardContainer.classList.add('highPriority');
        } else if (task.priority === 'medium') {
            newCardContainer.classList.add('mediumPriority');
        } else if (task.priority === 'low') {
            newCardContainer.classList.add('lowPriority');
        }
        
        const newCard = document.createElement('table');
        newCard.setAttribute('class', 'incomplete menuOptions');
        newCard.setAttribute('id', `${i}`);
        
        // Create delete button
        createDeleteContainer(newCard);

        const newThead = document.createElement('thead');
        newThead.innerHTML = 
            `<tr>
                <th class='checkboxContainer'></th>
                <th class='taskContainer'></th>
                <th class='dateContainer'></th>
                <th class='editContainer'></th>
            </tr>`
        
        // Create tbody
        const taskCard = document.createElement('tbody');
        taskCard.setAttribute('id', 'taskCard');
        

        // First row
        const cardRow1 = document.createElement('tr');
        cardRow1.setAttribute('class', 'cardRow1')
        // add task name input
        const taskInputContainer = document.createElement('td');
        taskInputContainer.setAttribute('class', `taskInputContainer`);
        taskInputContainer.innerHTML = `<input type='text' class='taskCardTask${i}' id='newTaskInput' name='newTaskInput' value='${task.name}'></input>`;
        cardRow1.appendChild(taskInputContainer);
        // add date
        const editDateContainer = document.createElement('td');
        editDateContainer.setAttribute('class', `editDateContainer`);
        createDateContainer(editDateContainer, task, i);
        cardRow1.appendChild(editDateContainer);
        // add calendar edit button
        _createCalendarEditIcon(cardRow1);



        // Second row 
        const cardRow2 = document.createElement('tr');
        cardRow2.setAttribute('class', 'cardRow2')
        
        // project input container
        const projectInputContainer = document.createElement('td');
        projectInputContainer.setAttribute('class', 'projectInputContainer');
        
        // create project dropdown 
        const projectDropdown = document.createElement('select')
        projectDropdown.setAttribute('class', `taskCardProject${i}`)
        projectDropdown.setAttribute('id', 'newTaskInput')
        projectDropdown.setAttribute('name', 'newTaskInput')
        projectDropdown.setAttribute('value', `${task.project}`)

        // create project dropdown options
        // blank option for no project
        const blankProjectOption = document.createElement('option')
        blankProjectOption.value = ''
        blankProjectOption.text = ''
        projectDropdown.appendChild(blankProjectOption)
        // remaining options generated from projects array
        _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.forEach(project => {
            const projectOption = document.createElement('option')
            projectOption.value = `${project.name}`
            projectOption.text = `${project.name}`
            if (task.project === project.name) {
                projectOption.selected = true;
            }
            projectDropdown.appendChild(projectOption)
        })
        projectInputContainer.appendChild(projectDropdown)
        cardRow2.appendChild(projectInputContainer);
        

        // priority input container
        const priorityInputContainer = document.createElement('td');
        priorityInputContainer.setAttribute('class', 'priorityInputContainer');
        
        // create priority dropdown 
        const priorityDropdown = document.createElement('select')
        priorityDropdown.setAttribute('class', `taskCardPriority${i}`)
        priorityDropdown.setAttribute('id', 'newTaskInput')
        priorityDropdown.setAttribute('name', 'newTaskInput')
        priorityDropdown.setAttribute('value', `${task.priority}`)
        
        // create priority dropdown options
        // high priority
        const priorityHigh = document.createElement('option')
        priorityHigh.value = 'high'
        priorityHigh.text = 'High'
        // medium priority
        const priorityMedium = document.createElement('option')
        priorityMedium.value = 'medium'
        priorityMedium.text = 'Medium'
        // low priority
        const priorityLow = document.createElement('option')
        priorityLow.value = 'low'
        priorityLow.text = 'Low'
        
        // priority selection
        if (task.priority === 'high') {
        priorityHigh.selected = true;
        } else if (task.priority === 'low') {
        priorityLow.selected = true;
        } else 
        priorityMedium.selected = true;
        
        // append priority input to row
        priorityDropdown.appendChild(priorityHigh);
        priorityDropdown.appendChild(priorityMedium);
        priorityDropdown.appendChild(priorityLow);        
        priorityInputContainer.appendChild(priorityDropdown);        
        cardRow2.appendChild(priorityInputContainer);



        // Third row 
        const cardRow3 = document.createElement('tr');
        cardRow3.setAttribute('class', 'cardRow3')
        _createAddButton(cardRow3, i);
        _createCancelButton(cardRow3, `${i}`);



        // append task card to tasklist
        taskCard.appendChild(cardRow1);
        taskCard.appendChild(cardRow2);
        taskCard.appendChild(cardRow3);

        newCard.appendChild(newThead);
        newCard.appendChild(taskCard);

        newCardContainer.appendChild(newCard);

        tasklist.appendChild(newCardContainer);
    }
    

    // append all tasks to tasklist
    let i=0
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all.forEach(task => {
        _createTaskListing(task, i);
        _createTaskCard(task, i);
        i++
    });
}





// Complete task
const _markComplete = (e) => {
    const taskID = e.target.getAttribute('id');
    if (_tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete === 'true') {
        //mark task incomplete
        _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete = 'false'
    } else if (_tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete === 'false') {
        //mark task complete
        _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete = 'true'
    } else {
        console.log('this is strange')
    }
    displayTasks();
}

// Show task card
const _showTaskCard = (e) => {
    const taskID = e.target.parentElement.parentElement.getAttribute('id');
    // show task card
    const taskCard = document.querySelector(`.card${taskID}`);
    taskCard.setAttribute('id', `${taskID}`);
    //hide task listing
    const taskListing = document.querySelector(`.listing${taskID}`);
    taskListing.setAttribute('id', 'hidden');
}

const _submitTaskCard = (e) => {
    const taskID = (e.target.getAttribute('id')) 

    // Get input values
    const updatedTask = document.querySelector(`.taskCardTask${taskID}`).value
    const updatedDate = document.querySelector(`.taskCardDate${taskID}`).value
    const updatedProject = document.querySelector(`.taskCardProject${taskID}`).value
    const updatedPriority = document.querySelector(`.taskCardPriority${taskID}`).value

    // Apply input values to task object
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].name = updatedTask
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].date = updatedDate
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].project = updatedProject
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].priority = updatedPriority

    // Refresh tasklist
    displayTasks();
}

// Delete task
const _deleteTask = (e) => {
    let doomedIndex = e.target.parentElement.parentElement.getAttribute('id');
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all.splice(doomedIndex, 1);
    displayTasks();
}





// TASK DISPLAY OPTIONS

// how is this being skipped when clicking on delete icon??
const setTaskFilter = (container, e) => {   

    // set content title (filter)
    const contentTitle = document.querySelector('.contentTitle')
    contentTitle.textContent = container.innerText

    // deselect any menu filter 
    const allTasksClassList = document.querySelector('.allTasks').classList
    const dueTodayClassList = document.querySelector('.dueToday').classList
    const dueWeekClassList = document.querySelector('.dueWeek').classList
    if (allTasksClassList.contains('selected')) {
        allTasksClassList.remove('selected')
    } if (dueTodayClassList.contains('selected')) {
        dueTodayClassList.remove('selected')
    } if (dueWeekClassList.contains('selected')) {
        dueWeekClassList.remove('selected')
    } 

    // deselect all projects
    _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.forEach(project => {
        if (project.selected === 'true') {
            project.selected = 'false'
        }
    }) 

    // Select project if one is chosen (main menu selection is handled in event listener)
    if (container.getAttribute('class') === 'project') {
        var selectedProjectId = container.getAttribute('id');
        _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all[selectedProjectId].selected = 'true'
    }

    // refresh
    displayProjects();    
    displayTasks();
}






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3RpdmUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1owQztBQUNJO0FBQ047QUFDaUI7QUFDTjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkO0FBQ0EsK0JBQStCLG1FQUFTO0FBQ3hDLGlDQUFpQyxtRUFBUztBQUMxQywrQkFBK0IsbUVBQVM7QUFDeEMsNkJBQTZCLG1FQUFTO0FBQ3RDLCtCQUErQixtRUFBUztBQUN4QyxtQ0FBbUMsbUVBQVM7QUFDNUMsbUNBQW1DLG1FQUFTLHdCQUF3Qjs7QUFFcEUsYUFBYSw0REFBTTtBQUNuQix5Q0FBeUMsK0RBQVMsb0NBQW9DOztBQUV0RixxQ0FBcUMsNkRBQU8scURBQXFEOztBQUVqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVtRDtBQUNYO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixlQUFlLG1FQUFTOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDbUQ7QUFDWDtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsZUFBZSxtRUFBUzs7QUFFeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFd0M7QUFDaUI7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsVUFBVTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixrQkFBa0IsNERBQU07QUFDeEIsZ0JBQWdCLDREQUFNLDBCQUEwQjs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RndDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0Esd0tBQXdLOztBQUV4SztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z3RDtBQUNFO0FBQ1g7QUFDUztBQUNEO0FBQ1Y7QUFDSjtBQUNpQjtBQUNiOztBQUVIO0FBQ21COzs7O0FBSTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdEQUFjO0FBQ3pDLE1BQU07QUFDTiwyQkFBMkIsdURBQWE7QUFDeEM7QUFDQTtBQUNBLHVDQUF1QyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFTO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixzREFBZ0I7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQ0FBVTtBQUNsQztBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxvREFBb0QsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxFQUFFO0FBQ3hFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxzRUFBc0UsRUFBRTtBQUN4RTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQVk7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsdURBQWE7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQVk7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxFQUFFO0FBQ3ZDO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELEVBQUUsdUJBQXVCLFVBQVU7QUFDbEcsTUFBTTtBQUNOLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdEQUFvQjtBQUN4QjtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQVk7O0FBRW5DO0FBQ0EsSUFBSSx1REFBbUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBaUI7QUFDckI7QUFDQSxZQUFZLHVEQUFtQjtBQUMvQjtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksMERBQXNCO0FBQzFCLFFBQVEscURBQWlCO0FBQ3pCO0FBQ0EsZ0JBQWdCLG9EQUFnQjtBQUNoQztBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEseUNBQXlDLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQVU7QUFDcEMsOEJBQThCLHFEQUFHLFNBQVMsUUFBUTtBQUNsRDtBQUNBLDZCQUE2QixxREFBRyxDQUFDLHFEQUFVLHdCQUF3QixnQ0FBZ0M7QUFDbkc7QUFDQTtBQUNBLHdCQUF3QixxREFBZ0I7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxnQkFBZ0IscURBQWdCO0FBQ2hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsd0RBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELEVBQUU7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLEVBQUUsaURBQWlELFVBQVU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLEVBQUU7QUFDbEU7QUFDQTtBQUNBLGlEQUFpRCxhQUFhOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQW9CO0FBQzVCO0FBQ0EscUNBQXFDLGFBQWE7QUFDbEQsb0NBQW9DLGFBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLEVBQUU7Ozs7QUFJM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkscURBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBUztBQUNqQjtBQUNBLFFBQVEsNkNBQVM7QUFDakIsTUFBTSxTQUFTLDZDQUFTO0FBQ3hCO0FBQ0EsUUFBUSw2Q0FBUztBQUNqQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsT0FBTztBQUMzRCxtQ0FBbUMsT0FBTztBQUMxQztBQUNBLDBEQUEwRCxPQUFPO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtEQUErRCxPQUFPO0FBQ3RFLCtEQUErRCxPQUFPO0FBQ3RFLHFFQUFxRSxPQUFPO0FBQzVFLHVFQUF1RSxPQUFPOztBQUU5RTtBQUNBLElBQUksNkNBQVM7QUFDYixJQUFJLDZDQUFTO0FBQ2IsSUFBSSw2Q0FBUztBQUNiLElBQUksNkNBQVM7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWdCO0FBQ3BCO0FBQ0E7Ozs7OztBQU1BOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsSUFBSSx3REFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFZO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzV2l0aGluSW50ZXJ2YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW50ZXJhY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiLi4vYWRkTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7RHVyYXRpb259IGR1cmF0aW9uIC0gdGhlIG9iamVjdCB3aXRoIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICpcbiAqIHwgS2V5ICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgeWVhcnMgICAgICAgICAgfCBBbW91bnQgb2YgeWVhcnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbW9udGhzICAgICAgICAgfCBBbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkICAgICAgIHxcbiAqIHwgd2Vla3MgICAgICAgICAgfCBBbW91bnQgb2Ygd2Vla3MgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgZGF5cyAgICAgICAgICAgfCBBbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZCAgICAgICAgIHxcbiAqIHwgaG91cnMgICAgICAgICAgfCBBbW91bnQgb2YgaG91cnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbWludXRlcyAgICAgICAgfCBBbW91bnQgb2YgbWludXRlcyB0byBiZSBhZGRlZCAgICAgIHxcbiAqIHwgc2Vjb25kcyAgICAgICAgfCBBbW91bnQgb2Ygc2Vjb25kcyB0byBiZSBhZGRlZCAgICAgIHxcbiAqXG4gKiBBbGwgdmFsdWVzIGRlZmF1bHQgdG8gMFxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgdGhlIGZvbGxvd2luZyBkdXJhdGlvbiB0byAxIFNlcHRlbWJlciAyMDE0LCAxMDoxOTo1MFxuICogY29uc3QgcmVzdWx0ID0gYWRkKG5ldyBEYXRlKDIwMTQsIDgsIDEsIDEwLCAxOSwgNTApLCB7XG4gKiAgIHllYXJzOiAyLFxuICogICBtb250aHM6IDksXG4gKiAgIHdlZWtzOiAxLFxuICogICBkYXlzOiA3LFxuICogICBob3VyczogNSxcbiAqICAgbWludXRlczogOSxcbiAqICAgc2Vjb25kczogMzAsXG4gKiB9KVxuICogLy89PiBUaHUgSnVuIDE1IDIwMTcgMTU6Mjk6MjBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkKGRpcnR5RGF0ZSwgZHVyYXRpb24pIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIGlmICghZHVyYXRpb24gfHwgdHlwZW9mIGR1cmF0aW9uICE9PSAnb2JqZWN0JykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciB5ZWFycyA9IGR1cmF0aW9uLnllYXJzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLnllYXJzKSA6IDA7XG4gIHZhciBtb250aHMgPSBkdXJhdGlvbi5tb250aHMgPyB0b0ludGVnZXIoZHVyYXRpb24ubW9udGhzKSA6IDA7XG4gIHZhciB3ZWVrcyA9IGR1cmF0aW9uLndlZWtzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLndlZWtzKSA6IDA7XG4gIHZhciBkYXlzID0gZHVyYXRpb24uZGF5cyA/IHRvSW50ZWdlcihkdXJhdGlvbi5kYXlzKSA6IDA7XG4gIHZhciBob3VycyA9IGR1cmF0aW9uLmhvdXJzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLmhvdXJzKSA6IDA7XG4gIHZhciBtaW51dGVzID0gZHVyYXRpb24ubWludXRlcyA/IHRvSW50ZWdlcihkdXJhdGlvbi5taW51dGVzKSA6IDA7XG4gIHZhciBzZWNvbmRzID0gZHVyYXRpb24uc2Vjb25kcyA/IHRvSW50ZWdlcihkdXJhdGlvbi5zZWNvbmRzKSA6IDA7IC8vIEFkZCB5ZWFycyBhbmQgbW9udGhzXG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVXaXRoTW9udGhzID0gbW9udGhzIHx8IHllYXJzID8gYWRkTW9udGhzKGRhdGUsIG1vbnRocyArIHllYXJzICogMTIpIDogZGF0ZTsgLy8gQWRkIHdlZWtzIGFuZCBkYXlzXG5cbiAgdmFyIGRhdGVXaXRoRGF5cyA9IGRheXMgfHwgd2Vla3MgPyBhZGREYXlzKGRhdGVXaXRoTW9udGhzLCBkYXlzICsgd2Vla3MgKiA3KSA6IGRhdGVXaXRoTW9udGhzOyAvLyBBZGQgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcblxuICB2YXIgbWludXRlc1RvQWRkID0gbWludXRlcyArIGhvdXJzICogNjA7XG4gIHZhciBzZWNvbmRzVG9BZGQgPSBzZWNvbmRzICsgbWludXRlc1RvQWRkICogNjA7XG4gIHZhciBtc1RvQWRkID0gc2Vjb25kc1RvQWRkICogMTAwMDtcbiAgdmFyIGZpbmFsRGF0ZSA9IG5ldyBEYXRlKGRhdGVXaXRoRGF5cy5nZXRUaW1lKCkgKyBtc1RvQWRkKTtcbiAgcmV0dXJuIGZpbmFsRGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1vbnRocyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNSBtb250aHMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNSlcbiAqIC8vPT4gU3VuIEZlYiAwMSAyMDE1IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTW9udGhzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgbW9udGhzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTsgLy8gVGhlIEpTIERhdGUgb2JqZWN0IHN1cHBvcnRzIGRhdGUgbWF0aCBieSBhY2NlcHRpbmcgb3V0LW9mLWJvdW5kcyB2YWx1ZXMgZm9yXG4gIC8vIG1vbnRoLCBkYXksIGV0Yy4gRm9yIGV4YW1wbGUsIG5ldyBEYXRlKDIwMjAsIDAsIDApIHJldHVybnMgMzEgRGVjIDIwMTkgYW5kXG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAxKSByZXR1cm5zIDEgRmViIDIwMjEuICBUaGlzIGlzICphbG1vc3QqIHRoZSBiZWhhdmlvciB3ZVxuICAvLyB3YW50IGV4Y2VwdCB0aGF0IGRhdGVzIHdpbGwgd3JhcCBhcm91bmQgdGhlIGVuZCBvZiBhIG1vbnRoLCBtZWFuaW5nIHRoYXRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDMxKSB3aWxsIHJldHVybiAzIE1hciAyMDIxIG5vdCAyOCBGZWIgMjAyMSBhcyBkZXNpcmVkLiBTb1xuICAvLyB3ZSdsbCBkZWZhdWx0IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWQgbW9udGggYnkgYWRkaW5nIDEgdG8gdGhlIGRlc2lyZWRcbiAgLy8gbW9udGggYW5kIHVzaW5nIGEgZGF0ZSBvZiAwIHRvIGJhY2sgdXAgb25lIGRheSB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoLlxuXG4gIHZhciBlbmRPZkRlc2lyZWRNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgZW5kT2ZEZXNpcmVkTW9udGguc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgYW1vdW50ICsgMSwgMCk7XG4gIHZhciBkYXlzSW5Nb250aCA9IGVuZE9mRGVzaXJlZE1vbnRoLmdldERhdGUoKTtcblxuICBpZiAoZGF5T2ZNb250aCA+PSBkYXlzSW5Nb250aCkge1xuICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgbW9udGgsIHRoZW4gdGhpcyBpcyB0aGUgY29ycmVjdCBkYXRlXG4gICAgLy8gYW5kIHdlJ3JlIGRvbmUuXG4gICAgcmV0dXJuIGVuZE9mRGVzaXJlZE1vbnRoO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgd2Ugbm93IGtub3cgdGhhdCBzZXR0aW5nIHRoZSBvcmlnaW5hbCBkYXktb2YtbW9udGggdmFsdWUgd29uJ3RcbiAgICAvLyBjYXVzZSBhbiBvdmVyZmxvdywgc28gc2V0IHRoZSBkZXNpcmVkIGRheS1vZi1tb250aC4gTm90ZSB0aGF0IHdlIGNhbid0XG4gICAgLy8ganVzdCBzZXQgdGhlIGRhdGUgb2YgYGVuZE9mRGVzaXJlZE1vbnRoYCBiZWNhdXNlIHRoYXQgb2JqZWN0IG1heSBoYXZlIGhhZFxuICAgIC8vIGl0cyB0aW1lIGNoYW5nZWQgaW4gdGhlIHVudXN1YWwgY2FzZSB3aGVyZSB3aGVyZSBhIERTVCB0cmFuc2l0aW9uIHdhcyBvblxuICAgIC8vIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGggYW5kIGl0cyBsb2NhbCB0aW1lIHdhcyBpbiB0aGUgaG91ciBza2lwcGVkIG9yXG4gICAgLy8gcmVwZWF0ZWQgbmV4dCB0byBhIERTVCB0cmFuc2l0aW9uLiAgU28gd2UgdXNlIGBkYXRlYCBpbnN0ZWFkIHdoaWNoIGlzXG4gICAgLy8gZ3VhcmFudGVlZCB0byBzdGlsbCBoYXZlIHRoZSBvcmlnaW5hbCB0aW1lLlxuICAgIGRhdGUuc2V0RnVsbFllYXIoZW5kT2ZEZXNpcmVkTW9udGguZ2V0RnVsbFllYXIoKSwgZW5kT2ZEZXNpcmVkTW9udGguZ2V0TW9udGgoKSwgZGF5T2ZNb250aCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNXaXRoaW5JbnRlcnZhbFxuICogQGNhdGVnb3J5IEludGVydmFsIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsPyAoSW5jbHVkaW5nIHN0YXJ0IGFuZCBlbmQuKVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgZnJvbSBgaXNXaXRoaW5SYW5nZWAgdG8gYGlzV2l0aGluSW50ZXJ2YWxgLlxuICogICBUaGlzIGNoYW5nZSB3YXMgbWFkZSB0byBtaXJyb3IgdGhlIHVzZSBvZiB0aGUgd29yZCBcImludGVydmFsXCIgaW4gc3RhbmRhcmQgSVNPIDg2MDE6MjAwNCB0ZXJtaW5vbG9neTpcbiAqXG4gKiAgIGBgYFxuICogICAyLjEuM1xuICogICB0aW1lIGludGVydmFsXG4gKiAgIHBhcnQgb2YgdGhlIHRpbWUgYXhpcyBsaW1pdGVkIGJ5IHR3byBpbnN0YW50c1xuICogICBgYGBcbiAqXG4gKiAgIEFsc28sIHRoaXMgZnVuY3Rpb24gbm93IGFjY2VwdHMgYW4gb2JqZWN0IHdpdGggYHN0YXJ0YCBhbmQgYGVuZGAgcHJvcGVydGllc1xuICogICBpbnN0ZWFkIG9mIHR3byBhcmd1bWVudHMgYXMgYW4gaW50ZXJ2YWwuXG4gKiAgIFRoaXMgZnVuY3Rpb24gbm93IHRocm93cyBgUmFuZ2VFcnJvcmAgaWYgdGhlIHN0YXJ0IG9mIHRoZSBpbnRlcnZhbCBpcyBhZnRlciBpdHMgZW5kXG4gKiAgIG9yIGlmIGFueSBkYXRlIGluIHRoZSBpbnRlcnZhbCBpcyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgaXNXaXRoaW5SYW5nZShcbiAqICAgICBuZXcgRGF0ZSgyMDE0LCAwLCAzKSxcbiAqICAgICBuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqICAgKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgaXNXaXRoaW5JbnRlcnZhbChcbiAqICAgICBuZXcgRGF0ZSgyMDE0LCAwLCAzKSxcbiAqICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KSB9XG4gKiAgIClcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0ludGVydmFsfSBpbnRlcnZhbCAtIHRoZSBpbnRlcnZhbCB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHdpdGhpbiB0aGUgaW50ZXJ2YWxcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IFRoZSBzdGFydCBvZiBhbiBpbnRlcnZhbCBjYW5ub3QgYmUgYWZ0ZXIgaXRzIGVuZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gRGF0ZSBpbiBpbnRlcnZhbCBjYW5ub3QgYmUgYEludmFsaWQgRGF0ZWBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDMpLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwge1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMSksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIHN0YXJ0OlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0LCBlbmQ6IGRhdGUgfSkgLy8gPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgZGF0ZSBlcXVhbCB0byBpbnRlcnZhbCBlbmQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQ6IGRhdGUsIGVuZCB9KSAvLyA9PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzV2l0aGluSW50ZXJ2YWwoZGlydHlEYXRlLCBpbnRlcnZhbCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWUgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBzdGFydFRpbWUgPSB0b0RhdGUoaW50ZXJ2YWwuc3RhcnQpLmdldFRpbWUoKTtcbiAgdmFyIGVuZFRpbWUgPSB0b0RhdGUoaW50ZXJ2YWwuZW5kKS5nZXRUaW1lKCk7IC8vIFRocm93IGFuIGV4Y2VwdGlvbiBpZiBzdGFydCBkYXRlIGlzIGFmdGVyIGVuZCBkYXRlIG9yIGlmIGFueSBkYXRlIGlzIGBJbnZhbGlkIERhdGVgXG5cbiAgaWYgKCEoc3RhcnRUaW1lIDw9IGVuZFRpbWUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgaW50ZXJ2YWwnKTtcbiAgfVxuXG4gIHJldHVybiB0aW1lID49IHN0YXJ0VGltZSAmJiB0aW1lIDw9IGVuZFRpbWU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiY2xhc3MgdGFza3Mge1xuICAgIC8vIHJlYWxcbiAgICAvLyBzdGF0aWMgYWxsID0gW11cbiAgICAvLyBwbGFjZWhvbGRlciBjb250ZW50XG4gICAgc3RhdGljIGFsbCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0ZpbmlzaCBEYXRlIEZpbHRlcicsXG4gICAgICAgICAgICBkYXRlOiBgMjAyMi0wNy0xNmAsXG4gICAgICAgICAgICBwcm9qZWN0OiBgYCxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0ZpbmlzaCBsb2NhbCBzdG9yYWdlJyxcbiAgICAgICAgICAgIGRhdGU6IGAyMDIyLTA3LTE3YCxcbiAgICAgICAgICAgIHByb2plY3Q6IGBgLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnU3BhY2UgTmVlZGxlJyxcbiAgICAgICAgICAgIGRhdGU6IGAyMDIyLTA3LTI3YCxcbiAgICAgICAgICAgIHByb2plY3Q6IGBCdXNpbmVzcyB0cmlwYCxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1Ryb2xsIHVuZGVyIHRoZSBicmlkZ2UnLFxuICAgICAgICAgICAgZGF0ZTogYDIwMjItMDctMjdgLFxuICAgICAgICAgICAgcHJvamVjdDogYEJ1c2luZXNzIHRyaXBgLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgICAgY29tcGxldGU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdQaWtlIHBsYWNlIGNvZmZlZSBtZWV0aW5nJyxcbiAgICAgICAgICAgIGRhdGU6IGAyMDIyLTA3LTI2YCxcbiAgICAgICAgICAgIHByb2plY3Q6IGBCdXNpbmVzcyB0cmlwYCxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAnZmFsc2UnLCAgICAgICAgXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIHN0YXRpYyB0b0RlbGV0ZSA9IFtdO1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvciAobmV3VGFzaykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdUYXNrXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlXG4gICAgfVxuXG5cblxufTtcblxuXG5cbmNsYXNzIHByb2plY3RzIHtcbiAgICAvLyByZWFsXG4gICAgLy8gc3RhdGljIGFsbCA9IFtdXG4gICAgLy8gcGxhY2Vob2xkZXIgY29udGVudFxuICAgIHN0YXRpYyBhbGwgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdCdXNpbmVzcyB0cmlwJyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiAnZmFsc2UnICAgIFxuICAgICAgICB9LFxuICAgIF07XG5cblxuXG4gICAgY29uc3RydWN0b3IgKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb2plY3ROYW1lXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZFxuICAgIH1cblxuXG5cbn1cblxuXG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdHMsXG4gICAgdGFza3MsXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNoZWNrYm94QmxhbmsgZnJvbSAnLi9hc3NldHMvY2hlY2tib3gtYmxhbmsuc3ZnJztcbmltcG9ydCBjaGVja2JveE1hcmtlZCBmcm9tICcuL2Fzc2V0cy9jaGVja2JveC1tYXJrZWQuc3ZnJztcbmltcG9ydCBjaGVja2xpc3QgZnJvbSAnLi9hc3NldHMvY2hlY2tsaXN0LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJUb2RheSBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci10b2RheS5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyV2VlayBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci1yYW5nZS5zdmcnO1xuaW1wb3J0IGFkZGl0aW9uSWNvbiBmcm9tICcuL2Fzc2V0cy9wbHVzLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9hc3NldHMvZWRpdC5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyRWRpdEljb24gZnJvbSAnLi9hc3NldHMvY2FsZW5kYXItZWRpdC5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9hc3NldHMvZGVsZXRlLnN2Zyc7XG5cbmltcG9ydCB7IHByb2plY3RzLCB0YXNrcyB9IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IHsgYWRkLCBpc1dpdGhpbkludGVydmFsLCBzdGFydE9mRGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5cblxuLy8gSWNvbiAmIGJ1dHRvbiBnZW5lcmF0b3JzIFxuY29uc3QgX2NyZWF0ZUNoZWNrYm94SWNvbiA9ICh0ZCwgdGFzaywgaSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgY2hlY2tib3hJY29uLnNyYyA9IGNoZWNrYm94TWFya2VkXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tib3hJY29uLnNyYyA9IGNoZWNrYm94Qmxhbms7XG4gICAgfVxuICAgIGNoZWNrYm94SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgY2hlY2tib3hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9tYXJrQ29tcGxldGUoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQoY2hlY2tib3hJY29uKTtcbn0gXG5cbmNvbnN0IGNyZWF0ZUNoZWNrbGlzdEljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBjaGVja2xpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hlY2tsaXN0SWNvbi5zcmMgPSBjaGVja2xpc3Q7XG4gICAgY2hlY2tsaXN0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKGNoZWNrbGlzdEljb24pO1xufVxuXG5jb25zdCBfY3JlYXRlRWRpdEljb24gPSAodGQpID0+IHtcbiAgICBjb25zdCBuZXdFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0VkaXRJY29uLnNyYyA9IGVkaXRJY29uO1xuICAgIG5ld0VkaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAgIC8vIGV2ZW50IGxpc3RlbmVyIHRvIG9wZW4gdGFzayBjYXJkXG4gICAgbmV3RWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX3Nob3dUYXNrQ2FyZChlKSlcbiAgICB0ZC5hcHBlbmRDaGlsZChuZXdFZGl0SWNvbik7XG59XG5cbmNvbnN0IF9jcmVhdGVDYWxlbmRhckVkaXRJY29uID0gKHRkKSA9PiB7XG4gICAgY29uc3QgbmV3Q2FsZW5kYXJFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0NhbGVuZGFyRWRpdEljb24uc3JjID0gY2FsZW5kYXJFZGl0SWNvbjtcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbiBlZGl0RGF0ZUljb24nKVxuICAgIG5ld0NhbGVuZGFyRWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIH0pXG4gICAgdGQuYXBwZW5kQ2hpbGQobmV3Q2FsZW5kYXJFZGl0SWNvbik7XG59XG5cbmNvbnN0IF9jcmVhdGVEZWxldGVJY29uID0gKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgIC8vIGNyZWF0ZSBpbWFnZSBhbmQgYXNzaWduIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBuZXdEZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3RGVsZXRlSWNvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgIG5ld0RlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uIGRlbGV0ZUl0ZW0nKVxuICAgIG5ld0RlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YClcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ3Rhc2tDbG9zZUNvbnRhaW5lcicpIHtcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlIHRhc2tcbiAgICAgICAgbmV3RGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfZGVsZXRlVGFzayhlKSlcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdwcm9qZWN0JyB8fCBcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0JykpIHtcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlIHByb2plY3RcbiAgICAgICAgbmV3RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKGBkZWxldGVQcm9qZWN0JHtpfWApICAgICAgICBcbiAgICAgICAgbmV3RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKGBoaWRkZW5gKSAgICAgICAgXG4gICAgICAgIG5ld0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX2RlbGV0ZVByb2plY3QoZSwgaSkpICAgICAgICBcbiAgICAgICAgLy8gZGlzcGxheSB0cmFzaCBpY29uIG9uIGhvdmVyXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlbGV0ZVByb2plY3Qke2l9YClcbiAgICAgICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICB9KVxuICAgICAgICAvLyBoaWRlIHRyYXNoIGljb24gXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlbGV0ZVByb2plY3Qke2l9YClcbiAgICAgICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICB9KSAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhjb250YWluZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKTtcbiAgICB9XG4gICAgLy8gYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEZWxldGVJY29uKVxufVxuXG5jb25zdCBjcmVhdGVBZGRpdGlvbkljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBuZXdBZGRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdBZGRpdGlvbkljb24uc3JjID0gYWRkaXRpb25JY29uO1xuICAgIG5ld0FkZGl0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld0FkZGl0aW9uSWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZVRvZGF5SWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld1RvZGF5SWNvbi5zcmMgPSBjYWxlbmRhclRvZGF5O1xuICAgIG5ld1RvZGF5SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld1RvZGF5SWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZVdlZWtJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3V2Vla0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdXZWVrSWNvbi5zcmMgPSBjYWxlbmRhcldlZWs7XG4gICAgbmV3V2Vla0ljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdXZWVrSWNvbik7XG59XG5cbmNvbnN0IF9jcmVhdGVBZGRCdXR0b24gPSAoY29udGFpbmVyLCBpKSA9PiB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkQnRuJyk7XG4gICAgYWRkQnRuLmlubmVyVGV4dCA9IFwic3VibWl0XCI7XG4gICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmRSb3czJykpIHtcbiAgICAgICAgLy8gY29udmVydCBjYXJkIHRvIGZvcm0/IGFuZCBjaGFuZ2UgdGhpcyBldmVudCBsaXN0ZW5lciB0byB0cmlnZ2VyIHdoZW4gZm9ybSBzdWJtaXRzXG4gICAgICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9zdWJtaXRUYXNrQ2FyZChlKSlcbiAgICB9IGVsc2UgaWYgKGkuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkUHJvamVjdEZvcm0nKSB7XG4gICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0QWRkQnRuJyk7XG4gICAgfSBlbHNlIGlmIChpLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZFRhc2tGb3JtJykge1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgndGFza0FkZEJ0bicpO1xuICAgIH07XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG59XG5cbmNvbnN0IF9jcmVhdGVDYW5jZWxCdXR0b24gPSAoY29udGFpbmVyLCBpKSA9PiB7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FuY2VsQnRuJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgIGNhbmNlbEJ0bi5pbm5lclRleHQgPSBcImNhbmNlbFwiO1xuICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnY2FyZFJvdzMnKSB7XG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlUYXNrcyhpKSlcbiAgICB9O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pOyAgIFxufVxuXG5cblxuLy8gQ29udGFpbmVyIEFORCBpY29uIGdlbmVyYXRvcnMgKEZvciB0YXNrIGxpc3RpbmcgYW5kIHRhc2sgY2FyZClcbmNvbnN0IGNyZWF0ZUNoZWNrYm94Q29udGFpbmVyID0gKHRyLCB0YXNrLCBpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3hDb250YWluZXInKTtcbiAgICBfY3JlYXRlQ2hlY2tib3hJY29uKGNoZWNrYm94Q29udGFpbmVyLCB0YXNrLCBpKTtcbiAgICB0ci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XG59XG5cbmNvbnN0IGNyZWF0ZURhdGVDb250YWluZXIgPSAodHIsIHRhc2ssIGkpID0+IHtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBkYXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZUNvbnRhaW5lcicpO1xuICAgIGlmICh0ci5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXREYXRlQ29udGFpbmVyJykpIHtcbiAgICAgICAgZGF0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlucHV0IGNsYXNzPSd0YXNrQ2FyZERhdGUke2l9JyB0eXBlPSdkYXRlJyB2YWx1ZT0nJHt0YXNrLmRhdGV9Jz5gXG4gICAgfSBlbHNlIHtcbiAgICBkYXRlQ29udGFpbmVyLmlubmVyVGV4dCA9IGAke3Rhc2suZGF0ZX1gXG4gICAgfVxuICAgIHRyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xufVxuXG5jb25zdCBjcmVhdGVEZWxldGVDb250YWluZXIgPSAodHIpID0+IHtcbiAgICBjb25zdCBjbG9zZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2xvc2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2xvc2VDb250YWluZXInKTtcbiAgICBfY3JlYXRlRGVsZXRlSWNvbihjbG9zZUNvbnRhaW5lcik7XG4gICAgdHIuYXBwZW5kQ2hpbGQoY2xvc2VDb250YWluZXIpO1xufVxuXG5cblxuLy8gRm9ybSBnZW5lcmF0b3JcbmNvbnN0IGNyZWF0ZUZvcm0gPSAoZm9ybSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGZvcm1Sb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtUm93Jyk7XG4gICAgXG4gICAgY29uc3QgZm9ybVJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93Mi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm1Sb3cnKTtcbiAgICBmb3JtUm93Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1CdXR0b25zJyk7XG5cbiAgICBjb25zdCBmb3JtUm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3czLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG5cbiAgICAvLyByb3cgb25lOiBhc3NpZ24gaW5wdXQgYWNjb3JkaW5nIHRvIGNsYXNzIG9mIGZvcm1cbiAgICAvLyByb3cgdGhyZWU6IGFzc2lnbiBlcnJvciBjbGFzcyBhbmQgdGV4dCBhY2NvcmRpbmcgdG8gY2xhc3Mgb2YgZm9ybVxuICAgIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZFByb2plY3RGb3JtJykge1xuICAgICAgICBmb3JtUm93MS5pbm5lckhUTUwgPSBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbmV3UHJvamVjdElucHV0JyBuYW1lPSduZXdQcm9qZWN0SW5wdXQnPjwvaW5wdXQ+XCI7XG4gICAgICAgIGZvcm1Sb3czLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3UHJvakVycm9yQ29udGFpbmVyJyk7XG4gICAgICAgIGZvcm1Sb3czLmlubmVyVGV4dCA9ICdOYW1lIHlvdXIgcHJvamVjdCEnXG4gICAgfSBlbHNlIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZFRhc2tGb3JtJykge1xuICAgICAgICBmb3JtUm93MS5pbm5lckhUTUwgPSBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbmV3VGFza0lucHV0JyBuYW1lPSduZXdUYXNrSW5wdXQnPjwvaW5wdXQ+XCI7XG4gICAgICAgIGZvcm1Sb3czLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3VGFza0Vycm9yQ29udGFpbmVyJyk7XG4gICAgICAgIGZvcm1Sb3czLmlubmVyVGV4dCA9ICdOYW1lIHlvdXIgdGFzayEnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgc3RyYW5nZScpXG4gICAgfVxuICAgIC8vIHJvdyB0d286IHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgICBfY3JlYXRlQWRkQnV0dG9uKGZvcm1Sb3cyLCBmb3JtKTtcbiAgICBfY3JlYXRlQ2FuY2VsQnV0dG9uKGZvcm1Sb3cyLCBmb3JtKTtcbiAgICAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3cxKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3cyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3czKTtcbn1cblxuXG5cblxuXG4vLyBET00gbW9kaWZpY2F0aW9uIGZ1bmN0aW9uc1xuXG4vLyBQUk9KRUNUU1xuLy8gRGlzcGxheSBlbnRpcmUgYXJyYXkgb2YgcHJvamVjdHMgdG8gbWVudVxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICAgIC8vIEdyYWIgcHJvamVjdHMgbWVudVxuICAgIGNvbnN0IHByb2plY3RzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c01lbnUnKTtcblxuICAgIC8vIENsZWFyIHByb2plY3RzIG1lbnVcbiAgICBjb25zdCBvbGRQcm9qQ291bnQgPSBwcm9qZWN0c01lbnUuY2hpbGRFbGVtZW50Q291bnRcbiAgICBmb3IgKGxldCBpPTA7IGk8b2xkUHJvakNvdW50OyBpKyspIHtcbiAgICAgICAgcHJvamVjdHNNZW51LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHNpbmdsZSBwcm9qZWN0IHRvIG1lbnUgKGNhbGxlZCBiZWxvdylcbiAgICBjb25zdCBfZGlzcGxheVByb2plY3QgPSAobmV3UHJvaiwgaSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0YClcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKVxuICAgICAgICAvLyBhc3NpZ24gY2xhc3MgdG8gc2VsZWN0ZWQgcHJvamVjdCBcbiAgICAgICAgaWYgKG5ld1Byb2ouc2VsZWN0ZWQgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBldmVudCBsaXN0ZW5lciB0byBmaWx0ZXIgdGFza2xpc3QgYnkgcHJvamVjdCBuYW1lICAgICBcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiBkZWxldGluZyBwcm9qZWN0LCBkbyBub3Qgc2V0IGZpbHRlclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlSXRlbScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldFRhc2tGaWx0ZXIobmV3UHJvamVjdENvbnRhaW5lcilcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgY3JlYXRlQ2hlY2tsaXN0SWNvbihuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5ld1Byb2plY3RUZXh0LnRleHRDb250ZW50ID0gbmV3UHJvai5uYW1lO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUZXh0KVxuICAgICAgICBfY3JlYXRlRGVsZXRlSWNvbihuZXdQcm9qZWN0Q29udGFpbmVyLCBpKTtcbiAgICAgICAgcHJvamVjdHNNZW51LmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgIH0gXG5cbiAgICAvLyBBcHBlbmQgYWxsIHRhc2tzIHRvIHRhc2tsaXN0XG4gICAgbGV0IGk9MFxuICAgIHByb2plY3RzLmFsbC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBfZGlzcGxheVByb2plY3QocHJvamVjdCwgaSlcbiAgICAgICAgaSsrXG4gICAgfSk7XG59XG5cblxuXG4vLyBEZWxldGUgcHJvamVjdFxuY29uc3QgX2RlbGV0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIC8vIElkZW50aWZ5IHByb2plY3QgdG8gZGVsZXRlXG4gICAgY29uc3QgZG9vbWVkSW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgZG9vbWVkTmFtZSA9IHByb2plY3RzLmFsbFtkb29tZWRJbmRleF0ubmFtZTtcblxuICAgIC8vIGRlbGV0ZSBwcm9qZWN0XG4gICAgcHJvamVjdHMuYWxsLnNwbGljZShkb29tZWRJbmRleCwgMSk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG5cbiAgICAvLyBkZWxldGUgYWxsIHRhc2tzIGluIGRvb21lZCBwcm9qZWN0XG4gICAgLy8gY291bGQgY2hhbmdlIGZyb20gc3BsaWNlIHRvIGRlbGV0ZWQgcHJvcGVyeSB3aXRoIGhpZGRlbiBjbGFzcyB0byB1c2UgaW4gc3RhdHMgdGFibGUgd2l0aCBjb21wbGV0ZWQgcHJvcGVydHkgLy9cbiAgICAvLyBtYXJrIHRhc2tzIGZvciBkZWxldGlvblxuICAgIHRhc2tzLmFsbC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAodGFzay5wcm9qZWN0ID09PSBkb29tZWROYW1lKSB7XG4gICAgICAgICAgICB0YXNrcy50b0RlbGV0ZS5wdXNoKHRhc2submFtZSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy8gZGVsZXRlIG1hcmtlZCB0YXNrc1xuICAgIHRhc2tzLnRvRGVsZXRlLmZvckVhY2goZG9vbWVkVGFzayA9PiB7XG4gICAgICAgIHRhc2tzLmFsbC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2submFtZSA9PT0gZG9vbWVkVGFzaykge1xuICAgICAgICAgICAgICAgIHRhc2tzLmFsbC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSkgXG5cbiAgICAvLyBJZiBkb29tZWQgcHJvamVjdCB3YXMgc2VsZWN0ZWQsIHJldmVydCB0YXNrbGlzdCB0byBhbGwgdGFza3NcbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJyk7XG4gICAgY29uc3QgYWxsVGFza3NDbGFzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsVGFza3MnKS5jbGFzc0xpc3RcbiAgICBpZiAoY29udGVudFRpdGxlLnRleHRDb250ZW50ID09PSBkb29tZWROYW1lKSB7XG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdBbGwgdGFza3MnIFxuICAgICAgICBhbGxUYXNrc0NsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICB9XG5cbiAgICAvLyByZWZyZXNoIHRhc2tsaXN0XG4gICAgZGlzcGxheVRhc2tzKCk7XG59XG5cblxuXG5cblxuLy8gVEFTS1Ncbi8vIERpc3BsYXkgZW50aXJlIGFycmF5IG9mIHRhc2tzIHRvIHRhc2tsaXN0XG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG5cbiAgICAvLyBHcmFiIHRhc2tsaXN0XG4gICAgY29uc3QgdGFza2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKTtcbiAgICBcbiAgICAvLyBjbGVhciB0YXNrbGlzdFxuICAgIGNvbnN0IG9sZFRhc2tDb3VudCA9IHRhc2tsaXN0LmNoaWxkRWxlbWVudENvdW50XG4gICAgZm9yIChsZXQgaT0wOyBpPG9sZFRhc2tDb3VudDsgaSsrKSB7XG4gICAgICAgIHRhc2tsaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gQWRkIHNpbmdsZSB0YXNrIHRvIHRhc2tsaXN0IGRpc3BsYXlcbiAgICBjb25zdCBfY3JlYXRlVGFza0xpc3RpbmcgPSAodGFzaywgaSkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgdGFzayBjb250YWluZXJcbiAgICAgICAgY29uc3QgbmV3TGlzdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIG5ld0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrIGxpc3Rpbmcke2l9YCk7XG4gICAgICAgIC8vIGNvbXBsZXRlIGZpbHRlciB0byBhc3NpZ24gY2xhc3NcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXG4gICAgICAgIH1cbiAgICAgICAgLy8gYXNzaWduIHByaW9yaXR5IGNsYXNzXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnbWVkaXVtUHJpb3JpdHknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3TGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCBjaGVja2JveFxuICAgICAgICBjcmVhdGVDaGVja2JveENvbnRhaW5lcihuZXdMaXN0aW5nLCB0YXNrLCBpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCB0YXNrXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFza0NvbnRhaW5lciR7aX1gKTtcbiAgICAgICAgLy8gY29tcGxldGUgZmlsdGVyIGZvciBzdHJpa2V0aHJvdWdoXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wbGV0ZScpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7dGFzay5uYW1lfWA7XG4gICAgICAgIG5ld0xpc3RpbmcuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gYWRkIGRhdGVcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihuZXdMaXN0aW5nLCB0YXNrKTtcblxuICAgICAgICAvLyBhZGQgZWRpdCBidXR0b25cbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGVkaXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0Q29udGFpbmVyJyk7XG4gICAgICAgIF9jcmVhdGVFZGl0SWNvbihlZGl0Q29udGFpbmVyKTtcbiAgICAgICAgbmV3TGlzdGluZy5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKTtcblxuICAgICAgICAvLyBhZGQgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3TGlzdGluZyk7XG5cbiAgICAgICAgLy9hcHBlbmQgdGFzayB0byB0YXNrbGlzdFxuICAgICAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0aW5nKTtcblxuXG5cbiAgICAgICAgLy8gc2V0IGRpc3BsYXkgZmlsdGVyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgICAvLyBkYXRlIGZpbHRlcnNcblxuICAgICAgICAvLyBBbGwgdGFza3NcbiAgICAgICAgaWYgKGZpbHRlciA9PT0gJ0FsbCB0YXNrcycpIHtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBEdWUgVG9kYXlcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09ICdEdWUgdG9kYXknKSB7XG4gICAgICAgICAgICAvLyBoaWRlIGlmIG5vIGR1ZSBkYXRlXG4gICAgICAgICAgICBpZiAodGFzay5kYXRlID09PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBncmFiIHRvZGF5J3MgZGF0ZSBhbmQgdGFzayBkYXRlXG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaGlkZSBpZiBub3QgZHVlIHRvZGF5XG4gICAgICAgICAgICBpZiAodG9kYXkuZ2V0TW9udGgoKSAhPT0gdGFza0RhdGUuZ2V0TW9udGgoKSB8fFxuICAgICAgICAgICAgICAgIHRvZGF5LmdldERhdGUoKSAtIDEgIT09IHRhc2tEYXRlLmdldERhdGUoKSB8fFxuICAgICAgICAgICAgICAgIHRvZGF5LmdldEZ1bGxZZWFyKCkgIT09IHRhc2tEYXRlLmdldEZ1bGxZZWFyKCkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBEdWUgdGhpcyB3ZWVrXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSAnRHVlIHRoaXMgd2VlaycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XG5cbiAgICAgICAgICAgIC8vIGhpZGUgaWYgbm8gZHVlIGRhdGVcbiAgICAgICAgICAgIGlmICh0YXNrLmRhdGUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGdyYWIgd2VlayBkYXRlcyBhbmQgdGFzayBkdWUgZGF0ZSBkYXRlXG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoKSlcbiAgICAgICAgICAgIGNvbnN0IGVuZE9mV2VlayA9IGFkZCh0b2RheSwge2RheXM6IDd9KVxuICAgICAgICAgICAgLy8gbWlkbmlnaHQgZHVlIGRhdGVcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gYWRkKHN0YXJ0T2ZEYXkobmV3IERhdGUodGFzay5kYXRlKSksIHtkYXlzOiAxLCBob3VyczogMjMsIG1pbnV0ZXM6IDU5fSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaGlkZSBpZiBub3QgZHVlIHRoaXMgd2Vla1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXNXaXRoaW5JbnRlcnZhbCh0YXNrRGF0ZSwge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiB0b2RheSxcbiAgICAgICAgICAgICAgICBlbmQ6IGVuZE9mV2Vla1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdMaXN0aW5nKVxuXG4gICAgICAgICAgICBpZiAoaXNXaXRoaW5JbnRlcnZhbCh0YXNrRGF0ZSwge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiB0b2RheSxcbiAgICAgICAgICAgICAgICBlbmQ6IGVuZE9mV2VlayxcbiAgICAgICAgICAgIH0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5YXknKVxuICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICAvLyBwcm9qZWN0IGZpbHRlclxuICAgICAgICBwcm9qZWN0cy5hbGwuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGZpbHRlcikge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnByb2plY3QgIT09IGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0aW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH07ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgXG5cbiAgICAvLyBDcmVhdGUgYW5kIGhpZGUgdGFzayBjYXJkIGluIHRhc2tsaXN0IGRpc3BsYXlcbiAgICBjb25zdCBfY3JlYXRlVGFza0NhcmQgPSAodGFzaywgaSkgPT4ge1xuICAgICAgICAvLyBDUkVBVEUgVEFTSyBDQVJEXG4gICAgICAgIGNvbnN0IG5ld0NhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrIGNhcmQke2l9YCk7XG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBoaWRkZW5gKTtcblxuICAgICAgICAvLyBjb21wbGV0ZSBmaWx0ZXIgdG8gYXNzaWduIGNsYXNzXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIG5ld0NhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxuICAgICAgICB9ICAgICAgIFxuXG4gICAgICAgIC8vIGFzc2lnbiBwcmlvcml0eSBjbGFzc1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZ2hQcmlvcml0eScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIG5ld0NhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIG5ld0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmNvbXBsZXRlIG1lbnVPcHRpb25zJyk7XG4gICAgICAgIG5ld0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3Q2FyZCk7XG5cbiAgICAgICAgY29uc3QgbmV3VGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICAgICAgICBuZXdUaGVhZC5pbm5lckhUTUwgPSBcbiAgICAgICAgICAgIGA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdjaGVja2JveENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdkYXRlQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZWRpdENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgIDwvdHI+YFxuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRib2R5XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrQ2FyZCcpO1xuICAgICAgICBcblxuICAgICAgICAvLyBGaXJzdCByb3dcbiAgICAgICAgY29uc3QgY2FyZFJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3cxJylcbiAgICAgICAgLy8gYWRkIHRhc2sgbmFtZSBpbnB1dFxuICAgICAgICBjb25zdCB0YXNrSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrSW5wdXRDb250YWluZXJgKTtcbiAgICAgICAgdGFza0lucHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J3Rhc2tDYXJkVGFzayR7aX0nIGlkPSduZXdUYXNrSW5wdXQnIG5hbWU9J25ld1Rhc2tJbnB1dCcgdmFsdWU9JyR7dGFzay5uYW1lfSc+PC9pbnB1dD5gO1xuICAgICAgICBjYXJkUm93MS5hcHBlbmRDaGlsZCh0YXNrSW5wdXRDb250YWluZXIpO1xuICAgICAgICAvLyBhZGQgZGF0ZVxuICAgICAgICBjb25zdCBlZGl0RGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGVkaXREYXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgZWRpdERhdGVDb250YWluZXJgKTtcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihlZGl0RGF0ZUNvbnRhaW5lciwgdGFzaywgaSk7XG4gICAgICAgIGNhcmRSb3cxLmFwcGVuZENoaWxkKGVkaXREYXRlQ29udGFpbmVyKTtcbiAgICAgICAgLy8gYWRkIGNhbGVuZGFyIGVkaXQgYnV0dG9uXG4gICAgICAgIF9jcmVhdGVDYWxlbmRhckVkaXRJY29uKGNhcmRSb3cxKTtcblxuXG5cbiAgICAgICAgLy8gU2Vjb25kIHJvdyBcbiAgICAgICAgY29uc3QgY2FyZFJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93Mi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3cyJylcbiAgICAgICAgXG4gICAgICAgIC8vIHByb2plY3QgaW5wdXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIHByb2plY3QgZHJvcGRvd24gXG4gICAgICAgIGNvbnN0IHByb2plY3REcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDYXJkUHJvamVjdCR7aX1gKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCduYW1lJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dGFzay5wcm9qZWN0fWApXG5cbiAgICAgICAgLy8gY3JlYXRlIHByb2plY3QgZHJvcGRvd24gb3B0aW9uc1xuICAgICAgICAvLyBibGFuayBvcHRpb24gZm9yIG5vIHByb2plY3RcbiAgICAgICAgY29uc3QgYmxhbmtQcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgYmxhbmtQcm9qZWN0T3B0aW9uLnZhbHVlID0gJydcbiAgICAgICAgYmxhbmtQcm9qZWN0T3B0aW9uLnRleHQgPSAnJ1xuICAgICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQoYmxhbmtQcm9qZWN0T3B0aW9uKVxuICAgICAgICAvLyByZW1haW5pbmcgb3B0aW9ucyBnZW5lcmF0ZWQgZnJvbSBwcm9qZWN0cyBhcnJheVxuICAgICAgICBwcm9qZWN0cy5hbGwuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IGAke3Byb2plY3QubmFtZX1gXG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHQgPSBgJHtwcm9qZWN0Lm5hbWV9YFxuICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdCA9PT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REcm9wZG93bilcbiAgICAgICAgY2FyZFJvdzIuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0Q29udGFpbmVyKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gcHJpb3JpdHkgaW5wdXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIHByaW9yaXR5IGRyb3Bkb3duIFxuICAgICAgICBjb25zdCBwcmlvcml0eURyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDYXJkUHJpb3JpdHkke2l9YClcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCduYW1lJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3Rhc2sucHJpb3JpdHl9YClcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwcmlvcml0eSBkcm9wZG93biBvcHRpb25zXG4gICAgICAgIC8vIGhpZ2ggcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgcHJpb3JpdHlIaWdoLnZhbHVlID0gJ2hpZ2gnXG4gICAgICAgIHByaW9yaXR5SGlnaC50ZXh0ID0gJ0hpZ2gnXG4gICAgICAgIC8vIG1lZGl1bSBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5TWVkaXVtLnZhbHVlID0gJ21lZGl1bSdcbiAgICAgICAgcHJpb3JpdHlNZWRpdW0udGV4dCA9ICdNZWRpdW0nXG4gICAgICAgIC8vIGxvdyBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5TG93LnZhbHVlID0gJ2xvdydcbiAgICAgICAgcHJpb3JpdHlMb3cudGV4dCA9ICdMb3cnXG4gICAgICAgIFxuICAgICAgICAvLyBwcmlvcml0eSBzZWxlY3Rpb25cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICBwcmlvcml0eUhpZ2guc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgIHByaW9yaXR5TG93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIFxuICAgICAgICBwcmlvcml0eU1lZGl1bS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyBhcHBlbmQgcHJpb3JpdHkgaW5wdXQgdG8gcm93XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoKTtcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5hcHBlbmRDaGlsZChwcmlvcml0eU1lZGl1bSk7XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3cpOyAgICAgICAgXG4gICAgICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEcm9wZG93bik7ICAgICAgICBcbiAgICAgICAgY2FyZFJvdzIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dENvbnRhaW5lcik7XG5cblxuXG4gICAgICAgIC8vIFRoaXJkIHJvdyBcbiAgICAgICAgY29uc3QgY2FyZFJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3czJylcbiAgICAgICAgX2NyZWF0ZUFkZEJ1dHRvbihjYXJkUm93MywgaSk7XG4gICAgICAgIF9jcmVhdGVDYW5jZWxCdXR0b24oY2FyZFJvdzMsIGAke2l9YCk7XG5cblxuXG4gICAgICAgIC8vIGFwcGVuZCB0YXNrIGNhcmQgdG8gdGFza2xpc3RcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFJvdzEpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYXJkUm93Mik7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRSb3czKTtcblxuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKG5ld1RoZWFkKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cbiAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKTtcblxuICAgICAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZChuZXdDYXJkQ29udGFpbmVyKTtcbiAgICB9XG4gICAgXG5cbiAgICAvLyBhcHBlbmQgYWxsIHRhc2tzIHRvIHRhc2tsaXN0XG4gICAgbGV0IGk9MFxuICAgIHRhc2tzLmFsbC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBfY3JlYXRlVGFza0xpc3RpbmcodGFzaywgaSk7XG4gICAgICAgIF9jcmVhdGVUYXNrQ2FyZCh0YXNrLCBpKTtcbiAgICAgICAgaSsrXG4gICAgfSk7XG59XG5cblxuXG5cblxuLy8gQ29tcGxldGUgdGFza1xuY29uc3QgX21hcmtDb21wbGV0ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0lEID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGlmICh0YXNrcy5hbGxbdGFza0lEXS5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIC8vbWFyayB0YXNrIGluY29tcGxldGVcbiAgICAgICAgdGFza3MuYWxsW3Rhc2tJRF0uY29tcGxldGUgPSAnZmFsc2UnXG4gICAgfSBlbHNlIGlmICh0YXNrcy5hbGxbdGFza0lEXS5jb21wbGV0ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAvL21hcmsgdGFzayBjb21wbGV0ZVxuICAgICAgICB0YXNrcy5hbGxbdGFza0lEXS5jb21wbGV0ZSA9ICd0cnVlJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKVxuICAgIH1cbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuLy8gU2hvdyB0YXNrIGNhcmRcbmNvbnN0IF9zaG93VGFza0NhcmQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJRCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgLy8gc2hvdyB0YXNrIGNhcmRcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkJHt0YXNrSUR9YCk7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tJRH1gKTtcbiAgICAvL2hpZGUgdGFzayBsaXN0aW5nXG4gICAgY29uc3QgdGFza0xpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdGluZyR7dGFza0lEfWApO1xuICAgIHRhc2tMaXN0aW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cbmNvbnN0IF9zdWJtaXRUYXNrQ2FyZCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0lEID0gKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSkgXG5cbiAgICAvLyBHZXQgaW5wdXQgdmFsdWVzXG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmRUYXNrJHt0YXNrSUR9YCkudmFsdWVcbiAgICBjb25zdCB1cGRhdGVkRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZERhdGUke3Rhc2tJRH1gKS52YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tDYXJkUHJvamVjdCR7dGFza0lEfWApLnZhbHVlXG4gICAgY29uc3QgdXBkYXRlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tDYXJkUHJpb3JpdHkke3Rhc2tJRH1gKS52YWx1ZVxuXG4gICAgLy8gQXBwbHkgaW5wdXQgdmFsdWVzIHRvIHRhc2sgb2JqZWN0XG4gICAgdGFza3MuYWxsW3Rhc2tJRF0ubmFtZSA9IHVwZGF0ZWRUYXNrXG4gICAgdGFza3MuYWxsW3Rhc2tJRF0uZGF0ZSA9IHVwZGF0ZWREYXRlXG4gICAgdGFza3MuYWxsW3Rhc2tJRF0ucHJvamVjdCA9IHVwZGF0ZWRQcm9qZWN0XG4gICAgdGFza3MuYWxsW3Rhc2tJRF0ucHJpb3JpdHkgPSB1cGRhdGVkUHJpb3JpdHlcblxuICAgIC8vIFJlZnJlc2ggdGFza2xpc3RcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuLy8gRGVsZXRlIHRhc2tcbmNvbnN0IF9kZWxldGVUYXNrID0gKGUpID0+IHtcbiAgICBsZXQgZG9vbWVkSW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIHRhc2tzLmFsbC5zcGxpY2UoZG9vbWVkSW5kZXgsIDEpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xufVxuXG5cblxuXG5cbi8vIFRBU0sgRElTUExBWSBPUFRJT05TXG5cbi8vIGhvdyBpcyB0aGlzIGJlaW5nIHNraXBwZWQgd2hlbiBjbGlja2luZyBvbiBkZWxldGUgaWNvbj8/XG5jb25zdCBzZXRUYXNrRmlsdGVyID0gKGNvbnRhaW5lciwgZSkgPT4geyAgIFxuXG4gICAgLy8gc2V0IGNvbnRlbnQgdGl0bGUgKGZpbHRlcilcbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJylcbiAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBjb250YWluZXIuaW5uZXJUZXh0XG5cbiAgICAvLyBkZXNlbGVjdCBhbnkgbWVudSBmaWx0ZXIgXG4gICAgY29uc3QgYWxsVGFza3NDbGFzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsVGFza3MnKS5jbGFzc0xpc3RcbiAgICBjb25zdCBkdWVUb2RheUNsYXNzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVUb2RheScpLmNsYXNzTGlzdFxuICAgIGNvbnN0IGR1ZVdlZWtDbGFzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlV2VlaycpLmNsYXNzTGlzdFxuICAgIGlmIChhbGxUYXNrc0NsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICBhbGxUYXNrc0NsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICB9IGlmIChkdWVUb2RheUNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICBkdWVUb2RheUNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICB9IGlmIChkdWVXZWVrQ2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgIGR1ZVdlZWtDbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgfSBcblxuICAgIC8vIGRlc2VsZWN0IGFsbCBwcm9qZWN0c1xuICAgIHByb2plY3RzLmFsbC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC5zZWxlY3RlZCA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnNlbGVjdGVkID0gJ2ZhbHNlJ1xuICAgICAgICB9XG4gICAgfSkgXG5cbiAgICAvLyBTZWxlY3QgcHJvamVjdCBpZiBvbmUgaXMgY2hvc2VuIChtYWluIG1lbnUgc2VsZWN0aW9uIGlzIGhhbmRsZWQgaW4gZXZlbnQgbGlzdGVuZXIpXG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICB2YXIgc2VsZWN0ZWRQcm9qZWN0SWQgPSBjb250YWluZXIuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBwcm9qZWN0cy5hbGxbc2VsZWN0ZWRQcm9qZWN0SWRdLnNlbGVjdGVkID0gJ3RydWUnXG4gICAgfVxuXG4gICAgLy8gcmVmcmVzaFxuICAgIGRpc3BsYXlQcm9qZWN0cygpOyAgICBcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuXG5cblxuXG5leHBvcnQge1xuICAgIC8vIFVzZWQgaW4gaW5kZXggJiBjb3JlXG5cbiAgICAvLyBVc2VkIG9ubHkgaW4gY29yZVxuICAgIGNyZWF0ZUZvcm0sXG4gICAgY3JlYXRlQ2hlY2tsaXN0SWNvbixcbiAgICBjcmVhdGVXZWVrSWNvbixcbiAgICBjcmVhdGVUb2RheUljb24sXG4gICAgY3JlYXRlQWRkaXRpb25JY29uLFxuICAgIHNldFRhc2tGaWx0ZXIsXG5cbiAgICAvLyBVc2VkIG9ubHkgaW4gaW5kZXhcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheVRhc2tzLFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
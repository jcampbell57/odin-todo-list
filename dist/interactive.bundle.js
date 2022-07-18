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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/add/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
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

const _createEditIcon = (td, i) => {
    const newEditIcon = document.createElement('img');
    newEditIcon.src = _assets_edit_svg__WEBPACK_IMPORTED_MODULE_6__;
    newEditIcon.setAttribute('class', 'icon');
    newEditIcon.setAttribute('id', `${i}`);
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
    //task card
    if (tr.classList.contains('editDateContainer')) {
        dateContainer.innerHTML = `<input class='taskCardDate${i}' type='date' value='${task.date}'>`
    // task listing
    } else {
        // only display due date if there is one
        if (task.date === '') {
            dateContainer.innerText === ''
        } else {
            dateContainer.innerText = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(task.date), {days: 1}).toLocaleDateString()}`
        }
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
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    storageProjects.forEach(project => {
        _displayProject(project, i)
        i++
    });
}



// Delete project
const _deleteProject = (e) => {
    // grab arrays from storage
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))

    // Identify project to delete
    const doomedIndex = e.target.getAttribute('id');
    const doomedName = storageProjects[doomedIndex].name;

    // delete project
    storageProjects.splice(doomedIndex, 1);

    // delete all tasks in doomed project
    // could change from splice to deleted propery with hidden class to use in stats table with completed property //
    // mark tasks for deletion
    storageTasks.forEach((task, index) => {
        if (task.project === doomedName) {
            // will delete after loop as to not make errors
            _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.toDelete.push(task.name)
        }
    })
    // delete marked tasks
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.toDelete.forEach(doomedTask => {
        storageTasks.forEach((task, index) => {
            if (task.name === doomedTask) {
                storageTasks.splice(index, 1)
            }
        })
    }) 
    // clear teDelete array 
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.toDelete = [];

    // set changes to localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks));
    localStorage.setItem('storageProjects', JSON.stringify(storageProjects));


    // If doomed project was selected, revert tasklist to all tasks
    const contentTitle = document.querySelector('.contentTitle');
    const allTasksClassList = document.querySelector('.allTasks').classList
    if (contentTitle.textContent === doomedName) {
        contentTitle.textContent = 'All tasks' 
        allTasksClassList.add('selected')
    }

    // refresh tasklist
    displayProjects();
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
        _createEditIcon(editContainer, i);
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

            // hide if no due date
            if (task.date === '') {
                newListing.classList.add('hidden');
                return;
            }
            
            // grab week dates and task due date date
            const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date())
            const endOfWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(today, {days: 7})
            // midnight due date
            const taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(task.date)), {days: 1, hours: 23, minutes: 59})
            
            // hide if not due this week
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(taskDate, {
                start: today,
                end: endOfWeek,
            }) === false) {
                newListing.classList.add('hidden')
                return
            }
        } 

        // project filter
        // grab projects array from storage
        const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
        // apply filter
        storageProjects.forEach(project => {
            if (project.name === filter) {
                if (task.project !== filter) {
                    newListing.classList.add('hidden');
                };    
            }
        })
        // set projects array back into localStorage
        localStorage.setItem('storageProjects', JSON.stringify(storageProjects))
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
        const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
        storageProjects.forEach(project => {
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
    // NEW 
    let i=0
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    storageTasks.forEach(task => {
        _createTaskListing(task, i);
        _createTaskCard(task, i);
        i++
    });
}





// Complete task
const _markComplete = (e) => {
    const taskID = e.target.getAttribute('id');
    // NEW
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    if (storageTasks[taskID].complete === 'true') {
        //mark task incomplete
        storageTasks[taskID].complete = 'false'
    } else if (storageTasks[taskID].complete === 'false') {
        //mark task complete
        storageTasks[taskID].complete = 'true'
    } else {
        console.log('this is strange')
    }
    // set changes to localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks));
    displayTasks();
}

// Show task card
const _showTaskCard = (e) => {
    const taskID = e.target.getAttribute('id');
    // refresh tasklist to close other task cards (optional but looks cleaner)
    displayTasks();
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
    const updatedName = document.querySelector(`.taskCardTask${taskID}`).value
    const updatedDate = document.querySelector(`.taskCardDate${taskID}`).value
    const updatedProject = document.querySelector(`.taskCardProject${taskID}`).value
    const updatedPriority = document.querySelector(`.taskCardPriority${taskID}`).value

    // NEW
    // grab updated task from localStorage
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    var updatedTask = storageTasks[taskID]
    // Apply input values to task object
    updatedTask.name = updatedName
    updatedTask.date = updatedDate
    updatedTask.project = updatedProject
    updatedTask.priority = updatedPriority
    // set task array back into localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks))
    displayTasks();
}

// Delete task
const _deleteTask = (e) => {
    let doomedIndex = e.target.parentElement.parentElement.getAttribute('id');
    // NEW
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    // remove task from localStorage
    storageTasks.splice(doomedIndex, 1);
    // set task array back into localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks))
    // refresh tasklist
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

    // grab projects array from storage
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    
    // deselect all projects
    storageProjects.forEach(project => {
        if (project.selected === 'true') {
            project.selected = 'false'
        }
    }) 

    // Select project if one is chosen (main menu selection is handled in event listener)
    if (container.getAttribute('class') === 'project') {
        var selectedProjectId = container.getAttribute('id');
        storageProjects[selectedProjectId].selected = 'true'
    }

    // set projects array back into localStorage
    localStorage.setItem('storageProjects', JSON.stringify(storageProjects))

    // refresh
    displayProjects();    
    displayTasks();
}






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNXaXRoaW5JbnRlcnZhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbnRlcmFjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTW9udGhzIGZyb20gXCIuLi9hZGRNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtEdXJhdGlvbn0gZHVyYXRpb24gLSB0aGUgb2JqZWN0IHdpdGggeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKlxuICogfCBLZXkgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCB5ZWFycyAgICAgICAgICB8IEFtb3VudCBvZiB5ZWFycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtb250aHMgICAgICAgICB8IEFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQgICAgICAgfFxuICogfCB3ZWVrcyAgICAgICAgICB8IEFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBkYXlzICAgICAgICAgICB8IEFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkICAgICAgICAgfFxuICogfCBob3VycyAgICAgICAgICB8IEFtb3VudCBvZiBob3VycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtaW51dGVzICAgICAgICB8IEFtb3VudCBvZiBtaW51dGVzIHRvIGJlIGFkZGVkICAgICAgfFxuICogfCBzZWNvbmRzICAgICAgICB8IEFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIGFkZGVkICAgICAgfFxuICpcbiAqIEFsbCB2YWx1ZXMgZGVmYXVsdCB0byAwXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCB0aGUgZm9sbG93aW5nIGR1cmF0aW9uIHRvIDEgU2VwdGVtYmVyIDIwMTQsIDEwOjE5OjUwXG4gKiBjb25zdCByZXN1bHQgPSBhZGQobmV3IERhdGUoMjAxNCwgOCwgMSwgMTAsIDE5LCA1MCksIHtcbiAqICAgeWVhcnM6IDIsXG4gKiAgIG1vbnRoczogOSxcbiAqICAgd2Vla3M6IDEsXG4gKiAgIGRheXM6IDcsXG4gKiAgIGhvdXJzOiA1LFxuICogICBtaW51dGVzOiA5LFxuICogICBzZWNvbmRzOiAzMCxcbiAqIH0pXG4gKiAvLz0+IFRodSBKdW4gMTUgMjAxNyAxNToyOToyMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGQoZGlydHlEYXRlLCBkdXJhdGlvbikge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgaWYgKCFkdXJhdGlvbiB8fCB0eXBlb2YgZHVyYXRpb24gIT09ICdvYmplY3QnKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIHllYXJzID0gZHVyYXRpb24ueWVhcnMgPyB0b0ludGVnZXIoZHVyYXRpb24ueWVhcnMpIDogMDtcbiAgdmFyIG1vbnRocyA9IGR1cmF0aW9uLm1vbnRocyA/IHRvSW50ZWdlcihkdXJhdGlvbi5tb250aHMpIDogMDtcbiAgdmFyIHdlZWtzID0gZHVyYXRpb24ud2Vla3MgPyB0b0ludGVnZXIoZHVyYXRpb24ud2Vla3MpIDogMDtcbiAgdmFyIGRheXMgPSBkdXJhdGlvbi5kYXlzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLmRheXMpIDogMDtcbiAgdmFyIGhvdXJzID0gZHVyYXRpb24uaG91cnMgPyB0b0ludGVnZXIoZHVyYXRpb24uaG91cnMpIDogMDtcbiAgdmFyIG1pbnV0ZXMgPSBkdXJhdGlvbi5taW51dGVzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1pbnV0ZXMpIDogMDtcbiAgdmFyIHNlY29uZHMgPSBkdXJhdGlvbi5zZWNvbmRzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLnNlY29uZHMpIDogMDsgLy8gQWRkIHllYXJzIGFuZCBtb250aHNcblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVdpdGhNb250aHMgPSBtb250aHMgfHwgeWVhcnMgPyBhZGRNb250aHMoZGF0ZSwgbW9udGhzICsgeWVhcnMgKiAxMikgOiBkYXRlOyAvLyBBZGQgd2Vla3MgYW5kIGRheXNcblxuICB2YXIgZGF0ZVdpdGhEYXlzID0gZGF5cyB8fCB3ZWVrcyA/IGFkZERheXMoZGF0ZVdpdGhNb250aHMsIGRheXMgKyB3ZWVrcyAqIDcpIDogZGF0ZVdpdGhNb250aHM7IC8vIEFkZCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kc1xuXG4gIHZhciBtaW51dGVzVG9BZGQgPSBtaW51dGVzICsgaG91cnMgKiA2MDtcbiAgdmFyIHNlY29uZHNUb0FkZCA9IHNlY29uZHMgKyBtaW51dGVzVG9BZGQgKiA2MDtcbiAgdmFyIG1zVG9BZGQgPSBzZWNvbmRzVG9BZGQgKiAxMDAwO1xuICB2YXIgZmluYWxEYXRlID0gbmV3IERhdGUoZGF0ZVdpdGhEYXlzLmdldFRpbWUoKSArIG1zVG9BZGQpO1xuICByZXR1cm4gZmluYWxEYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbW9udGhzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA1IG1vbnRocyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBTdW4gRmViIDAxIDIwMTUgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNb250aHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBtb250aHMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICB2YXIgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpOyAvLyBUaGUgSlMgRGF0ZSBvYmplY3Qgc3VwcG9ydHMgZGF0ZSBtYXRoIGJ5IGFjY2VwdGluZyBvdXQtb2YtYm91bmRzIHZhbHVlcyBmb3JcbiAgLy8gbW9udGgsIGRheSwgZXRjLiBGb3IgZXhhbXBsZSwgbmV3IERhdGUoMjAyMCwgMCwgMCkgcmV0dXJucyAzMSBEZWMgMjAxOSBhbmRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDEpIHJldHVybnMgMSBGZWIgMjAyMS4gIFRoaXMgaXMgKmFsbW9zdCogdGhlIGJlaGF2aW9yIHdlXG4gIC8vIHdhbnQgZXhjZXB0IHRoYXQgZGF0ZXMgd2lsbCB3cmFwIGFyb3VuZCB0aGUgZW5kIG9mIGEgbW9udGgsIG1lYW5pbmcgdGhhdFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMzEpIHdpbGwgcmV0dXJuIDMgTWFyIDIwMjEgbm90IDI4IEZlYiAyMDIxIGFzIGRlc2lyZWQuIFNvXG4gIC8vIHdlJ2xsIGRlZmF1bHQgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZCBtb250aCBieSBhZGRpbmcgMSB0byB0aGUgZGVzaXJlZFxuICAvLyBtb250aCBhbmQgdXNpbmcgYSBkYXRlIG9mIDAgdG8gYmFjayB1cCBvbmUgZGF5IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWRcbiAgLy8gbW9udGguXG5cbiAgdmFyIGVuZE9mRGVzaXJlZE1vbnRoID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuICBlbmRPZkRlc2lyZWRNb250aC5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBhbW91bnQgKyAxLCAwKTtcbiAgdmFyIGRheXNJbk1vbnRoID0gZW5kT2ZEZXNpcmVkTW9udGguZ2V0RGF0ZSgpO1xuXG4gIGlmIChkYXlPZk1vbnRoID49IGRheXNJbk1vbnRoKSB7XG4gICAgLy8gSWYgd2UncmUgYWxyZWFkeSBhdCB0aGUgZW5kIG9mIHRoZSBtb250aCwgdGhlbiB0aGlzIGlzIHRoZSBjb3JyZWN0IGRhdGVcbiAgICAvLyBhbmQgd2UncmUgZG9uZS5cbiAgICByZXR1cm4gZW5kT2ZEZXNpcmVkTW9udGg7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBub3cga25vdyB0aGF0IHNldHRpbmcgdGhlIG9yaWdpbmFsIGRheS1vZi1tb250aCB2YWx1ZSB3b24ndFxuICAgIC8vIGNhdXNlIGFuIG92ZXJmbG93LCBzbyBzZXQgdGhlIGRlc2lyZWQgZGF5LW9mLW1vbnRoLiBOb3RlIHRoYXQgd2UgY2FuJ3RcbiAgICAvLyBqdXN0IHNldCB0aGUgZGF0ZSBvZiBgZW5kT2ZEZXNpcmVkTW9udGhgIGJlY2F1c2UgdGhhdCBvYmplY3QgbWF5IGhhdmUgaGFkXG4gICAgLy8gaXRzIHRpbWUgY2hhbmdlZCBpbiB0aGUgdW51c3VhbCBjYXNlIHdoZXJlIHdoZXJlIGEgRFNUIHRyYW5zaXRpb24gd2FzIG9uXG4gICAgLy8gdGhlIGxhc3QgZGF5IG9mIHRoZSBtb250aCBhbmQgaXRzIGxvY2FsIHRpbWUgd2FzIGluIHRoZSBob3VyIHNraXBwZWQgb3JcbiAgICAvLyByZXBlYXRlZCBuZXh0IHRvIGEgRFNUIHRyYW5zaXRpb24uICBTbyB3ZSB1c2UgYGRhdGVgIGluc3RlYWQgd2hpY2ggaXNcbiAgICAvLyBndWFyYW50ZWVkIHRvIHN0aWxsIGhhdmUgdGhlIG9yaWdpbmFsIHRpbWUuXG4gICAgZGF0ZS5zZXRGdWxsWWVhcihlbmRPZkRlc2lyZWRNb250aC5nZXRGdWxsWWVhcigpLCBlbmRPZkRlc2lyZWRNb250aC5nZXRNb250aCgpLCBkYXlPZk1vbnRoKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1dpdGhpbkludGVydmFsXG4gKiBAY2F0ZWdvcnkgSW50ZXJ2YWwgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/IChJbmNsdWRpbmcgc3RhcnQgYW5kIGVuZC4pXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBpc1dpdGhpblJhbmdlYCB0byBgaXNXaXRoaW5JbnRlcnZhbGAuXG4gKiAgIFRoaXMgY2hhbmdlIHdhcyBtYWRlIHRvIG1pcnJvciB0aGUgdXNlIG9mIHRoZSB3b3JkIFwiaW50ZXJ2YWxcIiBpbiBzdGFuZGFyZCBJU08gODYwMToyMDA0IHRlcm1pbm9sb2d5OlxuICpcbiAqICAgYGBgXG4gKiAgIDIuMS4zXG4gKiAgIHRpbWUgaW50ZXJ2YWxcbiAqICAgcGFydCBvZiB0aGUgdGltZSBheGlzIGxpbWl0ZWQgYnkgdHdvIGluc3RhbnRzXG4gKiAgIGBgYFxuICpcbiAqICAgQWxzbywgdGhpcyBmdW5jdGlvbiBub3cgYWNjZXB0cyBhbiBvYmplY3Qgd2l0aCBgc3RhcnRgIGFuZCBgZW5kYCBwcm9wZXJ0aWVzXG4gKiAgIGluc3RlYWQgb2YgdHdvIGFyZ3VtZW50cyBhcyBhbiBpbnRlcnZhbC5cbiAqICAgVGhpcyBmdW5jdGlvbiBub3cgdGhyb3dzIGBSYW5nZUVycm9yYCBpZiB0aGUgc3RhcnQgb2YgdGhlIGludGVydmFsIGlzIGFmdGVyIGl0cyBlbmRcbiAqICAgb3IgaWYgYW55IGRhdGUgaW4gdGhlIGludGVydmFsIGlzIGBJbnZhbGlkIERhdGVgLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBpc1dpdGhpblJhbmdlKFxuICogICAgIG5ldyBEYXRlKDIwMTQsIDAsIDMpLFxuICogICAgIG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogICApXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBpc1dpdGhpbkludGVydmFsKFxuICogICAgIG5ldyBEYXRlKDIwMTQsIDAsIDMpLFxuICogICAgIHsgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpIH1cbiAqICAgKVxuICogICBgYGBcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7SW50ZXJ2YWx9IGludGVydmFsIC0gdGhlIGludGVydmFsIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgd2l0aGluIHRoZSBpbnRlcnZhbFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gVGhlIHN0YXJ0IG9mIGFuIGludGVydmFsIGNhbm5vdCBiZSBhZnRlciBpdHMgZW5kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBEYXRlIGluIGludGVydmFsIGNhbm5vdCBiZSBgSW52YWxpZCBEYXRlYFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMyksIHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4gKiB9KVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgZGF0ZSBvdXRzaWRlIG9mIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMTApLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgc3RhcnQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQsIGVuZDogZGF0ZSB9KSAvLyA9PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIGVuZDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgeyBzdGFydDogZGF0ZSwgZW5kIH0pIC8vID0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNXaXRoaW5JbnRlcnZhbChkaXJ0eURhdGUsIGludGVydmFsKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZSA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIHN0YXJ0VGltZSA9IHRvRGF0ZShpbnRlcnZhbC5zdGFydCkuZ2V0VGltZSgpO1xuICB2YXIgZW5kVGltZSA9IHRvRGF0ZShpbnRlcnZhbC5lbmQpLmdldFRpbWUoKTsgLy8gVGhyb3cgYW4gZXhjZXB0aW9uIGlmIHN0YXJ0IGRhdGUgaXMgYWZ0ZXIgZW5kIGRhdGUgb3IgaWYgYW55IGRhdGUgaXMgYEludmFsaWQgRGF0ZWBcblxuICBpZiAoIShzdGFydFRpbWUgPD0gZW5kVGltZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBpbnRlcnZhbCcpO1xuICB9XG5cbiAgcmV0dXJuIHRpbWUgPj0gc3RhcnRUaW1lICYmIHRpbWUgPD0gZW5kVGltZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbmNsYXNzIHRhc2tzIHtcblxuICAgIHN0YXRpYyB0b0RlbGV0ZSA9IFtdO1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvciAobmV3VGFzaykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdUYXNrXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlXG4gICAgfVxuXG5cblxufTtcblxuXG5cbmNsYXNzIHByb2plY3RzIHtcblxuXG5cbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvamVjdE5hbWVcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkXG4gICAgfVxuXG5cblxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0cyxcbiAgICB0YXNrcyxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY2hlY2tib3hCbGFuayBmcm9tICcuL2Fzc2V0cy9jaGVja2JveC1ibGFuay5zdmcnO1xuaW1wb3J0IGNoZWNrYm94TWFya2VkIGZyb20gJy4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC5zdmcnO1xuaW1wb3J0IGNoZWNrbGlzdCBmcm9tICcuL2Fzc2V0cy9jaGVja2xpc3Quc3ZnJztcbmltcG9ydCBjYWxlbmRhclRvZGF5IGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLXRvZGF5LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJXZWVrIGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLXJhbmdlLnN2Zyc7XG5pbXBvcnQgYWRkaXRpb25JY29uIGZyb20gJy4vYXNzZXRzL3BsdXMuc3ZnJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9lZGl0LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJFZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci1lZGl0LnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2Fzc2V0cy9kZWxldGUuc3ZnJztcblxuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7IGFkZCwgaXNXaXRoaW5JbnRlcnZhbCwgc3RhcnRPZkRheSB9IGZyb20gJ2RhdGUtZm5zJztcblxuXG5cbi8vIEljb24gJiBidXR0b24gZ2VuZXJhdG9ycyBcbmNvbnN0IF9jcmVhdGVDaGVja2JveEljb24gPSAodGQsIHRhc2ssIGkpID0+IHtcbiAgICBjb25zdCBjaGVja2JveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGNoZWNrYm94SWNvbi5zcmMgPSBjaGVja2JveE1hcmtlZFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrYm94SWNvbi5zcmMgPSBjaGVja2JveEJsYW5rO1xuICAgIH1cbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gICAgY2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgIGNoZWNrYm94SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfbWFya0NvbXBsZXRlKGUpKVxuICAgIHRkLmFwcGVuZENoaWxkKGNoZWNrYm94SWNvbik7XG59IFxuXG5jb25zdCBjcmVhdGVDaGVja2xpc3RJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tsaXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoZWNrbGlzdEljb24uc3JjID0gY2hlY2tsaXN0O1xuICAgIGNoZWNrbGlzdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja2xpc3RJY29uKTtcbn1cblxuY29uc3QgX2NyZWF0ZUVkaXRJY29uID0gKHRkLCBpKSA9PiB7XG4gICAgY29uc3QgbmV3RWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdFZGl0SWNvbi5zcmMgPSBlZGl0SWNvbjtcbiAgICBuZXdFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgICBuZXdFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAvLyBldmVudCBsaXN0ZW5lciB0byBvcGVuIHRhc2sgY2FyZFxuICAgIG5ld0VkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9zaG93VGFza0NhcmQoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQobmV3RWRpdEljb24pO1xufVxuXG5jb25zdCBfY3JlYXRlQ2FsZW5kYXJFZGl0SWNvbiA9ICh0ZCkgPT4ge1xuICAgIGNvbnN0IG5ld0NhbGVuZGFyRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLnNyYyA9IGNhbGVuZGFyRWRpdEljb247XG4gICAgbmV3Q2FsZW5kYXJFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24gZWRpdERhdGVJY29uJylcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB9KVxuICAgIHRkLmFwcGVuZENoaWxkKG5ld0NhbGVuZGFyRWRpdEljb24pO1xufVxuXG5jb25zdCBfY3JlYXRlRGVsZXRlSWNvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICAvLyBjcmVhdGUgaW1hZ2UgYW5kIGFzc2lnbiBhdHRyaWJ1dGVzXG4gICAgY29uc3QgbmV3RGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0RlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICBuZXdEZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbiBkZWxldGVJdGVtJylcbiAgICBuZXdEZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICd0YXNrQ2xvc2VDb250YWluZXInKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSB0YXNrXG4gICAgICAgIG5ld0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX2RlbGV0ZVRhc2soZSkpXG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAncHJvamVjdCcgfHwgXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBwcm9qZWN0XG4gICAgICAgIG5ld0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChgZGVsZXRlUHJvamVjdCR7aX1gKSAgICAgICAgXG4gICAgICAgIG5ld0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChgaGlkZGVuYCkgICAgICAgIFxuICAgICAgICBuZXdEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9kZWxldGVQcm9qZWN0KGUsIGkpKSAgICAgICAgXG4gICAgICAgIC8vIGRpc3BsYXkgdHJhc2ggaWNvbiBvbiBob3ZlclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxldGVQcm9qZWN0JHtpfWApXG4gICAgICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgfSlcbiAgICAgICAgLy8gaGlkZSB0cmFzaCBpY29uIFxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxldGVQcm9qZWN0JHtpfWApXG4gICAgICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfSkgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coY29udGFpbmVyKVxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdHJhbmdlJyk7XG4gICAgfVxuICAgIC8vIGFwcGVuZCB0byBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGVsZXRlSWNvbilcbn1cblxuY29uc3QgY3JlYXRlQWRkaXRpb25JY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3QWRkaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3QWRkaXRpb25JY29uLnNyYyA9IGFkZGl0aW9uSWNvbjtcbiAgICBuZXdBZGRpdGlvbkljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdBZGRpdGlvbkljb24pO1xufVxuXG5jb25zdCBjcmVhdGVUb2RheUljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBuZXdUb2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdUb2RheUljb24uc3JjID0gY2FsZW5kYXJUb2RheTtcbiAgICBuZXdUb2RheUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdUb2RheUljb24pO1xufVxuXG5jb25zdCBjcmVhdGVXZWVrSWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld1dlZWtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3V2Vla0ljb24uc3JjID0gY2FsZW5kYXJXZWVrO1xuICAgIG5ld1dlZWtJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3V2Vla0ljb24pO1xufVxuXG5jb25zdCBfY3JlYXRlQWRkQnV0dG9uID0gKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZEJ0bicpO1xuICAgIGFkZEJ0bi5pbm5lclRleHQgPSBcInN1Ym1pdFwiO1xuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkUm93MycpKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgY2FyZCB0byBmb3JtPyBhbmQgY2hhbmdlIHRoaXMgZXZlbnQgbGlzdGVuZXIgdG8gdHJpZ2dlciB3aGVuIGZvcm0gc3VibWl0c1xuICAgICAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfc3VibWl0VGFza0NhcmQoZSkpXG4gICAgfSBlbHNlIGlmIChpLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZFByb2plY3RGb3JtJykge1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdEFkZEJ0bicpO1xuICAgIH0gZWxzZSBpZiAoaS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRUYXNrRm9ybScpIHtcbiAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2tBZGRCdG4nKTtcbiAgICB9O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xufVxuXG5jb25zdCBfY3JlYXRlQ2FuY2VsQnV0dG9uID0gKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhbmNlbEJ0bicpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJjYW5jZWxcIjtcbiAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2NhcmRSb3czJykge1xuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5VGFza3MoaSkpXG4gICAgfTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTsgICBcbn1cblxuXG5cbi8vIENvbnRhaW5lciBBTkQgaWNvbiBnZW5lcmF0b3JzIChGb3IgdGFzayBsaXN0aW5nIGFuZCB0YXNrIGNhcmQpXG5jb25zdCBjcmVhdGVDaGVja2JveENvbnRhaW5lciA9ICh0ciwgdGFzaywgaSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrYm94Q29udGFpbmVyJyk7XG4gICAgX2NyZWF0ZUNoZWNrYm94SWNvbihjaGVja2JveENvbnRhaW5lciwgdGFzaywgaSk7XG4gICAgdHIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xufVxuXG5jb25zdCBjcmVhdGVEYXRlQ29udGFpbmVyID0gKHRyLCB0YXNrLCBpKSA9PiB7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgZGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGVDb250YWluZXInKTtcbiAgICAvL3Rhc2sgY2FyZFxuICAgIGlmICh0ci5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXREYXRlQ29udGFpbmVyJykpIHtcbiAgICAgICAgZGF0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlucHV0IGNsYXNzPSd0YXNrQ2FyZERhdGUke2l9JyB0eXBlPSdkYXRlJyB2YWx1ZT0nJHt0YXNrLmRhdGV9Jz5gXG4gICAgLy8gdGFzayBsaXN0aW5nXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb25seSBkaXNwbGF5IGR1ZSBkYXRlIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICBpZiAodGFzay5kYXRlID09PSAnJykge1xuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5pbm5lclRleHQgPT09ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlQ29udGFpbmVyLmlubmVyVGV4dCA9IGAke2FkZChuZXcgRGF0ZSh0YXNrLmRhdGUpLCB7ZGF5czogMX0pLnRvTG9jYWxlRGF0ZVN0cmluZygpfWBcbiAgICAgICAgfVxuICAgIH1cbiAgICB0ci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbn1cblxuY29uc3QgY3JlYXRlRGVsZXRlQ29udGFpbmVyID0gKHRyKSA9PiB7XG4gICAgY29uc3QgY2xvc2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNsb3NlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0Nsb3NlQ29udGFpbmVyJyk7XG4gICAgX2NyZWF0ZURlbGV0ZUljb24oY2xvc2VDb250YWluZXIpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNsb3NlQ29udGFpbmVyKTtcbn1cblxuXG5cbi8vIEZvcm0gZ2VuZXJhdG9yXG5jb25zdCBjcmVhdGVGb3JtID0gKGZvcm0pID0+IHtcbiAgICBcbiAgICBjb25zdCBmb3JtUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3cxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVJvdycpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1Sb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtUm93Jyk7XG4gICAgZm9ybVJvdzIuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtQnV0dG9ucycpO1xuXG4gICAgY29uc3QgZm9ybVJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xuXG4gICAgLy8gcm93IG9uZTogYXNzaWduIGlucHV0IGFjY29yZGluZyB0byBjbGFzcyBvZiBmb3JtXG4gICAgLy8gcm93IHRocmVlOiBhc3NpZ24gZXJyb3IgY2xhc3MgYW5kIHRleHQgYWNjb3JkaW5nIHRvIGNsYXNzIG9mIGZvcm1cbiAgICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRQcm9qZWN0Rm9ybScpIHtcbiAgICAgICAgZm9ybVJvdzEuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Byb2plY3RJbnB1dCcgbmFtZT0nbmV3UHJvamVjdElucHV0Jz48L2lucHV0PlwiO1xuICAgICAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1Byb2pFcnJvckNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtUm93My5pbm5lclRleHQgPSAnTmFtZSB5b3VyIHByb2plY3QhJ1xuICAgIH0gZWxzZSBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRUYXNrRm9ybScpIHtcbiAgICAgICAgZm9ybVJvdzEuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Rhc2tJbnB1dCcgbmFtZT0nbmV3VGFza0lucHV0Jz48L2lucHV0PlwiO1xuICAgICAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1Rhc2tFcnJvckNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtUm93My5pbm5lclRleHQgPSAnTmFtZSB5b3VyIHRhc2shJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKVxuICAgIH1cbiAgICAvLyByb3cgdHdvOiBzdWJtaXQgYW5kIGNhbmNlbCBidXR0b25zXG4gICAgX2NyZWF0ZUFkZEJ1dHRvbihmb3JtUm93MiwgZm9ybSk7XG4gICAgX2NyZWF0ZUNhbmNlbEJ1dHRvbihmb3JtUm93MiwgZm9ybSk7XG4gICAgICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93MSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Mik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Myk7XG59XG5cblxuXG5cblxuLy8gRE9NIG1vZGlmaWNhdGlvbiBmdW5jdGlvbnNcblxuLy8gUFJPSkVDVFNcbi8vIERpc3BsYXkgZW50aXJlIGFycmF5IG9mIHByb2plY3RzIHRvIG1lbnVcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvLyBHcmFiIHByb2plY3RzIG1lbnVcbiAgICBjb25zdCBwcm9qZWN0c01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHNNZW51Jyk7XG5cbiAgICAvLyBDbGVhciBwcm9qZWN0cyBtZW51XG4gICAgY29uc3Qgb2xkUHJvakNvdW50ID0gcHJvamVjdHNNZW51LmNoaWxkRWxlbWVudENvdW50XG4gICAgZm9yIChsZXQgaT0wOyBpPG9sZFByb2pDb3VudDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RzTWVudS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIEFkZCBzaW5nbGUgcHJvamVjdCB0byBtZW51IChjYWxsZWQgYmVsb3cpXG4gICAgY29uc3QgX2Rpc3BsYXlQcm9qZWN0ID0gKG5ld1Byb2osIGkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChgcHJvamVjdGApXG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YClcbiAgICAgICAgLy8gYXNzaWduIGNsYXNzIHRvIHNlbGVjdGVkIHByb2plY3QgXG4gICAgICAgIGlmIChuZXdQcm9qLnNlbGVjdGVkID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXZlbnQgbGlzdGVuZXIgdG8gZmlsdGVyIHRhc2tsaXN0IGJ5IHByb2plY3QgbmFtZSAgICAgXG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgZGVsZXRpbmcgcHJvamVjdCwgZG8gbm90IHNldCBmaWx0ZXJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZUl0ZW0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRUYXNrRmlsdGVyKG5ld1Byb2plY3RDb250YWluZXIpXG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIGNyZWF0ZUNoZWNrbGlzdEljb24obmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuZXdQcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IG5ld1Byb2oubmFtZTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGV4dClcbiAgICAgICAgX2NyZWF0ZURlbGV0ZUljb24obmV3UHJvamVjdENvbnRhaW5lciwgaSk7XG4gICAgICAgIHByb2plY3RzTWVudS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9IFxuXG4gICAgLy8gQXBwZW5kIGFsbCB0YXNrcyB0byB0YXNrbGlzdFxuICAgIGxldCBpPTBcbiAgICBjb25zdCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlUHJvamVjdHMnKSlcbiAgICBzdG9yYWdlUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgX2Rpc3BsYXlQcm9qZWN0KHByb2plY3QsIGkpXG4gICAgICAgIGkrK1xuICAgIH0pO1xufVxuXG5cblxuLy8gRGVsZXRlIHByb2plY3RcbmNvbnN0IF9kZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAvLyBncmFiIGFycmF5cyBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlUHJvamVjdHMnKSlcbiAgICBjb25zdCBzdG9yYWdlVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlVGFza3MnKSlcblxuICAgIC8vIElkZW50aWZ5IHByb2plY3QgdG8gZGVsZXRlXG4gICAgY29uc3QgZG9vbWVkSW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgZG9vbWVkTmFtZSA9IHN0b3JhZ2VQcm9qZWN0c1tkb29tZWRJbmRleF0ubmFtZTtcblxuICAgIC8vIGRlbGV0ZSBwcm9qZWN0XG4gICAgc3RvcmFnZVByb2plY3RzLnNwbGljZShkb29tZWRJbmRleCwgMSk7XG5cbiAgICAvLyBkZWxldGUgYWxsIHRhc2tzIGluIGRvb21lZCBwcm9qZWN0XG4gICAgLy8gY291bGQgY2hhbmdlIGZyb20gc3BsaWNlIHRvIGRlbGV0ZWQgcHJvcGVyeSB3aXRoIGhpZGRlbiBjbGFzcyB0byB1c2UgaW4gc3RhdHMgdGFibGUgd2l0aCBjb21wbGV0ZWQgcHJvcGVydHkgLy9cbiAgICAvLyBtYXJrIHRhc2tzIGZvciBkZWxldGlvblxuICAgIHN0b3JhZ2VUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAodGFzay5wcm9qZWN0ID09PSBkb29tZWROYW1lKSB7XG4gICAgICAgICAgICAvLyB3aWxsIGRlbGV0ZSBhZnRlciBsb29wIGFzIHRvIG5vdCBtYWtlIGVycm9yc1xuICAgICAgICAgICAgdGFza3MudG9EZWxldGUucHVzaCh0YXNrLm5hbWUpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vIGRlbGV0ZSBtYXJrZWQgdGFza3NcbiAgICB0YXNrcy50b0RlbGV0ZS5mb3JFYWNoKGRvb21lZFRhc2sgPT4ge1xuICAgICAgICBzdG9yYWdlVGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLm5hbWUgPT09IGRvb21lZFRhc2spIHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlVGFza3Muc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pIFxuICAgIC8vIGNsZWFyIHRlRGVsZXRlIGFycmF5IFxuICAgIHRhc2tzLnRvRGVsZXRlID0gW107XG5cbiAgICAvLyBzZXQgY2hhbmdlcyB0byBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmFnZVRhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVRhc2tzKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JhZ2VQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VQcm9qZWN0cykpO1xuXG5cbiAgICAvLyBJZiBkb29tZWQgcHJvamVjdCB3YXMgc2VsZWN0ZWQsIHJldmVydCB0YXNrbGlzdCB0byBhbGwgdGFza3NcbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJyk7XG4gICAgY29uc3QgYWxsVGFza3NDbGFzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsVGFza3MnKS5jbGFzc0xpc3RcbiAgICBpZiAoY29udGVudFRpdGxlLnRleHRDb250ZW50ID09PSBkb29tZWROYW1lKSB7XG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdBbGwgdGFza3MnIFxuICAgICAgICBhbGxUYXNrc0NsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICB9XG5cbiAgICAvLyByZWZyZXNoIHRhc2tsaXN0XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG59XG5cblxuXG5cblxuLy8gVEFTS1Ncbi8vIERpc3BsYXkgZW50aXJlIGFycmF5IG9mIHRhc2tzIHRvIHRhc2tsaXN0XG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG5cbiAgICAvLyBHcmFiIHRhc2tsaXN0XG4gICAgY29uc3QgdGFza2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKTtcbiAgICBcbiAgICAvLyBjbGVhciB0YXNrbGlzdFxuICAgIGNvbnN0IG9sZFRhc2tDb3VudCA9IHRhc2tsaXN0LmNoaWxkRWxlbWVudENvdW50XG4gICAgZm9yIChsZXQgaT0wOyBpPG9sZFRhc2tDb3VudDsgaSsrKSB7XG4gICAgICAgIHRhc2tsaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gQWRkIHNpbmdsZSB0YXNrIHRvIHRhc2tsaXN0IGRpc3BsYXlcbiAgICBjb25zdCBfY3JlYXRlVGFza0xpc3RpbmcgPSAodGFzaywgaSkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgdGFzayBjb250YWluZXJcbiAgICAgICAgY29uc3QgbmV3TGlzdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIG5ld0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrIGxpc3Rpbmcke2l9YCk7XG4gICAgICAgIC8vIGNvbXBsZXRlIGZpbHRlciB0byBhc3NpZ24gY2xhc3NcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXG4gICAgICAgIH1cbiAgICAgICAgLy8gYXNzaWduIHByaW9yaXR5IGNsYXNzXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnbWVkaXVtUHJpb3JpdHknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3TGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCBjaGVja2JveFxuICAgICAgICBjcmVhdGVDaGVja2JveENvbnRhaW5lcihuZXdMaXN0aW5nLCB0YXNrLCBpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCB0YXNrXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFza0NvbnRhaW5lciR7aX1gKTtcbiAgICAgICAgLy8gY29tcGxldGUgZmlsdGVyIGZvciBzdHJpa2V0aHJvdWdoXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wbGV0ZScpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7dGFzay5uYW1lfWA7XG4gICAgICAgIG5ld0xpc3RpbmcuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gYWRkIGRhdGVcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihuZXdMaXN0aW5nLCB0YXNrKTtcblxuICAgICAgICAvLyBhZGQgZWRpdCBidXR0b25cbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGVkaXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0Q29udGFpbmVyJyk7XG4gICAgICAgIF9jcmVhdGVFZGl0SWNvbihlZGl0Q29udGFpbmVyLCBpKTtcbiAgICAgICAgbmV3TGlzdGluZy5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKTtcblxuICAgICAgICAvLyBhZGQgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3TGlzdGluZyk7XG5cbiAgICAgICAgLy9hcHBlbmQgdGFzayB0byB0YXNrbGlzdFxuICAgICAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0aW5nKTtcblxuXG5cbiAgICAgICAgLy8gc2V0IGRpc3BsYXkgZmlsdGVyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgICAvLyBkYXRlIGZpbHRlcnNcblxuICAgICAgICAvLyBBbGwgdGFza3NcbiAgICAgICAgaWYgKGZpbHRlciA9PT0gJ0FsbCB0YXNrcycpIHtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBEdWUgVG9kYXlcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09ICdEdWUgdG9kYXknKSB7XG4gICAgICAgICAgICAvLyBoaWRlIGlmIG5vIGR1ZSBkYXRlXG4gICAgICAgICAgICBpZiAodGFzay5kYXRlID09PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBncmFiIHRvZGF5J3MgZGF0ZSBhbmQgdGFzayBkYXRlXG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaGlkZSBpZiBub3QgZHVlIHRvZGF5XG4gICAgICAgICAgICBpZiAodG9kYXkuZ2V0TW9udGgoKSAhPT0gdGFza0RhdGUuZ2V0TW9udGgoKSB8fFxuICAgICAgICAgICAgICAgIHRvZGF5LmdldERhdGUoKSAtIDEgIT09IHRhc2tEYXRlLmdldERhdGUoKSB8fFxuICAgICAgICAgICAgICAgIHRvZGF5LmdldEZ1bGxZZWFyKCkgIT09IHRhc2tEYXRlLmdldEZ1bGxZZWFyKCkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBEdWUgdGhpcyB3ZWVrXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSAnRHVlIHRoaXMgd2VlaycpIHtcblxuICAgICAgICAgICAgLy8gaGlkZSBpZiBubyBkdWUgZGF0ZVxuICAgICAgICAgICAgaWYgKHRhc2suZGF0ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBuZXdMaXN0aW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZ3JhYiB3ZWVrIGRhdGVzIGFuZCB0YXNrIGR1ZSBkYXRlIGRhdGVcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgpKVxuICAgICAgICAgICAgY29uc3QgZW5kT2ZXZWVrID0gYWRkKHRvZGF5LCB7ZGF5czogN30pXG4gICAgICAgICAgICAvLyBtaWRuaWdodCBkdWUgZGF0ZVxuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBhZGQoc3RhcnRPZkRheShuZXcgRGF0ZSh0YXNrLmRhdGUpKSwge2RheXM6IDEsIGhvdXJzOiAyMywgbWludXRlczogNTl9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBoaWRlIGlmIG5vdCBkdWUgdGhpcyB3ZWVrXG4gICAgICAgICAgICBpZiAoaXNXaXRoaW5JbnRlcnZhbCh0YXNrRGF0ZSwge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiB0b2RheSxcbiAgICAgICAgICAgICAgICBlbmQ6IGVuZE9mV2VlayxcbiAgICAgICAgICAgIH0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICAvLyBwcm9qZWN0IGZpbHRlclxuICAgICAgICAvLyBncmFiIHByb2plY3RzIGFycmF5IGZyb20gc3RvcmFnZVxuICAgICAgICBjb25zdCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlUHJvamVjdHMnKSlcbiAgICAgICAgLy8gYXBwbHkgZmlsdGVyXG4gICAgICAgIHN0b3JhZ2VQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdCAhPT0gZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHNldCBwcm9qZWN0cyBhcnJheSBiYWNrIGludG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlUHJvamVjdHMpKVxuICAgIH1cbiAgICBcblxuICAgIC8vIENyZWF0ZSBhbmQgaGlkZSB0YXNrIGNhcmQgaW4gdGFza2xpc3QgZGlzcGxheVxuICAgIGNvbnN0IF9jcmVhdGVUYXNrQ2FyZCA9ICh0YXNrLCBpKSA9PiB7XG4gICAgICAgIC8vIENSRUFURSBUQVNLIENBUkRcbiAgICAgICAgY29uc3QgbmV3Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2sgY2FyZCR7aX1gKTtcbiAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYGhpZGRlbmApO1xuXG4gICAgICAgIC8vIGNvbXBsZXRlIGZpbHRlciB0byBhc3NpZ24gY2xhc3NcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXG4gICAgICAgIH0gICAgICAgXG5cbiAgICAgICAgLy8gYXNzaWduIHByaW9yaXR5IGNsYXNzXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgIG5ld0NhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIG5ld0NhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVkaXVtUHJpb3JpdHknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgbmV3Q2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luY29tcGxldGUgbWVudU9wdGlvbnMnKTtcbiAgICAgICAgbmV3Q2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNyZWF0ZURlbGV0ZUNvbnRhaW5lcihuZXdDYXJkKTtcblxuICAgICAgICBjb25zdCBuZXdUaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gICAgICAgIG5ld1RoZWFkLmlubmVySFRNTCA9IFxuICAgICAgICAgICAgYDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2NoZWNrYm94Q29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0ndGFza0NvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2RhdGVDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdlZGl0Q29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgPC90cj5gXG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGJvZHlcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgICAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tDYXJkJyk7XG4gICAgICAgIFxuXG4gICAgICAgIC8vIEZpcnN0IHJvd1xuICAgICAgICBjb25zdCBjYXJkUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNhcmRSb3cxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZFJvdzEnKVxuICAgICAgICAvLyBhZGQgdGFzayBuYW1lIGlucHV0XG4gICAgICAgIGNvbnN0IHRhc2tJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRhc2tJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tJbnB1dENvbnRhaW5lcmApO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0ndGFza0NhcmRUYXNrJHtpfScgaWQ9J25ld1Rhc2tJbnB1dCcgbmFtZT0nbmV3VGFza0lucHV0JyB2YWx1ZT0nJHt0YXNrLm5hbWV9Jz48L2lucHV0PmA7XG4gICAgICAgIGNhcmRSb3cxLmFwcGVuZENoaWxkKHRhc2tJbnB1dENvbnRhaW5lcik7XG4gICAgICAgIC8vIGFkZCBkYXRlXG4gICAgICAgIGNvbnN0IGVkaXREYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgZWRpdERhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBlZGl0RGF0ZUNvbnRhaW5lcmApO1xuICAgICAgICBjcmVhdGVEYXRlQ29udGFpbmVyKGVkaXREYXRlQ29udGFpbmVyLCB0YXNrLCBpKTtcbiAgICAgICAgY2FyZFJvdzEuYXBwZW5kQ2hpbGQoZWRpdERhdGVDb250YWluZXIpO1xuICAgICAgICAvLyBhZGQgY2FsZW5kYXIgZWRpdCBidXR0b25cbiAgICAgICAgX2NyZWF0ZUNhbGVuZGFyRWRpdEljb24oY2FyZFJvdzEpO1xuXG5cblxuICAgICAgICAvLyBTZWNvbmQgcm93IFxuICAgICAgICBjb25zdCBjYXJkUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNhcmRSb3cyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZFJvdzInKVxuICAgICAgICBcbiAgICAgICAgLy8gcHJvamVjdCBpbnB1dCBjb250YWluZXJcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgcHJvamVjdElucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdElucHV0Q29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgcHJvamVjdCBkcm9wZG93biBcbiAgICAgICAgY29uc3QgcHJvamVjdERyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFza0NhcmRQcm9qZWN0JHtpfWApXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmV3VGFza0lucHV0JylcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0YXNrLnByb2plY3R9YClcblxuICAgICAgICAvLyBjcmVhdGUgcHJvamVjdCBkcm9wZG93biBvcHRpb25zXG4gICAgICAgIC8vIGJsYW5rIG9wdGlvbiBmb3Igbm8gcHJvamVjdFxuICAgICAgICBjb25zdCBibGFua1Byb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBibGFua1Byb2plY3RPcHRpb24udmFsdWUgPSAnJ1xuICAgICAgICBibGFua1Byb2plY3RPcHRpb24udGV4dCA9ICcnXG4gICAgICAgIHByb2plY3REcm9wZG93bi5hcHBlbmRDaGlsZChibGFua1Byb2plY3RPcHRpb24pXG4gICAgICAgIC8vIHJlbWFpbmluZyBvcHRpb25zIGdlbmVyYXRlZCBmcm9tIHByb2plY3RzIGFycmF5XG4gICAgICAgIGNvbnN0IHN0b3JhZ2VQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2VQcm9qZWN0cycpKVxuICAgICAgICBzdG9yYWdlUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IGAke3Byb2plY3QubmFtZX1gXG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHQgPSBgJHtwcm9qZWN0Lm5hbWV9YFxuICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdCA9PT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REcm9wZG93bilcbiAgICAgICAgY2FyZFJvdzIuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0Q29udGFpbmVyKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gcHJpb3JpdHkgaW5wdXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIHByaW9yaXR5IGRyb3Bkb3duIFxuICAgICAgICBjb25zdCBwcmlvcml0eURyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDYXJkUHJpb3JpdHkke2l9YClcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCduYW1lJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3Rhc2sucHJpb3JpdHl9YClcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwcmlvcml0eSBkcm9wZG93biBvcHRpb25zXG4gICAgICAgIC8vIGhpZ2ggcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgcHJpb3JpdHlIaWdoLnZhbHVlID0gJ2hpZ2gnXG4gICAgICAgIHByaW9yaXR5SGlnaC50ZXh0ID0gJ0hpZ2gnXG4gICAgICAgIC8vIG1lZGl1bSBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5TWVkaXVtLnZhbHVlID0gJ21lZGl1bSdcbiAgICAgICAgcHJpb3JpdHlNZWRpdW0udGV4dCA9ICdNZWRpdW0nXG4gICAgICAgIC8vIGxvdyBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5TG93LnZhbHVlID0gJ2xvdydcbiAgICAgICAgcHJpb3JpdHlMb3cudGV4dCA9ICdMb3cnXG4gICAgICAgIFxuICAgICAgICAvLyBwcmlvcml0eSBzZWxlY3Rpb25cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICBwcmlvcml0eUhpZ2guc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgIHByaW9yaXR5TG93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIFxuICAgICAgICBwcmlvcml0eU1lZGl1bS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyBhcHBlbmQgcHJpb3JpdHkgaW5wdXQgdG8gcm93XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoKTtcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5hcHBlbmRDaGlsZChwcmlvcml0eU1lZGl1bSk7XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3cpOyAgICAgICAgXG4gICAgICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEcm9wZG93bik7ICAgICAgICBcbiAgICAgICAgY2FyZFJvdzIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dENvbnRhaW5lcik7XG5cblxuXG4gICAgICAgIC8vIFRoaXJkIHJvdyBcbiAgICAgICAgY29uc3QgY2FyZFJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3czJylcbiAgICAgICAgX2NyZWF0ZUFkZEJ1dHRvbihjYXJkUm93MywgaSk7XG4gICAgICAgIF9jcmVhdGVDYW5jZWxCdXR0b24oY2FyZFJvdzMsIGAke2l9YCk7XG5cblxuXG4gICAgICAgIC8vIGFwcGVuZCB0YXNrIGNhcmQgdG8gdGFza2xpc3RcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFJvdzEpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYXJkUm93Mik7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRSb3czKTtcblxuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKG5ld1RoZWFkKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cbiAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKTtcblxuICAgICAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZChuZXdDYXJkQ29udGFpbmVyKTtcbiAgICB9XG4gICAgXG5cbiAgICAvLyBhcHBlbmQgYWxsIHRhc2tzIHRvIHRhc2tsaXN0XG4gICAgLy8gTkVXIFxuICAgIGxldCBpPTBcbiAgICBjb25zdCBzdG9yYWdlVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlVGFza3MnKSlcbiAgICBzdG9yYWdlVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgX2NyZWF0ZVRhc2tMaXN0aW5nKHRhc2ssIGkpO1xuICAgICAgICBfY3JlYXRlVGFza0NhcmQodGFzaywgaSk7XG4gICAgICAgIGkrK1xuICAgIH0pO1xufVxuXG5cblxuXG5cbi8vIENvbXBsZXRlIHRhc2tcbmNvbnN0IF9tYXJrQ29tcGxldGUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJRCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAvLyBORVdcbiAgICBjb25zdCBzdG9yYWdlVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlVGFza3MnKSlcbiAgICBpZiAoc3RvcmFnZVRhc2tzW3Rhc2tJRF0uY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAvL21hcmsgdGFzayBpbmNvbXBsZXRlXG4gICAgICAgIHN0b3JhZ2VUYXNrc1t0YXNrSURdLmNvbXBsZXRlID0gJ2ZhbHNlJ1xuICAgIH0gZWxzZSBpZiAoc3RvcmFnZVRhc2tzW3Rhc2tJRF0uY29tcGxldGUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgLy9tYXJrIHRhc2sgY29tcGxldGVcbiAgICAgICAgc3RvcmFnZVRhc2tzW3Rhc2tJRF0uY29tcGxldGUgPSAndHJ1ZSdcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdHJhbmdlJylcbiAgICB9XG4gICAgLy8gc2V0IGNoYW5nZXMgdG8gbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JhZ2VUYXNrcycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VUYXNrcykpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xufVxuXG4vLyBTaG93IHRhc2sgY2FyZFxuY29uc3QgX3Nob3dUYXNrQ2FyZCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0lEID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIC8vIHJlZnJlc2ggdGFza2xpc3QgdG8gY2xvc2Ugb3RoZXIgdGFzayBjYXJkcyAob3B0aW9uYWwgYnV0IGxvb2tzIGNsZWFuZXIpXG4gICAgZGlzcGxheVRhc2tzKCk7XG4gICAgLy8gc2hvdyB0YXNrIGNhcmRcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkJHt0YXNrSUR9YCk7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tJRH1gKTtcbiAgICAvL2hpZGUgdGFzayBsaXN0aW5nXG4gICAgY29uc3QgdGFza0xpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdGluZyR7dGFza0lEfWApO1xuICAgIHRhc2tMaXN0aW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cbmNvbnN0IF9zdWJtaXRUYXNrQ2FyZCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0lEID0gKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSkgXG5cbiAgICAvLyBHZXQgaW5wdXQgdmFsdWVzXG4gICAgY29uc3QgdXBkYXRlZE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmRUYXNrJHt0YXNrSUR9YCkudmFsdWVcbiAgICBjb25zdCB1cGRhdGVkRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZERhdGUke3Rhc2tJRH1gKS52YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tDYXJkUHJvamVjdCR7dGFza0lEfWApLnZhbHVlXG4gICAgY29uc3QgdXBkYXRlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tDYXJkUHJpb3JpdHkke3Rhc2tJRH1gKS52YWx1ZVxuXG4gICAgLy8gTkVXXG4gICAgLy8gZ3JhYiB1cGRhdGVkIHRhc2sgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBjb25zdCBzdG9yYWdlVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlVGFza3MnKSlcbiAgICB2YXIgdXBkYXRlZFRhc2sgPSBzdG9yYWdlVGFza3NbdGFza0lEXVxuICAgIC8vIEFwcGx5IGlucHV0IHZhbHVlcyB0byB0YXNrIG9iamVjdFxuICAgIHVwZGF0ZWRUYXNrLm5hbWUgPSB1cGRhdGVkTmFtZVxuICAgIHVwZGF0ZWRUYXNrLmRhdGUgPSB1cGRhdGVkRGF0ZVxuICAgIHVwZGF0ZWRUYXNrLnByb2plY3QgPSB1cGRhdGVkUHJvamVjdFxuICAgIHVwZGF0ZWRUYXNrLnByaW9yaXR5ID0gdXBkYXRlZFByaW9yaXR5XG4gICAgLy8gc2V0IHRhc2sgYXJyYXkgYmFjayBpbnRvIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlVGFza3MnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlVGFza3MpKVxuICAgIGRpc3BsYXlUYXNrcygpO1xufVxuXG4vLyBEZWxldGUgdGFza1xuY29uc3QgX2RlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICAgIGxldCBkb29tZWRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgLy8gTkVXXG4gICAgY29uc3Qgc3RvcmFnZVRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmFnZVRhc2tzJykpXG4gICAgLy8gcmVtb3ZlIHRhc2sgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBzdG9yYWdlVGFza3Muc3BsaWNlKGRvb21lZEluZGV4LCAxKTtcbiAgICAvLyBzZXQgdGFzayBhcnJheSBiYWNrIGludG8gbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JhZ2VUYXNrcycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VUYXNrcykpXG4gICAgLy8gcmVmcmVzaCB0YXNrbGlzdFxuICAgIGRpc3BsYXlUYXNrcygpO1xufVxuXG5cblxuXG5cbi8vIFRBU0sgRElTUExBWSBPUFRJT05TXG5cbi8vIGhvdyBpcyB0aGlzIGJlaW5nIHNraXBwZWQgd2hlbiBjbGlja2luZyBvbiBkZWxldGUgaWNvbj8/XG5jb25zdCBzZXRUYXNrRmlsdGVyID0gKGNvbnRhaW5lciwgZSkgPT4geyAgIFxuXG4gICAgLy8gc2V0IGNvbnRlbnQgdGl0bGUgKGZpbHRlcilcbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJylcbiAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBjb250YWluZXIuaW5uZXJUZXh0XG5cbiAgICAvLyBkZXNlbGVjdCBhbnkgbWVudSBmaWx0ZXIgXG4gICAgY29uc3QgYWxsVGFza3NDbGFzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsVGFza3MnKS5jbGFzc0xpc3RcbiAgICBjb25zdCBkdWVUb2RheUNsYXNzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVUb2RheScpLmNsYXNzTGlzdFxuICAgIGNvbnN0IGR1ZVdlZWtDbGFzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlV2VlaycpLmNsYXNzTGlzdFxuICAgIGlmIChhbGxUYXNrc0NsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICBhbGxUYXNrc0NsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICB9IGlmIChkdWVUb2RheUNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICBkdWVUb2RheUNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICB9IGlmIChkdWVXZWVrQ2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgIGR1ZVdlZWtDbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgfSBcblxuICAgIC8vIGdyYWIgcHJvamVjdHMgYXJyYXkgZnJvbSBzdG9yYWdlXG4gICAgY29uc3Qgc3RvcmFnZVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmFnZVByb2plY3RzJykpXG4gICAgXG4gICAgLy8gZGVzZWxlY3QgYWxsIHByb2plY3RzXG4gICAgc3RvcmFnZVByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LnNlbGVjdGVkID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHByb2plY3Quc2VsZWN0ZWQgPSAnZmFsc2UnXG4gICAgICAgIH1cbiAgICB9KSBcblxuICAgIC8vIFNlbGVjdCBwcm9qZWN0IGlmIG9uZSBpcyBjaG9zZW4gKG1haW4gbWVudSBzZWxlY3Rpb24gaXMgaGFuZGxlZCBpbiBldmVudCBsaXN0ZW5lcilcbiAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZFByb2plY3RJZCA9IGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIHN0b3JhZ2VQcm9qZWN0c1tzZWxlY3RlZFByb2plY3RJZF0uc2VsZWN0ZWQgPSAndHJ1ZSdcbiAgICB9XG5cbiAgICAvLyBzZXQgcHJvamVjdHMgYXJyYXkgYmFjayBpbnRvIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlUHJvamVjdHMpKVxuXG4gICAgLy8gcmVmcmVzaFxuICAgIGRpc3BsYXlQcm9qZWN0cygpOyAgICBcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuXG5cblxuXG5leHBvcnQge1xuICAgIC8vIFVzZWQgaW4gaW5kZXggJiBjb3JlXG5cbiAgICAvLyBVc2VkIG9ubHkgaW4gY29yZVxuICAgIGNyZWF0ZUZvcm0sXG4gICAgY3JlYXRlQ2hlY2tsaXN0SWNvbixcbiAgICBjcmVhdGVXZWVrSWNvbixcbiAgICBjcmVhdGVUb2RheUljb24sXG4gICAgY3JlYXRlQWRkaXRpb25JY29uLFxuICAgIHNldFRhc2tGaWx0ZXIsXG5cbiAgICAvLyBVc2VkIG9ubHkgaW4gaW5kZXhcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheVRhc2tzLFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
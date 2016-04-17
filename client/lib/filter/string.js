var Vue = require('vue');

/*
 * String filters
 *
 * Small collection of filters to use when displaying a String
 */

/*
 * Return string with first letter capitalised
 *
 * @param {String} str
 * @return {String}
 */
Vue.filter('upper-first', function (str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
});
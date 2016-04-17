/*
 * Index module
 *
 * Entry point - Import and initialise all required parts of the app
 */

// Compatibility
import 'babel-polyfill';

// Imports
import app from './core/app';
import router from './core/router';
import Vue from 'vue';

// Routes
import './routes';

// Filters
import './filter/string';

// Components
import './component/questions-tree';
import './component/sequence-display';
import './component/match-display';

Vue.config.debug = true;

init();

/*
 * Initialise app
 */
function init() {
    app.init();
    router.init();
}
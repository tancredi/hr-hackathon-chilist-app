import Vue from 'vue';
import app from '../core/app';
import routy from 'routy';
import clone from 'clone';

/*
 * App Router
 *
 * Initialises and defines route behaviour
 */

var router = new routy.Router(),
    wrap = document.querySelector('[data-role="view"]'),
    view;

export default router;

/*
 * Router behaviour config
 */
router.init = function () {
    router
    .on('change', updateRoute)
    .html5()
    .run();
};

/*
 * Handle route change
 *
 * @param {Object} route
 */
function updateRoute(route) {
    var options = route.route.options,
        controller = options.controller ? options.controller.default : {},
        scope = clone(controller.data || {});

    if (view) { view.$destroy(); }

    wrap.innerHTML = options.template || '';
    app.title = options.title || null;

    view = new Vue({
        data          : scope,
        el            : wrap,
        methods       : controller.methods || {},
        beforeDestroy : controller.beforeDestroy || null
    });

    if (typeof controller.ready === 'function') {
        controller.ready.apply(view, [ route, scope ]);
    }
}
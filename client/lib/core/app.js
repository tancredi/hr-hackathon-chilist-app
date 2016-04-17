import Vue from 'vue';

/*
 * App module
 *
 * Interface to initialise main app VM
 */

var app;

export default { init };

/*
 * Initialise app main vm
 */
function init() {
    if (app) { return; }

    app = new Vue({
        el      : document.body,
        data    : () => {
            return {
                ready              : false,
                genderDistribution : null,
            };
        },
        methods : {}
    });
}
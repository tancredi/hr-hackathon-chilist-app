import Vue from 'vue';

Vue.component('match-display', Vue.extend({
    data     : function () {
        return {};
    },
    props    : [ 'match' ],
    template : require('../../view/component/match-display.jade')
}));
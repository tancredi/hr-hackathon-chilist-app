import Vue from 'vue';

Vue.component('sequence-display', Vue.extend({
    data     : function () {
        return {};
    },
    props    : [ 'parts' ],
    template : require('../../view/component/sequence-display.jade'),
}));
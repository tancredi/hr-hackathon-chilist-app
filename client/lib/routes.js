import router from './core/router';

/*
 * App Routes
 *
 * Routes for all app views
 */

router

// Processes list
.add('/', {
    controller : require('./controller/questions'),
    template   : require('../view/questions.jade')
})

// Matches view
.add('/matches/:postId', {
    controller : require('./controller/matches'),
    template   : require('../view/matches.jade')
})

// 404
.add('/404', {
    template : require('../view/404.jade')
})

.otherwise('/404');
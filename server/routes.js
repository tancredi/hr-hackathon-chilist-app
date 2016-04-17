import Router from 'koa-router';
import controllers from './controller/index';

/*
 * API routes module
 *
 * Exports all API endpoints
 */

export default new Router({ prefix: '/api' })

// Posts
.post('/posts', controllers.posts.submit)

// Matches
.get('/matches/:postId', controllers.matches.list);
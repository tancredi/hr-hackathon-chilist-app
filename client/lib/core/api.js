import Service from 'api-service';
 
/*
 * API endpoints wrapper
 *
 * Interface to API routes
 */

export default new Service('/api')

// Submit answers
.add('posts.create', {
    method : 'post',
    route  : '/posts'
})

// List matches
.add('matches.list', {
    route : '/matches/:postId'
});
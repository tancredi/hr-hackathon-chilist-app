import send from 'koa-send';

/*
 * App middleware
 *
 * Middleware for single-page-app routing - serves client's entry file
 */

const RESERVED_PATHS = [ 'api' ];

/*
 * Respond with index.html file
 */
export default function * (next) {
    var segments = this.request.path.split('/').splice(1);

    if (RESERVED_PATHS.indexOf(segments[0]) === -1) {
        yield send(this, 'index.html', { root: './www' });
    }

    yield next;
}
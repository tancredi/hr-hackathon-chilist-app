import App from 'koa';
import routes from './routes';
import methods from './middleware/methods';
import app from './middleware/app';
import body from 'koa-body';
import logger from 'koa-logger';
import staticDir from 'koa-static';

/*
 * Server module
 *
 * Configures and runs the API server
 */

export default new App()

.use(body({ jsonLimit: '1gb' }))
.use(methods)
.use(logger())
.use(staticDir('./www'))
.use(routes.routes())
.use(app);
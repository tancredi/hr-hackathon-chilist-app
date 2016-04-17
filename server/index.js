import config from 'config-heroku';
import http from 'http';
import app from './app';
import db from './core/db';

/*
 * Server entry file
 *
 * Runs the API server
 */

var port = config.get('port'),
    server;

console.log(`Connecting to db...`);

db.connect((err) => {
    if (err) { throw err; }

    console.log(`Starting server on port ${port}...`);
    server = http.Server(app.callback());
    server.listen(port);
});
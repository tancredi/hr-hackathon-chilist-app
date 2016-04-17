import mongoose from 'mongoose';
import config from 'config';

/*
 * DB module
 *
 * Callback wrapper to evented mongoose connection using app config
 */

var connected = false;

export default { connect, isConnected, disconnect };

/*
 * Connects to database and triggers callback in case of success or error -
 *
 * @param {Function} callback
 */
function connect(callback) {
    mongoose.connect(config.get('mongodb.url'));

    mongoose.connection.on('open', (err) => {
        if (err) { return callback(err); }
        connected = true;
        callback();
    });

    mongoose.connection.on('error', callback);
}

/*
 * Return true if connected
 *
 * @return {Boolean}
 */
function isConnected() {
    return connected;
}

/*
 * Disconnect Mongoose
 */
function disconnect() {
    mongoose.disconnect();
}
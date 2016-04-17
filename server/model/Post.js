import mongoose from 'mongoose';
import findOrCreateHelper from './helper/find-or-create';

/*
 * Post model
 *
 * Mongoose schema and model for Post
 */

var postSchema = new mongoose.Schema({
    type         : String,
    email        : String,
    url          : String,
    values       : Object,
    parts        : Object,
    name         : String,
    created      : { type: Date, default: Date.now },
    last_updated : { type: Date, default: Date.now }
});

/*
 * Reset `last_updated` before each save
 *
 * @param {Post} post
 * @param {Function} next
 */
postSchema.pre('save', function (next) {
    this.last_updated = new Date();
    next();
});

/*
 * Find or create static (Async)
 *
 * @param {Object} options
 * @param {Function} callback
 */
postSchema.static('findOrCreate', function (options, callback) {
    return findOrCreateHelper(this, options, callback);
});

/*
 * Export public fields to JSON Object
 *
 * @return {Object}
 */
postSchema.method('toJSON', function () {
    return {
        id           : this._id,
        url          : this.url,
        email        : this.email,
        name         : this.name,
        values       : this.values,
        parts        : this.parts,
        created      : this.created,
        last_updated : this.last_updated
    };
});

export default mongoose.model('Post', postSchema);
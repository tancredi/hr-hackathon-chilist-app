/*
 * Find or Create helper
 *
 * Model find or create helper
 */

/*
 * Find or create Mongoose plugin
 *
 * @param {Object} Entry
 * @param {Object} params
 * @param {Function} done
 */
export default function (Entry, params, done = null) {
    Entry.findOne(params, function (err, entry) {
        if (err) { return done(err); }

        if (entry) {
            entry._created = false;
            return done(null, entry);
        }

        entry = new Entry(params);

        return entry.save(function (err) {
            entry._created = true;
            done(err, entry);
        });
    });
}
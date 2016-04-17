/*
 * Methods middleware
 *
 * Attaches useful methods to controllers
 */

/*
 * Bind and attach validate method to controller
 */
export default function * (next) {
    // Attach methods to controller
    this.param = param.bind(this);

    // Continue
    yield next;
}

/*
 * Get a parameter from body, query or params
 *
 * @param {String} key
 * @return {*}
 */
function param(key) {
    return (
        this.request.body[key] ||
        this.params[key] ||
        this.request.query[key] ||
        null
    );
}
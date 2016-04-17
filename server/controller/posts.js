import Post from '../model/Post';

export default { submit };

function * submit() {
    var values = this.param('values'),
        name = this.param('name'),
        email = this.param('email'),
        url = this.param('url'),
        parts = this.param('parts'),
        type = this.param('type'),
        post = new Post({ name, values, email, url, parts, type });

    yield post.save();

    this.body = { success: true, post };
}
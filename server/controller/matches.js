import Post from '../model/Post';

export default { list };

function * list() {
    var postId = this.param('postId'),
        post = yield Post.findOne({ _id: postId }),
        otherType = post.type === 'developer' ? 'hirer' : 'developer',
        posts = yield Post.find({ type: otherType }),
        matches = [],
        a = post;

    posts.forEach((b) => {
        var score = 0;

        if (a.values.specialisation === b.values.specialisation) {
            score += 20;
        }

        if (a['company-type'] === b['company-type']) {
            score += 15;
        }

        if (a.values.motivation === b.values.motivation) {
            score += 10;
        }

        for (let skill of a.values.skills) {
            if (b.values.skills.indexOf(skill) !== -1) {
                score += 15;
            }
        }

        if (score > 50) {
            matches.push({ score, post: b.toJSON() });
        }
    });

    matches.sort((a, b) => {
        return a.score > b.scope ? -1 : 1;
    });

    this.body = { success: true, post, matches };
}
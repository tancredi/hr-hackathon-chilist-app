import api from '../core/api';

export default {
    data: {
        post    : null,
        matches : [],
        loading : true
    },
    ready
};

function ready(req) {
    let postId = req.namedParams.postId;

    api.matches.list({ postId })
    .then((res) => {
        this.loading = false;
        this.matches = res.body.matches;
        this.post = res.body.post;
    })
    .catch((err) => {
        console.error(err);
    });
}
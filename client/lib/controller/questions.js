import tree from '../questions/tree';
import api from '../core/api';
import router from '../core/router';

export default {
    data : {
        tree,
        sequence    : [],
        answers     : {},
        email       : '',
        url         : '',
        name        : '',
        step        : 1,
        closeSplash : false
    },
    methods: {
        answered,
        submit
    },
    ready
};

function ready() {
    // ..
}

function submit(e) {
    e.preventDefault();

    var data = {
        type   : this.answers.type,
        values : this.answers,
        parts  : this.sequence,
        email  : this.email,
        name   : this.name,
        url    : this.url
    };

    api.posts.create(data)
    .then((res) => {
        router.goTo(`/matches/${res.body.post.id}`);
    })
    .catch((err) => {
        console.error(err);
    });
}

function answered() {
    this.step++;
}
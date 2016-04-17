import Vue from 'vue';

Vue.component('questions-tree', Vue.extend({
    data     : function () {
        return {
            step    : this.tree[0],
            context : null
        };
    },
    props    : [ 'tree', 'answers', 'done', 'sequence' ],
    template : require('../../view/component/questions-tree.jade'),
    created,
    methods: {
        getStepById,
        next,
        updateContext,
        getActive,
        formSequence
    }
}));

function created() {
    this.updateContext();
}

function getActive(choices, full = false) {
    return choices.filter((choice) => {
        return choice.active;
    })
    .map((choice) => {
        return full ? choice : choice.value;
    });
}

function updateContext() {
    let context = this.step.ctx(this.answers);

    if (context.choices) {
        context.choices.forEach((choice) => {
            choice.active = false;
        });
    }

    this.context = context;
}

function next(answer, sequence) {
    this.answers[this.step.id] = answer;

    sequence.forEach((part) => {
        this.sequence.push(part);
    });

    let nextStepId = this.step.next(answer, this.answers),
        nextStep = this.getStepById(nextStepId);

    if (!nextStep) {
        return this.done();
    }

    this.step = nextStep;

    this.updateContext();
}

function getStepById(id) {
    for (let step of this.tree) {
        if (id === step.id) { return step; }
    }

    return null;
}

function formSequence(type, context, value) {
    if (type === 'multiple-choice') {
        return formMultiChoiceSequence(context, value);
    } else if (type === 'multiple-select') {
        return formMultiSelectionSequence(context, value);
    }
}

function formMultiChoiceSequence(context, choice) {
    var out = [],
        val;

    if (context.question) {
        out.push({ prefix: context.out_prefix, text: context.question + ' ' });
    }

    val = { text: choice.label };

    if (choice.color) {
        val.color = choice.color;
    }

    out.push(val);

    return out;
}

function formMultiSelectionSequence(context, skills) {
    var out = [];

    if (context.question) {
        out.push({ prefix: context.out_prefix, text: context.question + ' ' });
    }

    skills.forEach((skill, i) => {
        let prefix = ', ';

        if (skills.length <= 1) {
            prefix = null;
        } else if (i === 0) {
            prefix = null;
        } else if (i === skills.length - 1) {
            prefix = ' and ';
        }

        out.push({ prefix, text: skill.label, color: skill.color });
    });

    return out;
}
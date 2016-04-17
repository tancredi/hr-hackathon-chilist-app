export default [

    {
        id   : 'type',
        type : 'multiple-choice',
        ctx  : () => {
            return {
                choices : [
                    { label: 'I\'m a Developer', value: 'developer', color: 'red' },
                    { label: 'I\'m hiring Developers', value: 'hirer', color: 'blue' }
                ]
            };
        },
        next: () => {
            return 'specialisation';
        }
    },

    {
        id   : 'specialisation',
        type : 'multiple-choice',
        ctx  : () => {
            return {
                question : 'specialised in',
                choices  : [
                    { label: 'Full Stack Dev.', value: 'full-stack', color: 'orange' },
                    { label: 'Front-End', value: 'front-end', color: 'red' },
                    { label: 'Back-End', value: 'back-end', color: 'purple' },
                    { label: 'Data Science', value: 'data-science', color: 'darkblue' },
                    { label: 'Mobile Apps', value: 'mobile', color: 'pink' }
                ]
            };
        },
        next: () => {
            return 'company-type';
        }
    },

    {
        id   : 'company-type',
        type : 'multiple-choice',
        ctx  : (answers) => {
            return {
                out_prefix : ', ',
                question   : answers.type === 'developer' ? 'I\'d like to work in' : 'The Company is',
                choices    : [
                    { label: 'a startup', value: 'startup', color: 'green' },
                    { label: 'an agency', value: 'agency', color: 'red' },
                    { label: 'a mid-size business', value: 'mid-size', color: 'purple' },
                    { label: 'an enterprise business', value: 'enterprise', color: 'lightblue' }
                ]
            };
        },
        next: () => {
            return 'motivation';
        }
    },

    {
        id   : 'motivation',
        type : 'multiple-choice',
        ctx  : (answers) => {
            let dev = answers.type === 'developer';

            return {
                out_prefix : ', and ',
                question : dev ? 'I want to' : 'we will',
                choices  : [
                    { label: dev ? 'change the world!' : 'change the world', value: 'drive', color: 'orange' },
                    { label: dev ? 'get paid well' : 'make you rich', value: 'money', color: 'blue' },
                    { label: dev ? 'have a good lifestyle' : 'keep you relaxed', value: 'lifestyle', color: 'pink' },
                    { label: dev ? 'travel' : 'make you travel', value: 'travel', color: 'green' },
                    { label: dev ? 'be challenged' : 'challenge your skills', value: 'challenge', color: 'red' }
                ]
            };
        },
        next: () => {
            return 'skills';
        }
    },

    {
        id   : 'skills',
        type : 'multiple-select',
        ctx  : (answers) => {
            let dev = answers.type === 'developer';

            return {
                out_prefix : ', ',
                question   : dev ? 'writing' : 'if you\'re good at',
                choices    : [
                    { label: 'Ruby', value: 'ruby', color: 'red' },
                    { label: 'Python', value: 'python', color: 'orange' },
                    { label: 'Node.js', value: 'nodejs', color: 'green' },
                    { label: 'PHP', value: 'php', color: 'blue' },
                    { label: 'JavaScript', value: 'javascript', color: 'lightblue' },
                    { label: 'Objective C', value: 'objective-c', color: 'purple' },
                    { label: 'Scala', value: 'scala', color: 'aqua' },
                    { label: 'Java', value: 'java', color: 'lightred' },
                    { label: 'CSS', value: 'css', color: 'pink' },
                    { label: 'HTML', value: 'html', color: 'black' }
                ]
            };
        },
        next: (answer, answers) => {
            return answers.type === 'developer' ? 'channel' : null;
        }
    },

    {
        id   : 'channel',
        type : 'multiple-choice',
        ctx  : () => {
            return {
                out_prefix : '. ',
                question   : 'Check me out on',
                choices    : [
                    { label: 'Github', value: 'github', color: 'black' },
                    { label: 'Twitter', value: 'twitter', color: 'lightblue' },
                    { label: 'LinkedIn', value: 'linkedin', color: 'darkblue' },
                    { label: 'Facebook', value: 'facebook', color: 'blue' },
                ]
            };
        },
        next: () => {
            return null;
        }
    },

];
let dataStorage = require('./participantResults');
let intCPosBrk = require('./src/score/interval-C-position-broken');
let sngCPos = require ('./src/score/single-note-C-position');

module.exports = {
    data_storage: dataStorage.posts,
    intCPosBrk_headers: intCPosBrk.headers,
    intCPosBrk_sessions: intCPosBrk.sessions,
    sngCPos_headers:sngCPos.headers,
    sngCPos_sessions:sngCPos.sessions,
    posts: [
        { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123 },
        { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456 },
    ],
    users: [
        { id: 123, name: "John Doe" },
        { id: 456, name: "Jane Doe" }
    ],
    comments: [
        { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
        { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
    ]
};
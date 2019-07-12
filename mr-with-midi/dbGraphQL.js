let dataStorage = require('./participantResults');
let intCPosBrk = require('./src/score/interval-C-position-broken');
let sngCPos = require ('./src/score/single-note-C-position');

module.exports = {
    data_storage: dataStorage.posts,

    intCPosBrk_headers: intCPosBrk.headers,
    intCPosBrk_sessions: intCPosBrk.sessions,
    sngCPos_headers:sngCPos.headers,
    sngCPos_sessions:sngCPos.sessions
};
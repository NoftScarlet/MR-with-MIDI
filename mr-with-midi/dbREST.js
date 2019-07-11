let intCPosBrk = require('./src/score/interval-C-position-broken');

module.exports = function() {
    return {
        intCPosBrk: intCPosBrk,
        intCPosBrk_headers: intCPosBrk.headers,
        intCPosBrk_sessions: intCPosBrk.sessions
    }
};



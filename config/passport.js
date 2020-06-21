
const mongoose = require('mongoose');
const User = mongoose.model('User');

const local = require('./passport/local');
const google = require('./passport/google');
const facebook = require('./passport/facebook');
const twiter = require('./passport/twiter');
const github = require('./passport/github');



module.exports = (passport) => {
    local()
};
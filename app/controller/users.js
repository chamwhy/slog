const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = (req, res) => {
    
}

exports.logout = () => {

}

exports.join = () => {

}

exports.create = () => {
    const user = new User(req.body);
    user.save();
    res.render();
}
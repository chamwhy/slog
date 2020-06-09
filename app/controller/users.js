const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = (req, res) => {
    
}

exports.logout = () => {

}

exports.join = (req, res, id) => {
    User.findOne({id: id}, (user)=>{
        
    });
}

exports.create = () => {
    const user = new User(req.body);
    try{
        await user.save();
        req.logIn(user, e => {
            if (e) req.flash('info', 'Sorry! We are not able to log you in!');
            res.redirect('/' + user.username);
        });
    } catch(e) {
        console.log(e);
        const errors = Object.keys(e.errors).map(
            key => e.errors[key].message
        );
        res.render('users/signup', {
            title: 'sign up',
            errors,
            user
        });
    }
    
}
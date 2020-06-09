const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

passport.use(new GoogleStrategy({
    consumerKey: GOOGLE_CONSUMER_KEY,
    consumerSecret: GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));

router.post('/', (req, res)=>{

});     



const router = require('express').Router();
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


router.use(session({
  secret: SECRET_CODE,
  cookie: { maxAge: 60 * 60 * 1000 },
  resave: true,
  saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: "",
    clientSecret: "",
    callbackURL: callbakcURL
  }, (accessToken, refreshToken, profile, done)=>{
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

router.get('/google',
  passport.authenticate('google', { 
    scope: ['profile'] 
  }
));

router.get('/google/callback', 
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: 'login'
  }, (req, res)=>{
    
  }
));

module.exports = router;
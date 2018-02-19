const passport = require('passport');
module.exports = app => {
  //internally, GoogleStrategy implements an internal ID of 'google'
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  //user now has the code so passport will exchange code for stuff
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );
  app.get('/api/logout', (req, res) => {
    req.logout(); // logout kills cookie
    res.redirect('/');
  });
  app.get('/api/current_user', (req, res) => {
    // passport automatically attaches user to req object (similar to logout)
    res.send(req.user);
  });
};

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
  app.get('/auth/google/callback', passport.authenticate('google'));
  app.get('/api/logout', (req, res) => {
    req.logout(); // logout kills cookie
    res.send(req.user); // proves to user they are no longer logged in --undefined
  });
  app.get('/api/current_user', (req, res) => {
    // passport automatically attaches user to req object (similar to logout)
    res.send(req.user);
  });
};

// Next is a function called when our midleware is complete - kind of like "done" callback.
// Passes data on to "next" middleware in the chain
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
};


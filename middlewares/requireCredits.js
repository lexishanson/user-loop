// Next is a function called when our midleware is complete - kind of like "done" callback.
// Passes data on to "next" middleware in the chain
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits' });
  }
  next();
  return req.user;
};

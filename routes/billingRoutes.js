const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    // logic here to handle token and reach out to Stripe API integration
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "USD",
      description: "$5 for 5 email credits",
      source: req.body.id
    });
    req.user.credits += 5;
    // must save model back to database everytime we change it.
    const user = await req.user.save();
    res.send(user);
  });
};

// take user model, add credits, and send new model back to client
// Because of Passport, we have access to user model via req.user

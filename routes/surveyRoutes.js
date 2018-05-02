const mongoose = require("mongoose");
const Path = require("path-parser");
const { URL } = require("url");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for voting!");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    // first want to check if user is logged in
    // then check if they have enough credits to send survey

    // look for the props on req.body (coming from FE) and create a new survey instance
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      // ref here indicates reference is to User collection
      // _ convention indicates a relationship field
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Send email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    //   const events = req.body.map(({ email, url }) => {
    //     const pathname = new URL(url).pathname;
    //     const p = new Path("/api/surveys/:surveyId/:choice");
    //     const match = p.test(pathname);
    //     return (
    //       match && {
    //         email,
    //         surveyId: match.surveyId,
    //         choice: match.choice
    //       }
    //     );
    //   });
    //   console.log(events);
    console.log("hellooooo");
  });
};

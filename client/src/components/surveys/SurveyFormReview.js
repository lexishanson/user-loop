// SurveyFormReview shows users their form inputs for review
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import fields from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ onEdit, formValues, history, submitSurvey }) => {
  const reviewFields = () => {
    return fields.map(({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <h5>Can you please confirm your entries?</h5>
      <div>{reviewFields()}</div>
      <button onClick={onEdit} className="yellow darken-3 btn-flat white-text">
        Edit
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = ({ form }) => {
  // const { title, subject, body, emails } = form.surveyForm.values;
  return { formValues: form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

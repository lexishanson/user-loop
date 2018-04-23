import React, { Component } from "react";
// reduxForm function here is similar to "connect" helper in redux - allows component to communicated w/ Redux store. Field import is for rendering any type of traditional html form element.
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import fields from "./formFields";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

//handleSubmit function below is available from reduxForm

class SurveyForm extends Component {
  renderFields(input, text) {
    return fields.map(field => {
      return (
        <Field
          component={SurveyField}
          type="text"
          name={field.name}
          label={field.label}
          key={field.name}
        />
      );
    });
  }

  render() {
    const { handleSubmit, onSurveySubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  fields.forEach(({ name }) => {
    errors.recipients = validateEmails(values.recipients || "");

    if (!values[name]) {
      errors[name] = `You must provide ${name}.`;
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  destroyOnUnmount: false,
  form: "surveyForm"
})(SurveyForm);

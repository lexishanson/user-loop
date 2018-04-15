// SurveyFormReview shows users their form inputs for review
import React from "react";

const SurveyFormReview = ({ onEdit }) => {
  return (
    <div>
      <h5>Can you please confirm your entries?</h5>
      <button onClick={onEdit} className="yellow btn-flat darken-3">
        Edit
      </button>
    </div>
  );
};
export default SurveyFormReview;

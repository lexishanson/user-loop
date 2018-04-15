import React, { Component } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      // StripeCheckout defaults to USD in cents. Token prop expects callback with token we receive from Stripe
      <StripeCheckout
        amount={500}
        description="$5 for 5 email credits"
        name="User Loop"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={token => this.props.handleToken(token)}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

// actions -- mapDispatchToProps(dispatch => {return { actions: bindActionCreators(addNewTodo, dispatch)}})
export default connect(null, actions)(Payments);

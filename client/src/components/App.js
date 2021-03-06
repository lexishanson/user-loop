import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// BrowserRouter is brains of react-router
// Route sets up rule for a given route

import Dashboard from "./Dashboard";
import Header from "./Header";
import Landing from "./Landing";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    // browserRouter --> 1 child
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" component={Landing} exact />
          <Route path="/surveys" component={Dashboard} exact />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}
// first arg is for mapStateToPropsArg, "actions" arg means actions object is now available to App as props
export default connect(null, actions)(App);

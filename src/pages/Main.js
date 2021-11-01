import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import { unAuthRoutes } from "../routes";
import { fetchUserDetails } from "../redux/modules/userDetails/userDetailsActions";
import Header from "../common/components/Header";
import "./main.scss";
// const LoggedInRoutes = user =>
//   authRoutes.map((r, i) => (
//     <Route
//       key={i}
//       path={r.path}
//       exact={r.exact}
//       render={props => <r.main {...props} user={user || {}} />}
//     />
//   ));

const LoggedOutRoutes = () =>
  unAuthRoutes.map((r, i) => (
    <Route
      key={i}
      path={r.path}
      exact={r.exact}
      render={props => <r.main {...props} />}
    />
  ));

const Main = React.memo(({ getUserDetails }) => {
  const fetchUserDetails = () => {
    const onSuccess = () => {};
    const onFail = () => {};
    getUserDetails({ onSuccess, onFail });
  };
  fetchUserDetails();
  return (
    <div className="main-div">
      <Header />
      <Switch>{LoggedOutRoutes()}</Switch>
    </div>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: payload => dispatch(fetchUserDetails(payload))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Main));

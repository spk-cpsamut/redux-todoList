import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "antd/dist/antd.css";

import Role from "./config/Role";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        {Role[props.statusUser].havePaths.map((row) => {
          return <Route exact path={row.path} component={row.component} />;
        })}

        <Redirect to={Role[props.statusUser].redirect} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    statusUser: state.statusUser,
  };
};

export default connect(mapStateToProps)(App);

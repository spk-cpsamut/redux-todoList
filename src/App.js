import React, { useEffect } from "react";

import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "antd/dist/antd.css";

import axios from "./config/axios";

import Role from "./config/Role";
import { actionCreators } from "./store/action/actionCreators";

function App(props) {
  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      const checkToken = async () => {
        await axios.get("/todo/check-token");
      };

      checkToken();
    }
  }, []);

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
    statusUser: state.user.statusUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stayMember: () => dispatch(actionCreators.stayMember()),
    getTodoList: () => dispatch(actionCreators.getTodoList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

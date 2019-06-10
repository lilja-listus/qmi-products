import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; //will make the props awailable for all the nested components.
import Signin from "./user/Signin";
import Signup from "./user/Signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

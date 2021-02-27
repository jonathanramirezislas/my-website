import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom";

import { Main } from "./components/Main";
import { Home } from "./components/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/home" component={Home} />
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>
  );
};

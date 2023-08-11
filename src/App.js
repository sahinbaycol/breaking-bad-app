import React from "react";

import {  Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/home";

export default function App() {
  return (
    // <Switch>
    //   <Route path="/" component={Home}></Route>
      
      
    // </Switch>
    <div>
      <Home />
    </div>
  );
}

// You can think of these components as "pages"
// in your app.




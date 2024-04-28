import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SpacecraftPage from "./spacecraft-page/spacecraft-page.component.js";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/spacecraft/:spacecraftId" component={SpacecraftPage} />
		<Route path="/spacecraft" component={SpacecraftPage} exact />
    </BrowserRouter>
  );
}

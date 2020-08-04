import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page01 from "../pages/Page01/Page01";
import Page02 from "../pages/Page02/Page02";
import AHeader from "../components/AHeader/AHeader";
import AFooter from "../components/AFooter/AFooter";
import ASidebar from "../components/ASidebar/ASidebar";

const AppRouter = () => (
  <BrowserRouter>
    <AHeader />
    <ASidebar />
    <Switch>
      <Route path="/" exact component={Page01} />
      <Route path="/Page01" component={Page01} />
      <Route path="/Page02" component={Page02} />
      <Route component={Page01} />
    </Switch>
    <AFooter />
  </BrowserRouter>
);

export default AppRouter;

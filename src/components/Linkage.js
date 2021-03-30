import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import CalculatorForm from "./CalculatorForm";
import Result from "./Result";

const Linkage = () => {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <CalculatorForm />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
      </div>
    </Router>
  );
};

export default Linkage;

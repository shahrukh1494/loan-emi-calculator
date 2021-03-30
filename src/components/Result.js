import React from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import ShowMonthly from "./ShowMonthly";

const Result = () => {
  const history = useHistory();
  window.onpopstate = (e) => {
    history.push("/");
  };

  const location = useLocation();
  const payable =
    Number(location.state.principal) + Number(location.state.interestAmount);
  return (
    <>
      <Link to="/">Calculate Again</Link>
      <div className="result">
        <div className="result-data">
          Total Loan Amount : &#8377; {location.state.principal}
        </div>
        <div className="result-data">
          Interest Rate : {location.state.interest} % per annum
        </div>
        <div className="result-data">
          Total Loan Time Period : {location.state.timePeriod}{" "}
          {location.state.emiPeriodType}
        </div>
      </div>

      <div className="result">
        <div className="result-data">
          Total payable Amount : &#8377; {payable}
        </div>
        <div className="result-data">
          Total Interest Amount : &#8377; {location.state.interestAmount}
        </div>
      </div>

      <ShowMonthly
        payable={payable}
        type={location.state.emiPeriodType}
        time={location.state.timePeriod}
      />
    </>
  );
};

export default Result;

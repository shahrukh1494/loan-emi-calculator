import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const CalculatorForm = () => {
  const [principal, setPrincipal] = useState("");
  const [interest, setInterest] = useState("");
  const [emiPeriodType, setEmiPeriodType] = useState("year");
  const [timePeriod, setTimePeriod] = useState("");
  const [interestAmount, setInterestAmount] = useState("");
  const [valid, setValid] = useState(false);

  if (valid) {
    return (
      <Redirect
        to={{
          pathname: "/result",
          state: {
            principal,
            interest,
            emiPeriodType,
            timePeriod,
            interestAmount,
            valid,
          },
        }}
      />
    );
  }

  const reset = () => {
    setPrincipal("");
    setInterest("");
    setEmiPeriodType("year");
    setTimePeriod("");
  };

  //const calculate = (principal, interest, emiPeriodType, timePeriod) => {
  const calculate = () => {
    const p = Number(principal);
    const r = Number(interest) / 100;
    const t = Number(timePeriod);

    //validate if input fields are numbers
    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      alert("Invalid Input! Please enter numbers only");
      return;
    }
    //validate if input is in positive numbers only
    if (p <= 0 || r <= 0 || t <= 0) {
      alert("Invalid Input! Please enter positive numbers!");
      return;
    }

    //calculate and show if in months
    if (emiPeriodType === "month") {
      const simpleInterest = (p * r * t) / 12;
      setInterestAmount(simpleInterest.toFixed(3));
      setValid(true);
      return;
    }
    //calculate and show if in days
    if (emiPeriodType === "day") {
      const simpleInterest = (p * r * t) / 365;
      setInterestAmount(simpleInterest.toFixed(3));
      setValid(true);
      return;
    }
    //calculate and show if in years
    const simpleInterest = p * r * t;
    setInterestAmount(simpleInterest.toFixed(3));
    setValid(true);
  };

  return (
    <div>
      <form className="add-form">
        <div className="form-control">
          <label>Enter Loan Amount </label>
          {
            //<input value="&#8377;" disabled />
          }
          <input
            type="text"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Enter Interest Rate </label>
          <div className="slidecontainer">
            1
            <input
              type="range"
              min="1"
              max="100"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="slider"
            />
            100
          </div>
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </div>

        <div className="form-control dropdown">
          <label>Enter total time period in </label>
          <select
            value={emiPeriodType}
            onChange={(e) => setEmiPeriodType(e.target.value)}
          >
            <option value="year">Years</option>
            <option value="month">Months</option>
            <option value="day">Days</option>
          </select>
        </div>

        <div className="form-control">
          <label>Enter total time period </label>
          <input
            type="text"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            calculate();
          }}
          className="btn"
        >
          Calculate
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            reset();
          }}
          className="btn"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default CalculatorForm;

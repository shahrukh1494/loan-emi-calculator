import React from "react";

const ShowMonthly = ({ payable, type, time }) => {
  let date = new Date();
  let month = date.getMonth();
  let monthName = "";

  let monthEvaluator = () => {
    if (month === 0) {
      monthName = "January";
    } else if (month === 1) {
      monthName = "February";
    } else if (month === 2) {
      monthName = "March";
    } else if (month === 3) {
      monthName = "April";
    } else if (month === 4) {
      monthName = "May";
    } else if (month === 5) {
      monthName = "June";
    } else if (month === 6) {
      monthName = "July";
    } else if (month === 7) {
      monthName = "August";
    } else if (month === 8) {
      monthName = "September";
    } else if (month === 9) {
      monthName = "October";
    } else if (month === 10) {
      monthName = "November";
    } else if (month === 11) {
      monthName = "December";
    } else {
      monthName = "";
    }
  };

  if (type === "year") {
    time = time * 12;
  }
  if (type === "day") {
    time = Math.floor(time / 30);
  }

  const emiMonths = [];

  for (let i = 0; i < time; i++) {
    month += 1;
    if (month >= 12) {
      month = month % 12;
    }
    monthEvaluator();
    emiMonths.push(monthName);
  }

  return (
    <div>
      <div className="result">
        Monthly Payment : &#8377; {(Number(payable) / Number(time)).toFixed(3)}{" "}
        per month in installments as :
      </div>
      {emiMonths.map((months) => (
        <div key={Math.random() * 1000} className="result">
          <div className="result-months">{months}</div>
          <div className="result-amount">
            &#8377; {(Number(payable) / Number(time)).toFixed(3)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowMonthly;

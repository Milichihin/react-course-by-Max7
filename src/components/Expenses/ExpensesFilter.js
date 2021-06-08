import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [year, setYear] = useState("...waiting for year select");
  const [month, setMonth] = useState("...waiting for year select");

  const receiveYear = (event) => {
    // console.log(event.target.value); // here value from button "select option"
    props.onSaveExpenseYear(event.target.value);
    setYear(event.target.value);
  };

  const receiveMonth = (event) => {
    // console.log(event.target.value); // here value from button "select option"
    props.onSaveExpenseMonth(event.target.value);
    setMonth(event.target.value);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year: &nbsp;{year}</label>
        <select value={props.selected} onChange={receiveYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div className="expenses-filter__control">
        <label>Filter by month: &nbsp; {monthNames[month]}</label>
        <select value={props.selectedM} onChange={receiveMonth}>
          <option value="all">choose month</option>
          {monthNames.map((monthNames, index) => (
            <option key={index}>{monthNames}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// import React from "react";
import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  /*
  // here is alt code used with single state instead multiple state

  const [singleState, setSingleState] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  });


  const titleChangeHandler = (event) => {
    setSingleState((previewState) => {
      return { ...previewState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setSingleState(() => {
      return { ...singleState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setSingleState(() => {
      return { ...singleState, enteredDate: event.target.value };
    });
  };

  */

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      dateSimpleFormat: new Date(enteredDate)
      // dateSimpleFormat: enteredDate
    };
    // console.log(expenseData);

    props.onSaveExpenseData(expenseData); //we're using a function from 'props' taken from 'NewExpense.js'
    setEnteredTitle(""); //to clear the form after submitting
    setEnteredAmount(""); //to clear the form after submitting
    setEnteredDate(""); //to clear the form after submitting
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>It's the form</h1>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title {enteredTitle}</label>
          {/* <label>Title {singleState.enteredTitle}</label> */}
          <input
            type="text"
            value={enteredTitle} //to clear the form after submitting
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount {enteredAmount}</label>
          {/* <label>Amount {singleState.enteredAmount}</label> */}
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} //to clear the form after submitting
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date {enteredDate}</label>
          {/* <label>Date {singleState.enteredDate}</label> */}
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate} //to clear the form after submitting
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

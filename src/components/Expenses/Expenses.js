import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function Expenses(props) {
  const [firstYear, setGiveMeYear] = useState("2021");
  const [firstMonth, setGiveMonth] = useState("all");

  const giveMeYear = (event) => {
    setGiveMeYear(event);
  };

  const giveMeMonth = (event) => {
    setGiveMonth(event);
  };

  const filteredExpensesAll = props.passMainArr.filter((el) =>
    firstMonth === "all"
      ? el.date.getFullYear().toString() === firstYear
      : el.date.getFullYear().toString() === firstYear &&
        el.date.getMonth().toString() === firstMonth
  );

  let expensesContent = <p>No content</p>;

  if (filteredExpensesAll.length > 0) {
    expensesContent = filteredExpensesAll.map((ele) => (
      <ExpenseItem
        key={ele.id}
        title={ele.title}
        amount={ele.amount}
        date={ele.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={firstYear}
        selectedM={firstMonth}
        onSaveExpenseYear={giveMeYear}
        onSaveExpenseMonth={giveMeMonth}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;

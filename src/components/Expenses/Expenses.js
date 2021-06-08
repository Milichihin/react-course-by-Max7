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

  // const filteredExpenses = props.passMainArr.filter(
  //   (el) =>
  //     el.date.getFullYear().toString() === firstYear &&
  //     el.date.getMonth().toString() === firstMonth
  // );

  // const filteredExpensesYear = props.passMainArr.filter(
  //   (el) => el.date.getFullYear().toString() === firstYear
  // );

  const filteredExpensesAll = props.passMainArr.filter((el) =>
    firstMonth === "all"
      ? el.date.getFullYear().toString() === firstYear
      : el.date.getFullYear().toString() === firstYear &&
        el.date.getMonth().toString() === firstMonth
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={firstYear}
        selectedM={firstMonth}
        onSaveExpenseYear={giveMeYear}
        onSaveExpenseMonth={giveMeMonth}
      />
      {filteredExpensesAll.map((ele) => (
        <ExpenseItem
          key={ele.id}
          title={ele.title}
          amount={ele.amount}
          date={ele.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;

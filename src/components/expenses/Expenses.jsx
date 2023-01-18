import { ExpenseItem } from "../expense-item/ExpenseItem"
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import Chart from "../Chart/Chart";

export const Expenses = ({ expenses }) => {
    const [selectedYear, setSelectedYear] = useState("2022");

    const yearChangeHandler = (event) => {
      setSelectedYear(event.target.value);
    };

    const filteredItems = expenses.filter((ele) => {
      const stringifiedYear = new Date(ele.date).getFullYear().toString();
      return stringifiedYear === selectedYear;
    });
    return (
      <ul
        style={{
          padding: "20px",
          border: "2px solid ",
          borderRadius: "13px",
          backgroundColor: "black",
        }}
      >
        <ExpensesFilter/>
        <Chart expenses={filteredItems} />
        {filteredItems.map((elem) => {
          return (
            <ExpenseItem
              title={elem.title}
              price={elem.price}
              date={elem.date}
            />
          );
        })}
      </ul>
    );
};
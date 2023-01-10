import { Button } from "../UI/Button/Button";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import { useState } from "react";

export const NewExpense = ({ onNewExpenseAdd }) => {
  const [showForm, setShowForm] = useState(false); 

  const showExpenseForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <div style={{backgroundColor: "rgb(108, 85, 151)", border: '2px solid',  borderRadius: '18px', padding: '5px'}}>
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <Button title="Добавить новый расход" onClick={showExpenseForm} />)}
    </div>
  );
};
import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (inputtedExpenseData) => {
        const expenseData = {
            ...inputtedExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowForm(false);
    }
    const cancelFormHandler = () => {
        setShowForm(false);
    }

    const showFormHandler = () => {
        setShowForm(true);
    }
    return (
        <div className="new-expense">
            {!showForm && <button onClick={showFormHandler}>Add New Expenses</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={cancelFormHandler}/>}
        </div>
    );
}
export default NewExpense;

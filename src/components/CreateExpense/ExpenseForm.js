import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // -- OPTION 1: Single State --
    // const [userInput, setUserInput] = useState({
    //    newTitle: '',
    //    newAmount:'',
    //    newDate: ''
    // });
    //
    // const submitChangeHandler = (event) => {
    //
    // }
    // -- OPTION 2: Multi State --
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState(0.00);
    const [newDate, setNewDate] = useState('2021-01-01');
    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value)

    //  -- Option 2b
    //  setUserInput({
    //      ...userInput,
    //      newTitle: event.target.value,
    //  });

    //  -- Option 2c: to guarantee that you get the latest state snapshot
    //    if your state updated depends on the previous state, ALWAYS use a function.
    //  setUserInput((prevState) =>{
    //      return {...prevState, newTitle: event.target.value}
    //  })
    };
    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
        setNewDate(event.target.value)
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate + 'T00:00')
        };
        console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setNewTitle('');
        setNewAmount(0.00);
        setNewDate('2021-01-01');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={newAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2021-01-01" max="2022-01-01" value={newDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancelForm}> Cancel </button>
                    <button type="submit"> Add Expense </button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;

import React, {useState} from "react";
import './UpdateForm.css';

const UpdateForm = (props) => {
    const [title, setNewTitle] = useState(props.title);
    const [amount, setNewAmount] = useState(props.amount);
    const [date, setNewDate] = useState(props.date);

    const submitHandler = (event) => {
      event.preventDefault();
      const expenseData = {
          title: title,
          amount: amount,
          date: new Date(date + 'T00:00')
      };

      props.onSaveExpenseData(expenseData)
    }
    const tileChangeHandler = (event) => {
        setNewTitle(event.target.value);

    }
    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
    }

    return (
      <form onSubmit={submitHandler}>
          <div className='expense-item'>
              <label>Date: </label>
              <input type='date' min="2021-01-01" max="2023-01-01" value={date} onChange={dateChangeHandler}/>
          </div>
          <div>
              <label>Title: </label>
              <input type='text' value={title} onChange={tileChangeHandler}/>
          </div>
          <div>
              <label>Amount: </label>
              <input type='number' min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
          </div>
          <div>
              <button type="button" onClick={props.onCancelForm}>Cancel</button>
              <button type="button" onClick={props.onDelete}>Delete</button>
              <button type="submit">Update Expense</button>
          </div>
      </form>
    );

}

export default UpdateForm;

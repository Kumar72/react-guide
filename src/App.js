import React, {useState} from "react";
import './App.css';
import NewExpense from "./components/CreateExpense/NewExpense";
import Expenses from "./components/ViewExpenses/Expenses";

const SAMPLE_EXPENSES = [
    {
        id: 'e1',
        date: new Date('2021/7/31'),
        title: 'Pocono Mtn - Lodging',
        amount: 250.41
    },
    {
        id: 'e2',
        date: new Date('2021/8/1'),
        title: 'Taughannock Fall State Park - Lodging',
        amount: 720.28
    },
    {
        id: 'e3',
        date: new Date('2021/8/3'),
        title: 'Cherry Spring State Park - Lodging',
        amount: 150.99
    },
    {
        id: 'e4',
        date: new Date('2020/8/23'),
        title: 'Glacier Mtn Hike',
        amount: 320.99
    },
    {
        id: 'e5',
        date: new Date('2022/3/21'),
        title: 'Europe Backpack Trip Ticket',
        amount: 720.99
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(SAMPLE_EXPENSES);

    const addExpenseHandler = expense => {
        console.log(new Date(2021,7,21))
        console.log(expense)
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        {/*{expenses.map(data => console.log(data))}*/}
        <Expenses data={expenses}/>
    </div>
  );
}

export default App;

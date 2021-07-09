import './App.css';
import NewExpense from "./components/CreateExpense/NewExpense";
import Expenses from "./components/ViewExpenses/Expenses";

const App = () => {
    const expenses = [
        {
            id: 'e1',
            date: new Date(2021, 7,31),
            title: 'Pocono Mtn - Lodging',
            amount: 250.41
        },
        {
            id: 'e2',
            date: new Date(2021, 8,1),
            title: 'Taughannock Fall State Park - Lodging',
            amount: 720.28
        },
        {
            id: 'e3',
            date: new Date(2021, 8,3),
            title: 'Cherry Spring State Park - Lodging',
            amount: 150.99
        }
    ];

    const addExpenseHandler = expense => {
        console.log(expense);
    }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses data={expenses}/>
    </div>
  );
}

export default App;

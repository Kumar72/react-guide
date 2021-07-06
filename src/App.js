import './App.css';
import Expenses from "./components/Expenses";

function App() {
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

  return (
    <div className="App">
        <Expenses data={expenses}/>
    </div>
  );
}

export default App;

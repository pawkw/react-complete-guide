import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2022, 2, 21),
    title: "Gift for Dad",
    amount: 19.0
  },
  {
    id: 'e2',
    date: new Date(2022, 3, 20),
    title: "Gift for Mom",
    amount: 23.0
  },
  {
    id: 'e3',
    date: new Date(2022, 4, 19),
    title: "Gift for Dave",
    amount: 29.0
  },
  {
    id: 'e4',
    date: new Date(2022, 5, 18),
    title: "Gift for Barb",
    amount: 31.0
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    console.log("In app.js");
    console.log(expense);
    setExpenses((previousState) => {
      return [expense, ...previousState]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

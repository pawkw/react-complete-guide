import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
  ];

  const output = expenses.map((item) => <ExpenseItem id={item.id} title={item.title} date={item.date} amount={item.amount} />)
  return (
    <div>
      <h2>Let's get started!</h2>
      {output}
    </div>
  );
}

export default App;

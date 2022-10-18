import Expenses from "./components/Expenses/Expenses";

const App = () => {
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

  
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

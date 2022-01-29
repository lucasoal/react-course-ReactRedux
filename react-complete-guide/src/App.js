import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import Graph from "./components/Graph/Graph"

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2018, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450.12,
      date: new Date(2004, 5, 12),
    }
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Graph />
      <Expenses items={expenses} />
      <Footer />
    </div>
  );

  //? ────── · Old React · ──────
  // return (React.createElement(
  //  'div',
  //   {},
  //   React.createElement(Expenses, {items: expenses})
  // );
}

export default App;

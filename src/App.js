import "./App.css";
import AddTransactions from "./components/AddTransactions";
import Balance from "./components/Balance";
import { GlobalProvider } from "./components/context/globalState";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TranscationsList from "./components/TranscationsList";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TranscationsList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;

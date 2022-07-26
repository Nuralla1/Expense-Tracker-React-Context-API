import React, { useContext } from "react";
import { GlobalContext } from "./context/globalState";
import Transactions from "./Transactions";

const TranscationsList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transactions transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};

export default TranscationsList;

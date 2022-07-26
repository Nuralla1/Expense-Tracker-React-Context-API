import React, { useContext } from "react";
import { GlobalContext } from "./context/globalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
  return (
    <>
      <h4>Your balance</h4>
      <h1 id="balance">{total}KZT</h1>
    </>
  );
};

export default Balance;

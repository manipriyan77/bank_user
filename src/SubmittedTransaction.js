import React, { useState } from "react";

const SubmittedTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  // Function to handle submission of new transaction data from NewTransaction component
  const handleNewTransactionSubmit = (transactionData) => {
    setTransactions([...transactions, transactionData]);
  };

  return (
    <div>
      <h2>Submitted Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Transfer Amount</th>
            <th>Transfer Currency</th>
            <th>Reference</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.customerName}</td>
              <td>{transaction.transferAmount}</td>
              <td>{transaction.transferCurrency}</td>
              <td>{transaction.reference}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Render pagination and sorting controls here */}
    </div>
  );
};

export default SubmittedTransactions;

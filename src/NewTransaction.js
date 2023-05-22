import React, { useState } from "react";
import customerData from "./customerData.json";

const NewTransaction = () => {
  const [transactionType, setTransactionType] = useState("New");
  const [reference, setReference] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [transferCurrency, setTransferCurrency] = useState("");
  const [beneficiaryBank, setBeneficiaryBank] = useState("");
  const [beneficiaryAccountNumber, setBeneficiaryAccountNumber] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [region, setRegion] = useState("Port Louis");

  const handleCustomerNumberChange = (event) => {
    const inputCustomerNumber = event.target.value;
    setCustomerNumber(inputCustomerNumber);

    // Find customer details from the local JSON file based on the customer number
    const customer = customerData.find(
      (customer) => customer.customerNumber === inputCustomerNumber
    );

    if (customer) {
      setCustomerName(customer.customerName);
      setCustomerAddress(customer.customerAddress);
      setCustomerPhone(customer.customerPhone);
    }
  };

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    setCustomerPhone(inputPhoneNumber.replace(/[^0-9]/g, ""));
  };

  const handleTransferAmountChange = (event) => {
    const inputTransferAmount = event.target.value;
    setTransferAmount(inputTransferAmount.replace(/[^0-9]/g, ""));
  };

  const handleBeneficiaryBankChange = (event) => {
    const inputBeneficiaryBank = event.target.value;
    setBeneficiaryBank(inputBeneficiaryBank.replace(/[^a-zA-Z ]/g, ""));
  };

  const handlePaymentDetailsChange = (event) => {
    const inputPaymentDetails = event.target.value;
    setPaymentDetails(inputPaymentDetails.replace(/[^a-zA-Z ]/g, ""));
  };

  const generateReference = () => {
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const sequenceNumber = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    const generatedReference = `CUS${currentDate}${sequenceNumber}`;
    setReference(generatedReference);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission and perform bank transaction
    // Example: send data to server or perform necessary actions
    const transactionData = {
      transactionType,
      reference,
      customerNumber,
      customerName,
      customerAddress,
      customerPhone,
      transferAmount,
      transferCurrency,
      beneficiaryBank,
      beneficiaryAccountNumber,
      paymentDetails,
      cardDetails,
      region,
    };
    console.log(transactionData);
  };

  return (
    <div>
      <h2>New Bank Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Transaction Type:
          <input
            type="radio"
            value="New"
            checked={transactionType === "New"}
            onChange={(e) => setTransactionType(e.target.value)}
          />
          New
          <input
            type="radio"
            value="Existing"
            checked={transactionType === "Existing"}
            onChange={(e) => setTransactionType(e.target.value)}
          />
          Existing
        </label>
        <br />
        <label>
          Reference:
          <input type="text" value={reference} />
        </label>
        <br />
        <label>
          Customer Number:
          <input
            type="text"
            value={customerNumber}
            onChange={handleCustomerNumberChange}
            required
          />
        </label>
        <br />
        <label>
          Customer Name:
          <input type="text" value={customerName} />
        </label>
        <br />
        <label>
          Customer Address:
          <input type="text" value={customerAddress} />
        </label>
        <br />
        <label>
          Customer Phone Number:
          <input
            type="text"
            value={customerPhone}
            onChange={handlePhoneNumberChange}
            pattern="[0-9]*"
            required
          />
        </label>
        <br />
        <label>
          Transfer Amount:
          <input
            type="text"
            value={transferAmount}
            onChange={handleTransferAmountChange}
            pattern="[0-9]*"
            required
          />
        </label>
        <br />
        <label>
          Transfer Currency:
          <select value={transferCurrency} onChange={(e) => setTransferCurrency(e.target.value)}>
            <option value="AED">AED</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
            <option value="MUR">MUR</option>
            <option value="USD">USD</option>
          </select>
        </label>
        <br />
        <label>
          Beneficiary Bank:
          <input
            type="text"
            value={beneficiaryBank}
            onChange={handleBeneficiaryBankChange}
            required
          />
        </label>
        <br />
        <label>
          Beneficiary Account Number:
          <input
            type="text"
            value={beneficiaryAccountNumber}
            onChange={(e) => setBeneficiaryAccountNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Payment Details:
          <input
            type="text"
            value={paymentDetails}
            onChange={handlePaymentDetailsChange}
            required
          />
        </label>
        <br />
        <label>
          Credit/Debit Card Details:
          <input type="text" value={cardDetails} onChange={(e) => setCardDetails(e.target.value)} />
        </label>
        <br />
        <label>
          Region:
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="Port Louis">Port Louis</option>
            <option value="Curepipe">Curepipe</option>
            <option value="Vacoas">Vacoas</option>
            <option value="Port Mathurin">Port Mathurin</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTransaction;

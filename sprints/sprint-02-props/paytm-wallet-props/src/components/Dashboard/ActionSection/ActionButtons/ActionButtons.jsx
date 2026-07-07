function ActionButtons({
  walletBalance,
  setWalletBalance,
  setRecentAction,
}) {
  const addMoney = () => {
    setWalletBalance(walletBalance + 500);
    setRecentAction("Added ₹500");
  };

  const spendMoney = () => {
    setWalletBalance(walletBalance - 200);
    setRecentAction("Spent ₹200");
  };

  const resetWallet = () => {
    setWalletBalance(25000);
    setRecentAction("Reset Wallet");
  };

  return (
    <>
      <button onClick={addMoney}>Add ₹500</button>

      <button onClick={spendMoney}>Spend ₹200</button>

      <button onClick={resetWallet}>Reset</button>

      <hr />
    </>
  );
}

export default ActionButtons;
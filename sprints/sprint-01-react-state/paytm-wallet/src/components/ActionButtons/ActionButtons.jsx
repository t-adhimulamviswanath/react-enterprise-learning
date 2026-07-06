function ActionButtons({
  walletBalance,
  setWalletBalance,
  setRecentAction,
}) {
  return (
    <>
      <button
        onClick={() => {
          setWalletBalance(walletBalance + 500);
          setRecentAction("Added ₹500");
        }}
      >
        Add ₹500
      </button>

      <button
        onClick={() => {
          setWalletBalance(walletBalance - 200);
          setRecentAction("Spent ₹200");
        }}
      >
        Spend ₹200
      </button>

      <button
        onClick={() => {
          setWalletBalance(25000);
          setRecentAction("Wallet Reset");
        }}
      >
        Reset
      </button>

      <hr />
    </>
  );
}

export default ActionButtons;
import { useContext } from "react";
import WalletContext from "../../../../context/WalletContext";

function WalletCard() {
  const { walletBalance } = useContext(WalletContext);

  return (
    <>
      <h2>Balance: ₹{walletBalance}</h2>
      <hr />
    </>
  );
}

export default WalletCard;
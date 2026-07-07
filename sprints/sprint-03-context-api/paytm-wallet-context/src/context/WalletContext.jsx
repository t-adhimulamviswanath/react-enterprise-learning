import { createContext, useState } from "react";

const WalletContext = createContext();

function WalletProvider({ children }) {
  const [walletBalance, setWalletBalance] = useState(25000);
  const [recentAction, setRecentAction] = useState("No Action Yet");

  return (
    <WalletContext.Provider
      value={{
        walletBalance,
        setWalletBalance,
        recentAction,
        setRecentAction,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export default WalletContext;
export { WalletProvider };
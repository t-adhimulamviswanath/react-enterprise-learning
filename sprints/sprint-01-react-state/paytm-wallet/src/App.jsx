import Header from "./components/Header/Header";
import WalletCard from "./components/WalletCard/WalletCard";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import RecentAction from "./components/RecentAction/RecentAction";
import Footer from "./components/Footer/Footer";
import { useState } from "react";


function App() {
  const [walletBalance, setWalletBalance] = useState(25000);
  const [recentAction, setRecentAction] = useState("No Action Yet");
  return (
    <>
    <h1>Paytm Wallet</h1>
      <Header />
      <WalletCard walletBalance={walletBalance} />
      <ActionButtons
        walletBalance={walletBalance}
        setWalletBalance={setWalletBalance}
        setRecentAction={setRecentAction}
      />
      <RecentAction
        recentAction={recentAction}
      />
      <Footer />
    </>
  );
}

export default App;
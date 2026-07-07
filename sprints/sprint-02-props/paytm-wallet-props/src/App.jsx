import { useState } from "react";

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  const [walletBalance, setWalletBalance] = useState(25000);
  const [recentAction, setRecentAction] = useState("No Action Yet");

  return (
    <>
      <Header />

      <Dashboard
        walletBalance={walletBalance}
        setWalletBalance={setWalletBalance}
        recentAction={recentAction}
        setRecentAction={setRecentAction}
      />

      <Footer />
    </>
  );
}

export default App;
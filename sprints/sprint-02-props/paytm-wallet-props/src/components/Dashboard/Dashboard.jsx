import WalletSection from "./WalletSection/WalletSection";
import ActionSection from "./ActionSection/ActionSection";
import ActivitySection from "./ActivitySection/ActivitySection";

function Dashboard({
  walletBalance,
  setWalletBalance,
  recentAction,
  setRecentAction,
}) {
  return (
    <>
      <WalletSection
        walletBalance={walletBalance}
      />

      <ActionSection
        walletBalance={walletBalance}
        setWalletBalance={setWalletBalance}
        setRecentAction={setRecentAction}
      />

      <ActivitySection
        recentAction={recentAction}
      />
    </>
  );
}

export default Dashboard;
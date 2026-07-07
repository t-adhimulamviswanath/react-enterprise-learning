import ActionButtons from "./ActionButtons/ActionButtons";

function ActionSection({
  walletBalance,
  setWalletBalance,
  setRecentAction,
}) {
  return (
    <>
      <ActionButtons
        walletBalance={walletBalance}
        setWalletBalance={setWalletBalance}
        setRecentAction={setRecentAction}
      />
    </>
  );
}

export default ActionSection;
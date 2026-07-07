import WalletCard from "./WalletCard/WalletCard";

function WalletSection({ walletBalance }) {
  return (
    <>
      <WalletCard
        walletBalance={walletBalance}
      />
    </>
  );
}

export default WalletSection;
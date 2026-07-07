import { useContext } from "react";
import WalletContext from "../../../../context/WalletContext";

function RecentAction() {
  const { recentAction } = useContext(WalletContext);

  return (
    <>
      <h3>Recent Action</h3>

      <p>{recentAction}</p>

      <hr />
    </>
  );
}

export default RecentAction;
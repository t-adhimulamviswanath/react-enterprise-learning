import RecentAction from "./RecentAction/RecentAction";

function ActivitySection({ recentAction }) {
  return (
    <>
      <RecentAction
        recentAction={recentAction}
      />
    </>
  );
}

export default ActivitySection;
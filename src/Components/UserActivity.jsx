import review from "../assets/review.png";

const UserActivity = ({ activity }) => {
  return (
    <div className="transaction-activity">
      <div className="activity">
        <div className="recent">
        <div dangerouslySetInnerHTML={{ __html: activity.message }} />
          <div className="time">{activity.timestamp}</div>
        </div>
        <div className="review btn">
          Review <img src={review} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserActivity;

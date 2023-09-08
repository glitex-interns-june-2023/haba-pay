import review from "../assets/review.png";
import '../Styles/UserActivity.css';

const UserActivity = ({ activity }) => {
  return (
    <div className="transaction-activity">
      <div className="activity">
        <div className="recent">
        <div className="message" dangerouslySetInnerHTML={{ __html: activity.message }} />
          <div className="time">{activity.timestamp}</div>
        </div>
        <div className="review-btn">
          Review <span><img src={review} alt="" /></span>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;

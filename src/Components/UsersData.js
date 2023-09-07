import activity from '../assets/activity.png';
import React, { useEffect, useState } from "react";
import "../Styles/ManageUsers.css";
import axios from "../axios";
import ManageUser from "./ManageUser";
import UserActivity from "./UserActivity";


const UsersData = () => {
  const [data, setData] = useState([]);
  const [userActivities, setUserActivities] = useState([]);

  const fetchUserActivity = async (userId) => {
    try {
      const { data } = await axios.get(
        `/api/v1/admins/users/${userId}/activity`
      );
      const responseData = data.data;
      const activityData = responseData.data;
      setUserActivities((prevState) => [...prevState, ...activityData]);
    } catch ({ response: { data: error } = {} }) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/v1/admins/users");
        const responseData = result.data.data;
        setData(responseData);
      } catch ({ response: { data: error } = {} }) {
        console.log("Error getting users: ", error);
      }
    };

    fetchData();
  }, []);

  // checkbox change handler
  const handleCheckboxChange = (checked, userId) => {
    if (checked) {
      fetchUserActivity(userId);
    } else {
      const filteredActivities = userActivities.filter(
        (activity) => activity.user_id !== userId
      );
      setUserActivities(filteredActivities);
    }
  };

  return (
    <div style={{ position: "absolute", top: "30%", left: "23%" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Email</th>
            <th scope="col">Balance</th>
            <th scope="col">Status</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((user) => (
            <ManageUser
              key={user.id}
              user={user}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </tbody>
      </table>

      <div className="manage-activity">
        <h1>User Activity</h1>

        {userActivities.length > 0 ? (
          userActivities.map((activity) => (
            <UserActivity key={activity.id} activity={activity} />
          ))
        ) : (
          <div>
            <div className="activity-img">
              <img src={activity} alt="activity" />
              <h2>You haven't selected any users</h2>
            </div>
            <div className="activity-desc mt-4">
              <p>
                Please select a user from the table above or using search to
                view their activity here
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersData;

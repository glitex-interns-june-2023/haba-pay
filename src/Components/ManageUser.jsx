import manage from "../assets/manage.png";

const ManageUser = ({ user, onCheckboxChange }) => {
  const handleCheckboxChange = (e) => {
    onCheckboxChange(e.target.checked, user.id);
  };
  return (
    <tr>
      <th scope="row">
        <input type="checkbox" onChange={handleCheckboxChange} />
      </th>
      <td>{user.username}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>
        {user.currency} {user.balance}
      </td>
      <td>{user.status}</td>
      <td>
        <img src={manage} alt="" />
      </td>
    </tr>
  );
};

export default ManageUser;

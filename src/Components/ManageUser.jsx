import manage from "../assets/manage.png";

const ManageUser = ({ user, onCheckboxChange }) => {
  const handleCheckboxChange = (e) => {
    onCheckboxChange(e.target.checked, user.id);
  };
  return (
    <tr style={{fontSize: '16px', fontFamily: 'IBM Plex Sans', fontWeight: '400'}}>
      <th scope="row">
      &nbsp;&nbsp;<input type="checkbox" onChange={handleCheckboxChange} />
      </th>
      <td>&nbsp;&nbsp;&nbsp;{user.username}</td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.phone}</td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.email}</td>
      <td>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.currency} {user.balance}
      </td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.status}</td>
      <td>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={manage} alt="" />
      </td>
    </tr>
  );
};

export default ManageUser;

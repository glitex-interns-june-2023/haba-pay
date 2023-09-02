import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    window.location.href = '/Login';
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;

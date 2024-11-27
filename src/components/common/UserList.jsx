import React from "react";

const UserList = ({ users }) => {
  const userListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  const userCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  const userAvatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "12px",
  };

  const userDetailsStyle = {
    textAlign: "center",
  };

  const userNameStyle = {
    marginBottom: "8px",
    fontSize: "1.2rem",
  };

  const userInfoStyle = {
    margin: "4px 0",
    fontSize: "0.9rem",
    color: "#555",
  };

  if (!users || users.length === 0) {
    return <p>No users available.</p>;
  }

  return (
    <div style={userListStyle}>
      {users.map((user) => (
        <div style={userCardStyle} key={user.id}>
          <img
            src={user.avatar || "/src/images/defaultAvatar.jpg"}
            alt={`${user.fullname}'s avatar`}
            style={userAvatarStyle}
          />
          <div style={userDetailsStyle}>
            <h3 style={userNameStyle}>{user.fullname}</h3>
            <p style={userInfoStyle}>Email: {user.email}</p>
            <p style={userInfoStyle}>Role: {user.role}</p>
            <p style={userInfoStyle}>
              Joined: {new Date(user.dateJoined).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;

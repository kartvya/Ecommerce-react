import React from "react";
import { Boundary } from '@/components/common';
import { useSelector } from "react-redux";
import { selectFilter } from "@/selectors/selector";
import {
  useDocumentTitle,
  useScrollTop,
  useAllLoggedInUsers
} from "@/hooks";
import { UserList } from "@/components/common";



const Dashboard = () => {
  useDocumentTitle('User List');
  useScrollTop();
  const { loggedInUsers, isLoading, error } = useAllLoggedInUsers();

  const dashboardStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    marginBottom: "20px",
  };

  const errorStyle = {
    color: "red",
  };

  return (
    <Boundary>
      <div style={dashboardStyle}>
        <h2 style={headingStyle}>Users</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p style={errorStyle}>{error}</p>}
        {loggedInUsers && <UserList users={loggedInUsers} />}
      </div>
    </Boundary>
  );
};

export default Dashboard;

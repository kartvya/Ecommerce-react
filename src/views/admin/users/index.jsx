import React from "react";
import { Boundary } from '@/components/common';
import { useSelector } from "react-redux";
import { selectFilter } from "@/selectors/selector";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
  useAllLoggedInUsers
} from "@/hooks";

const Dashboard = () => {
  useDocumentTitle('User List');
  useScrollTop();
  const {
    loggedInUsers,
    fetchLoggedInUsers,
    isLoading,
    error,
  } = useAllLoggedInUsers()

  return (
    <Boundary>
      <div className="loader">
        <h2>Users</h2>
      </div>
      {/* <div className="product-admin-items">
        <UserList {...store}>
        </UserList>
      </div> */}
    </Boundary>
  );
};

export default Dashboard;

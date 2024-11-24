import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import { Boundary } from '@/components/common';
import { useSelector } from "react-redux";
import { selectFilter } from "@/selectors/selector";
import UsersTable from "../components/UsersTable";
import UserList from "@/components/user/UserList";

const Dashboard = () => {
  useDocumentTitle('User List');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredProducts: selectFilter(state.users.items, state.filter),
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading,
    users: state.users
  }));
  console.log(",,,,", store)

  return (
    <Boundary>
      {/* <div className="loader">
        <h2>Users</h2>
      </div> */}
      <div className="product-admin-items">
        <UserList {...store}>
          {/* <AppliedFilters filter={store.filter} /> */}
          <UsersTable filteredProducts={store.filteredProducts} />
        </UserList>
      </div>
    </Boundary>
  );
};

export default Dashboard;

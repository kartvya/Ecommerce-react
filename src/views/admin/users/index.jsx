import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import { Boundary } from '@/components/common';

const Dashboard = () => {
  useDocumentTitle('User List');
  useScrollTop();

  return (
    <Boundary>
      <div className="loader">
        <h2>Users</h2>
      </div>
    </Boundary>
  );
};

export default Dashboard;

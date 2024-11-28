import { useDocumentTitle, useScrollTop } from '@/hooks';
import React from 'react';

const Orders = () => {
  useDocumentTitle('Orders');
  useScrollTop();

  return (
    <div className="loader">
      <h2>Coming soon :)</h2>
    </div>
  );
};

export default Orders;

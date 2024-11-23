import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Electronic Ecommerce Store';
    }
  }, [title]);
};

export default useDocumentTitle;

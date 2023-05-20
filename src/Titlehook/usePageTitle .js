import { useEffect } from 'react';

const usePageTitle = title => {
  useEffect(() => {
    document.title = `Car Toy City | ${title}`;
  }, [title]);
};

export default usePageTitle;

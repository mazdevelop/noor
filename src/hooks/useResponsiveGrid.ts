import { useState, useEffect } from 'react';

interface UseResponsiveGridProps {
  isGridView: boolean;
}

export const useResponsiveGrid = ({ isGridView }: UseResponsiveGridProps) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) setItemsPerPage(isGridView ? 16 : 8);
      else if (window.innerWidth >= 1280) setItemsPerPage(isGridView ? 12 : 6);
      else if (window.innerWidth >= 1024) setItemsPerPage(isGridView ? 9 : 4);
      else if (window.innerWidth >= 768) setItemsPerPage(isGridView ? 6 : 3);
      else setItemsPerPage(isGridView ? 4 : 2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isGridView]);

  return itemsPerPage;
};
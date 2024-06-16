import { useCallback, useEffect, useRef, useState } from 'react';
import {
  calcInitialGrid,
  recalculateColumns,
  getPhotosDistributedByColumns,
} from '../../functions';
import { Photo } from '@/entities/photo';
import { utils } from '@/shared/utils';
import { GridColumns } from '../types/GridColumns';

export const useGalleryGrid = (photos: Photo[]) => {
  const columnsCount = useRef(calcInitialGrid(window.innerWidth));

  const [gridColumns, setGridColumns] = useState<GridColumns>(
    utils.createFilledArray(columnsCount.current, () => [])
  );

  const revalidateGrid = useCallback(
    async (photos: Photo[], columnsLength: number) => {
      if (columnsLength === 1) {
        setGridColumns([[...photos]]);
        return;
      }

      const newGridColumns = await getPhotosDistributedByColumns(
        photos,
        columnsLength
      );
      setGridColumns([...newGridColumns]);
    },
    []
  );

  const onGridChange = useCallback(
    (count: number) => {
      columnsCount.current = count;
      revalidateGrid(photos, count);
    },
    [revalidateGrid, photos]
  );

  useEffect(() => {
    revalidateGrid(photos, columnsCount.current);
  }, [photos, revalidateGrid]);

  const resizeHandler = useCallback(() => {
    const count = recalculateColumns(window.innerWidth, columnsCount.current);
    if (count) {
      columnsCount.current = count;
      revalidateGrid(photos, count);
    }
  }, [revalidateGrid, photos]);

  utils.useScreenResize(resizeHandler);

  return {
    gridColumns,
    changeGrid: onGridChange,
    columnsCount: columnsCount.current,
  };
};

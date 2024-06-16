import { GridColumns } from '../model';
import { preloadImages } from './preloadImages';
import { Photo } from '@/entities/photo';
import { utils } from '@/shared/utils';

export const getPhotosDistributedByColumns = async (
  photos: Photo[],
  columnsLength: number
) => {
  const columns: GridColumns = utils.createFilledArray(columnsLength, () => []);
  const gridColumnsHeights = columns.map(() => 0);
  const photosWithSize = await preloadImages(photos);

  for (const photo of photosWithSize) {
    const minColumnHeightIndex = gridColumnsHeights.indexOf(
      Math.min(...gridColumnsHeights)
    );
    gridColumnsHeights[minColumnHeightIndex] += photo.imageHeight;
    columns[minColumnHeightIndex].push(photo.photo);
  }

  return columns;
};

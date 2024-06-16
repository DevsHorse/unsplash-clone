import { useCallback, useEffect, useRef, useState } from 'react';
import { Photo } from '../model';

export const usePreparePhotos = (
  photosList: Photo[] | undefined,
  page: number | undefined
) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const hashSetRef = useRef<Set<string>>(new Set([]));

  const clearState = useCallback(() => {
    setPhotos([]);
    hashSetRef.current.clear();
  }, []);

  /**
   * @param photosArray - Array with duplicates
   * @return - Array filtered  from duplicates
   * @description Fixing a bug in the Unsplash API
   * (Pagination returns duplicates from previous pages)
   */
  const filterPhotos = (photosArray: Photo[]) => {
    const newPhotos: Photo[] = [];
    for (const photo of photosArray) {
      if (hashSetRef.current.has(photo.id)) {
        continue;
      }
      hashSetRef.current.add(photo.id);
      newPhotos.push(photo);
    }
    return newPhotos;
  };

  useEffect(() => {
    const isNewLoad = page === 1 && hashSetRef.current.size !== 0;
    if (isNewLoad) {
      clearState();
    }
    if (photosList) {
      const newPhotos: Photo[] = filterPhotos(photosList);
      setPhotos((prev) => [...prev, ...newPhotos]);
    }
  }, [photosList, page, clearState]);

  return {
    clearState,
    photos,
  };
};

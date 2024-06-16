import { Photo } from '@/entities/photo';

export const preloadImages = async (
  photos: Photo[]
): Promise<{ photo: Photo; imageHeight: number }[]> => {
  const promises = photos.map(async (photo) => {
    const img = new Image();
    img.src = photo.urls.small;
    await img.decode();
    return { photo, imageHeight: img.height };
  });

  return await Promise.all(promises);
};

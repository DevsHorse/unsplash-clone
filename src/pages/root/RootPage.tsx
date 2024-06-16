import { useCallback, useState } from 'react';
import styles from './RootPage.module.css';
import { Gallery } from '@/widgets/gallery';
import { SearchBar } from '@/features/searchBar';
import { useGetAllPhotosQuery, usePreparePhotos } from '@/entities/photo';
import { LoadMoreButton } from '@/shared/ui/LoadMoreButton';
import { PageContentLayout } from '@/shared/layouts/PageContentLayout';

const RootPage = () => {
  const [page, setPage] = useState(1);
  const { data: photosData, isFetching } = useGetAllPhotosQuery({ page: page });
  const { photos } = usePreparePhotos(photosData, page);

  const loadMoreAction = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  return (
    <PageContentLayout>
      <div className={styles.root}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Unplash Clone</h1>
          <div className={styles.description}>
            The internet’s source for visuals. Powered by creators everywhere.
          </div>
          <SearchBar className={styles.searchBar} />
        </div>
        <Gallery
          photos={photos}
          bottomSlot={
            <LoadMoreButton
              disabled={isFetching}
              isLoading={isFetching}
              onClick={loadMoreAction}
            />
          }
        />
      </div>
    </PageContentLayout>
  );
};

export default RootPage;

import { useCallback, useEffect, useMemo } from 'react';
import cs from 'classnames';
import styles from './SearchPage.module.css';
import { ContentLayout } from '../ContentLayout';
import { Gallery } from '@/widgets/gallery';
import { usePreparePhotos, useSearchPhotosQuery } from '@/entities/photo';
import { Loader } from '@/shared/ui/Loader';
import { PageContentLayout } from '@/shared/layouts/PageContentLayout';
import { useSearchContext } from '@/shared/contexts/Search';
import { LoadMoreButton } from '@/shared/ui/LoadMoreButton';

const SearchPage = () => {
  const { query, page, setPage, clearSearch } = useSearchContext();

  const {
    data: photosData,
    isFetching,
    isLoading,
  } = useSearchPhotosQuery(
    {
      query: query,
      page: page,
    },
    { skip: !query }
  );

  const { photos } = usePreparePhotos(photosData?.photos, page);

  useEffect(() => {
    return () => {
      clearSearch();
    };
  }, [clearSearch]);

  const loadMoreAction = useCallback(() => {
    setPage((prev) => prev + 1);
  }, [setPage]);

  const isLoadMoreDisabled = useMemo(() => {
    return isFetching || (photosData && photosData.total_pages === page);
  }, [isFetching, page, photosData]);

  return (
    <PageContentLayout>
      <ContentLayout
        isLoading={isLoading}
        dataExists={Boolean(photos.length)}
        currentPage={page}
        loaderSlot={
          <div className={styles.container}>
            <Loader />
          </div>
        }
        notFoundSlot={
          <div className={cs(styles.emptyTitle, styles.container)}>
            <div>No search results</div>
          </div>
        }
      >
        <Gallery
          photos={photos}
          bottomSlot={
            <LoadMoreButton
              disabled={isLoadMoreDisabled}
              isLoading={isFetching}
              onClick={loadMoreAction}
            />
          }
        />
      </ContentLayout>
    </PageContentLayout>
  );
};

export default SearchPage;

import { useParams } from 'react-router-dom';
import styles from './PhotoDetailsPage.module.css';
import { PhotoInfo } from '@/widgets/photoInfo';
import { useGetDetailsPhotoQuery } from '@/entities/photo';
import { PageContentLayout } from '@/shared/layouts/PageContentLayout';

const PhotoDetailsPage = () => {
  const params = useParams();

  const { data: photo } = useGetDetailsPhotoQuery(
    { id: params.id || '' },
    { skip: !params.id }
  );

  return (
    <PageContentLayout>
      <div className={styles.root}>
        <div className={styles.imageContainer}>
          <img
            src={photo?.urls.regular}
            alt={photo?.alt_description}
            loading='lazy'
          />
        </div>
        {!!photo && <PhotoInfo photo={photo} />}
      </div>
    </PageContentLayout>
  );
};

export default PhotoDetailsPage;

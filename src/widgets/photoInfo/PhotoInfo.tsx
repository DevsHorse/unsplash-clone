import { FC, useMemo } from 'react';
import moment from 'moment';
import styles from './PhotoInfo.module.css';
import { SearchableTag } from '@/features/searchableTag';
import { DetailsPhoto } from '@/entities/photo';
import { UserTile } from '@/entities/user';
import { MetricsList } from '@/shared/ui/MetricsList';

type PropsType = {
  photo: DetailsPhoto;
};

const PhotoInfo: FC<PropsType> = ({ photo }) => {
  const metricsList = useMemo(() => {
    return [
      { title: 'Likes', count: photo.likes },
      { title: 'Views', count: photo.views },
      { title: 'Downloads', count: photo.downloads },
    ].filter((item) => !!item.count);
  }, [photo.likes, photo.downloads, photo.views]);

  return (
    <div className={styles.root}>
      <div className={styles.userInfo}>
        <UserTile
          name={photo.user.name}
          imageUrl={photo.user.profile_image.medium}
          userLink={photo.user.links.html}
        />
        {photo.user.bio && <div>{photo.user.bio}</div>}
      </div>

      <div className={styles.photoInfo}>
        {photo.description && (
          <div className={styles.description}>{photo.description}</div>
        )}
        <div className={styles.date}>
          Published on {moment(photo?.created_at).format('MMMM DD, YYYY')}
        </div>
      </div>

      <MetricsList metrics={metricsList} />

      <div className={styles.tags}>
        {photo.tags.map((tag) => (
          <SearchableTag key={tag.title} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default PhotoInfo;

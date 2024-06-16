import { FC, HTMLAttributes } from 'react';
import cs from 'classnames';
import styles from './PhotoCard.module.css';
import { Photo } from '../../model';
import { UserTile } from '@/entities/user/@x/photo';

type PropsType = {
  photo: Photo;
} & HTMLAttributes<HTMLDivElement>;

const PhotoCard: FC<PropsType> = ({ photo, className, ...props }) => {
  return (
    <div className={cs(styles.root, className)} {...props}>
      <img src={photo.urls.small} alt={photo.alt_description} loading='lazy' />
      <div className={styles.hoverContent}>
        <div className={styles.background} />
        <UserTile
          className={styles.userTile}
          onClick={(e) => e.stopPropagation()}
          name={photo.user.name}
          imageUrl={photo.user.profile_image.medium}
          userLink={photo.user.links.html}
        />
      </div>
    </div>
  );
};

export default PhotoCard;

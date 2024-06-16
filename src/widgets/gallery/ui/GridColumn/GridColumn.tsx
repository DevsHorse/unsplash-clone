import { FC, HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GridColumn.module.css';
import cs from 'classnames';
import { Photo, PhotoCard } from '@/entities/photo';
import { getPhotoDetailsRoute, withRootRoute } from '@/shared/const/router';

type PropsType = {
  column: Photo[];
} & HTMLAttributes<HTMLDivElement>;

const GridColumn: FC<PropsType> = ({ column, className, ...props }) => {
  const navigate = useNavigate();

  return (
    <div className={cs(styles.root, className)} {...props}>
      {column.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          onClick={() =>
            navigate(withRootRoute(getPhotoDetailsRoute(photo.id)))
          }
        />
      ))}
    </div>
  );
};

export default GridColumn;

import { FC, ReactElement } from 'react';
import styles from './Gallery.module.css';
import { useGalleryGrid } from '../../model';
import { Grid } from '../Grid';
import { SwitchGridButton } from '../SwitchGridButton';
import { Photo } from '@/entities/photo';

type PropsType = {
  photos: Photo[];
  bottomSlot?: ReactElement;
};

const Gallery: FC<PropsType> = ({ photos, bottomSlot }) => {
  const { gridColumns, columnsCount, changeGrid } = useGalleryGrid(photos);

  return (
    <div className={styles.root}>
      <div className={styles.gridButtons}>
        <SwitchGridButton
          isActive={columnsCount === 3}
          onClick={() => changeGrid(3)}
        >
          |||
        </SwitchGridButton>
        <SwitchGridButton
          isActive={columnsCount === 5}
          onClick={() => changeGrid(5)}
        >
          |||||
        </SwitchGridButton>
      </div>
      <Grid gridColumns={gridColumns} columnsCount={columnsCount} />
      {bottomSlot}
    </div>
  );
};

export default Gallery;

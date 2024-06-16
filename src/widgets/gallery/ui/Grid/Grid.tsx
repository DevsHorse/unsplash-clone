import { FC, memo } from 'react';
import { GridColumns } from '../../model';
import styles from './Grid.module.css';
import { GridColumn } from '../GridColumn';

type PropsType = {
  gridColumns: GridColumns;
  columnsCount: number;
};

const Grid: FC<PropsType> = memo(({ gridColumns, columnsCount }) => {
  return (
    <div className={styles.grid} style={{ '--cols': columnsCount }}>
      {gridColumns.map((column, index) => (
        <GridColumn key={index} className={styles.gridColumn} column={column} />
      ))}
    </div>
  );
});

export default Grid;

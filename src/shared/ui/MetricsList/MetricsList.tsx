import { FC } from 'react';
import styles from './MetricsList.module.css';
import { Metric } from '@/shared/ui/Metric';

type PropsType = {
  metrics: {
    title: string;
    count: string | number;
  }[];
};

const MetricsList: FC<PropsType> = ({ metrics }) => {
  return (
    <>
      {!!metrics.length && (
        <div className={styles.root}>
          {metrics.map((metric) => (
            <Metric
              key={metric.title}
              title={metric.title}
              count={metric.count}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MetricsList;

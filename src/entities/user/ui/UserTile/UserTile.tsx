import { FC, HTMLAttributes } from 'react';
import cs from 'classnames';
import styles from './UserTile.module.css';

type PropsType = {
  imageUrl?: Url;
  userLink?: Url;
  name?: string;
} & HTMLAttributes<HTMLDivElement>;

const UserTile: FC<PropsType> = ({
  imageUrl,
  userLink,
  name,
  className,
  ...props
}) => {
  return (
    <div className={cs(styles.author, className)} {...props}>
      <div className={styles.authorAvatar} data-name='avatar'>
        <img src={imageUrl} alt={name} loading='lazy' />
      </div>
      <div className={styles.authorName} data-name='name'>
        <a href={userLink} target='_blank' onClick={(e) => e.stopPropagation()}>
          {name}
        </a>
      </div>
    </div>
  );
};

export default UserTile;

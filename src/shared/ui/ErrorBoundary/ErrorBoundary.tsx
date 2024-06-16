import { useNavigate, useRouteError } from 'react-router-dom';
import styles from './ErrorBoundary.module.css';
import { Button } from '@/shared/ui/Button';
import { getRootRoute } from '@/shared/const/router';

const ErrorBoundary = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.root}>
      <div className={styles.title}>Something went wrong...</div>
      <Button onClick={() => navigate(getRootRoute())}>Go home</Button>
    </div>
  );
};

export default ErrorBoundary;

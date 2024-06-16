import { RouterProvider } from 'react-router-dom';
import { router } from '../../config';

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

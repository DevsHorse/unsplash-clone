import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {
  getPhotoDetailsRoute,
  getRootRoute,
  getSearchRoute,
} from '@/shared/const/router';
import { utils } from '@/shared/utils';
import { appLayout } from '@/app/layouts/appLayout';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';

const NotFoundPage = utils.componentLazyLoad(() => import('@/pages/notFound'));
const RootPage = utils.componentLazyLoad(() => import('@/pages/root'));
const SearchPage = utils.componentLazyLoad(() => import('@/pages/search'));
const PhotoDetailsPage = utils.componentLazyLoad(
  () => import('@/pages/photoDetails')
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={getRootRoute()}
      element={appLayout}
      errorElement={<ErrorBoundary />}
    >
      <Route index lazy={RootPage} />
      <Route path={getSearchRoute()} lazy={SearchPage} />
      <Route path={getPhotoDetailsRoute(':id')} lazy={PhotoDetailsPage} />
      <Route path='*' lazy={NotFoundPage} />
    </Route>
  )
);

export default router;

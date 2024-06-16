import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { DefaultLayout } from '@/shared/layouts/DefaultLayout';

export const appLayout = (
  <DefaultLayout headerSlot={<Header />} contentSlot={<Outlet />} />
);

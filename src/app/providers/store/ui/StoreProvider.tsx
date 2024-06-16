import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { appStore } from '../config';

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={appStore}>{children}</Provider>;
};

export default StoreProvider;

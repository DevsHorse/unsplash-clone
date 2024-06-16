import { FC } from 'react';

const componentLazyLoad = (importFunction: () => Promise<{ default: FC }>) => {
  return async (): Promise<{ Component: FC }> => {
    const data: { default: FC } = await importFunction();
    return { Component: data.default };
  };
};

export default componentLazyLoad;

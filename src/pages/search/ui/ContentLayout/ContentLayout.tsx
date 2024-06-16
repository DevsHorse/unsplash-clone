import { FC, PropsWithChildren, ReactElement } from 'react';

type PropsType = {
  isLoading: boolean;
  dataExists: boolean;
  currentPage: number;
  loaderSlot: ReactElement;
  notFoundSlot: ReactElement;
} & PropsWithChildren;

const ContentLayout: FC<PropsType> = ({
  isLoading,
  dataExists,
  currentPage,
  loaderSlot,
  notFoundSlot,
  children,
}) => {
  return (
    <>
      {isLoading && loaderSlot}
      {!dataExists && !isLoading && notFoundSlot}
      {currentPage !== 1 ? children : !isLoading && dataExists && children}
    </>
  );
};

export default ContentLayout;

export const getRootRoute = () => '/';
export const withRootRoute = (route: string) => `${getRootRoute()}${route}`;
export const getPhotoDetailsRoute = (id: string) => `photo/${id}`;
export const getSearchRoute = () => 'search';

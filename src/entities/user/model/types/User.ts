export type User = {
  id: Id;
  name: string;
  bio: string | null;
  profile_image: {
    large: Url;
    medium: Url;
    small: Url;
  };
  links: {
    html: Url;
  };
};

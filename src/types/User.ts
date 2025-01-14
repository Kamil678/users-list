export interface User {
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    username: string;
  };
  location: {
    country: string;
  };
  nat: string;
  registered: {
    date: string;
  };
}

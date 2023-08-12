export type UserData = {
  userName: string;
  password: string;
  email?: string;
  phoneNumber?: string;
};

export type authState = {
  userData: UserData;
  isLoggedIn: boolean;
  watchList: any[];
  favourites: any[];
};

import AsyncStorage from '@react-native-async-storage/async-storage';
import resources from '../resources';

export const clearAsync = async () => {
  await AsyncStorage.clear();
};

export const setIsUserLogged = async () => {
  await AsyncStorage.setItem(
    resources.asyncConstants.ISLOGGED,
    JSON.stringify(true),
  );
};

export const getIsUserLoggedStatus = async () => {
  const res = await AsyncStorage.getItem(resources.asyncConstants.ISLOGGED);
  const parsedRes = JSON.parse(res == null ? 'null' : res);

  if (parsedRes !== null) {
    return parsedRes;
  }
};

export const setUserDataToAsync = async (data: any) => {
  await AsyncStorage.setItem(
    resources.asyncConstants.USERDATA,
    JSON.stringify(data),
  );
};

export const getUserDataFromAsync = async () => {
  const res = await AsyncStorage.getItem(resources.asyncConstants.USERDATA);
  const parsedRes = JSON.parse(res == null ? 'null' : res);

  if (parsedRes !== null) {
    return parsedRes;
  }
};

export const setUserWatchList = async (item: any) => {
  const res = await AsyncStorage.getItem(resources.asyncConstants.WATCHLIST);
  const parsedRes = JSON.parse(res == null ? 'null' : res);

  if (parsedRes == null) {
    const list = [];
    list.push(item);

    await AsyncStorage.setItem(
      resources.asyncConstants.WATCHLIST,
      JSON.stringify(list),
    );
  } else {
    var list = parsedRes;
    list?.push(item);

    await AsyncStorage.setItem(
      resources.asyncConstants.WATCHLIST,
      JSON.stringify(list),
    );
  }
};

export const getUserWatchList = async () => {
  const res = await AsyncStorage.getItem(resources.asyncConstants.WATCHLIST);
  const parsedRes = JSON.parse(res == null ? 'null' : res);

  if (parsedRes !== null) {
    return parsedRes;
  } else {
    return [];
  }
};

export const setUserFavourite = async (item: any) => {
  const res = await AsyncStorage.getItem(resources.asyncConstants.FAVOURITES);
  const parsedRes = JSON.parse(res == null ? 'null' : res);

  if (parsedRes == null) {
    const list = [];
    list.push(item);

    await AsyncStorage.setItem(
      resources.asyncConstants.FAVOURITES,
      JSON.stringify(list),
    );
  } else {
    var list = parsedRes;
    list?.push(item);

    await AsyncStorage.setItem(
      resources.asyncConstants.FAVOURITES,
      JSON.stringify(list),
    );
  }
};

export const getUserFavourite = async () => {
  const res = await AsyncStorage.getItem(resources.asyncConstants.FAVOURITES);
  const parsedRes = JSON.parse(res == null ? 'null' : res);

  if (parsedRes !== null) {
    return parsedRes;
  } else {
    return [];
  }
};

export const getIconName = (key: string, isFocused: boolean) => {
  switch (key) {
    case 'Home':
      return isFocused ? 'home' : 'home-outline';

    case 'Favourites':
      return isFocused ? 'heart' : 'heart-outline';

    default:
      break;
  }
};

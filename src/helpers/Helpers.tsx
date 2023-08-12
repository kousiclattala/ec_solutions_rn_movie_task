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

export const emailValidation = (email: string) => {
  const exp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return exp.test(email);
};

export const passwordValidator = (password: string) => {
  const exp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  return exp.test(password);
};

import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  BackHandler,
} from 'react-native';
import resources from '../../resources';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInputBox from '../../components/TextInputBox';
import {useAppDispatch} from '../../redux/hooks';
import {setIsUserLogged, setUserDataToAsync} from '../../helpers/AsyncHelper';
import {setIsLoggedIn, setUserData} from '../../redux/authSlice';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {compositeProps} from '../../navigators/types';
import {passwordValidator} from '../../helpers/Helpers';

const Signin = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<compositeProps>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          navigation.navigate('Home');

          return true;
        },
      );

      return () => {
        backHandler.remove();
      };
    }, []),
  );

  const _validateFields = () => {
    var isEmailValid = username.length > 0 ? true : false;
    var isPasswordValid = password.length > 0 ? true : false;

    if (isEmailValid && isPasswordValid) {
      setIsUsernameError(false);
      setIsPasswordError(false);
      handleLogin();
    } else {
      setIsUsernameError(!isEmailValid);
      setIsPasswordError(!isPasswordValid);
    }
  };

  const handleLogin = () => {
    const data = {
      userName: username,
      password: password,
    };

    setIsUserLogged();
    setUserDataToAsync(data);
    dispatch(setIsLoggedIn(true));
    dispatch(setUserData(data));

    navigation.navigate('Home');
  };

  return (
    <View
      style={{
        marginTop: hp('2%'),
      }}>
      <TextInputBox
        label="Username"
        placeholder="Username"
        value={username}
        onChangeText={val => {
          setUsername(val);

          if (val.length < 3) {
            setIsUsernameError(true);
          } else {
            setIsUsernameError(false);
          }
        }}
        isSecure={false}
        isError={isUsernameError}
      />
      {isUsernameError && username.length == 0 && (
        <Text style={styles.errorText}>Please enter value</Text>
      )}

      {isUsernameError && username.length > 0 && username.length < 3 && (
        <Text style={styles.errorText}>
          Username must be of 3 characters long
        </Text>
      )}
      <TextInputBox
        label="Password"
        placeholder="Password"
        value={password}
        onChangeText={val => {
          setPassword(val);

          if (passwordValidator(val) == false) {
            setIsPasswordError(true);
          } else {
            setIsPasswordError(false);
          }
        }}
        isSecure={true}
        isError={isPasswordError}
      />
      {isPasswordError && password.length == 0 && (
        <Text style={styles.errorText}>Please enter value</Text>
      )}

      {isPasswordError &&
        password.length > 0 &&
        passwordValidator(password) == false && (
          <Text style={styles.errorText}>
            Password must contain 6 characters, one Uppercase letter, one
            Lowercase letter, one Special Character, one number
          </Text>
        )}

      <Text style={styles.forgotText}>Forgot Password</Text>

      <Pressable style={styles.loginBtn} onPress={_validateFields}>
        <Text style={styles.btnText}>Login</Text>
      </Pressable>

      <Text style={styles.dontAccnt}>
        Don't have an account?,{' '}
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          Register
        </Text>{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    width: wp('90%'),
    height: hp('7%'),
    marginHorizontal: wp('5%'),
    backgroundColor: resources.colors.primary,
    borderRadius: 10,
    marginTop: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: resources.colors.white,
    fontSize: hp('2%'),
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  forgotText: {
    color: resources.colors.primary,
    fontSize: hp('2%'),
    fontWeight: '300',
    letterSpacing: 0.6,
    alignSelf: 'flex-end',
    marginRight: wp('5%'),
    marginTop: hp('2%'),
  },
  dontAccnt: {
    color: resources.colors.primary,
    fontSize: hp('2%'),
    fontWeight: '300',
    letterSpacing: 0.6,
    alignSelf: 'center',
    marginTop: hp('4%'),
  },
  errorText: {
    color: resources.colors.red,
    fontSize: hp('2%'),
    fontWeight: '300',
    letterSpacing: 0.5,
    marginTop: hp('1%'),
    marginLeft: wp('5%'),
  },
});

export default Signin;

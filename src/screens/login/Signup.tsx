import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  BackHandler,
} from 'react-native';
import resources from '../../resources';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInputBox from '../../components/TextInputBox';
import {setIsUserLogged, setUserDataToAsync} from '../../helpers/AsyncHelper';
import {setIsLoggedIn, setUserData} from '../../redux/authSlice';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {compositeProps} from '../../navigators/types';
import {useAppDispatch} from '../../redux/hooks';
import {emailValidation, passwordValidator} from '../../helpers/Helpers';

const Signup = () => {
  const navigation = useNavigation<compositeProps>();
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [confError, setConfError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

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
    var isUserNameValid = username.length > 0 ? true : false;
    var isEmailValid = email.length > 0 ? true : false;
    var isPasswordValid = password.length > 0 ? true : false;
    var isConfValid = confirmPassword.length > 0 ? true : false;
    var isPhoneValid = phoneNumber.length > 0 ? true : false;

    if (
      isUserNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfValid &&
      isPhoneValid
    ) {
      setUserNameError(false);
      setEmailError(false);
      setPassError(false);
      setConfError(false);
      setPhoneError(false);

      handleSignup();
    } else {
      setUserNameError(!isUserNameValid);
      setEmailError(!isEmailValid);
      setPassError(!isPasswordValid);
      setConfError(!isConfValid);
      setPhoneError(!isPhoneValid);
    }
  };

  const handleSignup = () => {
    const data = {
      userName: username,
      password: password,
      email: email,
      phoneNumber: phoneNumber,
    };

    setIsUserLogged();
    setUserDataToAsync(data);
    dispatch(setIsLoggedIn(true));
    dispatch(setUserData(data));

    navigation.navigate('Home');
  };

  return (
    <ScrollView>
      <View
        style={{
          marginTop: hp('2%'),
          marginBottom: hp('5%'),
        }}>
        <TextInputBox
          label="Username"
          placeholder="Username"
          value={username}
          onChangeText={val => {
            setUsername(val);

            if (val.length < 3) {
              setUserNameError(true);
            } else {
              setUserNameError(false);
            }
          }}
          isError={userNameError}
          isSecure={false}
        />
        {userNameError && username.length == 0 && (
          <Text style={styles.errorText}>Please enter value</Text>
        )}
        {userNameError && username.length > 0 && username.length < 3 && (
          <Text style={styles.errorText}>
            Username must be 3 characters long
          </Text>
        )}

        <TextInputBox
          label="Email"
          placeholder="Email"
          value={email}
          onChangeText={val => {
            setEmail(val);

            if (emailValidation(val) == false) {
              setEmailError(true);
            } else {
              setEmailError(false);
            }
          }}
          isError={emailError}
          isSecure={false}
        />
        {emailError && email.length == 0 && (
          <Text style={styles.errorText}>Please enter value</Text>
        )}
        {emailError && email.length > 0 && emailValidation(email) == false && (
          <Text style={styles.errorText}>Please enter valid email</Text>
        )}

        <TextInputBox
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={val => {
            setPassword(val);

            if (passwordValidator(val) == false) {
              setPassError(true);
            } else {
              setPassError(false);
            }
          }}
          isError={passError}
          isSecure={true}
        />
        {passError && password.length == 0 && (
          <Text style={styles.errorText}>Please enter value</Text>
        )}
        {passError &&
          password.length > 0 &&
          passwordValidator(password) == false && (
            <Text style={styles.errorText}>
              Password must contain 6 characters, one Uppercase letter, one
              Lowercase letter, one Special Character, one number
            </Text>
          )}

        <TextInputBox
          label="Confirm Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={val => {
            setConfirmPassword(val);

            if (passwordValidator(val) == false) {
              setConfError(true);
            } else {
              setConfError(false);
            }
          }}
          isError={confError}
          isSecure={true}
        />
        {confError && confirmPassword.length == 0 && (
          <Text style={styles.errorText}>Please enter value</Text>
        )}
        {confError &&
          confirmPassword.length > 0 &&
          passwordValidator(confirmPassword) == false && (
            <Text style={styles.errorText}>
              Password must contain 6 characters, one Uppercase letter, one
              Lowercase letter, one Special Character, one number
            </Text>
          )}

        <TextInputBox
          label="Phone number"
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={val => {
            setPhoneNumber(val);

            if (val.length < 10) {
              setPhoneError(true);
            } else {
              setPhoneError(false);
            }
          }}
          isError={phoneError}
          isSecure={false}
        />
        {phoneError && phoneNumber.length == 0 && (
          <Text style={styles.errorText}>Please enter value</Text>
        )}
        {phoneError && phoneNumber.length > 0 && phoneNumber.length < 10 && (
          <Text style={styles.errorText}>
            Phone number must contain 10 characters
          </Text>
        )}

        <Pressable style={styles.loginBtn} onPress={_validateFields}>
          <Text style={styles.btnText}>Register</Text>
        </Pressable>

        <Text style={styles.dontAccnt}>
          Already have an account?,{' '}
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            Login
          </Text>{' '}
        </Text>
      </View>
    </ScrollView>
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

export default Signup;

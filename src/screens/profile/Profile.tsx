import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import resources from '../../resources';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInputBox from '../../components/TextInputBox';
import Header from '../../components/Header';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {compositeProps} from '../../navigators/types';
import {reset} from '../../redux/authSlice';
import {clearAsync} from '../../helpers/AsyncHelper';

const Profile = () => {
  const dispatch = useAppDispatch();
  const {isLoggedIn, userData} = useAppSelector(state => state.auth);
  const navigation = useNavigation<compositeProps>();

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

  const _setUser = () => {
    setUsername(userData.userName);
    setEmail(userData.email == undefined ? '' : userData.email);
    setPassword(userData.password == undefined ? '' : userData.password);
    setConfirmPassword(userData.password == undefined ? '' : userData.password);
    setPhoneNumber(
      userData.phoneNumber == undefined ? '' : userData.phoneNumber,
    );
  };

  useEffect(() => {
    _setUser();
  }, []);

  const _handleLogout = async () => {
    dispatch(reset());

    clearAsync();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: resources.colors.background,
      }}>
      <Header />
      {!isLoggedIn ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: resources.colors.primary,
              fontSize: hp('2%'),
              fontWeight: '300',
              letterSpacing: 0.6,
            }}>
            Login to view profile
          </Text>
          <Pressable
            style={{
              width: wp('70%'),
              height: hp('7%'),
              backgroundColor: resources.colors.primary,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: hp('2%'),
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                color: resources.colors.white,
                fontSize: hp('2%'),
                fontWeight: '700',
                letterSpacing: 0.6,
              }}>
              Login
            </Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView>
          <View
            style={{
              marginBottom: hp('5%'),
            }}>
            <TextInputBox
              label="Username"
              placeholder="Username"
              value={username}
              onChangeText={val => setUsername(val)}
              isError={userNameError}
              isSecure={false}
            />
            {userNameError && (
              <Text style={styles.errorText}>Please enter value</Text>
            )}

            <TextInputBox
              label="Email"
              placeholder="Email"
              value={email}
              onChangeText={val => setEmail(val)}
              isError={emailError}
              isSecure={false}
            />
            {emailError && (
              <Text style={styles.errorText}>Please enter value</Text>
            )}

            <TextInputBox
              label="Password"
              placeholder="Password"
              value={password}
              onChangeText={val => setPassword(val)}
              isError={passError}
              isSecure={true}
            />
            {passError && (
              <Text style={styles.errorText}>Please enter value</Text>
            )}

            <TextInputBox
              label="Confirm Password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={val => setConfirmPassword(val)}
              isError={confError}
              isSecure={true}
            />
            {confError && (
              <Text style={styles.errorText}>Please enter value</Text>
            )}

            <TextInputBox
              label="Phone number"
              placeholder="Phone number"
              value={phoneNumber}
              onChangeText={val => setPhoneNumber(val)}
              isError={phoneError}
              isSecure={false}
            />
            {phoneError && (
              <Text style={styles.errorText}>Please enter value</Text>
            )}

            <Pressable style={styles.loginBtn} onPress={_handleLogout}>
              <Text style={styles.btnText}>Logout</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
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

export default Profile;

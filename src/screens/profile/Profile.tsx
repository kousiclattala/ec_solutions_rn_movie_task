import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import resources from '../../resources';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInputBox from '../../components/TextInputBox';
import Header from '../../components/Header';

const Profile = () => {
  const [username, setUsername] = useState('Kousic');
  const [email, setEmail] = useState('kousic@gmail.com');
  const [password, setPassword] = useState('Kousic@123');
  const [confirmPassword, setConfirmPassword] = useState('Kousic@123');
  const [phoneNumber, setPhoneNumber] = useState('9999999999');

  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [confError, setConfError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

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
    } else {
      setUserNameError(!isUserNameValid);
      setEmailError(!isEmailValid);
      setPassError(!isPasswordValid);
      setConfError(!isConfValid);
      setPhoneError(!isPhoneValid);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: resources.colors.background,
      }}>
      <Header />
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

          <Pressable style={styles.loginBtn} onPress={_validateFields}>
            <Text style={styles.btnText}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
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
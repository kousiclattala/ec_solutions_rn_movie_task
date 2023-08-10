import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import resources from '../../resources';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInputBox from '../../components/TextInputBox';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const _validateFields = () => {
    var isEmailValid = email.length > 0 ? true : false;
    var isPasswordValid = password.length > 0 ? true : false;

    if (isEmailValid && isPasswordValid) {
      setIsEmailError(false);
      setIsPasswordError(false);
    } else {
      setIsEmailError(!isEmailValid);
      setIsPasswordError(!isPasswordValid);
    }
  };

  return (
    <View
      style={{
        marginTop: hp('2%'),
      }}>
      <TextInputBox
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={val => setEmail(val)}
        isSecure={false}
        isError={isEmailError}
      />
      {isEmailError && <Text style={styles.errorText}>Please enter value</Text>}
      <TextInputBox
        label="Password"
        placeholder="Password"
        value={password}
        onChangeText={val => setPassword(val)}
        isSecure={true}
        isError={isPasswordError}
      />
      {isPasswordError && (
        <Text style={styles.errorText}>Please enter value</Text>
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

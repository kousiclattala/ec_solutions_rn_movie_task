import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import resources from '../../resources';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Signin from './Signin';
import Signup from './Signup';

const Login = () => {
  const [selected, setSelected] = useState('login');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: resources.colors.background,
      }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
          }}>
          <Image source={resources.images.logo} style={styles.image} />

          <View style={styles.optionContainer}>
            <Pressable
              style={[
                styles.option,
                {
                  backgroundColor:
                    selected == 'login'
                      ? resources.colors.primary
                      : 'transparent',
                },
              ]}
              onPress={() => {
                setSelected('login');
              }}>
              <Text
                style={[
                  styles.optionText,
                  {
                    color:
                      selected == 'login'
                        ? resources.colors.white
                        : resources.colors.primary,
                    opacity: selected == 'login' ? 1 : 0.35,
                  },
                ]}>
                Login
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.option,
                {
                  backgroundColor:
                    selected == 'register'
                      ? resources.colors.primary
                      : 'transparent',
                },
              ]}
              onPress={() => {
                setSelected('register');
              }}>
              <Text
                style={[
                  styles.optionText,
                  {
                    color:
                      selected == 'register'
                        ? resources.colors.white
                        : resources.colors.primary,
                    opacity: selected == 'register' ? 1 : 0.35,
                  },
                ]}>
                Register
              </Text>
            </Pressable>
          </View>

          {selected == 'login' ? <Signin /> : <Signup />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  optionContainer: {
    width: wp('80%'),
    height: hp('7%'),
    backgroundColor: resources.colors.light_shadow,
    marginHorizontal: wp('10%'),
    borderRadius: 50,
    marginTop: hp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    width: wp('39%'),
    height: hp('6%'),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: hp('2%'),
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});

export default Login;

import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import resources from '../resources';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useAppSelector} from '../redux/hooks';

const Header = () => {
  const {isLoggedIn, userData} = useAppSelector(state => state.auth);

  return (
    <View>
      <StatusBar backgroundColor={resources.colors.primary} />
      <View
        style={{
          width: wp('100%'),
          height: hp('10%'),
          backgroundColor: resources.colors.primary,
          elevation: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: resources.colors.white,
            fontSize: hp('2%'),
            fontWeight: '500',
            letterSpacing: 0.6,
            paddingLeft: wp('5%'),
          }}>
          {isLoggedIn ? `Hello ${userData.userName}` : 'Hello'}
        </Text>
      </View>
    </View>
  );
};

export default Header;

import {View, Text} from 'react-native';
import React from 'react';
import {
  FavouriteRenderProps,
  TrendingRenderProps,
  WatchRenderProps,
} from '../../types/types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import resources from '../../resources';

const WatchRender: React.FC<WatchRenderProps> = ({item, index}) => {
  return (
    <View
      style={{
        marginHorizontal: wp('2.5%'),
        marginBottom: hp('2%'),
      }}>
      <View
        key={index}
        style={{
          width: wp('45%'),
          height: hp('30%'),
          backgroundColor: resources.colors.white,
          borderRadius: 10,
        }}></View>
      <Text
        style={{
          color: resources.colors.primary,
          fontSize: hp('1.6%'),
          fontWeight: '300',
          letterSpacing: 0.6,
          marginTop: hp('1%'),
          alignSelf: 'center',
        }}>
        Movie
      </Text>
    </View>
  );
};

export default WatchRender;

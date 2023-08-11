import {View, Text} from 'react-native';
import React from 'react';
import {TrendingRenderProps} from '../../types/types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import resources from '../../resources';

const TrendingRender: React.FC<TrendingRenderProps> = ({item, index}) => {
  return (
    <View>
      <View
        key={index}
        style={{
          width: wp('40%'),
          height: hp('30%'),
          backgroundColor: resources.colors.white,
          borderRadius: 10,
          marginRight: wp('4%'),
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

export default TrendingRender;

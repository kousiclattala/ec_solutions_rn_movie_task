import {View, Text, Pressable, Image, Dimensions} from 'react-native';
import React from 'react';
import {TrendingRenderProps} from '../../types/types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import resources from '../../resources';
import {TouchableRipple} from 'react-native-paper';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const TrendingRender: React.FC<TrendingRenderProps> = ({
  item,
  index,
  onPress,
}) => {
  return (
    <Pressable
      style={{
        width: wp('40%'),
        height: hp('40%'),
        marginRight: SCREEN_WIDTH > 400 ? wp('2%') : wp('7%'),
      }}
      onPress={onPress}
      key={item.id}>
      <Image
        source={{uri: `${resources.config.posterURL}${item?.poster_path}`}}
        style={{
          width: 160,
          height: 245,
          borderRadius: 10,
          resizeMode: 'contain',
        }}
      />
      <Text
        style={{
          color: resources.colors.primary,
          fontSize: hp('1.6%'),
          fontWeight: '300',
          letterSpacing: 0.6,
          marginTop: hp('1%'),
          alignSelf: 'center',
        }}>
        {item?.title}
      </Text>
    </Pressable>
  );
};

export default TrendingRender;

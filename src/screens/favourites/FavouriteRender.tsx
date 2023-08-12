import {View, Text, Image} from 'react-native';
import React from 'react';
import {FavouriteRenderProps, TrendingRenderProps} from '../../types/types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import resources from '../../resources';

const FavouriteRender: React.FC<FavouriteRenderProps> = ({item, index}) => {
  return (
    <View
      style={{
        marginHorizontal: wp('2.3%'),
        marginBottom: hp('2%'),
        width: wp('45%'),
      }}
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
          overflow: 'hidden',
        }}
        numberOfLines={2}>
        {item?.title}
      </Text>
    </View>
  );
};

export default FavouriteRender;

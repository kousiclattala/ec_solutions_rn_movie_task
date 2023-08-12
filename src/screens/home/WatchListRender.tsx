import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {WatchListRenderProps} from '../../types/types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import resources from '../../resources';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const WatchListRender: React.FC<WatchListRenderProps> = ({item, index}) => {
  // console.log('watchlist', item);

  return (
    <View
      style={{
        width: wp('40%'),
        height: hp('40%'),
        marginRight: SCREEN_WIDTH > 400 ? wp('2%') : wp('7%'),
      }}
      key={item.id}>
      <Image
        source={{uri: `${resources.config.posterURL}${item?.poster_path}`}}
        style={{
          width: 165,
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
    </View>
  );
};

export default WatchListRender;

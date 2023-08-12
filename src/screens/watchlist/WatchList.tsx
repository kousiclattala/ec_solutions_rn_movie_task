import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import resources from '../../resources';
import SubHeader from '../../components/SubHeader';
import WatchRender from './WatchRender';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {compositeProps, stackProps} from '../../navigators/types';

const WatchList = () => {
  const navigation = useNavigation<compositeProps>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: resources.colors.background,
      }}>
      <SubHeader
        title="Watchlist"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <WatchRender item={item} index={index} />
        )}
        numColumns={2}
        style={{
          marginTop: hp('3%'),
        }}
      />
    </SafeAreaView>
  );
};

export default WatchList;

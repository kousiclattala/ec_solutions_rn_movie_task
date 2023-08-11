import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import resources from '../../resources';
import SubHeader from '../../components/SubHeader';
import FavouriteRender from './FavouriteRender';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';

const Favourites = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: resources.colors.background,
      }}>
      <Header />

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <FavouriteRender item={item} index={index} />
        )}
        numColumns={2}
        style={{
          marginTop: hp('3%'),
        }}
      />
    </SafeAreaView>
  );
};

export default Favourites;

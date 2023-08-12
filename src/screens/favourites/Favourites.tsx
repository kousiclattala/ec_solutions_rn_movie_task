import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useCallback} from 'react';
import resources from '../../resources';
import SubHeader from '../../components/SubHeader';
import FavouriteRender from './FavouriteRender';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import {useAppSelector} from '../../redux/hooks';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {compositeProps} from '../../navigators/types';

const Favourites = () => {
  const navigation = useNavigation<compositeProps>();
  const {favourites} = useAppSelector(state => state.auth);

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          navigation.navigate('Home');

          return true;
        },
      );

      return () => {
        backHandler.remove();
      };
    }, []),
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: resources.colors.background,
      }}>
      <Header />

      <FlatList
        data={favourites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <FavouriteRender item={item} index={index} />
        )}
        numColumns={2}
        style={{
          marginTop: hp('3%'),
        }}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: wp('70%'),
                height: hp('7%'),
                backgroundColor: resources.colors.primary,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text
                style={{
                  color: resources.colors.white,
                  fontSize: hp('2%'),
                  fontWeight: '700',
                  letterSpacing: 0.6,
                }}>
                Add Favourites
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Favourites;

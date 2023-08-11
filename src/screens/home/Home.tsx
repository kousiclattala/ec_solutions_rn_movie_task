import React from 'react';
import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import resources from '../../resources';
import TrendingRender from './TrendingRender';
import WatchListRender from './WatchListRender';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {stackProps} from '../../navigators/types';

const Home = () => {
  const navigation = useNavigation<stackProps>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: resources.colors.background,
      }}>
      {/* header */}
      <Header />

      <ScrollView nestedScrollEnabled={true}>
        <View>
          <Text
            style={{
              color: resources.colors.black,
              fontSize: hp('2.3%'),
              fontWeight: '700',
              letterSpacing: 0.6,
              paddingLeft: wp('5%'),
              marginTop: hp('3%'),
            }}>
            Trending
          </Text>

          <ScrollView
            horizontal
            style={{
              paddingHorizontal: wp('5%'),
              height: hp('38%'),
            }}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: wp('7%'),
            }}
            showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item, index) => {
              return <TrendingRender item={item} index={index} />;
            })}
          </ScrollView>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: resources.colors.black,
                fontSize: hp('2.3%'),
                fontWeight: '700',
                letterSpacing: 0.6,
                paddingLeft: wp('5%'),
                marginTop: hp('2%'),
              }}>
              Watchlist
            </Text>
            <Text
              style={{
                color: resources.colors.black,
                fontSize: hp('1.8%'),
                fontWeight: '400',
                letterSpacing: 0.6,
                paddingRight: wp('5%'),
                marginTop: hp('2%'),
              }}
              onPress={() => {
                navigation.navigate('WatchList');
              }}>
              See All
            </Text>
          </View>

          <ScrollView
            horizontal
            style={{
              paddingHorizontal: wp('5%'),
              height: hp('38%'),
            }}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: wp('7%'),
            }}
            showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item, index) => {
              return <WatchListRender item={item} index={index} />;
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

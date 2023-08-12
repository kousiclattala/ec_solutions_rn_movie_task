import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import resources from '../../resources';
import TrendingRender from './TrendingRender';
import WatchListRender from './WatchListRender';
import Header from '../../components/Header';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {stackProps} from '../../navigators/types';
import {
  getIsUserLoggedStatus,
  getUserDataFromAsync,
  getUserFavourite,
  getUserWatchList,
  setUserWatchList,
} from '../../helpers/AsyncHelper';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  setFavourites,
  setIsLoggedIn,
  setUserData,
  setWatchList,
} from '../../redux/authSlice';
import RNBootSplash from 'react-native-bootsplash';

const Home = () => {
  const navigation = useNavigation<stackProps>();
  const {isLoggedIn, watchList} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const [trending, setTrending] = useState<any>([]);

  const _getUserStatus = async () => {
    var logged = await getIsUserLoggedStatus();
    var user = await getUserDataFromAsync();
    var watch = await getUserWatchList();
    var favourites = await getUserFavourite();

    if (user && logged) {
      dispatch(setIsLoggedIn(logged));
      dispatch(setUserData(user));

      watch?.map((item: any) => dispatch(setWatchList(item)));
      favourites?.map((item: any) => dispatch(setFavourites(item)));

      RNBootSplash.hide();
    } else {
      RNBootSplash.hide();
    }
  };

  const _getTrendingMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${resources.config.access_token}`,
      },
    };

    fetch(resources.config.trendingURL, options)
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        setTrending(response.results);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    _getUserStatus();
    _getTrendingMovies();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          Alert.alert('Exit App!', 'Are you sure want to exit App?', [
            {
              text: 'No',
              onPress: () => {},
            },
            {
              text: 'Yes',
              onPress: () => {
                BackHandler.exitApp();
              },
            },
          ]);
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
            }}
            contentContainerStyle={{
              marginTop: hp('2%'),
              height: 300,
              alignSelf: 'center',
            }}
            showsHorizontalScrollIndicator={false}>
            {trending.length > 0 &&
              trending.map((item: any, index: number) => {
                return (
                  <TrendingRender
                    item={item}
                    index={index}
                    onPress={() => {
                      navigation.navigate('DetailsScreen', {
                        movieId: item.id,
                      });
                    }}
                  />
                );
              })}
          </ScrollView>
        </View>
        {isLoggedIn && (
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

            {watchList.length == 0 ? (
              <View
                style={{
                  width: wp('100%'),
                  height: hp('20%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: resources.colors.grey,
                    fontSize: hp('2%'),
                    fontWeight: '500',
                    letterSpacing: 0.6,
                  }}>
                  You haven't added anything to watchlist
                </Text>
              </View>
            ) : (
              <ScrollView
                horizontal
                style={{
                  paddingHorizontal: wp('5%'),
                }}
                contentContainerStyle={{
                  height: 300,
                  alignSelf: 'center',
                  marginTop: hp('2%'),
                }}
                showsHorizontalScrollIndicator={false}>
                {watchList.length > 0 &&
                  watchList.map((item, index) => {
                    return <WatchListRender item={item} index={index} />;
                  })}
              </ScrollView>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

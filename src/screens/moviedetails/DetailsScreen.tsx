import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import resources from '../../resources';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {compositeProps, detailsRouteProps} from '../../navigators/types';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import SubHeader from '../../components/SubHeader';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setFavourites, setWatchList} from '../../redux/authSlice';
import {setUserFavourite, setUserWatchList} from '../../helpers/AsyncHelper';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const DetailsScreen = () => {
  const navigation = useNavigation<compositeProps>();
  const {params} = useRoute<detailsRouteProps>();
  const [movie, setMovie] = useState<any>({});
  const {isLoggedIn, watchList} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const _getMovieDetails = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${resources.config.access_token}`,
      },
    };

    fetch(`${resources.config.movieDetails}/${params?.movieId}`, options)
      .then(response => response.json())
      .then(response => {
        setMovie(response);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    _getMovieDetails();
  }, []);

  const _handleFavourites = () => {
    if (!isLoggedIn) {
      navigation.navigate('Login');

      dispatch(setFavourites(movie));
      setUserFavourite(movie);
    } else {
      dispatch(setFavourites(movie));
      setUserFavourite(movie);
      navigation.navigate('Favourites');
    }
  };

  const _handleWatchList = () => {
    if (!isLoggedIn) {
      navigation.navigate('Login');

      dispatch(setWatchList(movie));
      setUserWatchList(movie);
    } else {
      dispatch(setWatchList(movie));
      setUserWatchList(movie);
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: resources.colors.background,
      }}>
      <SubHeader
        title={`${movie?.title}`}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />

      <ScrollView
      // style={{
      //   top: -40,
      // }}
      >
        {/* header */}

        <View>
          <Image
            source={{
              uri: `${resources.config.bannerURL}/${movie.backdrop_path}`,
            }}
            style={{
              width: '100%',
              height: 400,
              resizeMode: 'contain',
              position: 'absolute',
              top: -100,
            }}
          />

          <View
            style={{
              position: 'relative',
              top: hp('28%'),
              height: hp('80%'),
            }}>
            <Text
              style={{
                color: resources.colors.black,
                fontSize: hp('2%'),
                fontWeight: '700',
                letterSpacing: 0.6,
                marginLeft: wp('5%'),
              }}>
              {movie?.title}
            </Text>

            {/* movie ratings and genre */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: hp('2%'),
                marginLeft: wp('5%'),
              }}>
              <View
                style={{
                  width: wp('40%'),
                  height: hp('5%'),
                  backgroundColor: resources.colors.light_shadow_2,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                {movie.spoken_languages &&
                  movie?.spoken_languages.map((item: any, index: number) => (
                    <Text
                      style={{
                        color: resources.colors.primary,
                        fontSize: hp('1.5%'),
                        fontWeight: '300',
                        letterSpacing: 0.6,
                        paddingLeft: wp('1%'),
                      }}>
                      {item.english_name}
                      {movie?.spoken_languages.length > 0 &&
                      movie?.spoken_languages.length - 1 !== index
                        ? ','
                        : null}
                    </Text>
                  ))}
              </View>
              <View
                style={{
                  width: wp('40%'),
                  height: hp('5%'),
                  backgroundColor: resources.colors.light_shadow_2,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                {movie.genres &&
                  movie?.genres.map((item: any, index: number) => (
                    <Text
                      style={{
                        color: resources.colors.primary,
                        fontSize: hp('1.5%'),
                        fontWeight: '300',
                        letterSpacing: 0.6,
                        paddingLeft: wp('1%'),
                      }}>
                      {item.name}
                      {movie?.genres.length > 0 &&
                      movie?.genres.length - 1 !== index
                        ? ','
                        : null}
                    </Text>
                  ))}
              </View>
            </View>

            {/* watchlist and not interested button */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: hp('4%'),
                marginLeft: wp('5%'),
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={_handleFavourites}>
                <Ionicon
                  name="heart-outline"
                  size={40}
                  color={resources.colors.primary}
                />
                <Text
                  style={{
                    color: resources.colors.black,
                    fontSize: hp('1.5%'),
                    fontWeight: '300',
                    letterSpacing: 0.6,
                  }}>
                  Add to Favourites
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: wp('4%'),
                }}
                onPress={_handleWatchList}>
                <MIcons
                  name="playlist-add"
                  size={40}
                  color={resources.colors.primary}
                />
                <Text
                  style={{
                    color: resources.colors.black,
                    fontSize: hp('1.5%'),
                    fontWeight: '300',
                    letterSpacing: 0.6,
                  }}>
                  Add to Watchlist
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: wp('4%'),
                }}>
                <MIcons
                  name="close"
                  size={40}
                  color={resources.colors.primary}
                />
                <Text
                  style={{
                    color: resources.colors.black,
                    fontSize: hp('1.5%'),
                    fontWeight: '300',
                    letterSpacing: 0.6,
                  }}>
                  Not Interested
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: wp('5%'),
              }}>
              <View
                style={{
                  width: wp('20%'),
                  height: hp('5%'),
                  backgroundColor: resources.colors.light_shadow_2,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: hp('2%'),
                }}>
                <Text
                  style={{
                    color: resources.colors.primary,
                    fontSize: hp('1.5%'),
                    fontWeight: '300',
                    letterSpacing: 0.5,
                  }}>
                  {Number(movie?.vote_average).toFixed(1)} rating
                </Text>
              </View>
              <View
                style={{
                  width: wp('20%'),
                  height: hp('5%'),
                  backgroundColor: resources.colors.light_shadow_2,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: hp('2%'),
                  marginLeft: wp('2%'),
                }}>
                <Text
                  style={{
                    color: resources.colors.primary,
                    fontSize: hp('1.5%'),
                    fontWeight: '300',
                    letterSpacing: 0.5,
                  }}>
                  {movie.vote_count} votes
                </Text>
              </View>
            </View>

            {/* description */}
            <View
              style={{
                marginHorizontal: wp('5%'),
                marginTop: hp('5%'),
              }}>
              <Text
                style={{
                  color: resources.colors.black,
                  fontSize: hp('2%'),
                  fontWeight: '700',
                  letterSpacing: 0.6,
                }}>
                Description
              </Text>
              <Text
                style={{
                  color: resources.colors.black,
                  fontSize: hp('1.8%'),
                  fontWeight: '300',
                  letterSpacing: 0.6,
                  lineHeight: 20,
                  textAlign: 'justify',
                  marginTop: hp('3%'),
                }}>
                {movie?.overview}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

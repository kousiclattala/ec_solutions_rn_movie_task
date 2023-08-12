import {View, Text, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import resources from '../resources';
import {useAppSelector} from '../redux/hooks';

const BottomBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {isLoggedIn} = useAppSelector(state => state.auth);

  return (
    <View
      style={{
        flexDirection: 'row',
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: resources.colors.white,
        justifyContent: 'space-evenly',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              //   width: wp('24%'),
              height: hp('8%'),
              //   backgroundColor: 'red',
              marginHorizontal: wp('0.5%'),
              justifyContent: 'center',
              alignItems: 'center',
              display:
                route.name == 'Favourites'
                  ? isLoggedIn
                    ? 'flex'
                    : 'none'
                  : 'flex',
            }}>
            {route.name == 'Home' ? (
              <IonIcon
                name={isFocused ? 'home' : 'home-outline'}
                size={hp('4%')}
                color={
                  isFocused ? resources.colors.primary : resources.colors.grey
                }
              />
            ) : route.name == 'Favourites' ? (
              <IonIcon
                name={isFocused ? 'heart' : 'heart-outline'}
                size={hp('4%')}
                color={
                  isFocused ? resources.colors.primary : resources.colors.grey
                }
              />
            ) : (
              <FAIcon
                name={isFocused ? 'user' : 'user-o'}
                size={isFocused ? hp('4%') : hp('3.5%')}
                color={
                  isFocused ? resources.colors.primary : resources.colors.grey
                }
              />
            )}
            <Text
              style={{
                color: isFocused
                  ? resources.colors.primary
                  : resources.colors.dark_grey,
                fontSize: hp('1.5%'),
                fontWeight: '600',
                letterSpacing: 0.5,
                opacity: isFocused ? 1 : 0.35,
                marginTop: hp('0.5%'),
              }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomBar;

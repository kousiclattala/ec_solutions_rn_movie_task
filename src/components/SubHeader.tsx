import React from 'react';
import {View, Text, StatusBar, Pressable} from 'react-native';
import resources from '../resources';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {SubHeaderProps} from '../types/types';

const SubHeader: React.FC<SubHeaderProps> = ({title, onPress}) => {
  return (
    <View>
      <StatusBar backgroundColor={resources.colors.primary} />
      <View
        style={{
          width: wp('100%'),
          height: hp('7%'),
          backgroundColor: resources.colors.primary,
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Pressable
          style={{
            width: wp('20%'),
            height: hp('7%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onPress}>
          <IonIcon name="arrow-back" size={25} color={resources.colors.white} />
        </Pressable>
        <Text
          style={{
            color: resources.colors.white,
            fontSize: hp('2%'),
            fontWeight: '600',
            letterSpacing: 0.6,
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default SubHeader;

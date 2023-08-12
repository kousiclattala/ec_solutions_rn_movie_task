import React from 'react';
import {View, Text, TextInput} from 'react-native';
import resources from '../resources';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextInputBoxProps} from '../types/types';

const TextInputBox: React.FC<TextInputBoxProps> = ({
  value,
  onChangeText,
  isError,
  isSecure,
  placeholder,
  label,
}) => {
  return (
    <View>
      <Text
        style={{
          color: resources.colors.primary,
          fontSize: hp('2%'),
          fontWeight: '500',
          letterSpacing: 0.5,
          marginLeft: wp('5.5%'),
          marginTop: hp('3%'),
        }}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={resources.colors.black}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        maxLength={placeholder == 'Phone number' ? 10 : undefined}
        style={{
          width: wp('90%'),
          height: hp('7%'),
          marginHorizontal: wp('5%'),
          borderRadius: 10,
          paddingStart: wp('5%'),
          marginTop: hp('2%'),
          borderWidth: 1,
          borderColor: isError ? resources.colors.red : resources.colors.shadow,
          color: resources.colors.black,
        }}
      />
    </View>
  );
};

export default TextInputBox;

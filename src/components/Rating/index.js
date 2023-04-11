import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, HStack, Text} from 'native-base';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
  WARNA_GRAYTUA,
  WARNA_BORDER,
} from '../../utils/constant';

const Rating = ({value, text}) => {
  const size = 12;
  const color = WARNA_UTAMA;

  return (
    <HStack space={0.4} mt={1} alignItems="center">
      <IconMaterial
        name={
          value >= 1 ? 'star' : value >= 0.5 ? 'star-half-full' : 'star-outline'
        }
        size={size}
        color={color}
      />
      <IconMaterial
        name={
          value >= 2 ? 'star' : value >= 1.5 ? 'star-half-full' : 'star-outline'
        }
        size={size}
        color={color}
      />
      <IconMaterial
        name={
          value >= 3 ? 'star' : value >= 2.5 ? 'star-half-full' : 'star-outline'
        }
        size={size}
        color={color}
      />
      <IconMaterial
        name={
          value >= 4 ? 'star' : value >= 3.5 ? 'star-half-full' : 'star-outline'
        }
        size={size}
        color={color}
      />
      <IconMaterial
        name={
          value >= 5 ? 'star' : value >= 4.5 ? 'star-half-full' : 'star-outline'
        }
        size={size}
        color={color}
      />
      {text && <Text fontSize={12}> {text} reviews</Text>}
    </HStack>
  );
};

export default Rating;

const styles = StyleSheet.create({});

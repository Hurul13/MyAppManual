import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Box, HStack, Text, Button, Center} from 'native-base';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
  WARNA_DEEPYELLOW,
  WARNA_GRAYTUA,
  WARNA_BORDER,
  WARNA_RED,
} from '../../utils/constant';
import {SceneMap} from 'react-native-tab-view';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const AddressProfileTab = () => {
  // const navigateTo = async page => {
  //   navigation.navigate(page);
  // };
  const navigation = useNavigation();
  return (
    <Box mx={responsiveHeight(3)} mt={responsiveHeight(4)}>
      <Box
        borderWidth={0.6}
        borderRadius={7}
        borderColor={WARNA_GRAYTUA}
        shadow={0.9}
        px={responsiveHeight(2)}
        py={responsiveWidth(3)}
        // w={responsiveWidth(88)}
        // h={responsiveHeight(11)}
      >
        <Box flexDirection={'row'} pb={2}>
          <Text
            fontSize={responsiveFontSize(2.1)}
            color={WARNA_SEKUNDER}
            mr={2}
            fontWeight={700}>
            Lorem Ipsum
          </Text>
          <Text
            fontSize={responsiveFontSize(2.1)}
            color={WARNA_SEKUNDER}
            italic
            borderLeftWidth={0.5}
            borderColor={WARNA_DISABLE}
            px={responsiveHeight(1)}>
            0851234567
          </Text>
        </Box>
        <Text>Jln. Mawar Melati Anggrek No 1</Text>
        <Text>LILY, KOTA BUNGA, INDONESIA, 45678</Text>
      </Box>
      <TouchableOpacity onPress={() => navigation.navigate('NewAddress')}>
        <Box
          mt={3}
          borderRadius={7}
          shadow={0.9}
          // px={responsiveHeight(1)}
          // py={responsiveWidth(3)}
          // w={responsiveWidth(88)}
          // h={responsiveHeight(5)}
          py={responsiveWidth(2)}
          borderWidth={0.6}
          flexDirection={'row'}
          borderColor={WARNA_UTAMA}
          bg={WARNA_DEEPYELLOW}
          justifyContent={'center'}
          alignItems={'center'}>
          <IconMaterial
            name={'plus-circle-outline'}
            size={17}
            style={{color: WARNA_RED}}
          />
          <Text color={WARNA_RED} px={responsiveHeight(1)}>
            Add New Address
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default AddressProfileTab;

const styles = StyleSheet.create({});

import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  Box,
  Pressable,
  Input,
  ScrollView,
  Center,
  HStack,
  Button,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import material from '../../utils/material';
import {CartItem, Buttone} from '../../components';
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
  WARNA_GRAYTUA,
  WARNA_BORDER,
} from '../../utils/constant';

const Keranjang2 = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.judulBar}>Keranjang</Text>
      </View>
      <View style={styles.box}>
        <Box
        // flex={1}
        // safeAreaTop
        // bg={WARNA_BORDER}
        >
          {/* <Center w="full" py={5}>
            <Text color={WARNA_SEKUNDER} fontSize={20} bold>
              Cart
            </Text>
          </Center> */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            pt={responsiveHeight(5)}>
            <CartItem />
            <Center mt={5}>
              <HStack
                rounded={50}
                justifyContent="space-between"
                bg={WARNA_WHITE}
                shadow={2}
                w="90%"
                pl={5}
                h={45}
                borderWidth={1}
                borderColor={WARNA_BORDER}
                alignItems="center">
                <Text fontSize={responsiveFontSize(2)} bold>
                  Total
                </Text>
                <Button
                  px={10}
                  h={45}
                  rounded={50}
                  bg={WARNA_UTAMA}
                  _text={{
                    color: WARNA_SEKUNDER,
                    fontWeight: '800',
                    fontSize: responsiveFontSize(2),
                  }}
                  _pressed={{bg: WARNA_UTAMA}}>
                  $356
                </Button>
              </HStack>
            </Center>
            <Center px={5}>
              <Buttone
                bg={WARNA_UTAMA}
                color={WARNA_SEKUNDER}
                borderWidth={1}
                borderColor={WARNA_BORDER}
                mt={10}
                onPress={() => navigation.navigate('Checkout')}>
                CHECKOUT
              </Buttone>
            </Center>
          </ScrollView>
        </Box>
      </View>
    </View>
  );
};

export default Keranjang2;

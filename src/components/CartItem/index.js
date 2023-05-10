import React, {useState} from 'react';
import {
  Box,
  Text,
  Button,
  Pressable,
  Center,
  HStack,
  Image,
  VStack,
} from 'native-base';
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
  WARNA_RED,
  WARNA_DEEPYELLOW,
} from '../../utils/constant';
import material from '../../utils/material';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Buttone from '../Buttone';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useNavigation} from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={material.slice(0, 5)}
    renderItem={renderitem}
    renderHiddenItem={hiddenItem}
    showsVerticalScrollIndicator={false}
  />
);
// const [value, setValue] = useState(0);

const renderitem = data => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={WARNA_WHITE}
        shadow={1}
        rounded={10}
        borderWidth={1}
        borderColor={WARNA_BORDER}
        overflow="hidden">
        <Center w="25%" bg={WARNA_BORDER}>
          <Image
            source={data.item.image}
            alt={data.item.name}
            w={120}
            h={24}
            // resizeMode="contain"
          />
        </Center>
        <VStack w="74%" px={2} space={3}>
          <Text
            isTruncated
            color={WARNA_SEKUNDER}
            bold
            fontSize={responsiveFontSize(2.2)}>
            {data.item.name}
          </Text>
          <Box
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Text
              color={WARNA_DISABLE}
              bold
              fontSize={responsiveFontSize(2.2)}
              pr={responsiveHeight(3)}>
              ${data.item.price}
            </Text>
            <NumericInput
              // value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={data.item.countInStock}
              minValue={0}
              borderColor={WARNA_DEEPYELLOW}
              rounded
              textColor={WARNA_SEKUNDER}
              iconStyle={{color: WARNA_SEKUNDER}}
              rightButtonBackgroundColor={WARNA_UTAMA}
              leftButtonBackgroundColor={WARNA_UTAMA}
              ml={3}
              // pl={5}
            />
          </Box>
        </VStack>
        {/* <Center>
          <Button
            bg={WARNA_UTAMA}
            _pressed={{bg: WARNA_UTAMA}}
            _text={{color: WARNA_SEKUNDER, fontSize: responsiveFontSize(2)}}>
            2
          </Button>
        </Center> */}
      </HStack>
    </Box>
  </Pressable>
);

const hiddenItem = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    borderWidth={1}
    borderColor={WARNA_BORDER}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={WARNA_RED}>
    <Center alignItems="center" space={2}>
      <IconMaterial name="delete" size={24} color={WARNA_WHITE} />
    </Center>
  </Pressable>
);

const CartItem = () => {
  const navigation = useNavigation();

  return (
    <Pressable mr={6} onPress={() => navigation.navigate('Keranjang2')}>
      <Swiper />
    </Pressable>
  );
};

export default CartItem;

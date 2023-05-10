import {View, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import {
  Box,
  Pressable,
  Input,
  // ScrollView,
  Center,
  HStack,
  Button,
  Text,
  Image,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import material from '../../utils/material';
import {CartItem, Buttone} from '../../components';
import {ScrollView} from 'react-native-virtualized-view';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useNavigation} from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';
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

const API_URL =
  'http://192.168.1.10/homei/web/api/v1/supplier-order-cart/index';

const Keranjang3 = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  // const item = route.params;
  const Swiper = () => {
    <SwipeListView
      rightOpenValue={-50}
      previewRowKey="0"
      previewOpenValue={-40}
      previewOpenDelay={3000}
      data={dataMaterial.slice(0, 5)}
      renderItem={renderitem}
      renderHiddenItem={hiddenItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
    />;
  };
  // const [value, setValue] = useState(0);

  const [dataMaterial, setDataMaterial] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setDataMaterial(json.data);
      // console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  const renderitem = ({item}) => {
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
              source={item.gambar}
              alt={item.nama_barang}
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
              {item.nama_barang}
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
                Rp {item.harga_proyek}
              </Text>
              <NumericInput
                // value={value}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={item.stok}
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
    </Pressable>;
  };

  const hiddenItem = () => {
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
    </Pressable>;
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
            // pt={responsiveHeight(6)}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailProduct2')}>
              {/* <CartItem /> */}
              <Pressable
                mr={6}
                // onPress={() => navigation.navigate('Keranjang2')}
              >
                <Swiper />
              </Pressable>
            </TouchableOpacity>
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
                mb={12}
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

export default Keranjang3;

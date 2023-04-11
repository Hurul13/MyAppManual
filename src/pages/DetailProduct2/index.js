import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  Text,
  Box,
  Pressable,
  Input,
  HStack,
  Heading,
  Spacer,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DecsDetailProduct,
  MinPlus,
  Accordion,
  AccordionRating,
} from '../../components';
import Share from 'react-native-share';
import {Rating, Buttone, Review} from '../../components';
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
  WARNA_DEEPYELLOW,
  WARNA_RED,
} from '../../utils/constant';
import NumericInput from 'react-native-numeric-input';

const images = [
  'https://cdn.pixabay.com/photo/2017/06/01/02/18/black-2362261_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/07/13/04/51/marble-3534940_960_720.jpg',
];

const DetailProduct2 = ({navigation, onValueChange, route}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [imgActive, setImgActive] = useState(0);

  onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  const share = async () => {
    const options = {
      message: 'this is a test message',
      // url: 'https://github.com/Hurul13',
      email: 'hurulaini218@gmail.com',
      subject: 'succes',
      recipient: '08765432234',
    };
    try {
      const res = await Share.open(options);
      console.log(JSON.stringify(res));
    } catch (err) {
      console.log('Error => ', err);
    }
  };

  const [value, setValue] = useState(0);
  const materials = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {images.map((val, index) => (
            <Image
              key={val}
              resizeMode="stretch"
              style={styles.wrap}
              source={{uri: val}}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((val, index) => (
            <Text
              key={val}
              style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View> */}
      <Image source={materials.image} alt="Image" style={styles.wrap} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.bulat}>
          <IconMaterial
            name="arrow-left"
            size={26}
            style={styles.icon}
            onPress={navigation.goBack}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bulat} onPress={share}>
          <IconMaterial name="dots-vertical" size={26} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.space}>
        <Text style={styles.text}>{materials.name}</Text>
        {/* <IconMaterial name="heart" size={26} style={styles.iconLike} /> */}
      </View>
      <Text style={styles.text1}>{materials.ingredients}</Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginHorizontal={responsiveHeight(3)}>
        <Box>
          <Text style={styles.text3}>${materials.price}</Text>
          <Box>
            <Rating value={materials.rating} text={materials.numReviews} />
          </Box>
        </Box>
        {/* <Spacer /> */}
        <HStack space={2} alignItems="center" my={5}>
          {materials.countInStock > 0 ? (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={materials.countInStock}
              minValue={0}
              borderColor={WARNA_DEEPYELLOW}
              rounded
              textColor={WARNA_SEKUNDER}
              iconStyle={{color: WARNA_SEKUNDER}}
              rightButtonBackgroundColor={WARNA_UTAMA}
              leftButtonBackgroundColor={WARNA_UTAMA}
            />
          ) : (
            <Text
              bold
              color={WARNA_RED}
              italic
              fontSize={responsiveFontSize(2.2)}>
              Out of stock
            </Text>
          )}
        </HStack>
      </Box>
      <Text
        lineHeight={24}
        fontSize={responsiveFontSize(1.8)}
        marginHorizontal={responsiveHeight(3)}
        marginVertical={responsiveHeight(2)}>
        {materials.desc}
      </Text>
      <Buttone
        bg={WARNA_UTAMA}
        onPress={() => navigation.navigate('Keranjang2')}
        color={WARNA_SEKUNDER}
        mt={5}
        mx={responsiveHeight(3)}>
        ADD TO CART
      </Buttone>
      {/* <Review /> */}
    </ScrollView>
  );
};

export default DetailProduct2;

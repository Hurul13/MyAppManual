import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import {
  Text,
  Box,
  HStack,
  Pressable,
  Input,
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
  Rating,
  Review,
  Buttone,
} from '../../components';
import Share from 'react-native-share';
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
  WARNA_GREEN,
  WARNA_BLACK,
} from '../../utils/constant';
import NumericInput from 'react-native-numeric-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';

const DetailProduct3 = ({navigation}) => {
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
  // const item = route.params;
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const route = useRoute();
  const {item} = route.params;

  useEffect(() => {
    AsyncStorage.getItem('cart')
      .then(data => {
        if (data !== null) {
          const cart = JSON.parse(data);
          setCartCount(cart.length);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const handleAddToCart = () => {
    AsyncStorage.getItem('cart')
      .then(data => {
        if (data !== null) {
          const cart = JSON.parse(data);
          cart.push({...item, quantity});
          AsyncStorage.setItem('cart', JSON.stringify(cart))
            .then(() => {
              setCartCount(cart.length);
              navigation.navigate('Keranjang4');
              ToastAndroid.show(
                'Berhasil Memasukkan ke Keranjang',
                ToastAndroid.SHORT,
              );
            })
            .catch(error => console.error(error));
        } else {
          const cart = [{...item, quantity}];
          AsyncStorage.setItem('cart', JSON.stringify(cart))
            .then(() => {
              setCartCount(cart.length);
              navigation.navigate('Keranjang4');
              ToastAndroid.show(
                'Berhasil Memasukkan ke Keranjang',
                ToastAndroid.SHORT,
              );
            })
            .catch(error => console.error(error));
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.spaceWrap}>
        <Image
          source={require('../../assets/Images/batu.jpg')}
          style={styles.spaceWrapImg}
        />
      </View>
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
        <Text style={styles.text}>{item.nama_barang}</Text>
      </View>
      {/* <Text style={styles.text1}>Sisa stok {item.stok}</Text> */}
      <View style={styles.text1}>
        {item.stok > 0 ? (
          <Text
            style={{
              fontSize: responsiveFontSize(1.4),
              color: WARNA_GREEN,
            }}>
            Sisa stok: {item.stok}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: responsiveFontSize(1.4),
              color: WARNA_RED,
            }}>
            Sisa stok: {item.stok}
          </Text>
        )}
      </View>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginHorizontal={responsiveHeight(3)}>
        <Text style={styles.text3}>Rp {item.harga_proyek}</Text>
        <HStack space={2} alignItems="center" my={5}>
          {item.stok > 0 ? (
            <NumericInput
              value={quantity}
              onChange={setQuantity}
              minValue={1}
              maxValue={item.stok}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              rounded
              valueType="real"
              textColor={WARNA_BLACK}
              iconStyle={{color: WARNA_BLACK}}
              rightButtonBackgroundColor={WARNA_UTAMA}
              leftButtonBackgroundColor={WARNA_UTAMA}
              borderColor={WARNA_DEEPYELLOW}
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
        color={WARNA_BLACK}
        lineHeight={24}
        fontSize={responsiveFontSize(1.8)}
        marginHorizontal={responsiveHeight(3)}
        marginVertical={responsiveHeight(2)}>
        {item.deskripsi}
      </Text>
      <TouchableOpacity style={styles.bottomToCart}>
        <Buttone
          bg={WARNA_UTAMA}
          onPress={handleAddToCart}
          color={WARNA_BLACK}
          mt={5}
          mx={responsiveHeight(3)}>
          ADD TO CART
        </Buttone>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailProduct3;

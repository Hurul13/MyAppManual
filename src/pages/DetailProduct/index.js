import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  RefreshControl,
  useWindowDimensions,
} from 'react-native';
import { Text, Box } from 'native-base';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import NumericInput from 'react-native-numeric-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_WHITE,
  WARNA_GREEN,
  WARNA_RED,
  WARNA_BLACK,
  WARNA_BORDER,
} from '../../utils/constant';
import { url } from '../../utils/url';
import styles from './Styles';
import Buttone from '../../components/Buttone';

const DetailProduct4 = ({ navigation }) => {
  const navigateTo = async (page) => {
    navigation.navigate(page);
  };

  const windowWidth = useWindowDimensions().width;

  const share = async () => {
    const options = {
      message: 'this is a test message',
      email: 'hurulaini218@gmail.com',
      subject: 'success',
      recipient: '08765432234',
    };
    try {
      const res = await Share.open(options);
      console.log(JSON.stringify(res));
    } catch (err) {
      console.log('Error => ', err);
    }
  };

  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const route = useRoute();
  const { item } = route.params;

  const fetchData = async () => {
    try {
      const data = await AsyncStorage.getItem('cart');
      if (data !== null) {
        const cart = JSON.parse(data);
        setCartCount(cart.length);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      const value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = () => {
    const apiUrl = `${url}supplier-barang/tambah-keranjang?id=${item.id}`;
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        ToastAndroid.show('Berhasil tambah keranjang', ToastAndroid.SHORT);
        navigation.navigate('Keranjang5');

        // Save data to AsyncStorage
        const itemData = {
          supplier_barang_id: item.id,
          nama_barang: item.nama_barang,
          harga_proyek: item.harga_proyek,
          harga_ritel: item.harga_ritel,
          deskripsi: item.deskripsi,
          stok: item.stok,
          gambar: item.gambar,
        };

        AsyncStorage.getItem('cart')
          .then((data) => {
            let cart = [];
            if (data) {
              cart = JSON.parse(data);
            }
            cart.push(itemData);
            return AsyncStorage.setItem('cart', JSON.stringify(cart));
          })
          .then(() => {
            console.log('Data saved to AsyncStorage.');
          })
          .catch((error) => {
            console.error('Error saving data to AsyncStorage:', error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const baseStyle = {
    color: WARNA_BLACK,
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(2),
    fontSize: responsiveFontSize(1.8),
    borderRadius: 10,
    borderColor: WARNA_BORDER,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(0.8),
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData()
      .then(() => {
        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        setRefreshing(false);
      });
  };


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.spaceWrap}>
        <Image source={{ uri: item.gambar }} style={styles.spaceWrapImg} />
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
      <View style={styles.text1}>
        <Text style={{ fontSize: responsiveFontSize(1.4), color: item.stok > 0 ? WARNA_GREEN : WARNA_RED }}>
          Sisa stok: {item.stok}
        </Text>
      </View>
      <Box marginVertical={responsiveWidth(3)} marginHorizontal={responsiveHeight(3)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.text3}>Rp {item.harga_proyek}</Text>
          <Text style={styles.text4}>Harga Proyek</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.text5}>Rp {item.harga_ritel}</Text>
          <Text style={styles.text6}>Harga Ritel</Text>
        </View>
      </Box>
      <RenderHtml
        baseStyle={baseStyle}
        source={{ html: `${item.deskripsi}` }}
        contentWidth={windowWidth}
        key={item.id}
      />
      <TouchableOpacity style={styles.bottomToCart}>
        <Buttone
          bg={item.stok > 0 ? WARNA_UTAMA : WARNA_DISABLE}
          onPress={item.stok > 0 ? handleAddToCart : null}
          color={item.stok > 0 ? WARNA_BLACK : WARNA_WHITE}
          mt={5}
          mx={responsiveHeight(3)}
        >
          {item.stok > 0 ? 'TAMBAH KERANJANG' : 'STOK KOSONG'}
        </Buttone>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailProduct4;

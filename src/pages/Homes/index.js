import {
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  FlatList,
} from 'react-native';
import {Text, Box, Pressable} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import {
  WARNA_DISABLE,
  WARNA_WHITE,
  WARNA_RED,
  WARNA_GREEN,
} from '../../utils/constant';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import banner from '../../utils/banner';
import {ScrollView} from 'react-native-virtualized-view';
import {
  BannerMaterialHome,
  BannerMaterialHome2,
  Rating,
} from '../../components';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {url} from '../../utils/url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = `${url}supplier-barang/index`;

const Homes = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [cartCount, setCartCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}supplier-barang/index`)
      .then(response => response.json())
      .then(json => setData(json.data))
      .catch(error => console.error(error));
  }, []);

  const handleCardClick = item => {
    navigation.navigate('DetailProduct3', {item});
  };

  // untukk menampilkan banyaknya cart
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

  const renderCard = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleCardClick(item)}>
        <View style={styles.card}>
          <View style={styles.spaceImg}>
            <Image
              // source={require('../../assets/Images/batu.jpg')}
              source={item.gambar}
              // source={{uri: item.gambar}}
              style={styles.img}
            />
          </View>
          <View style={styles.boxPrice}>
            <Text isTruncated style={styles.text}>
              {item.nama_barang}
            </Text>
          </View>
          <View style={styles.boxText}>
            <View style={{flexDirection: 'row'}}>
              <Text isTruncated style={styles.text2}>
                Rp. {item.harga_proyek}
              </Text>
              <Text isTruncated style={styles.text22}>
                Rp. {item.harga_ritel}
              </Text>
            </View>
            <View>
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
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [searchText, setSearchText] = useState('');
  const filterData = () => {
    return data.filter(item =>
      item.nama_barang.toLowerCase().includes(searchText.toLowerCase()),
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            // source={item.stok}
            source={require('../../assets/Images/logoHOMEI.png')}
            style={styles.logo}
            size={25}></Image>
          <View style={styles.space}>
            <Pressable top={-8} onPress={() => navigateTo('Keranjang4')}>
              <IconMaterial
                name="shopping"
                size={30}
                style={styles.iconTroll}
              />
              <Box
                px={responsiveHeight(0.5)}
                rounded="full"
                position="absolute"
                bg={WARNA_RED}
                left={responsiveHeight(2)}
                top={responsiveHeight(-0.3)}
                _text={{
                  color: WARNA_WHITE,
                  fontSize: responsiveFontSize(1.3),
                  textAlign: 'center',
                }}>
                {cartCount}
              </Box>
            </Pressable>
          </View>
        </View>
        <LinearGradient
          colors={['#FDD329', '#FDD329', '#FDD329', '#F2F2F2']}
          style={styles.boxLinear}>
          <View style={styles.box1}>
            <TextInput
              placeholder="Search material ..."
              placeholderTextColor={WARNA_DISABLE}
              onChangeText={text => setSearchText(text)}
              value={searchText}
              style={styles.textInput}
            />
          </View>
          {/* <BannerMaterialHome /> */}
          <BannerMaterialHome2 />
        </LinearGradient>
        <View>
          <View style={styles.space2}>
            <Text style={styles.textJudul} isTruncated>
              Bahan material untuk anda
            </Text>
            <TouchableOpacity
              onPress={() => navigateTo('Catalogue')}
              style={styles.space1}>
              <IconMaterial
                name="chevron-right"
                size={21}
                style={styles.iconNext}
              />
              <Text style={styles.textSubJudul}>Selengkapnya</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={filterData().slice(
              0,
              filterData().length > 4 ? 4 : filterData().length,
            )}
            renderItem={renderCard}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            style={styles.boxCard}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Homes;

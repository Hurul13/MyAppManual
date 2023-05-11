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
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {WARNA_DISABLE, WARNA_WHITE, WARNA_RED} from '../../utils/constant';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import banner from '../../utils/banner';
import {ScrollView} from 'react-native-virtualized-view';
import {BannerMaterialHome, Rating} from '../../components';
import {url} from '../../utils/url';

const Homes = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const Banner = ({banners}) => {
    return (
      <TouchableHighlight
        underlayColor={WARNA_WHITE}
        activeOpacity={0.9}
        // onPress={() => navigation.navigate('DetailProduct', banners)}
      >
        <View style={styles.boxBanner}>
          <Image source={banners.image} style={styles.imgs} />
          <View style={styles.bgTrans}>
            <Text style={styles.text4} isTruncated>
              {banners.title}
            </Text>
            <Text style={styles.text5} isTruncated>
              {banners.decs}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${url}supplier-barang/index`,
        // 'http://192.168.1.3/homeii/web/api/v1/supplier-barang/index',
      );
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderProduct = ({item}) => {
    const {nama_barang, stok, harga_proyek, gambar, deskripsi} = item;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailProduct2', item)}>
        <View style={styles.card}>
          <View style={styles.spaceImg}>
            {/* <Image
              style={styles.img}
              source={require('../../assets/Images/batu.jpg')}
            /> */}
          </View>
          <View style={styles.boxPrice}>
            <Text isTruncated style={styles.text2}>
              Rp. {harga_proyek}
            </Text>
            {/* <Rating value={materials.rating} /> */}
          </View>
          <View style={styles.boxText}>
            <Text isTruncated style={styles.text}>
              {nama_barang}
            </Text>
            <Text style={styles.text1}>Stok: {stok}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
            source={require('../../assets/Images/logoHOMEI.png')}
            style={styles.logo}
            size={25}></Image>
          <View style={styles.space}>
            {/* <Icon
              name="bell"
              size={23}
              style={styles.iconBell}
              onPress={() => navigateTo('Notifikasi')}
            /> */}
            <Pressable
              top={-8}
              // ml={responsiveHeight(2)}
              onPress={() => navigateTo('Keranjang3')}>
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
                5
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
          {/* <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={banner}
            renderItem={({item}) => <Banner banners={item} />}
          /> */}
          <BannerMaterialHome />
        </LinearGradient>
        {/* <View style={styles.material}>
          <View style={styles.space2}>
            <Text style={styles.textJudul}>Material sering dibeli</Text>
            <TouchableOpacity
              onPress={() => navigateTo('Homes2')}
              style={styles.space1}>
              <IconMaterial
                name="chevron-right"
                size={19}
                style={styles.iconNext}
              />
              <Text style={styles.textSubJudul}>Selengkapnya</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.boxCard}
            data={material.slice(0, material.length > 3 ? 3 : material.length)}
            renderItem={({item}) => <Card materials={item} />}
          />
        </View> */}
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
            style={styles.boxCard}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={filterData().slice(
              0,
              filterData().length > 4 ? 4 : filterData().length,
            )}
            renderItem={renderProduct}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Homes;

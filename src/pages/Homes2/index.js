import {
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  FlatList,
} from 'react-native';
import {Text, Box, Pressable, Input} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {WARNA_DISABLE, WARNA_WHITE, WARNA_RED} from '../../utils/constant';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// import material from '../../utils/material';
import banner from '../../utils/banner';
import {ScrollView} from 'react-native-virtualized-view';
import {Rating} from '../../components';
import Axios from 'axios';

const Homes2 = props => {
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

  // const [dataMaterial, setDataMaterial] = useState({
  //   gambar: '',
  //   nama_barang: '',
  //   stok: '',
  //   harga_proyek: '',
  // });
  // const getData = () => {
  //   fetch('http://localhost/homei/web/api/v1/supplier-barang/index')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       setDataMaterial(json.data);
  //     });
  // };

  // const Card = ({materials}) => {
  //   return (
  //     <TouchableHighlight
  //       underlayColor={WARNA_WHITE}
  //       activeOpacity={0.9}
  //       // onPress={getData}
  //     >
  //       <TouchableOpacity
  //         onPress={() => navigation.navigate('DetailProduct2', materials)}>
  //         <View style={styles.card}>
  //           <View style={styles.cardImg}>
  //             <Image source={materials.image} style={styles.img} />
  //           </View>
  //           <View style={styles.boxText}>
  //             <Text style={styles.text} isTruncated>
  //               {materials.name}
  //             </Text>
  //             <Text style={styles.text1}>{materials.ingredients}</Text>
  //           </View>
  //           <View style={styles.boxPrice}>
  //             <Text style={styles.text2}>${materials.price}</Text>
  //             <Rating value={materials.rating} />
  //           </View>
  //         </View>
  //       </TouchableOpacity>
  //     </TouchableHighlight>
  //   );
  // };

  useEffect(() => {
    Axios.get('http://localhost/homei/web/api/v1/supplier-barang/index')
      .then(result => {
        console.log('data API', result.data);
        const responseAPI = result.data;
        setMaterialData(responseAPI.data);
      })
      .catch(err => {
        console.log('error: '.err);
      });
  }, []);

  const [materialData, setMaterialData] = useState([]);
  const {gambar, nama_barang, stok, harga_proyek} = props;
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
              onPress={() => navigateTo('Keranjang2')}>
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
              placeholder="Search Material ... "
              // variant="filled"
              // type="search"
              placeholderTextColor={WARNA_DISABLE}
              style={styles.textInput}
            />
            <IconMaterial name="magnify" size={26} style={styles.iconSearch} />
          </View>
          {/* <View></View> */}
          <FlatList
            // style={styles.boxCard}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={banner}
            renderItem={({item}) => <Banner banners={item} />}
          />
        </LinearGradient>

        {/* data call api dengan axios */}
        {materialData.map(material => {
          return (
            <TouchableHighlight
              underlayColor={WARNA_WHITE}
              activeOpacity={0.9}
              key={material.id}
              gambar={`http://localhost/${material.gambar}`}
              nama_barang={material.nama_barang}
              harga_proyek={material.harga_proyek}
              stok={material.stok}>
              <View style={styles.card}>
                <View style={styles.cardImg}>
                  <Image source={{uri: gambar}} style={styles.img} />
                </View>
                <View style={styles.boxText}>
                  <Text style={styles.text} isTruncated>
                    {nama_barang}
                  </Text>
                  <Text style={styles.text1}>Stok {stok}</Text>
                </View>
                <View style={styles.boxPrice}>
                  <Text style={styles.text2}>${harga_proyek}</Text>
                </View>
              </View>
            </TouchableHighlight>
          );
        })}

        {/* data call api dengan fetch */}
        {/* <TouchableHighlight
          underlayColor={WARNA_WHITE}
          activeOpacity={0.9}
          onPress={getData}
          >
          <TouchableOpacity
          >
            <View style={styles.card}>
              <View style={styles.cardImg}>
                <Image source={{uri: dataMaterial.gambar}} style={styles.img} />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.text} isTruncated>
                  {dataMaterial.nama_barang}
                </Text>
              </View>
              <View style={styles.boxPrice}>
                <Text style={styles.text2}>${dataMaterial.harga_proyek}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableHighlight> */}

        {/* data local tanpa api */}
        {/* <View style={styles.material}>
          <View style={styles.space2}>
            <Text style={styles.textJudul}>Material sering dibeli</Text>
            <TouchableOpacity
              onPress={() => navigateTo('Catalogue')}
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
        </View>
        <View> */}
        {/* <View style={styles.space2}>
          <Text style={styles.textJudul} isTruncated>
            Rekomendasi material untuk anda
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
          data={material.slice(0, material.length > 4 ? 4 : material.length)}
          renderItem={({item}) => <Card materials={item} />}
        /> */}
        {/* </View> */}
      </View>
    </ScrollView>
  );
};

export default Homes2;

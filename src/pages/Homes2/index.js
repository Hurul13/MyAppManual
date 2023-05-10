import {
  // Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
  WARNA_GRAYTUA,
} from '../../utils/constant';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import categories from '../../utils/categories';
import material from '../../utils/material';
import {Rating} from '../../components';
// import {ScrollView} from 'react-native-virtualized-view';

const API_URL = 'http://192.168.1.3/homeii/web/api/v1/supplier-barang/index';

const Catalogue = ({navigation}, {materials}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  // const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  // const Category = () => {
  //   return (
  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       contentContainerStyle={styles.categoriesListContainer}>
  //       {categories.map((category, index) => (
  //         <TouchableOpacity
  //           key={index}
  //           activeOpacity={0.8}
  //           onPress={() => setSelectedCategoryIndex(index)}>
  //           <View
  //             style={{
  //               backgroundColor:
  //                 selectedCategoryIndex == index ? WARNA_SEKUNDER : WARNA_UTAMA,
  //               ...styles.categoryBtn,
  //             }}>
  //             <View style={styles.categoryBtnImgCon}>
  //               <Image source={category.image} style={styles.imgCategory} />
  //             </View>
  //             <Text
  //               style={{
  //                 fontSize: responsiveFontSize(1.8),
  //                 fontWeight: 'bold',
  //                 color:
  //                   selectedCategoryIndex == index ? WARNA_UTAMA : WARNA_WHITE,
  //               }}>
  //               {category.name}
  //             </Text>
  //           </View>
  //         </TouchableOpacity>
  //       ))}
  //     </ScrollView>
  //   );
  // };

  // {
  //   /* <TouchableOpacity
  //           key={index}
  //           activeOpacity={0.8}
  //           onPress={() => setSelectedCategoryIndex(index)}>
  //           <View
  //             style={{
  //               backgroundColor:
  //                 selectedCategoryIndex == index ? WARNA_SEKUNDER : WARNA_WHITE,
  //               ...styles.categoryBtn,
  //             }}>
  //             <Text
  //               style={{
  //                 // borderColor:
  //                 //   selectedCategoryIndex == index ? WARNA_UTAMA : WARNA_WHITE,
  //                 fontSize: responsiveFontSize(2.5),
  //                 borderBottomWidth: 1,
  //                 paddingVertical: responsiveWidth(1),
  //                 fontWeight: 'bold',
  //                 textAlign: 'center',
  //                 borderWidth: 1,
  //                 paddingHorizontal: responsiveHeight(2),
  //                 color:
  //                   selectedCategoryIndex == index
  //                     ? WARNA_UTAMA
  //                     : WARNA_SEKUNDER,
  //               }}>
  //               {category.name}
  //             </Text>
  //           </View>
  //         </TouchableOpacity> */
  // }
  // const [dataMaterial, setDataMaterial] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(API_URL);
  //     const json = await response.json();
  //     setDataMaterial(json.data);
  //     // console.log(json);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const renderItem = ({item}) => {
  //   const {nama_barang, stok, harga_proyek, gambar, deskripsi} = item;
  //   return (
  //     <TouchableHighlight
  //       underlayColor={WARNA_WHITE}
  //       activeOpacity={0.9}
  //       // onPress={getData}
  //       onPress={() => navigation.navigate('DetailProduct2', item)}>
  //       <View style={styles.card}>
  //         <View style={styles.spaceImg}>
  //           {/* <Image source={gambar} style={styles.img} /> */}
  //         </View>
  //         <View style={styles.boxPrice}>
  //           <Text style={styles.text2}>Rp {harga_proyek}</Text>
  //           {/* <Rating value={materials.rating} /> */}
  //         </View>
  //         <View style={styles.boxText}>
  //           <Text style={styles.text} isTruncated>
  //             {nama_barang}
  //           </Text>
  //           <Text style={styles.text1}>Sisa stok {stok}</Text>
  //         </View>
  //       </View>
  //     </TouchableHighlight>
  //   );
  // };
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([
    'all',
    'batu',
    'semen',
    'pasir',
    'keramik',
    'genteng',
    'besi',
    'steel',
    'bata',
  ]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'http://192.168.1.3/homeii/web/api/v1/supplier-barang/index',
    );
    const json = await response.json();
    setData(json.data);
    setFilteredData(json.data);
  };

  const filterData = category => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        item.nama_barang.toLowerCase().includes(category.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  };

  const searchFilter = text => {
    setSearchQuery(text);
    if (selectedCategory === 'all') {
      const filtered = data.filter(item =>
        item.nama_barang.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    } else {
      const filtered = data.filter(
        item =>
          item.nama_barang
            .toLowerCase()
            .includes(selectedCategory.toLowerCase()) &&
          item.nama_barang.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  };

  const renderCard = ({item}) => {
    const {nama_barang, stok, harga_proyek, gambar, deskripsi} = item;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('DetailProduct2', item)}>
        <View style={styles.spaceImg}>
          <Image
            source={require('../../assets/Images/batu.jpg')}
            style={styles.img}
          />
        </View>
        <View style={styles.boxPrice}>
          <Text style={styles.text2} isTruncated>
            Rp. {harga_proyek}
          </Text>
          {/* <Rating value={materials.rating} /> */}
        </View>
        <View style={styles.boxText}>
          <Text style={styles.text} isTruncated>
            {nama_barang}
          </Text>
          <Text style={styles.text1}>Stok: {stok}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategory = category => {
    const backgroundColor =
      category === selectedCategory ? '#f0f0f0' : '#ffffff';
    const textColor = category === selectedCategory ? '#000000' : '#999999';
    return (
      <TouchableOpacity
        key={category}
        style={[styles.category, {backgroundColor}]}
        onPress={() => filterData(category)}>
        <Text style={[styles.categoryText, {color: textColor}]}>
          {category}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.boxHeader1}>
          <TextInput
            placeholder="Search material ..."
            placeholderTextColor={WARNA_DISABLE}
            onChangeText={searchFilter}
            value={searchQuery}
            style={styles.textInput}
          />
        </View>
        <View style={styles.box}>
          <View style={styles.categoryBar}>
            <FlatList
              data={categories}
              renderItem={({item}) => renderCategory(item)}
              keyExtractor={item => item}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <FlatList
            style={styles.boxCard}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={filteredData}
            renderItem={renderCard}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Catalogue;

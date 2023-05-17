import {
  // Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_WHITE,
  WARNA_SEKUNDER,
  WARNA_GREEN,
  WARNA_RED,
} from '../../utils/constant';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Rating} from '../../components';
import {url} from '../../utils/url';
// import {ScrollView} from 'react-native-virtualized-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = `${url}supplier-barang/index`;

const Catalogue = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

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

  const [cartCount, setCartCount] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([
    'All',
    'Batu',
    'Semen',
    'Pasir',
    'Keramik',
    'Genteng',
    'Besi',
    'Steel',
    'Bata',
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const response = await fetch(
  //     `${url}supplier-barang/index`,
  //     // 'http://192.168.1.3/homeii/web/api/v1/supplier-barang/index',
  //   );
  //   const json = await response.json();
  //   setData(json.data);
  //   setFilteredData(json.data);
  // };

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setData(json.data);
      setFilteredData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardPress = item => {
    navigation.navigate('DetailProduct3', {item});
  };

  const filterData = category => {
    setSelectedCategory(category);
    if (category === 'All') {
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
    if (selectedCategory === 'All') {
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
    // const {nama_barang, stok, harga_proyek, gambar, deskripsi} = item;
    return (
      <TouchableOpacity
        style={styles.card}
        // onPress={() => navigation.navigate('DetailProduct2', item)}
        onPress={() => handleCardPress(item)}>
        <View style={styles.spaceImg}>
          <Image
            source={require('../../assets/Images/batu.jpg')}
            style={styles.img}
          />
        </View>
        <View style={styles.boxPrice}>
          <Text style={styles.text} isTruncated>
            {item.nama_barang}
          </Text>
          {/* <Rating value={materials.rating} /> */}
        </View>
        <View style={styles.boxText}>
          <Text style={styles.text2} isTruncated>
            Rp. {item.harga_proyek}
          </Text>
          {/* <Text style={styles.text1}>Stok: {stok}</Text> */}
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
      </TouchableOpacity>
    );
  };

  const renderCategory = category => {
    const backgroundColor =
      category === selectedCategory ? WARNA_UTAMA : WARNA_SEKUNDER;
    const textColor = category === selectedCategory ? WARNA_WHITE : WARNA_UTAMA;
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

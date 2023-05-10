import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {WARNA_DISABLE} from '../../utils/constant';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const FilterBySeacrhCategory = () => {
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
    return (
      <TouchableOpacity style={styles.card}>
        <Image
          source={require('../../assets/Images/batu.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>{item.nama_barang}</Text>
        <Text style={styles.price}>Harga: {item.harga_proyek}</Text>
        <Text style={styles.stock}>Stok: {item.stok}</Text>
        {/* <View style={styles.cardDetails}>
        </View> */}
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
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari barang"
          placeholderTextColor={WARNA_DISABLE}
          onChangeText={searchFilter}
          value={searchQuery}
        />
      </View>
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
        data={filteredData}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  // categoryItem: {
  //   paddingHorizontal: responsiveHeight(2),
  //   marginHorizontal: responsiveHeight(1),
  //   borderWidth: 1,
  //   borderRadius: 5,
  // },
  // categoryList: {
  //   color: 'black',
  //   // backgroundColor: 'red',
  //   // paddingHorizontal: responsiveHeight(2),
  // },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'red',
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginBottom: 8,
  },
  stock: {
    fontSize: 12,
    color: 'gray',
  },
  listContainer: {
    padding: 10,
  },
  category: {
    borderWidth: 1,
    paddingHorizontal: responsiveHeight(2),
    marginHorizontal: responsiveHeight(1),
    marginVertical: responsiveWidth(2),
    paddingVertical: responsiveWidth(2),
  },
  categoryText: {
    fontSize: responsiveFontSize(2),
  },
  categoryBar: {},
});

export default FilterBySeacrhCategory;

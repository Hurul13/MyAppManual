import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TextInput} from 'react-native';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
  WARNA_GRAYTUA,
  WARNA_BORDER,
} from '../../utils/constant';

const images = [
  'https://cdn.pixabay.com/photo/2017/06/01/02/18/black-2362261_960_720.jpg',
  // 'https://cdn.pixabay.com/photo/2018/07/13/04/51/marble-3534940_960_720.jpg',
];
const FilterBySeacrh = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'http://192.168.1.3/homeii/web/api/v1/supplier-barang/index',
      );
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderProduct = ({item}) => (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require('../../assets/Images/batu.jpg')}
      />
      <Text style={styles.title}>{item.nama_barang}</Text>
      <Text style={styles.price}>Rp. {item.harga_proyek}</Text>
      <Text style={styles.stock}>Stok: {item.stok}</Text>
    </View>
  );

  const filterData = () => {
    return data.filter(item =>
      item.nama_barang.toLowerCase().includes(searchText.toLowerCase()),
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search"
        placeholderTextColor={WARNA_DISABLE}
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <FlatList
        data={filterData()}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  search: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    color: 'black',
  },
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
});

export default FilterBySeacrh;

import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WARNA_BLACK} from '../../utils/constant';

const CheckoutSelesai = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('checkedItems')
      .then(data => {
        if (data !== null) {
          const checkedItems = JSON.parse(data);
          setCheckedItems(checkedItems);
          const price = checkedItems.reduce(
            (acc, item) => acc + item.harga_proyek * item.quantity,
            0,
          );
          setTotalPrice(price);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require('../../assets/Images/batu.jpg')}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{item.nama_barang}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.name}>{item.harga_proyek}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={checkedItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: {totalPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: WARNA_BLACK,
  },
  quantity: {
    fontSize: 14,
    color: '#888',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: WARNA_BLACK,
  },
});

export default CheckoutSelesai;

import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {url} from '../../utils/url';
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {WARNA_BLACK, WARNA_GRAYTUA, WARNA_GREEN} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckoutAddress = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch(`${url}supplier-barang/index`)
      .then(response => response.json())
      .then(json => setData(json.data))
      .catch(error => console.error(error));
  }, []);

  const handleCardClick = item => {
    navigation.navigate('CheckoutShipping', {item});
  };

  // const handleCartClick = () => {
  //   navigation.navigate('CheckoutPayment');
  // };

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

  const handleAddToCart = () => {
    AsyncStorage.getItem('cart')
      .then(data => {
        if (data !== null) {
          const cart = JSON.parse(data);
          cart.push({...item, quantity});
          AsyncStorage.setItem('cart', JSON.stringify(cart))
            .then(() => {
              setCartCount(cart.length);
              navigation.navigate('CheckoutPayment');
            })
            .catch(error => console.error(error));
        } else {
          const cart = [{...item, quantity}];
          AsyncStorage.setItem('cart', JSON.stringify(cart))
            .then(() => {
              setCartCount(cart.length);
              navigation.navigate('CheckoutPayment');
            })
            .catch(error => console.error(error));
        }
      })
      .catch(error => console.error(error));
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardClick(item)}>
      <Image
        style={styles.image}
        source={require('../../assets/Images/batu.jpg')}
      />
      <Text style={styles.name}>{item.nama_barang}</Text>
      <Text style={styles.price}>Price: {item.harga_proyek}</Text>
      <Text style={styles.stock}>Stock: {item.stok}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.cart}
        // onPress={handleCartClick}
        onPress={() => navigation.navigate('CheckoutPayment')}>
        <Text style={styles.cartText}>{cartCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f2f2f2',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: WARNA_BLACK,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: WARNA_GRAYTUA,
  },
  stock: {
    fontSize: 16,
    marginTop: 5,
    color: WARNA_GREEN,
  },
  cart: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default CheckoutAddress;

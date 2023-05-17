import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import {WARNA_BLACK, WARNA_GRAYTUA, WARNA_GREEN} from '../../utils/constant';

const CheckoutShipping = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const route = useRoute();
  const {item} = route.params;

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

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/Images/batu.jpg')}
      />
      <Text style={styles.name}>{item.nama_barang}</Text>
      <Text style={styles.price}>Price: {item.harga_proyek}</Text>
      <Text style={styles.description}>{item.deskripsi}</Text>
      <Text style={styles.stock}>Stock:</Text>
      <NumericInput
        value={quantity}
        onChange={setQuantity}
        minValue={1}
        maxValue={item.stok}
        totalWidth={200}
        totalHeight={50}
        iconSize={25}
        step={1}
        valueType="real"
        rounded
        textColor="#B0228C"
        iconStyle={{color: 'white'}}
        rightButtonBackgroundColor="#B0228C"
        leftButtonBackgroundColor="#B0228C"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cart}
        onPress={() => navigation.navigate('CheckoutPayment')}>
        <Text style={styles.cartText}>{cartCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  description: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: WARNA_BLACK,
  },
  stock: {
    fontSize: 16,
    marginTop: 10,
    color: WARNA_GREEN,
  },
  button: {
    backgroundColor: '#B0228C',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
});

export default CheckoutShipping;

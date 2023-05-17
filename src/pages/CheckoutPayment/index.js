import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NumericInput from 'react-native-numeric-input';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  WARNA_BLACK,
  WARNA_GRAYTUA,
  WARNA_SILVER,
  WARNA_UNGUPINK,
  WARNA_WHITE,
} from '../../utils/constant';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const CheckoutPayment = ({navigation}) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('cart')
      .then(data => {
        if (data !== null) {
          const cart = JSON.parse(data);
          setCart(cart);
          const price = cart.reduce(
            (acc, item) => acc + item.harga_proyek * item.quantity,
            0,
          );
          setTotalPrice(price);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = id => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleCheckout = () => {
    const checkedItems = cart.filter(item => item.checked);
    AsyncStorage.setItem('checkedItems', JSON.stringify(checkedItems));
    navigation.navigate('CheckoutSelesai');
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require('../../assets/Images/batu.jpg')}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{item.nama_barang}</Text>
        <Text style={styles.price}>Price: {item.harga_proyek}</Text>
        <NumericInput
          value={item.quantity}
          onChange={value => {
            const newCart = cart.map(cartItem => {
              if (cartItem.id === item.id) {
                cartItem.quantity = value;
              }
              return cartItem;
            });
            setCart(newCart);
            AsyncStorage.setItem('cart', JSON.stringify(newCart));
            const price = newCart.reduce(
              (acc, item) => acc + item.harga_proyek * item.quantity,
              0,
            );
            setTotalPrice(price);
          }}
          totalWidth={80}
          totalHeight={30}
          minValue={1}
          step={1}
          valueType="real"
          rounded
          textColor="#B0228C"
          iconStyle={{color: 'white'}}
          rightButtonBackgroundColor="#B0228C"
          leftButtonBackgroundColor="#B0228C"
        />
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.checklist}
        onPress={() => {
          const newCart = cart.map(cartItem => {
            if (cartItem.id === item.id) {
              cartItem.checked = !cartItem.checked;
            }
            return cartItem;
          });
          setCart(newCart);
          AsyncStorage.setItem('cart', JSON.stringify(newCart));
        }}>
        {item.checked ? (
          <Icon name="check-square-o" size={20} color="green" />
        ) : (
          <Icon name="square-o" size={20} color="grey" />
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: {totalPrice}</Text>
        <TouchableOpacity style={styles.checkout} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
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
  price: {
    fontSize: 14,
    color: WARNA_GRAYTUA,
  },
  total: {
    backgroundColor: WARNA_SILVER,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: responsiveHeight(2),
  },
  totalText: {
    color: WARNA_BLACK,
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    textAlign: 'center',
    paddingLeft: responsiveHeight(2),
  },
  checkout: {
    backgroundColor: WARNA_UNGUPINK,
    padding: 8,
  },
  checkoutText: {
    color: WARNA_WHITE,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});
export default CheckoutPayment;

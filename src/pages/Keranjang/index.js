import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {Button, Text} from 'native-base';
import styles from './Styles';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  WARNA_DISABLE,
  WARNA_GRAYTUA,
  WARNA_SEKUNDER,
  WARNA_UTAMA,
  WARNA_DEEPYELLOW,
  WARNA_WHITE,
  WARNA_BORDER,
} from '../../utils/constant';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from '../../utils/url';

const Keranjang5 = ({navigation}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedSupplierIds, setSelectedSupplierIds] = useState([]);

  const onRefresh = () => {
    fetchData();
  };

  const fetchData = async () => {
    setRefreshing(true);
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(`${url}supplier-barang/list-keranjang`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        // Update the cart items with the quantity from the NumericInput
        const updatedCart = data.data.map(item => {
          const existingCartItem = cart.find(
            cartItem => cartItem.id === item.id,
          );
          if (existingCartItem) {
            item.quantity = existingCartItem.quantity;
          }
          return item;
        });

        console.log(data);
        setCart(updatedCart);
      } else {
        console.log('Error fetching cart items');
      }
    } catch (error) {
      console.log('Error fetching cart items', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const updatedCart = await AsyncStorage.getItem('cart');
      if (updatedCart) {
        setCart(JSON.parse(updatedCart));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem('cart', JSON.stringify(cart));
      } catch (error) {
        console.log('Error saving cart data', error);
      }
    };

    saveData();
  }, [cart]);

  useEffect(() => {
    const price = cart.reduce(
      (acc, item) =>
        item.checked ? acc + item.harga_satuan * item.quantity : acc,
      0,
    );
    setTotalPrice(price);
  }, [cart]);

 const handleDelete = async (id, kode_unik, quantity) => {
  const newCart = cart.filter(item => item.id !== id);
  setCart(newCart);
  AsyncStorage.setItem('cart', JSON.stringify(newCart));

  const priceReduction = quantity * cart.find(item => item.id === id).harga_satuan;
  setTotalPrice(prevTotalPrice => prevTotalPrice - priceReduction);

  console.log(newCart, 'sukses delete');
  ToastAndroid.show('Berhasil hapus', ToastAndroid.SHORT);

  try {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`${url}supplier-barang/hapus-keranjang?uniq=${kode_unik}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log('Error deleting item from cart');
    }
  } catch (error) {
    console.log('Error deleting item from cart', error);
  }
};


 const handleToggleChecked = (id, checked, quantity, supplier_barang_id) => {
  const newCart = cart.map(item => {
    if (item.id === id) {
      item.checked = !checked;

      if (item.quantity > item.stok) {
        item.quantity = item.stok;
      }
    }
    return item;
  });

  setCart(newCart);
  console.log(newCart)
  AsyncStorage.setItem('cart', JSON.stringify(newCart));

  if (checked) {
    setSelectedSupplierIds(prevIds =>
      prevIds.filter(supplierId => supplierId !== supplier_barang_id),
    );
  } else {
    setSelectedSupplierIds(prevIds => [...prevIds, supplier_barang_id]);
  }
};


  const handleQuantityChange = async (kodeUnik, value) => {
  try {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.kode_unik === kodeUnik) {
        const updatedQuantity = Math.max(1, value);
        cartItem.quantity = updatedQuantity;
      }
      return cartItem;
    });

    setCart(updatedCart);
    console.log(updatedCart)
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  } catch (error) {
    console.error('Error updating quantity:', error);
  }
};


  // ...

  const renderItem = ({item}) => {
    return (
      <View style={[styles.card, styles.elevation]}>
        <View style={styles.spaceImg}>
          <Image source={{uri: item.gambar}} style={styles.img} />
        </View>
        <View style={styles.space1}>
          <View style={styles.textContainer}>
            <Text isTruncated style={styles.nama}>
              {item.nama_barang}
            </Text>
            <Text style={styles.harga}>Rp {item.harga_satuan}</Text>
            <View style={styles.space3}>
              <NumericInput
                value={item.quantity}
                onChange={value => {
                  const newCart = cart.map(cartItem => {
                    if (cartItem.id === item.id) {
                      const updatedQuantity = Math.max(1, value); // Ensure quantity is at least 1
                      handleQuantityChange(cartItem.kode_unik, updatedQuantity); // Call handleQuantityChange function
                      cartItem.quantity = updatedQuantity; // Update quantity in local state
                    }
                    return cartItem;
                  });
                  setCart(newCart);
                }}
                minValue={1}
                maxValue={item.stok}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                rounded
                borderColor={WARNA_DEEPYELLOW}
                valueType="real"
                textColor={WARNA_SEKUNDER}
                iconStyle={{color: WARNA_SEKUNDER}}
                rightButtonBackgroundColor={WARNA_UTAMA}
                leftButtonBackgroundColor={WARNA_UTAMA}
                // initValue={1} // Add this prop to set the initial value to 1
              />

              <View style={styles.space2}>
                <View style={styles.checkbox}>
                  <TouchableOpacity
                    onPress={() =>
                      handleToggleChecked(
                        item.id,
                        item.checked,
                        item.quantity,
                        item.supplier_barang_id,
                      )
                    }>
                    {item.checked ? (
                      <Icon name="check-square-o" size={20} color="green" />
                    ) : (
                      <Icon name="square-o" size={20} color="grey" />
                    )}
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => handleDelete(item.id, item.kode_unik)}
                  style={styles.deleteButton}>
                  <Icon name="trash" size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };


const handleCheckout = async () => {
  const checkedItems = cart.filter(item => item.checked);
  const checkedSupplierIds = selectedSupplierIds;

  for (const supplierId of checkedSupplierIds) {
    try {
      const response = await fetch(`${url}supplier-barang/view?id=${supplierId}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Supplier data:', data);
        // Process the response data as needed
      } else {
        console.log('Error fetching supplier data');
      }
    } catch (error) {
      console.log('Error fetching supplier data', error);
    }
  }

  const updatedCart = cart.filter(item => !checkedSupplierIds.includes(item.supplier_barang_id));
  setCart(updatedCart);
  AsyncStorage.setItem('cart', JSON.stringify(updatedCart));

  await AsyncStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  await AsyncStorage.setItem('selectedSupplierIds', JSON.stringify(checkedSupplierIds));
  await AsyncStorage.setItem('totalPrice', JSON.stringify(totalPrice));

  ToastAndroid.show('Order', ToastAndroid.SHORT);
  navigation.navigate('TambahAlamat');

  for (const supplierId of checkedSupplierIds) {
    AsyncStorage.setItem('supplier_barang_id', supplierId.toString())
      .then(() => {
        console.log('Data supplier_barang_id disimpan');
      })
      .catch(error => {
        console.error('Terjadi kesalahan saat menyimpan data:', error);
      });
  }
};



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.judulBar}>Keranjang</Text>
      </View>
      <View style={styles.box}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
        <View style={styles.bottom}>
          <View style={styles.bottomTotal}>
            <Text style={styles.totalHarga1}>Total Harga</Text>
            <Text style={styles.totalHarga}>Rp. {totalPrice}</Text>
          </View>
          <TouchableOpacity
            onPress={handleCheckout}
            style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Keranjang5;

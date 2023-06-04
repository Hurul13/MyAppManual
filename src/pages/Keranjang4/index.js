import React, {useState, useEffect} from 'react';
import {
  View,
  // Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  RefreshControl,
} from 'react-native';
import {Button, Center, Text, HStack} from 'native-base';
import styles from './Styles';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {url} from '../../utils/url';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
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
import {Buttone} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

const Keranjang4 = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  // const [data, setData] = useState([]);
  // const [selectedItems, setSelectedItems] = useState([]);
  // const [totalHarga, setTotalHarga] = useState(0);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(URL);
  //     const json = await response.json();
  //     setData(json.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleDeleteItem = id => {
  //   const newData = data.filter(item => item.id !== id);
  //   setData(newData);
  //   setSelectedItems(selectedItems.filter(itemId => itemId !== id));
  //   setTotalHarga(totalHarga - data.find(item => item.id === id).harga_proyek);
  // };

  // const handleCheckItem = (id, harga, stok) => {
  //   if (selectedItems.includes(id)) {
  //     setSelectedItems(selectedItems.filter(itemId => itemId !== id));
  //     setTotalHarga(totalHarga - harga * stok);
  //   } else {
  //     setSelectedItems([...selectedItems, id]);
  //     setTotalHarga(totalHarga + harga);
  //   }
  // };

  const [selectedItems, setSelectedItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Perform your refresh action here
    fetchData(); // Example: Call your fetchData function to fetch the latest data
  };

  // useEffect(() => {
  //   AsyncStorage.getItem('cart')
  //     .then(data => {
  //       if (data !== null) {
  //         const cart = JSON.parse(data);
  //         setCart(cart);
  //       }
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setRefreshing(true);
    AsyncStorage.getItem('cart')
      .then(data => {
        if (data !== null) {
          const cart = JSON.parse(data);
          setCart(cart);
        }
        setRefreshing(false);
      })
      .catch(error => {
        console.error(error);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    const price = cart.reduce(
      (acc, item) =>
        item.checked ? acc + item.harga_proyek * item.quantity : acc,
      0,
    );
    setTotalPrice(price);
  }, [cart]);

  const handleDelete = id => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
    ToastAndroid.show('Berhasil hapus', ToastAndroid.SHORT);
  };

  const handleToggleChecked = id => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const renderItem = ({item}) => {
    // const {id, gambar, harga_proyek, nama_barang, stok} = item;
    // const isSelected = selectedItems.includes(id);

    return (
      <View style={[styles.card, styles.elevation]}>
        <View style={styles.spaceImg}>
          <Image
            // source={require('../../assets/Images/batu.jpg')}
            source={{uri: item.gambar}}
            // source={item.gambar}
            // source={{uri: item.gambar}}
            style={styles.img}
          />
        </View>
        <View style={styles.space1}>
          <View style={styles.textContainer}>
            <Text isTruncated style={styles.nama}>
              {item.nama_barang}
            </Text>
            <Text style={styles.harga}>Rp {item.harga_proyek}</Text>
            <View style={styles.space3}>
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
              />
              <View style={styles.space2}>
                <View style={styles.checkbox}>
                  <TouchableOpacity
                    // style={styles.checklist}
                    onPress={() => handleToggleChecked(item.id)}>
                    {item.checked ? (
                      <Icon name="check-square-o" size={20} color="green" />
                    ) : (
                      <Icon name="square-o" size={20} color="grey" />
                    )}
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => handleDelete(item.id)}
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

  const handleCheckout = () => {
    const checkedItems = cart.filter(item => item.checked);
    AsyncStorage.setItem('checkedItems', JSON.stringify(checkedItems));
    ToastAndroid.show('Order', ToastAndroid.SHORT);
    navigation.navigate('TambahAlamat');
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
            // onPress={() => console.log('checkout')}
            onPress={handleCheckout}
            style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Keranjang4;

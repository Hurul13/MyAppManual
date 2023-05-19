import {
  // Text,
  View,
  Image,
  // ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Button, Center, Text, HStack} from 'native-base';

import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import material from '../../utils/material';
import {Buttone} from '../../components';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
  WARNA_GRAYTUA,
  WARNA_BORDER,
  WARNA_DEEPYELLOW,
  WARNA_RED,
} from '../../utils/constant';
import {ScrollView} from 'react-native-virtualized-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Midtrans} from 'midtrans-react-native';

const Checkout2 = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [shippingPrice, setShippingPrice] = useState(10);
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

  // useEffect(() => {
  //   const totalPrice = cart.reduce(
  //     (acc, item) => acc + item.harga_proyek * item.quantity,
  //     0,
  //   );
  //   setTotalPrice(totalPrice);
  // }, [cart]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.spaceImg}>
          <Image
            source={require('../../assets/Images/batu.jpg')}
            style={styles.img}
          />
        </View>
        <View style={styles.space1}>
          <View style={styles.textContainer}>
            <Text isTruncated style={styles.nama}>
              {item.nama_barang}
            </Text>
            <Text style={styles.harga}>Rp {item.harga_proyek}</Text>
            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
          </View>
        </View>
      </View>
    );
  };

  // useEffect(() => {
  //   Midtrans.configure({
  //     clientKey: 'SB-Mid-client-X2roVPgN4X-6EOvk', // Ganti dengan client key Midtrans Anda
  //     serverKey: 'SB-Mid-server-tdXIBx0yrHgAgJsJixDx9Sji', // Ganti dengan server key Midtrans Anda
  //     isProduction: false, // Setel ke false untuk menggunakan sandbox environment
  //   });
  // }, []);

  // const handlePayment = async () => {
  //   try {
  //     const token = await Midtrans.createTransactionToken({
  //       orderId: 'ORDER_ID', // Ganti dengan ID pesanan Anda
  //       grossAmount: 100000, // Ganti dengan jumlah total pembayaran
  //     });

  //     // Lakukan pemanggilan API ke server Anda untuk menyimpan token transaksi dan melakukan proses checkout
  //   } catch (error) {
  //     console.log('Error creating transaction token:', error);
  //   }
  // };

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconMaterial
            name="arrow-left"
            size={26}
            style={styles.iconBack}
            onPress={navigation.goBack}
          />
          <Text style={styles.judulBar}>Checkout</Text>
        </View>
        <View style={styles.box}>
          <View style={{paddingTop: responsiveHeight(2)}}>
            <View style={styles.space2}>
              <Text style={styles.text3}>Alamat Pengiriman</Text>
              <TouchableOpacity>
                <Text style={styles.text4}>Ubah</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.space3}>
              <View style={styles.space4}>
                <Text style={styles.text5}>Lorem Ipsum</Text>
                <Text style={styles.text6}>0851234567</Text>
              </View>
              <Text style={styles.text7}>Jln. Mawar Melati Anggrek No 1</Text>
              <Text style={styles.text7}>
                LILY, KOTA BUNGA, INDONESIA, 45678
              </Text>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{marginTop: responsiveHeight(3)}}
            data={checkedItems}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
          <View style={{marginTop: responsiveHeight(2)}}>
            <View style={styles.space2}>
              <Text style={styles.text3}>Pengiriman</Text>
            </View>
            <View style={styles.space5}>
              <Text style={styles.text9}>Pihak HOMEI</Text>
              <Text style={styles.text9}>Rp. {shippingPrice}</Text>
              {/* <IconMaterial
                        name="menu-down"
                        size={26}
                        style={styles.icon}
                      /> */}
            </View>
          </View>

          <View style={{marginTop: responsiveHeight(2)}}>
            <View style={styles.space2}>
              <Text style={styles.text3}>Rincian Pembayaran</Text>
            </View>
            <View style={styles.space7}>
              <View style={styles.space6}>
                <Text style={styles.text10}>Sub-Total Untuk Produk</Text>
                <Text style={styles.text10}>Rp. {totalPrice}</Text>
              </View>
              <View style={styles.space6}>
                <Text style={styles.text10}>Sub-Total Untuk Pengiriman</Text>
                <Text style={styles.text10}>Rp. {shippingPrice}</Text>
              </View>
              <View style={styles.space6}>
                <Text style={styles.text11}>TOTAL PEMBAYARAN</Text>
                <Text style={styles.text11}>
                  Rp. {totalPrice + shippingPrice}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bottomPay}>
              <Buttone
                bg={WARNA_UTAMA}
                color={WARNA_SEKUNDER}
                // onPress={handlePayment}
                onPress={() => navigateTo('CheckoutBerhasil')}
                mt={5}
                mx={responsiveHeight(3)}>
                BAYAR
              </Buttone>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout2;

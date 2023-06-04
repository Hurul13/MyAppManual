import {
  // Text,
  View,
  Image,
  // ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
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
import {url} from '../../utils/url';

const Checkout2 = ({navigation, route}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const {address} = route.params;

  const [shippingPrice, setShippingPrice] = useState(10);
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

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

  const onRefresh = () => {
    setRefreshing(true);
    // Perform the data fetching here
    // For example, refetch the checked items and update the total price
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
      .catch(error => console.error(error))
      .finally(() => setRefreshing(false));
  };

  // useEffect(() => {
  //   const totalPrice = cart.reduce(
  //     (acc, item) => acc + item.harga_proyek * item.quantity,
  //     0,
  //   );
  //   setTotalPrice(totalPrice);
  // }, [cart]);

  const renderItem = ({item}) => {
    return (
      <View style={[styles.card, styles.elevation]}>
        <View style={styles.spaceImg}>
          <Image
            // source={require('../../assets/Images/batu.jpg')}
            // source={item.gambar}
            source={{uri: item.gambar}}
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
            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.all}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
              <TouchableOpacity
                onPress={() => navigation.navigate('TambahAlamat')}>
                <Text style={styles.text4}>Ubah</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.space3}>
              <View style={styles.space4}>
                <Text style={styles.text5}>{address.nama_penerima}</Text>
                <Text style={styles.text6}>{address.nomor_penerima}</Text>
              </View>
              <Text style={styles.text7}>{address.alamat_penerima}</Text>
              <Text style={styles.text7}>
                {address.provinsi_id}, {address.kota_id}, {address.kecamatan_id}
                , {address.desa_id}, {address.kode_pos}
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
          {/* untuk pengiriman */}
          {/* <View style={{marginTop: responsiveHeight(2)}}>
            <View style={styles.space2}>
              <Text style={styles.text3}>Pengiriman</Text>
            </View>
            <View style={styles.space5}>
              <Text style={styles.text9}>Pihak HOMEI</Text>
              <Text style={styles.text9}>Rp. {shippingPrice}</Text>
            </View>
          </View> */}

          <View style={{marginTop: responsiveHeight(2)}}>
            <View style={styles.space2}>
              <Text style={styles.text3}>Total Pembayaran</Text>
            </View>
            <View style={styles.space7}>
              <View style={styles.space6}>
                <Text style={styles.text10}>Total Pembayaran</Text>
                <Text style={styles.text11}>Rp. {totalPrice}</Text>
              </View>
              {/* total pengiriman */}
              {/* <View style={styles.space6}>
                <Text style={styles.text10}>Sub-Total Untuk Pengiriman</Text>
                <Text style={styles.text10}>Rp. {shippingPrice}</Text>
              </View> */}
              {/* <View style={styles.space6}>
                <Text style={styles.text11}>TOTAL PEMBAYARAN</Text>
                <Text style={styles.text11}>
                  Rp. {totalPrice + shippingPrice}
                </Text>
                <Text style={styles.text11}>Rp. {totalPrice}</Text>
              </View> */}
            </View>
            <TouchableOpacity style={styles.bottomPay}>
              <Buttone
                bg={WARNA_UTAMA}
                color={WARNA_SEKUNDER}
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

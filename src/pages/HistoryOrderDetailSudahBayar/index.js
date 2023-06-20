import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ToastAndroid, RefreshControl, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from '../../utils/url';
import { WARNA_BLACK, WARNA_BLUE, WARNA_BORDER, WARNA_GRAYTUA, WARNA_GREEN, WARNA_RED, WARNA_SEKUNDER, WARNA_SILVER, WARNA_UTAMA, WARNA_WHITE } from '../../utils/constant';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const HistoryOrderDetailSudahBayar = ({ navigation, route }) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const { invoice_id } = route.params;
  const [orderData, setOrderData] = useState(null);
  const [orderDataAddress, setOrderDataAddress] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [totalPayment, setTotalPayment] = useState(0); // Initialize totalPayment
  const [redirectUrl, setRedirectUrl] = useState(''); // Initialize redirectUrl
  let calculatedTotalPayment = 0; // Declare and initialize calculatedTotalPayment

  useEffect(() => {
    fetchOrderData();
    fetchOrderAddress();
  }, []);

  // alamat
  const fetchOrderAddress = async (userAddressId) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(
        `${url}user-address/view-address-id?id=${userAddressId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      // console.log('respon alamat', data);
      setOrderDataAddress(data.data); // Set the address data in the state variable
      console.log('data alamat:', data.data);
      // setOrderData(data.data);
      // console.log('data alamat:', data.data);
    } catch (error) {
      console.log(error);
    }
  };


  // get order
  const fetchOrderData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(`${url}order-product/view-order-by-invoice?invoice_id=${invoice_id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setOrderData(data.data);
      console.log('data get invoice_id: ', data.data);
      const userAddressId = data.data.order[0].user_address_id; // Access user_address_id from the order array
      console.log('fetch order address: ', userAddressId);
      fetchOrderAddress(userAddressId);

    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = async () => {
    try {
      const token = await AsyncStorage.getItem('token'); // Get the token from AsyncStorage

      const response = await fetch(
        `${url}order-product/cancel-order?invoice_id=${invoice_id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();
      console.log(data);
      ToastAndroid.show('Berhasil batalkan', ToastAndroid.SHORT);
      navigation.navigate('HistoryOrder');
    } catch (error) {
      console.error(error);
    }
  };

  if (!orderData) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const {
    // user_address_id,
    order,
  } = orderData;

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchOrderData();
    setRefreshing(false);
  };

  // Render address if available
  const renderAddress = () => {
    if (orderDataAddress) {
      const { alamat_penerima, desa_id, kecamatan_id, kode_pos, kota_id, nama_penerima, nomor_penerima, provinsi_id } = orderDataAddress;
      return (
        <View style={styles.card}>
          <Icon name="home" size={20} color="grey" style={styles.icon} />
          <View style={styles.addressInfo}>
            <View style={{ flexDirection: 'row', }}>
              <Text style={styles.addressText}>{nama_penerima}   |   {nomor_penerima}</Text>
              {/* <Text style={styles.addressText}>{nomor_penerima}</Text> */}
            </View>
            <Text style={styles.addressText}>{alamat_penerima}</Text>
            <Text style={styles.addressText}>{provinsi_id}, {kota_id}, {kecamatan_id}, {desa_id}, {kode_pos} </Text>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <ScrollView style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.title}>Detail History</Text>
      </View>
      <View style={styles.content}>
        <View style={{ marginBottom: responsiveHeight(1.5) }}>
          <Text style={styles.subtitle}>Alamat Pengiriman</Text>
          {renderAddress()}
        </View>
        <View style={{ marginBottom: responsiveHeight(1.5) }}>
          <Text style={styles.subtitle}>Produk yang Dibeli</Text>
          {order.map((item, index) => {
            const subtotal = item.subtotal * item.jumlah;
            calculatedTotalPayment += subtotal; // Add to calculatedTotalPayment
            return (
              <View key={index} style={styles.card}>
                <Image source={{ uri: item.gambar }} style={styles.productImage} />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.nama_barang}</Text>
                  <Text style={styles.productPrice}>Harga Satuan: Rp {item.harga_satuan}</Text>
                  <Text style={styles.productQuantity}>Jumlah: {item.jumlah}</Text>
                  <Text style={styles.productSubtotal}>Subtotal: Rp {subtotal}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <Text style={styles.subtitle}>Total Pembayaran</Text>
        <View style={styles.card}>
          <Text style={styles.totalLabel}>Total Pembayaran:</Text>
          <Text style={styles.totalPrice}>Rp {calculatedTotalPayment}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCancel}>
          <Text style={styles.checkoutButtonText}>BATALKAN</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default HistoryOrderDetailSudahBayar;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: WARNA_UTAMA,
  },
  iconBack: {
    color: WARNA_BLACK,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    color: WARNA_BLACK,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: WARNA_BLACK,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  // addressInfo: {
  //   flex: 1,
  // },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: WARNA_BLACK
  },
  addressText: {
    // fontSize: responsiveFontSize(1.8),
    fontSize: 14,
    color: WARNA_SEKUNDER,
  },
  addressTextNama: {
    fontSize: responsiveFontSize(2.1),
    color: WARNA_SEKUNDER,
    fontWeight: '700',
    marginRight: responsiveHeight(1)
  },
  addressTextNo: {
    fontSize: responsiveFontSize(2.1),
    color: WARNA_SEKUNDER,
    // fontWeight: '700',
    marginRight: responsiveHeight(2),
    fontStyle: 'italic',
    borderLeftWidth: 0.5,
    paddingHorizontal: responsiveHeight(1),
    borderColor: WARNA_BORDER

  },
  addressTextRumah: {
    fontSize: responsiveFontSize(1.6),
    color: WARNA_SEKUNDER,
    marginBottom: responsiveHeight(0.3),
    marginTop: responsiveHeight(1)
    // marginVertical: responsiveHeight(1)
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  productQuantity: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  productSubtotal: {
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#555',
    marginTop: 20,
  },
  totalLabel: {
    flex: 1,
    fontSize: 18,
    color: '#555',
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    color: '#555',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: WARNA_RED,
    paddingVertical: responsiveHeight(1.6),
    paddingHorizontal: 20,
    borderRadius: 50 / 2,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: WARNA_WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
};

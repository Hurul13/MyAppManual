import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  WARNA_BLACK,
  WARNA_BLUE,
  WARNA_BORDER,
  WARNA_GRAYTUA,
  WARNA_GREEN,
  WARNA_RED,
  WARNA_UTAMA,
  WARNA_WHITE
} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from '../../utils/url';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const HistoryOrder = ({ navigation }) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState('Belum bayar');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersByInvoice();
  }, []);

  const getOrdersByInvoice = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const user_id = await AsyncStorage.getItem('user_id');
      const response = await fetch(
        `${url}invoice/view-order-by-user-id?user_id=${user_id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setOrders(data.data.orders);
      console.log('data get user_id:', data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredOrders = Array.from(new Set(orders.map(order => order.invoice.invoice_code)))
    .map(invoiceCode => {
      return orders.find(order => order.invoice.invoice_code === invoiceCode);
    })
    .filter(order => {
      if (filter === 'Belum bayar') {
        return order.invoice.payment_id === 1 && order.order_product.status_pesanan === 0;
      } else if (filter === 'Sudah bayar') {
        return order.invoice.payment_id === 2 && order.order_product.status_pesanan === 0;
      } else if (filter === 'Dibatalkan') {
        return order.order_product.status_pesanan === 1;
      }
      return true;
    });

  const getOrderStatusColor = (order) => {
    if (order.invoice.payment_id === 1 && order.order_product.status_pesanan === 0) {
      return WARNA_UTAMA;
    } else if (order.invoice.payment_id === 2 && order.order_product.status_pesanan === 0) {
      return WARNA_GREEN;
    } else if (order.order_product.status_pesanan === 1) {
      return WARNA_RED;
    }
    return 'black';
  };

  const handleOrderPress = (order) => {
    if (filter === 'Belum bayar') {
      navigation.navigate('HistoryOrderDetailBelumBayar', { invoice_id: order.invoice.id });
    } else if (filter === 'Sudah bayar') {
      navigation.navigate('HistoryOrderDetailSudahBayar', { invoice_id: order.invoice.id });
    } else if (filter === 'Dibatalkan') {
      navigation.navigate('HistoryOrderDetailDibatalkan', { invoice_id: order.invoice.id });
    }
    console.log('invoice_id: ', order.invoice.id)
  };

  const onRefresh = () => {
    setRefreshing(true);
    getOrdersByInvoice();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={styles.all}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigateTo('Profile')}
          // onPress={navigation.goBack}
          >
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.judulBar}>Riwayat Transaksi</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={[styles.filterButton, filter === 'Belum bayar' && styles.activeFilterButton]}
              onPress={() => handleFilter('Belum bayar')}
            >
              <Text style={styles.filterButtonText}>Belum Bayar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, filter === 'Sudah bayar' && styles.activeFilterButton]}
              onPress={() => handleFilter('Sudah bayar')}
            >
              <Text style={styles.filterButtonText}>Sudah Bayar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, filter === 'Dibatalkan' && styles.activeFilterButton]}
              onPress={() => handleFilter('Dibatalkan')}
            >
              <Text style={styles.filterButtonText}>Batalkan</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {filteredOrders.map((order, index) => (
              <TouchableOpacity
                key={index}
                style={styles.orderContainer}
                onPress={() => handleOrderPress(order)}
              >
                <Image source={{ uri: order.supplier_barang.gambar }} style={styles.img} />
                <View style={{
                  borderColor: WARNA_BLACK,
                  width: '73%',
                  justifyContent: 'space-between'
                }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: WARNA_BLACK, fontSize: responsiveFontSize(2), fontWeight: '800' }}>{order.invoice.invoice_code}</Text>
                    <IconMaterial
                      name="eye"
                      size={24}
                      color={WARNA_GRAYTUA}
                    />
                  </View>
                  <Text style={{ color: WARNA_GRAYTUA, paddingVertical: responsiveHeight(1), fontWeight: '500', fontSize: responsiveFontSize(1.9) }}>Total Pembayaran: Rp {order.order_product.subtotal * order.order_product.jumlah}</Text>
                  {/* <Text style={{ color: WARNA_GRAYTUA, paddingVertical: responsiveHeight(1), fontWeight: '500', fontSize: responsiveFontSize(1.9) }}>Tanggal: {order.order_product.subtotal }</Text> */}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{
                      backgroundColor: getOrderStatusColor(order),
                      borderColor: getOrderStatusColor(order),
                      padding: responsiveHeight(0.5),
                      alignItems: 'center',
                      borderRadius: 50 / 2,
                      width: '40%',
                    }}>
                      {filter === 'Belum bayar' && <Text style={{ color: WARNA_BLACK }}>Belum Bayar</Text>}
                      {filter === 'Sudah bayar' && <Text style={{ color: WARNA_WHITE }}>{order.invoice.status}</Text>}
                      {filter === 'Dibatalkan' && <Text style={{ color: WARNA_WHITE }}>Dibatalkan</Text>}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default HistoryOrder;

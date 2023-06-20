import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from '../../utils/url';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ToastAndroid, } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WARNA_BLACK, WARNA_UTAMA } from '../../utils/constant';
import { ScrollView } from 'react-native-virtualized-view';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Checkout3 = ({ navigation, route }) => {
  const [userAddress, setUserAddress] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [invoiceId, setInvoiceId] = useState(null);
  const { id, address } = route.params;


  useEffect(() => {
    getUserAddress();
    // getUserAddressData();
    getCheckedItems();
    getTotalPrice();
  }, []);



  // memanggil data alamat dari halaman tambahAlamat
  const getUserAddress = async () => {
    try {
      if (route.params && route.params.address) {
        const { address } = route.params;
        setUserAddress(address);
        console.log('alamat user: ', address)
        // await AsyncStorage.setItem('addressId', address);
        // console.log('simpan alamat user: ', addressId)
      }
    } catch (error) {
      console.error('Error fetching user address:', error);
    }
  };


  // memanggil data card produk yang di akan di checkout
  const getCheckedItems = async () => {
    try {
      const checkedItemsData = await AsyncStorage.getItem('checkedItems');
      const checkedItemsArray = JSON.parse(checkedItemsData);
      setCheckedItems(checkedItemsArray);
      console.log('card produk: ', checkedItemsArray)
    } catch (error) {
      console.error('Error fetching checked items:', error);
    }
  };

  // memanggil data total harga
  const getTotalPrice = async () => {
    try {
      const totalPriceData = await AsyncStorage.getItem('totalPrice');
      const totalPriceValue = JSON.parse(totalPriceData);
      setTotalPrice(totalPriceValue);
      console.log('total harga: ', totalPriceValue);
    } catch (error) {
      console.error('Error fetching total price:', error);
    }
  };

  // tampilan untuk alamat
  const renderAddressCard = () => {
    return (
      <View style={styles.card}>
        <Icon name="home" size={20} color="grey" style={styles.icon} />
        <View style={styles.addressInfo}>
          {/* <Text style={styles.addressTitle}>Alamat Pengiriman</Text> */}
          {userAddress && (
            <>
              <Text style={styles.addressText}>{userAddress.nama_penerima}  |  {userAddress.nomor_penerima}</Text>
              {/* <Text style={styles.addressText}>{userAddress.nomor_penerima}</Text> */}
              <Text style={styles.addressText}>{userAddress.alamat_penerima}</Text>
              <Text style={styles.addressText}>
                {userAddress.provinsi_id}, {userAddress.kota_id}, {userAddress.kecamatan_id}, {userAddress.desa_id}, {userAddress.kode_pos}
              </Text>
            </>
          )}
        </View>
      </View>
    );
  };

  // tampilan untuk card produk
  const renderProductCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.gambar || '' }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.nama_barang}</Text>
          <Text style={styles.productPrice}>Harga Satuan: Rp {item.harga_satuan}</Text>
          <Text style={styles.productQuantity}>Jumlah: {item.quantity}</Text>
          <Text style={styles.productSubtotal}>Subtotal: Rp {item.subtotal * item.quantity}</Text>
        </View>
      </View>
    );
  };

  // untuk simpan order
  // const handleCreateOrder = async () => {
  //   try {
  //     // Get user ID and token from AsyncStorage
  //     const user_id = await AsyncStorage.getItem('user_id');
  //     const token = await AsyncStorage.getItem('token');

  //     // Get user address, checked items, and supplier_barang_id from AsyncStorage
  //     const addressData = await AsyncStorage.getItem('userAddress');
  //     const checkedItemsData = await AsyncStorage.getItem('checkedItems');
  //     const checkedItemsArray = JSON.parse(checkedItemsData);
  //     const supplierBarangId = checkedItemsArray[0].supplier_barang_id;

  //     // Create the request body
  //     const requestBody = {
  //       // user_id: user_id,
  //       alamat_pengiriman: addressData,
  //       supplier_barang_id: supplierBarangId,
  //       checked_items: checkedItemsArray.map(item => ({
  //         nama_barang: item.nama_barang,
  //         harga_satuan: item.harga_satuan,
  //         quantity: item.quantity,
  //         subtotal: item.subtotal,
  //       })),
  //     };

  //     // Perform the create order API request
  //     const response = await fetch(`${url}order-product/create-order?user_id=${user_id}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(requestBody),
  //     });

  //     if (response.ok) {
  //       ToastAndroid.show('Order created', ToastAndroid.SHORT);
  //       navigation.navigate('HistoryOrder');
  //       console.log('address: ', addressData)
  //       console.log('supplier_barang_id: ', supplierBarangId)
  //       console.log('produk: ', checkedItemsArray)
  //     } else {
  //       // console.error('Error creating order:', response.status);
  //       // Error creating order
  //       const errorData = await response.json();
  //       console.log('address: ', addressData)
  //       console.log('supplier_barang_id: ', supplierBarangId)
  //       console.log('produk: ', checkedItemsArray)
  //       console.error('Error creating order:', errorData);
  //     }
  //   } catch (error) {
  //     console.error('Error creating order:', error);
  //   }
  // };

  // untuk simpan order
  const handleCreateOrder = async () => {
    try {
      // Get user ID and token from AsyncStorage
      const user_id = await AsyncStorage.getItem('user_id');
      const token = await AsyncStorage.getItem('token');

      // Get user address, checked items, and supplier_barang_id from AsyncStorage
      const checkedItemsData = await AsyncStorage.getItem('checkedItems');
      const checkedItemsArray = JSON.parse(checkedItemsData);
      const supplierBarangIds = checkedItemsArray.map(item => item.supplier_barang_id);

      // Create the request body
      const requestBody = checkedItemsArray.map(item => ({
        user_id: user_id,
        user_address_id: userAddress.id,
        supplier_barang_id: item.supplier_barang_id,
        nama_barang: item.nama_barang,
        harga_satuan: item.harga_satuan,
        jumlah: item.quantity,
        subtotal: item.subtotal,
      }));

      console.log(requestBody);
      // Perform the create order API request
      const response = await fetch(`${url}order-product/create-order?user_id=${user_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        ToastAndroid.show('Order created', ToastAndroid.SHORT);
        navigation.navigate('HistoryOrder');
        console.log('sukses')
      } else {
        // Error creating order
        const errorData = await response.json();
        console.error('Error creating order:', errorData);
      }
    } catch (error) {
      console.error('Error data order:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.title}>Checkout</Text>
      </View>
      <View style={styles.content}>
        <View style={{ marginBottom: responsiveHeight(1.5) }}>
          <Text style={styles.subtitle}>Alamat Pengiriman</Text>
          {renderAddressCard()}
        </View>
        <View style={{ marginBottom: responsiveHeight(1.5) }}>

          <Text style={styles.subtitle}>Produk yang Dibeli</Text>
          <FlatList
            data={checkedItems}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <Text style={styles.subtitle}>Total Pembayaran</Text>
        <View style={styles.card}>
          <Text style={styles.totalLabel}>Total Pembayaran:</Text>
          <Text style={styles.totalPrice}>Rp {totalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCreateOrder}>
          <Text style={styles.checkoutButtonText}> SIMPAN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Checkout3;

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
  addressInfo: {
    flex: 1,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 14,
    color: '#555',
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
    backgroundColor: WARNA_UTAMA,
    paddingVertical: responsiveHeight(1.6),
    paddingHorizontal: 20,
    borderRadius: 50 / 2,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: WARNA_BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
};

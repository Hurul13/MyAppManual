import {
  View,
  TouchableOpacity,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {
  Box,
  Pressable,
  Input,
  ScrollView,
  Text,
  VStack,
  FormControl,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { Buttone } from '../../components';
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
  WARNA_BLACK,
  WARNA_RED,
  WARNA_BLUE,
} from '../../utils/constant';
import { url } from '../../utils/url';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TambahAlamat = ({ navigation }) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [refreshing, setRefreshing] = useState(false);
  // const [addresses, setAddresses] = useState([]);
  const [addresses, setAddresses] = useState([]);

  // console.log('addresses:', addresses);

  const fetchAddresses = async () => {
    try {
      const user_id = await AsyncStorage.getItem('user_id');
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(
        `${url}user-address/view-all?user_id=${user_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        setAddresses(data.data);
        await AsyncStorage.setItem('addresses', JSON.stringify(data.data));
        console.log('sukses', data);
      } else {
        console.log('Error fetching addresses:', data);
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };


  useEffect(() => {
    const getSavedAddresses = async () => {
      const savedAddresses = await AsyncStorage.getItem('addresses');
      if (savedAddresses) {
        setAddresses(JSON.parse(savedAddresses));
        console.log('sukses simpan alamat: ', savedAddresses)
      }
    };

    fetchAddresses();
    getSavedAddresses();
  }, []);


  const handleDelete = async (id) => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(`${url}user-address/delete?id=${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        ToastAndroid.show('Berhasil hapus alamat', ToastAndroid.SHORT);
        setAddresses(addresses.filter((address) => address.id !== id));

        // Remove the deleted address from AsyncStorage
        const savedAddresses = await AsyncStorage.getItem('addresses');
        if (savedAddresses) {
          const parsedAddresses = JSON.parse(savedAddresses);
          const updatedAddresses = parsedAddresses.filter(
            (address) => address.id !== id
          );
          await AsyncStorage.setItem(
            'addresses',
            JSON.stringify(updatedAddresses)
          );
        }
      } else {
        console.log('Error deleting address:', data);
      }
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };


  const onRefresh = async () => {
    setRefreshing(true);
    await fetchAddresses();
    setRefreshing(false);

    const savedAddresses = await AsyncStorage.getItem('addresses');
    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses));
    }
  };



  const handleKlik = (address) => {
    navigation.navigate('Checkout3', { id: address.id, address });
    console.log('barhasil kah? ', address.id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={navigation.goBack}
        // onPress={() => navigateTo('Profile')}

        >
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.judulBar}>Alamat Profil</Text>
      </View>
      <View style={styles.box}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Box mx={responsiveHeight(3)} mt={responsiveHeight(4)}>
            {addresses.map(address => (
              <TouchableOpacity
                key={address.id} // Add this line to set the key
                // onPress={() => navigation.navigate('Checkout3')}
                // onPress={() => navigation.navigate('Checkout3', { address })}
                // onPress={() => navigation.navigate('Checkout3', { id: address.id, address })}
                onPress={() => handleKlik(address)}

              // onPress={() =>
              //   navigation.navigate('Checkout3', {
              //     id: address.id,
              //   })
              // }
              // onPress={() => navigation.navigate('Checkout3', { address: userAddress })}
              >
                <Box
                  borderWidth={0.6}
                  borderRadius={8}
                  borderColor={WARNA_BORDER}
                  shadow={0.9}
                  mb={3}
                  px={responsiveHeight(2)}
                  py={responsiveWidth(3)}>
                  <Box flexDirection={'row'} pb={1}>
                    <View
                      width={'75%'}
                      flexDirection={'row'}
                      alignItems={'center'}>
                      <Text
                        isTruncated
                        fontSize={responsiveFontSize(2.1)}
                        color={WARNA_SEKUNDER}
                        mr={2}
                        fontWeight={700}>
                        {address.nama_penerima}
                      </Text>
                      <Text
                        fontSize={responsiveFontSize(2.1)}
                        color={WARNA_SEKUNDER}
                        italic
                        borderLeftWidth={0.5}
                        borderColor={WARNA_DISABLE}
                        px={responsiveHeight(1)}>
                        {address.nomor_penerima}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <IconMaterial
                        name="delete"
                        size={24}
                        style={{
                          padding: 8,
                          color: WARNA_RED,
                        }}
                        onPress={() => handleDelete(address.id)}
                      />
                      <IconMaterial
                        name="pencil"
                        size={24}
                        style={{
                          padding: 8,
                          color: WARNA_BLUE,
                        }}
                        onPress={() =>
                          navigation.navigate('UpdateAddress', {
                            id: address.id,
                          })
                        }
                      />
                    </View>
                  </Box>
                  <Text>{address.alamat_penerima}</Text>
                  <Text>
                    {address.provinsi_id}, {address.kota_id},{' '}
                    {address.kecamatan_id}, {address.desa_id},{' '}
                    {address.kode_pos}
                  </Text>
                </Box>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{
                backgroundColor: WARNA_UTAMA,
                borderRadius: 50 / 2,
                padding: responsiveHeight(1.4),
                alignItems: 'center',
                marginVertical: responsiveWidth(4),
              }}
              onPress={() => navigation.navigate('NewAddress')}>
              <Text
                style={{
                  color: WARNA_BLACK,
                  fontSize: responsiveFontSize(2),
                  fontWeight: 'bold',
                  paddingVertical: responsiveWidth(0.7),
                }}>
                TAMBAH ALAMAT BARU
              </Text>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </View>
    </View>
  );
};

export default TambahAlamat;

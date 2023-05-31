import {View, TouchableOpacity, ToastAndroid} from 'react-native';
import {
  Box,
  Pressable,
  Input,
  ScrollView,
  Text,
  VStack,
  FormControl,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
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
  WARNA_BLACK,
  WARNA_RED,
  WARNA_BLUE,
} from '../../utils/constant';
import {url} from '../../utils/url';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Address = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [addresses, setAddresses] = useState([]);
  console.log(addresses);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const user_id = await AsyncStorage.getItem('user_id');
        const token = await AsyncStorage.getItem('token');

        fetch(
          // `${url}user-address/index`,
          `${url}user-address/view?user_id=${user_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setAddresses(data.data);
          })
          .catch(error => console.error(error));
      } catch (error) {
        console.error(error);
      }
    };

    fetchAddresses();
  }, []);

  const handleDelete = async id => {
    try {
      const token = await AsyncStorage.getItem('token');

      fetch(`${url}user-address/delete?id=${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          ToastAndroid.show('Berhasil hapus alamat', ToastAndroid.SHORT);
          // Remove deleted address from state
          setAddresses(addresses.filter(address => address.id !== id));
        })
        .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  // const handleUpdate = id => {
  //   navigation.navigate('UpdateAddress', {id});
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.judulBar}>Alamat Profil</Text>
      </View>
      <View style={styles.box}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box mx={responsiveHeight(3)} mt={responsiveHeight(4)}>
            {addresses.map(address => (
              <TouchableOpacity
                key={address.id}
                onPress={() => navigation.navigate('Checkout2', {address})}>
                <Box
                  borderWidth={0.6}
                  borderRadius={8}
                  borderColor={WARNA_BORDER}
                  shadow={0.9}
                  mb={3}
                  px={responsiveHeight(2)}
                  py={responsiveWidth(3)}
                  // w={responsiveWidth(88)}
                  // h={responsiveHeight(11)}
                >
                  <Box
                    flexDirection={'row'}
                    pb={1}
                    // borderWidth={1}
                  >
                    <View
                      width={'75%'}
                      // borderWidth={1}
                      flexDirection={'row'}
                      // justifyContent={'center'}
                      alignItems={'center'}>
                      <Text
                        isTruncated
                        fontSize={responsiveFontSize(2.1)}
                        color={WARNA_SEKUNDER}
                        // borderWidth={1}
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
                        // borderWidth: 1
                      }}>
                      <IconMaterial
                        name="delete"
                        size={24}
                        // color= 'WARNA_RED'
                        style={{
                          // backgroundColor: WARNA_GRAYTUA,
                          padding: 8,
                          color: WARNA_RED,
                        }}
                        onPress={() => handleDelete(address.id)}
                      />
                      <IconMaterial
                        name="pencil"
                        size={24}
                        // color= 'warna'
                        style={{
                          // backgroundColor: WARNA_DISABLE,
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
            {/* <TouchableOpacity onPress={() => navigation.navigate('NewAddress')}>
              <Box
                mt={3}
                borderRadius={7}
                shadow={0.9}
                // px={responsiveHeight(1)}
                // py={responsiveWidth(3)}
                // w={responsiveWidth(88)}
                // h={responsiveHeight(5)}
                py={responsiveWidth(2)}
                borderWidth={0.6}
                flexDirection={'row'}
                borderColor={WARNA_UTAMA}
                bg={WARNA_DEEPYELLOW}
                justifyContent={'center'}
                alignItems={'center'}>
                <IconMaterial
                  name={'plus-circle-outline'}
                  size={17}
                  style={{color: WARNA_RED}}
                />
                <Text color={WARNA_RED} px={responsiveHeight(1)}>
                  Add New Address
                </Text>
              </Box>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={{
                backgroundColor: WARNA_UTAMA,
                borderRadius: 8,
                padding: responsiveHeight(1.4),
                alignItems: 'center',
                marginVertical: responsiveWidth(4),
              }}
              // onPress={handleUpdateProfile}
              onPress={() => navigation.navigate('NewAddress')}>
              <Text
                style={{
                  color: WARNA_BLACK,
                  fontSize: responsiveFontSize(2),
                  fontWeight: 'bold',
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

export default Address;

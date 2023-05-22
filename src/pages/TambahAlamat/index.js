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

const NewAddress = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch(`${url}user-address/index`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAddresses(data.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = id => {
    fetch(`${url}user-address/delete?id=${id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'Bearer BASICAPPMTY4NTErQVB1YzdNUFA1UldhY0VUb3pIMG94_UQHPY_S0hlNWs5UTVnQzBIWUNmUXN4RjVLKzc4Njg0APP',
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
  };

  // const handleUpdate = id => {
  //   navigation.navigate('UpdateAddress', {id});
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.judulBar}>Tambah Alamat</Text>
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
                  borderRadius={7}
                  borderColor={WARNA_GRAYTUA}
                  shadow={0.9}
                  mb={3}
                  px={responsiveHeight(2)}
                  py={responsiveWidth(3)}
                  // w={responsiveWidth(88)}
                  // h={responsiveHeight(11)}
                >
                  <Box flexDirection={'row'} pb={1}>
                    <Text
                      isTruncated
                      fontSize={responsiveFontSize(2.1)}
                      color={WARNA_SEKUNDER}
                      // borderWidth={1}
                      width={'75%'}
                      mr={2}
                      fontWeight={700}>
                      {address.nama_penerima}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
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
                    {/* <Text
              fontSize={responsiveFontSize(2.1)}
              color={WARNA_SEKUNDER}
              italic
              borderLeftWidth={0.5}
              borderColor={WARNA_DISABLE}
              px={responsiveHeight(1)}>
              0851234567
            </Text> */}
                  </Box>
                  <Text>{address.alamat_penerima}</Text>
                  <Text>
                    {address.provinsi_id}, {address.kota_id},{' '}
                    {address.kecamatan_id}, {address.desa_id}
                  </Text>
                </Box>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => navigation.navigate('NewAddress')}>
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
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewAddress;

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
} from '../../utils/constant';
import {url} from '../../utils/url';

const NewAddress = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [namaPenerima, setNamaPenerima] = useState('');
  const [alamatPenerima, setAlamatPenerima] = useState('');
  const [provinsiId, setProvinsiId] = useState('');
  const [kotaId, setKotaId] = useState('');
  const [kecamatanId, setKecamatanId] = useState('');
  const [desaId, setDesaId] = useState('');
  // const [kodePos, setKodePos] = useState('');

  const handleAddAddress = () => {
    fetch(`${url}user-address/create-user-address?user_id=111122`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer BASICAPPMTY4NTErQVB1YzdNUFA1UldhY0VUb3pIMG94_UQHPY_S0hlNWs5UTVnQzBIWUNmUXN4RjVLKzc4Njg0APP',
      },
      body: JSON.stringify({
        nama_penerima: namaPenerima,
        alamat_penerima: alamatPenerima,
        provinsi_id: provinsiId,
        kota_id: kotaId,
        kecamatan_id: kecamatanId,
        desa_id: desaId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        ToastAndroid.show('Berhasil tambah alamat', ToastAndroid.SHORT);
        navigation.navigate('TambahAlamat');
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.judulBar}>New Address</Text>
      </View>
      <View style={styles.box}>
        <Box
        // px={5}
        // h="full"
        // bg={WARNA_WHITE}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            mx={responsiveHeight(2.8)}>
            <VStack space={2}>
              <FormControl>
                <Text
                  style={{
                    marginTop: responsiveHeight(2),
                    marginVertical: responsiveWidth(1),
                    fontSize: responsiveFontSize(1.8),
                    fontWeight: '500',
                  }}>
                  Nama Penerima:
                </Text>
                <Input
                  value={namaPenerima}
                  onChangeText={text => setNamaPenerima(text)}
                  borderWidth={0.2}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
                  // placeholder={}
                  // type={i.type}
                  color={WARNA_SEKUNDER}
                  _focus={{
                    bg: WARNA_DEEPYELLOW,
                    borderColor: WARNA_UTAMA,
                    borderWidth: 1,
                  }}
                  _text={{fontSize: responsiveFontSize(2)}}
                />
                <Text
                  style={{
                    marginTop: responsiveHeight(2),
                    marginVertical: responsiveWidth(1),
                    fontSize: responsiveFontSize(1.8),
                    fontWeight: '500',
                  }}>
                  Alamat Penerima:
                </Text>
                <Input
                  value={alamatPenerima}
                  onChangeText={text => setAlamatPenerima(text)}
                  borderWidth={0.2}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
                  // placeholder={}
                  // type={i.type}
                  color={WARNA_SEKUNDER}
                  _focus={{
                    bg: WARNA_DEEPYELLOW,
                    borderColor: WARNA_UTAMA,
                    borderWidth: 1,
                  }}
                  _text={{fontSize: responsiveFontSize(2)}}
                />
                <Text
                  style={{
                    marginTop: responsiveHeight(2),
                    marginVertical: responsiveWidth(1),
                    fontSize: responsiveFontSize(1.8),
                    fontWeight: '500',
                  }}>
                  Provinsi:
                </Text>
                <Input
                  value={provinsiId}
                  onChangeText={text => setProvinsiId(text)}
                  borderWidth={0.2}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
                  // placeholder={}
                  // type={i.type}
                  color={WARNA_SEKUNDER}
                  _focus={{
                    bg: WARNA_DEEPYELLOW,
                    borderColor: WARNA_UTAMA,
                    borderWidth: 1,
                  }}
                  _text={{fontSize: responsiveFontSize(2)}}
                />
                <Text
                  style={{
                    marginTop: responsiveHeight(2),
                    marginVertical: responsiveWidth(1),
                    fontSize: responsiveFontSize(1.8),
                    fontWeight: '500',
                  }}>
                  Kota:
                </Text>
                <Input
                  value={kotaId}
                  onChangeText={text => setKotaId(text)}
                  borderWidth={0.2}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
                  // placeholder={}
                  // type={i.type}
                  color={WARNA_SEKUNDER}
                  _focus={{
                    bg: WARNA_DEEPYELLOW,
                    borderColor: WARNA_UTAMA,
                    borderWidth: 1,
                  }}
                  _text={{fontSize: responsiveFontSize(2)}}
                />
                <Text
                  style={{
                    marginTop: responsiveHeight(2),
                    marginVertical: responsiveWidth(1),
                    fontSize: responsiveFontSize(1.8),
                    fontWeight: '500',
                  }}>
                  Kecamatan:
                </Text>
                <Input
                  value={kecamatanId}
                  onChangeText={text => setKecamatanId(text)}
                  borderWidth={0.2}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
                  // placeholder={}
                  // type={i.type}
                  color={WARNA_SEKUNDER}
                  _focus={{
                    bg: WARNA_DEEPYELLOW,
                    borderColor: WARNA_UTAMA,
                    borderWidth: 1,
                  }}
                  _text={{fontSize: responsiveFontSize(2)}}
                />
                <Text
                  style={{
                    marginTop: responsiveHeight(2),
                    marginVertical: responsiveWidth(1),
                    fontSize: responsiveFontSize(1.8),
                    fontWeight: '500',
                  }}>
                  Desa:
                </Text>
                <Input
                  value={desaId}
                  onChangeText={text => setDesaId(text)}
                  borderWidth={0.2}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
                  // placeholder={}
                  // type={i.type}
                  color={WARNA_SEKUNDER}
                  _focus={{
                    bg: WARNA_DEEPYELLOW,
                    borderColor: WARNA_UTAMA,
                    borderWidth: 1,
                  }}
                  _text={{fontSize: responsiveFontSize(2)}}
                />
                {/* <Text
                  style={{
                    marginTop: responsiveHeight(2),
                    marginVertical: responsiveWidth(1),
                    fontSize: responsiveFontSize(1.8),
                    fontWeight: '500',
                  }}>
                  Kode Pos:
                </Text>
                <Input
                  value={kodePos}
                  onChangeText={text => setKodePos(text)}
                  borderWidth={0.2}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
                  // placeholder={}
                  // type={i.type}
                  color={WARNA_SEKUNDER}
                  _focus={{
                    bg: WARNA_DEEPYELLOW,
                    borderColor: WARNA_UTAMA,
                    borderWidth: 1,
                  }}
                  _text={{fontSize: responsiveFontSize(2)}}
                /> */}
              </FormControl>
            </VStack>
            <TouchableOpacity>
              <Buttone
                bg={WARNA_UTAMA}
                color={WARNA_SEKUNDER}
                borderWidth={1}
                borderColor={WARNA_BORDER}
                mt={10}
                onPress={handleAddAddress}>
                SUBMIT
              </Buttone>
            </TouchableOpacity>
          </ScrollView>
        </Box>
      </View>
    </View>
  );
};

export default NewAddress;

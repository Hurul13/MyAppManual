import {View, TouchableOpacity, ToastAndroid} from 'react-native';
import {Box, Input, ScrollView, Text, VStack, FormControl} from 'native-base';
import React, {useEffect, useState} from 'react';
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
import styles from './Styles';
import {url} from '../../utils/url';

const UpdateAddress = ({navigation, route}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const {id} = route.params;
  const [address, setAddress] = useState({});

  useEffect(() => {
    fetch(`${url}user-address/index?id=${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAddress(data.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleUpdate = () => {
    fetch(`${url}user-address/update-user-address?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer BASICAPPMTY4NTErUFIranF3eXhEMndOWFBpalNPTzJuRy_PRFid_twSkYwTG9CaGo3RzJZOTdHLWxLUkQrNTYwMjE=APP',
      },
      body: JSON.stringify(address),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigation.goBack();
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.judulBar}>Update Address</Text>
      </View>
      <View style={styles.box}>
        <Box>
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
                  value={address.nama_penerima}
                  onChangeText={text =>
                    setAddress({...address, nama_penerima: text})
                  }
                  borderWidth={0.2}
                  placeholder="Ubah nama penerima"
                  placeholderTextColor={WARNA_GRAYTUA}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
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
                  value={address.alamat_penerima}
                  onChangeText={text =>
                    setAddress({...address, alamat_penerima: text})
                  }
                  placeholder="Ubah alamat penerima"
                  placeholderTextColor={WARNA_GRAYTUA}
                  borderWidth={0.2}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
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
                  value={address.provinsi_id}
                  onChangeText={text =>
                    setAddress({...address, provinsi_id: text})
                  }
                  borderWidth={0.2}
                  placeholder="Ubah provinsi"
                  placeholderTextColor={WARNA_GRAYTUA}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
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
                  value={address.kota_id}
                  onChangeText={text => setAddress({...address, kota_id: text})}
                  borderWidth={0.2}
                  placeholder="Ubah kota"
                  placeholderTextColor={WARNA_GRAYTUA}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
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
                  value={address.kecamatan_id}
                  onChangeText={text =>
                    setAddress({...address, kecamatan_id: text})
                  }
                  borderWidth={0.2}
                  placeholder="Ubah kecamatan"
                  placeholderTextColor={WARNA_GRAYTUA}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
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
                  value={address.desa_id}
                  onChangeText={text => setAddress({...address, desa_id: text})}
                  borderWidth={0.2}
                  placeholder="Ubah desa"
                  placeholderTextColor={WARNA_GRAYTUA}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
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
                  value={address.kode_pos}
                  onChangeText={text =>
                    setAddress({...address, kode_pos: text})
                  }
                  borderWidth={0.2}
                  borderColor={WARNA_UTAMA}
                  bg={WARNA_DEEPYELLOW}
                  py={2}
                  placeholder="Ubah kode pos"
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
                onPress={() => handleUpdate()}>
                UPDATE
              </Buttone>
            </TouchableOpacity>
          </ScrollView>
        </Box>
      </View>
    </View>
  );
};

export default UpdateAddress;

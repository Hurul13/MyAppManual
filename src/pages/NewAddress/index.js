import {
  View,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {Box, Text, VStack} from 'native-base';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [kodePos, setKodePos] = useState('');
  const [nomorPenerima, setNomorPenerima] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const handleAddAddress = async () => {
    try {
      const user_id = await AsyncStorage.getItem('user_id'); // Get the user_id from AsyncStorage
      const token = await AsyncStorage.getItem('token'); // Get the token from AsyncStorage

      const response = await fetch(
        `${url}user-address/create-user-address?id=${user_id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            nama_penerima: namaPenerima,
            alamat_penerima: alamatPenerima,
            provinsi_id: provinsiId,
            kota_id: kotaId,
            kecamatan_id: kecamatanId,
            desa_id: desaId,
            kode_pos: kodePos,
            nomor_penerima: nomorPenerima,
          }),
        },
      );

      const data = await response.json();

      console.log(data);
      ToastAndroid.show('Berhasil tambah alamat', ToastAndroid.SHORT);
      navigation.navigate('TambahAlamat');
    } catch (error) {
      console.error(error);
    }
  };

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   await handleAddAddress();
  //   setRefreshing(false);
  // };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.judulBar}>Alamat Baru</Text>
        </View>
        <View style={styles.box}>
          <View style={styless.containerr}>
            <Text style={styless.label}>Nama Penerima:</Text>
            <TextInput
              style={styless.input}
              placeholder="nama pemerima"
              placeholderTextColor={WARNA_GRAYTUA}
              value={namaPenerima}
              onChangeText={text => setNamaPenerima(text)}></TextInput>

            <Text style={styless.label}>Nomor Telepon Penerima:</Text>
            <TextInput
              style={styless.input}
              placeholder="nomor telepon penerima"
              placeholderTextColor={WARNA_GRAYTUA}
              keyboardType="phone-pad"
              value={nomorPenerima}
              onChangeText={text => setNomorPenerima(text)}
            />

            <Text style={styless.label}> Alamat Penerima:</Text>
            <TextInput
              style={styless.input}
              placeholder="alamat penerima"
              placeholderTextColor={WARNA_GRAYTUA}
              value={alamatPenerima}
              onChangeText={text => setAlamatPenerima(text)}
            />

            <Text style={styless.label}>Provinsi:</Text>
            <TextInput
              style={styless.input}
              placeholder="provinsi"
              placeholderTextColor={WARNA_GRAYTUA}
              value={provinsiId}
              onChangeText={text => setProvinsiId(text)}
            />

            <Text style={styless.label}>Kota:</Text>
            <TextInput
              style={styless.input}
              placeholder="kota"
              placeholderTextColor={WARNA_GRAYTUA}
              value={kotaId}
              onChangeText={text => setKotaId(text)}
            />

            <Text style={styless.label}>Kecamatan:</Text>
            <TextInput
              style={styless.input}
              placeholder="kecamatan"
              placeholderTextColor={WARNA_GRAYTUA}
              value={kecamatanId}
              onChangeText={text => setKecamatanId(text)}
            />

            <Text style={styless.label}>Desa:</Text>
            <TextInput
              style={styless.input}
              placeholder="desa"
              placeholderTextColor={WARNA_GRAYTUA}
              value={desaId}
              onChangeText={text => setDesaId(text)}
            />

            <Text style={styless.label}>Kode Pos:</Text>
            <TextInput
              style={styless.input}
              placeholder="kode pos"
              placeholderTextColor={WARNA_GRAYTUA}
              keyboardType="phone-pad"
              value={kodePos}
              onChangeText={text => setKodePos(text)}
            />

            <TouchableOpacity
              style={{
                backgroundColor: WARNA_UTAMA,
                borderRadius: 50 / 2,
                padding: responsiveHeight(1.4),
                alignItems: 'center',
                marginVertical: responsiveWidth(4),
              }}
              onPress={handleAddAddress}>
              <Text
                style={{
                  color: WARNA_BLACK,
                  fontSize: responsiveFontSize(2),
                  fontWeight: 'bold',
                  paddingVertical: responsiveWidth(0.7),
                }}>
                SIMPAN ALAMAT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await handleAddAddress();
    setRefreshing(false);
  };
};

const styless = StyleSheet.create({
  containerr: {
    flex: 1,
    margin: responsiveHeight(3),
    // padding: 16,
    // backgroundColor: '#FFF',
  },
  label: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginBottom: 6,
    color: WARNA_BLACK,
  },
  input: {
    height: 40,
    borderColor: WARNA_BORDER,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: responsiveHeight(1.5),
    paddingHorizontal: responsiveHeight(2),
    color: WARNA_BLACK,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },
  passwordInput: {
    flex: 1,
  },
  showHideButton: {
    padding: 8,
    marginLeft: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
  showHideButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: WARNA_UTAMA,
    borderRadius: 50 / 2,
    padding: responsiveHeight(1.4),
    alignItems: 'center',
  },
  buttonText: {
    color: WARNA_BLACK,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});

export default NewAddress;

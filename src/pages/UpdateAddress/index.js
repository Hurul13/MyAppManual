import {
  View,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
  TextInput,
  RefreshControl,
} from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdateAddress = ({navigation, route}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [refreshing, setRefreshing] = useState(false);
  const {id} = route.params;
  const [namaPenerima, setNamaPenerima] = useState('');
  const [nomorPenerima, setNomorPenerima] = useState('');
  const [alamatPenerima, setAlamatPenerima] = useState('');
  const [provinsiId, setProvinsiId] = useState('');
  const [kotaId, setKotaId] = useState('');
  const [kecamatanId, setKecamatanId] = useState('');
  const [desaId, setDesaId] = useState('');
  const [kodePos, setKodePos] = useState('');

  const getUserAddressData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      fetch(`${url}user-address/view-address-id?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            const addressData = data.data;
            setNamaPenerima(addressData.nama_penerima);
            setNomorPenerima(addressData.nomor_penerima);
            setAlamatPenerima(addressData.alamat_penerima);
            setProvinsiId(addressData.provinsi_id);
            setKotaId(addressData.kota_id);
            setKecamatanId(addressData.kecamatan_id);
            setDesaId(addressData.desa_id);
            setKodePos(addressData.kode_pos);
          } else {
            ToastAndroid.show('Failed to fetch address data', ToastAndroid.SHORT);
          }
        })
        .catch((error) => {
          console.error(error);
          ToastAndroid.show('An error occurred', ToastAndroid.SHORT);
        });
    } catch (error) {
      console.error(error);
      ToastAndroid.show('An error occurred', ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    getUserAddressData();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const formData = new FormData();
      formData.append('nama_penerima', namaPenerima);
      formData.append('nomor_penerima', nomorPenerima);
      formData.append('alamat_penerima', alamatPenerima);
      formData.append('provinsi_id', provinsiId);
      formData.append('kota_id', kotaId);
      formData.append('kecamatan_id', kecamatanId);
      formData.append('desa_id', desaId);
      formData.append('kode_pos', kodePos);

      fetch(`${url}user-address/update-user-address?id=${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            ToastAndroid.show('Address updated successfully', ToastAndroid.SHORT);
            console.log('Address updated:', data);
            navigation.goBack();
          } else {
            ToastAndroid.show('Failed to update address', ToastAndroid.SHORT);
          }
        })
        .catch((error) => {
          console.error(error);
          ToastAndroid.show('An error occurred', ToastAndroid.SHORT);
        });
    } catch (error) {
      console.error(error);
      ToastAndroid.show('An error occurred', ToastAndroid.SHORT);
    }
  };

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   await handleUpdate();
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
          <Text style={styles.judulBar}>Edit Alamat</Text>
        </View>
        <View style={styles.box}>
          <View style={styless.containerr}>
            <Text style={styless.label}>Nama Penerima:</Text>
            <TextInput
              style={styless.input}
              value={namaPenerima}
        onChangeText={setNamaPenerima}
              placeholder="Ubah nama penerima"
              placeholderTextColor={WARNA_GRAYTUA}>
                
              </TextInput>

            <Text style={styless.label}>Nomor Telepon Penerima:</Text>
            <TextInput
              style={styless.input}
              value={nomorPenerima}
        onChangeText={setNomorPenerima}
              keyboardType="phone-pad"
              placeholder="Ubah nomor telepon penerima"
              placeholderTextColor={WARNA_GRAYTUA}
            />

            <Text style={styless.label}> Alamat Penerima:</Text>
            <TextInput
              style={styless.input}
              value={alamatPenerima}
        onChangeText={setAlamatPenerima}
              placeholder="Ubah alamat penerima"
              placeholderTextColor={WARNA_GRAYTUA}
            />

            <Text style={styless.label}>Provinsi:</Text>
            <TextInput
              style={styless.input}
              value={provinsiId}
        onChangeText={setProvinsiId}
              placeholder="Ubah provinsi"
              placeholderTextColor={WARNA_GRAYTUA}
            />

            <Text style={styless.label}>Kota:</Text>
            <TextInput
              style={styless.input}
              value={kotaId}
        onChangeText={setKotaId}
              placeholder="Ubah kota"
              placeholderTextColor={WARNA_GRAYTUA}
            />

            <Text style={styless.label}>Kecamatan:</Text>
            <TextInput
              style={styless.input}
              value={kecamatanId}
        onChangeText={setKecamatanId}
              placeholder="Ubah kecamatan"
              placeholderTextColor={WARNA_GRAYTUA}
            />

            <Text style={styless.label}>Desa:</Text>
            <TextInput
              style={styless.input}
               value={desaId}
        onChangeText={setDesaId}
              placeholder="Ubah desa"
              placeholderTextColor={WARNA_GRAYTUA}
            />

            <Text style={styless.label}>Kode Pos:</Text>
            <TextInput
              style={styless.input}
                value={kodePos}
        onChangeText={setKodePos}
              keyboardType="phone-pad"
              placeholder="Ubah kode pos"
              placeholderTextColor={WARNA_GRAYTUA}
            />

            <TouchableOpacity
              style={{
                backgroundColor: WARNA_UTAMA,
                borderRadius: 50 / 2,
                padding: responsiveHeight(1.4),
                alignItems: 'center',
                marginVertical: responsiveWidth(4),
              }}
              onPress={handleUpdate}>
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
    await handleUpdate();
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

export default UpdateAddress;

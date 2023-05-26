import {
  View,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
  TextInput,
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

  const handleUpdate = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      fetch(`${url}user-address/update-user-address?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(address),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          ToastAndroid.show('Berhasil edit alamat', ToastAndroid.SHORT);
          navigation.goBack();
        })
        .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
            value={address.nama_penerima}
            onChangeText={text => setAddress({...address, nama_penerima: text})}
            placeholder="Ubah nama penerima"
            placeholderTextColor={WARNA_GRAYTUA}></TextInput>

          <Text style={styless.label}>Nomor Telepon Penerima:</Text>
          <TextInput
            style={styless.input}
            value={address.nomor_penerima}
            onChangeText={text =>
              setAddress({...address, nomor_penerima: text})
            }
            keyboardType="phone-pad"
            placeholder="Ubah nomor telepon penerima"
            placeholderTextColor={WARNA_GRAYTUA}
          />

          <Text style={styless.label}> Alamat Penerima:</Text>
          <TextInput
            style={styless.input}
            value={address.alamat_penerima}
            onChangeText={text =>
              setAddress({...address, alamat_penerima: text})
            }
            placeholder="Ubah alamat penerima"
            placeholderTextColor={WARNA_GRAYTUA}
          />

          <Text style={styless.label}>Provinsi:</Text>
          <TextInput
            style={styless.input}
            value={address.provinsi_id}
            onChangeText={text => setAddress({...address, provinsi_id: text})}
            placeholder="Ubah provinsi"
            placeholderTextColor={WARNA_GRAYTUA}
          />

          <Text style={styless.label}>Kota:</Text>
          <TextInput
            style={styless.input}
            value={address.kota_id}
            onChangeText={text => setAddress({...address, kota_id: text})}
            placeholder="Ubah kota"
            placeholderTextColor={WARNA_GRAYTUA}
          />

          <Text style={styless.label}>Kecamatan:</Text>
          <TextInput
            style={styless.input}
            value={address.kecamatan_id}
            onChangeText={text => setAddress({...address, kecamatan_id: text})}
            placeholder="Ubah kecamatan"
            placeholderTextColor={WARNA_GRAYTUA}
          />

          <Text style={styless.label}>Desa:</Text>
          <TextInput
            style={styless.input}
            value={address.desa_id}
            onChangeText={text => setAddress({...address, desa_id: text})}
            placeholder="Ubah desa"
            placeholderTextColor={WARNA_GRAYTUA}
          />

          <Text style={styless.label}>Kode Pos:</Text>
          <TextInput
            style={styless.input}
            value={address.kode_pos}
            onChangeText={text => setAddress({...address, kode_pos: text})}
            keyboardType="phone-pad"
            placeholder="Ubah kode pos"
            placeholderTextColor={WARNA_GRAYTUA}
          />

          <TouchableOpacity
            style={{
              backgroundColor: WARNA_UTAMA,
              borderRadius: 8,
              padding: responsiveHeight(1.4),
              alignItems: 'center',
              marginVertical: responsiveWidth(4),
            }}
            onPress={() => handleUpdate()}>
            <Text
              style={{
                color: WARNA_BLACK,
                fontSize: responsiveFontSize(2),
                fontWeight: 'bold',
              }}>
              SIMPAN ALAMAT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
    borderRadius: 8,
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

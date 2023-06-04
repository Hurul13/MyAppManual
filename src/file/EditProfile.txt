import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import {
  Box,
  Pressable,
  // Input,
  ScrollView,
  Center,
  HStack,
  Button,
  // Text,
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
// import editProfile from '../../utils/editProfile';
import editProfile from '../../utils/editProfile';
// import {useNavigation} from '@react-navigation/native';
import {url} from '../../utils/url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Mendapatkan user_id dan token dari AsyncStorage
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const user_id = await AsyncStorage.getItem('user_id');
      const token = await AsyncStorage.getItem('token');

      // Menentukan URL API
      const apiUrl = `${url}user/view-user?id=${user_id}`;

      // Mengambil data pengguna dari API
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);

          setName(data.data.name);
          setPhone(data.data.phone);
          setEmail(data.data.email);
        })
        .catch(error => console.error('Error:', error));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const user_id = await AsyncStorage.getItem('user_id');
      const token = await AsyncStorage.getItem('token');

      // Menentukan URL API
      const apiUrl = `${url}user/update?id=${user_id}`;

      // Menyiapkan data untuk dikirimkan ke API
      const data = {
        name: name,
        phone: phone,
        email: email,
        password: password,
        old_password: oldPassword,
        new_password: newPassword,
      };

      // Mengirim request update profil menggunakan fetch API
      fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            console.log('Profil berhasil diperbarui');
            // Jika update sukses, kembali ke halaman profil
            navigation.goBack();
            Alert.alert('Sukses', 'Profil berhasil diperbarui');
          } else {
            // Jika update gagal, tampilkan pesan error
            console.log('Gagal memperbarui profil:', result.message);
            Alert.alert('Error', result.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          Alert.alert('Error', 'Terjadi kesalahan saat menghubungi server');
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.judulBar}>Edit Profil</Text>
        </View>
        <View style={styles.box}>
          <View style={styless.containerr}>
            <Text style={styless.label}>Nama:</Text>
            <TextInput
              style={styless.input}
              value={name}
              onChangeText={text => setName(text)}></TextInput>

            <Text style={styless.label}>Nomor Telepon:</Text>
            <TextInput
              style={styless.input}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={text => setPhone(text)}
            />

            <Text style={styless.label}>Email:</Text>
            <TextInput
              style={styless.input}
              keyboardType="email-address"
              value={email}
              onChangeText={text => setEmail(text)}
            />

            {/* <Text style={styless.label}>Password:</Text>
            <View style={styless.passwordContainer}>
              <TextInput
                style={[styless.input, styless.passwordInput]}
                value={password}
                placeholderTextColor={WARNA_DISABLE}
                placeholder="••••••••••••"
                onChangeText={text => setPassword(text)}
                secureTextEntry={!showPassword}
              />
              <IconMaterial
                name={showPassword ? 'eye' : 'eye-off'}
                size={25}
                style={{
                  color: WARNA_BORDER,
                  paddingBottom: responsiveHeight(1.5),
                  paddingHorizontal: responsiveHeight(1),
                }}
                onPress={() => setShowPassword(!showPassword)}
              />
            </View> */}

            {/* <Text style={styless.label}>Old Password:</Text>
            <TextInput
              style={styless.input}
              placeholderTextColor={WARNA_DISABLE}
              placeholder="••••••••••••"
              secureTextEntry={!showPassword}
              value={oldPassword}
              onChangeText={text => setOldPassword(text)}
            />

            <Text style={styless.label}>New Password:</Text>
            <View style={styless.passwordInputContainer}>
              <TextInput
                style={[styless.input, styless.passwordInput]}
                secureTextEntry={!showPassword}
                placeholderTextColor={WARNA_DISABLE}
                placeholder="••••••••••••"
                value={newPassword}
                onChangeText={text => setNewPassword(text)}
              />
              <TouchableOpacity
                style={styless.showPasswordButton}
                onPress={toggleShowPassword}>
                <IconMaterial
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="#999"
                />
              </TouchableOpacity>
            </View> */}

            <TouchableOpacity
              style={styless.button}
              onPress={handleUpdateProfile}>
              <Text style={styless.buttonText}>SIMPAN PROFIL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
    marginBottom: 8,
    color: WARNA_BLACK,
  },
  input: {
    height: 40,
    borderColor: WARNA_BORDER,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: responsiveHeight(2),
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
export default EditProfile;

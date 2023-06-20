import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import { ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { url } from '../../utils/url';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  WARNA_DISABLE,
  WARNA_GRAYTUA,
  WARNA_BLACK,
  WARNA_BORDER,
  WARNA_UTAMA,
} from '../../utils/constant';
import styles from './Styles';

const EditProfile = ({ navigation }) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const user_id = await AsyncStorage.getItem('user_id');
      const token = await AsyncStorage.getItem('token');

      const apiUrl = `${url}user/view-user?id=${user_id}`;

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
    // Add the refreshing state when updating the profile
    setRefreshing(true);
    try {
      const user_id = await AsyncStorage.getItem('user_id');
      const token = await AsyncStorage.getItem('token');

      const apiUrl = `${url}user/update?id=${user_id}`;

      const data = {
        name: name,
        phone: phone,
        email: email,
      };

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

            if (result.newToken) {
              AsyncStorage.setItem('token', result.newToken); // Update the token in AsyncStorage
            } else {
              AsyncStorage.removeItem('token'); // Remove the token from AsyncStorage
            }
            ToastAndroid.show('Profil berhasil diperbarui', ToastAndroid.SHORT);
            setTimeout(() => {
              Alert.alert(
                'Sukses',
                'Profil berhasil diperbarui tapi butuh login ulang',
              );
            }, 2000);
            // Pindah ke halaman home setelah jeda 3 detik
            setTimeout(() => {
              ToastAndroid.show('Login ulang', ToastAndroid.SHORT);
              navigation.navigate('Login3');
            }, 4000);
            // navigation.navigate('Login3'); // Navigate to the login screen to reauthenticate
          } else {
            console.log('Gagal memperbarui profil:', result.message);
            Alert.alert('Error', result.message);
          }

          // Reset the refreshing state after the update is complete
          setRefreshing(false);
        })
        .catch(error => {
          console.error('Error:', error);
          Alert.alert('Error', 'Terjadi kesalahan saat menghubungi server');
          // Reset the refreshing state after encountering an error
          setRefreshing(false);
        });
    } catch (error) {
      console.error('Error:', error);
      // Reset the refreshing state after encountering an error
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getUserData();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={styles.all}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigateTo('Profile')}
          // onPress={navigation.goBack}
          >
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
              onChangeText={text => setName(text)}
            />

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
            <View style={styless.passwordContainer}>
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
  showPasswordButton: {
    padding: 8,
    marginLeft: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
  button: {
    backgroundColor: WARNA_UTAMA,
    borderRadius: 50 / 2,
    padding: responsiveHeight(1.4),
    alignItems: 'center',
    marginVertical: responsiveWidth(2),
  },
  buttonText: {
    color: WARNA_BLACK,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    paddingVertical: responsiveWidth(0.7),
  },
});
export default EditProfile;

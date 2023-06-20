import React, { Component, useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Image,
  Alert,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import styles from './Styles';
import { WARNA_DISABLE, WARNA_GRAYTUA } from '../../utils/constant';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from '../../utils/url';

const Login3 = ({ navigation }) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  // const navigations = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    checkLoginStatus(); // Check if the user is already logged in when the component mounts
  }, []);

  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      // If token exists, navigate to the home screen directly
      navigation.navigate('MainApp');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${url}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        if (data.success && data.data.token && data.data.user_id) {
          // Simpan data token dan user_id ke AsyncStorage
          await AsyncStorage.setItem('token', data.data.token);
          await AsyncStorage.setItem('user_id', data.data.user_id.toString());

          // Alert.alert('Login Successful', 'You have successfully logged in.');
          ToastAndroid.show('Berhasil login', ToastAndroid.SHORT);

          // Pindah ke halaman home setelah jeda 3 detik
          setTimeout(() => {
            navigation.navigate('MainApp');
          }, 2000);
        } else {
          ToastAndroid.show('Gagal login', ToastAndroid.SHORT);

          // Alert.alert(
          //   'Login Failed',
          //   data.message || 'Invalid response from the server.',
          // );
        }
      } else {
        ToastAndroid.show('Data login salah ', ToastAndroid.SHORT);

        // Alert.alert('Login Failed', 'Invalid username or password.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);

    // Simulate refreshing delay
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.viewContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View>
        <View style={styles.viewWrapper}>
          <Image
            source={require('../../assets/Images/logoLOGIN.png')}
            style={styles.imageLogin}
          />
          <Text style={styles.textTitle}>LOGIN</Text>
        </View>
        <View style={styles.viewBox}>
          <View>
            <Text style={styles.textUser}>Username *</Text>
            <View style={styles.boxInput}>
              <View style={styles.boxIcon}>
                <IconMaterial
                  name="account-box"
                  size={35}
                  style={styles.icon}
                />
              </View>
              <TextInput
                placeholder="username"
                placeholderTextColor={WARNA_DISABLE}
                style={styles.textInput}
                value={username}
                onChangeText={setUsername}
              />
            </View>
          </View>
          <View>
            <Text style={styles.textPass}>Password *</Text>
            <View style={styles.boxInput}>
              <View style={styles.boxIcon}>
                <IconMaterial name="lock" size={35} style={styles.icon} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // paddingHorizontal: responsiveHeight(0.5),
                  // marginHorizontal: responsiveHeight(-2),
                }}>
                <TextInput
                  placeholder="••••••••••••"
                  placeholderTextColor={WARNA_DISABLE}
                  style={styles.textInput}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  value={password}
                />
                <IconMaterial
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={25}
                  style={{
                    color: WARNA_GRAYTUA,
                  }}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
            </View>
          </View>
          {/* <TouchableOpacity
          // onPress={handleForgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.textFP}>Forgot Password?</Text>
        </TouchableOpacity> */}
          <TouchableOpacity
            onPress={handleLogin}
          // onPress={() => navigateTo('MainApp')}
          >
            <View style={styles.viewButton}>
              <Text style={styles.textLogin}>LOGIN</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.space}>
            <Text style={styles.textDHA}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigateTo('Register3')}>
              <Text style={styles.textRegister}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login3;

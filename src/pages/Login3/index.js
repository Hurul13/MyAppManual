import React, {Component, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
  // Alert,
} from 'react-native';
import styles from './Styles';
import {WARNA_DISABLE, WARNA_GRAYTUA} from '../../utils/constant';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from '../../utils/url';

const Login3 = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  // const navigations = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    fetch(
      `${url}auth/login`,
      // 'http://192.168.1.3/homeii/web/api/v1/auth/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      },
    )
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log(data);
          // alert('Login berhasil');
          ToastAndroid.show('Login Berhasil', ToastAndroid.SHORT);
          setTimeout(() => {
            navigation.navigate('MainApp');
          }, 2000); // 3 detik jeda sebelum pindah ke halaman home
        } else {
          // alert('Data salah.');
          ToastAndroid.show('Data Salah', ToastAndroid.SHORT);
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.viewContainer}>
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
              <IconMaterial name="account-box" size={35} style={styles.icon} />
            </View>
            <TextInput
              placeholder="username"
              placeholderTextColor={WARNA_DISABLE}
              style={styles.textInput}
              value={username}
              onChangeText={text => setUsername(text)}
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
                onChangeText={text => setPassword(text)}
                secureTextEntry={!showPassword}
                value={password}
              />
              <IconMaterial
                name={showPassword ? 'eye' : 'eye-off'}
                size={25}
                style={{
                  color: WARNA_GRAYTUA,
                  // marginHorizontal: responsiveHeight(-2),
                  // marginRight: responsiveHeight(8),
                }}
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          // onPress={handleForgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.textFP}>Forgot Password?</Text>
        </TouchableOpacity>
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
  );
};

export default Login3;

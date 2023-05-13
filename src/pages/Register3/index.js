import React, {Component, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './Styles';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
  WARNA_GRAYTUA,
} from '../../utils/constant';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from 'react-native-paper';
import {url} from '../../utils/url';

const Register3 = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [checked, setChecked] = React.useState(false);
  const CheckBox = () => {
    return (
      <View style={styles.check}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
    );
  };

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    fetch(
      `${url}auth/register`,
      // 'http://192.168.1.3/homeii/web/api/v1/auth/register',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          username: username,
          email: email,
          phone: phone,
          password: password,
        }),
      },
    )
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data); // Handle response data here
      //   alert('Register berhasil');
      //   setTimeout(() => {
      //     navigation.navigate('Login3');
      //   }, 2000); // Navigate to home screen after 3 seconds
      // })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log(data);
          alert('Register berhasil');
          setTimeout(() => {
            navigation.navigate('Login3');
          }, 2000); // 3 detik jeda sebelum pindah ke halaman home
        } else {
          alert('Data salah.');
        }
      })
      .catch(error => console.error(error));
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.viewContainer}>
        <View style={styles.viewWrapper}>
          <Image
            source={require('../../assets/Images/logoREGISTER.png')}
            style={styles.imageRegister}
          />
          <Text style={styles.textTitle}>REGISTER</Text>
        </View>
        <View style={styles.viewBox}>
          <View>
            <Text style={styles.textUser}>Name *</Text>
            <View style={styles.boxInput}>
              <View style={styles.boxIcon}>
                <IconMaterial name="account" size={35} style={styles.icon} />
              </View>
              <TextInput
                placeholder="name"
                placeholderTextColor={WARNA_DISABLE}
                style={styles.textInput}
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.textPass}>Username *</Text>
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
                onChangeText={text => setUsername(text)}
                value={username}
              />
            </View>
          </View>
          <View>
            <Text style={styles.textPass}>Email *</Text>
            <View style={styles.boxInput}>
              <View style={styles.boxIcon}>
                <IconMaterial name="email" size={35} style={styles.icon} />
              </View>
              <TextInput
                placeholder="mail@mail.co"
                placeholderTextColor={WARNA_DISABLE}
                style={styles.textInput}
                onChangeText={text => setEmail(text)}
                value={email}
                keyboardType="email-address"
              />
            </View>
          </View>
          <View>
            <Text style={styles.textPass}>Phone *</Text>
            <View style={styles.boxInput}>
              <View style={styles.boxIcon}>
                <IconMaterial name="phone" size={35} style={styles.icon} />
              </View>
              <TextInput
                placeholder="08#######"
                placeholderTextColor={WARNA_DISABLE}
                style={styles.textInput}
                onChangeText={text => setPhone(text)}
                value={phone}
                keyboardType="phone-pad"
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
                  secureTextEntry={!showPassword}
                  onChangeText={text => setPassword(text)}
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
          {/* <View>
            <Text style={styles.textPass}>Konfirmasi Password *</Text>
            <View style={styles.boxInput}>
              <View style={styles.boxIcon}>
                <IconMaterial name="lock" size={35} style={styles.icon} />
              </View>
              <TextInput
                placeholder="Masukan konfirmasi password ..."
                placeholderTextColor={WARNA_DISABLE}
                secureTextEntry
                style={styles.textInput}
              />
            </View>
          </View> */}
          {/* <View style={styles.space1}>
            <CheckBox />
            <Text style={styles.textFP}>
              Dengan mendaftar, saya menyetujui Syarat dan Ketentuan serta
              Kebijakan privasi
            </Text>
          </View> */}
          <TouchableOpacity
            // onPress={() => navigateTo('Login2')}
            onPress={handleRegister}>
            <View style={styles.viewButton}>
              <Text style={styles.textRegister}>REGISTER</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.space}>
            <Text style={styles.textAHA}>Aready have an account?</Text>
            <TouchableOpacity onPress={() => navigateTo('Login3')}>
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register3;

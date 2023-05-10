import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './Styles';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
} from '../../utils/constant';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const Login2 = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
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
            />
          </View>
        </View>
        <View>
          <Text style={styles.textPass}>Password *</Text>
          <View style={styles.boxInput}>
            <View style={styles.boxIcon}>
              <IconMaterial name="lock" size={35} style={styles.icon} />
            </View>
            <TextInput
              placeholder="••••••••••••"
              placeholderTextColor={WARNA_DISABLE}
              style={styles.textInput}
              secureTextEntry
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.textFP}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('MainApp')}>
          <View style={styles.viewButton}>
            <Text style={styles.textLogin}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.space}>
          <Text style={styles.textDHA}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigateTo('Register2')}>
            <Text style={styles.textRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login2;

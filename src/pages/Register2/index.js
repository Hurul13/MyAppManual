import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './Styles';
import {CheckBox, Navigation} from '../../components';

const Register2 = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
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
          <Text style={styles.textUser}>Nama *</Text>
          <TextInput placeholder="Masukan nama ... " style={styles.textInput} />
          <Text style={styles.textPass}>Email *</Text>
          <TextInput
            placeholder="Masukan email ... "
            style={styles.textInput}
          />
          <Text style={styles.textPass}>No. Telpon *</Text>
          <TextInput
            placeholder="Masukan no telpon ... "
            style={styles.textInput}
            keyboardType="numeric"
          />
          <Text style={styles.textPass}>Username *</Text>
          <TextInput
            placeholder="Masukan username ... "
            style={styles.textInput}
          />
          <Text style={styles.textPass}>Password *</Text>
          <TextInput
            placeholder="Masukan password ..."
            style={styles.textInput}
            secureTextEntry
          />
          <Text style={styles.textPass}>Konfirmasi Password *</Text>
          <TextInput
            placeholder="Masukan konfirmasi password ..."
            style={styles.textInput}
            secureTextEntry
          />
          <CheckBox />
          <Text style={styles.textFP}>
            Dengan mendaftar, saya menyetujui Syarat dan Ketentuan serta
            Kebijakan privasi
          </Text>
          <Navigation />
          <TouchableOpacity onPress={() => navigateTo('Login2')}>
            <View style={styles.viewButton}>
              <Text style={styles.textRegister}>REGISTER</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.textAHA}>Aready have an account?</Text>
          <TouchableOpacity onPress={() => navigateTo('Login2')}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register2;

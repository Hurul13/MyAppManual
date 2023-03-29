import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './Styles';

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
        <Text style={styles.textUser}>Username *</Text>
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
        <TouchableOpacity>
          <Text style={styles.textFP}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('MainApp')}>
          <View style={styles.viewButton}>
            <Text style={styles.textLogin}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textDHA}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigateTo('Register2')}>
          <Text style={styles.textRegister}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login2;

import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';

const Login = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [username, setUsername] = React.useState(' ');
  const [setPassword] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.judul}>Login</Text>
      <Text style={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </Text>
      <View style={styles.box}>
        <></>

        <Text style={styles.textUsername}>Username *</Text>
        <View style={styles.boxUsername}>
          <TextInput
            editable
            // multiline
            numberOfLines={4}
            maxLength={100}
            onChangeText={text => setUsername(text)}
            value={username}
            placeholder="Masukkan username ..."
            style={styles.textIsiUsername}></TextInput>
        </View>
        <Text style={styles.textPassword}>Password *</Text>
        <View style={styles.boxPassword}>
          <TextInput
            style={styles.textIsiPassword}
            placeholder="Masukan password ..."
            onChangeText={setPassword}
            secureTextEntry={true}></TextInput>
        </View>
        <Text style={styles.textFP}>Forgot Password?</Text>
        <TouchableOpacity onPress={() => navigateTo('')}>
          <View style={styles.bottomLogin}>
            <Text style={styles.textBottom}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textDHA}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigateTo('')}>
          <Text style={styles.textRegister}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

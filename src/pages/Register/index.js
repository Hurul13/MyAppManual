import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';

const Register = ({navigation}) => {
  // pindah halaman
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  // inputan
  const [nama, setNama] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const [number, setNumber] = React.useState(null);
  const [setPassword] = React.useState(null);

  // checkBox
  const [checked, setChecked] = useState([]);

  const options = [
    'Dengan mendaftar, saya menyetujui Syarat dan Ketentuan serta Kebijakan privasi',
  ];

  function pickChecked(selectedChecked) {
    const index = checked.findIndex(Checked => Checked === selectedChecked);
    if (checked.includes(selectedChecked)) {
      setChecked(checked.filter(Checked => Checked !== selectedChecked));
      return;
    }

    setChecked(Checkeds => Checkeds.concat(selectedChecked));
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.judul}>Register</Text>
        <Text style={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </Text>
        <View style={styles.box}>
          <></>

          {/* Input Nama */}
          <Text style={styles.textNama}>Nama *</Text>
          <View style={styles.boxNama}>
            <TextInput
              editable
              // multiline
              numberOfLines={4}
              maxLength={100}
              onChangeText={text => setNama(text)}
              value={nama}
              placeholder="Masukkan nama ..."
              style={styles.textIsiNama}></TextInput>
          </View>

          {/* Input Email */}
          <Text style={styles.textEmail}>Email *</Text>
          <View style={styles.boxEmail}>
            <TextInput
              editable
              // multiline
              numberOfLines={4}
              maxLength={100}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder="Masukkan email ..."
              style={styles.textIsiEmail}></TextInput>
          </View>

          {/* Input No HP */}
          <Text style={styles.textHP}>No. Telpon *</Text>
          <View style={styles.boxHP}>
            <TextInput
              style={styles.textIsiHP}
              onChangeText={setNumber}
              value={number}
              placeholder="Masukkan no telpon ..."
              keyboardType="numeric"></TextInput>
          </View>

          {/* Input Username */}
          <Text style={styles.textUsername}>Username *</Text>
          <View style={styles.boxUsername}>
            <TextInput
              editable
              // multiline
              numberOfLines={4}
              maxLength={100}
              onChangeText={text => setUsername(text)}
              value={username}
              placeholder="Masukkan usernama ..."
              style={styles.textIsiUsername}></TextInput>
          </View>

          {/* Input Password */}
          <Text style={styles.textPassword}>Password *</Text>
          <View style={styles.boxPassword}>
            <TextInput
              style={styles.textIsiPassword}
              placeholder="Masukan password ..."
              onChangeText={setPassword}
              secureTextEntry={true}></TextInput>
          </View>

          {/* Input Konfirmasi Password */}
          <Text style={styles.textKP}>Konfirmasi Password *</Text>
          <View style={styles.boxKP}>
            <TextInput
              style={styles.textIsiKP}
              placeholder="Masukan konfirmasi password ..."
              onChangeText={setPassword}
              secureTextEntry={true}></TextInput>
          </View>

          {/* Tombol register */}
          <View>
            <TouchableOpacity onPress={() => navigateTo('')}>
              <View style={styles.bottomRegister}>
                <Text style={styles.textBottom}>REGISTER</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.textRHA}>Ready have an account?</Text>
          <TouchableOpacity onPress={() => navigateTo('')}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>

          {/* CheckBox */}
          <View style={styles.options}>
            {options.map(option => (
              <View key={option} style={styles.checked}>
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={() => pickChecked(option)}>
                  {checked.includes(option) && (
                    <Text style={styles.check}>✔</Text>
                  )}
                </TouchableOpacity>
                <Text style={styles.checkedName}>{option}</Text>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;

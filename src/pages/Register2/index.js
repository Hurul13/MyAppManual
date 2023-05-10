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
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
} from '../../utils/constant';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from 'react-native-paper';

const Register2 = ({navigation}) => {
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
                secureTextEntry
                style={styles.textInput}
              />
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
          <View style={styles.space1}>
            <CheckBox />
            <Text style={styles.textFP}>
              Dengan mendaftar, saya menyetujui Syarat dan Ketentuan serta
              Kebijakan privasi
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigateTo('Login2')}>
            <View style={styles.viewButton}>
              <Text style={styles.textRegister}>REGISTER</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.space}>
            <Text style={styles.textAHA}>Aready have an account?</Text>
            <TouchableOpacity onPress={() => navigateTo('Login2')}>
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register2;

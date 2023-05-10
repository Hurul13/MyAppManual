import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {ImagePiecker} from '../../components';
import {Box, Pressable} from 'native-base';
import {WARNA_GRAYTUA, WARNA_WHITE, WARNA_RED} from '../../utils/constant';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from '../../utils/url';

const Profile = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(
        `${url}auth/logout`,
        // 'http://192.168.1.3/homeii/web/api/v1/auth/logout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.ok) {
        throw new Error('Logout failed');
      }
      await AsyncStorage.removeItem('token');
      navigation.replace('Login3');
      console.log('Logout success');
    } catch (error) {
      Alert.alert('Error', error.message);
      console.log('Logout failed');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.space1}>
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
            <Text style={styles.judulBar}>Profile</Text>
          </View>
          <View style={styles.space}>
            {/* <Icon
              name="bell"
              size={23}
              style={styles.iconBell}
              onPress={() => navigateTo('#')}
            /> */}
            <Pressable
              // ml={responsiveHeight(2)}
              // top={-3}
              onPress={() => navigateTo('Keranjang2')}>
              <IconMaterial
                name="shopping"
                size={30}
                style={styles.iconTroll}
              />
              <Box
                px={responsiveHeight(0.5)}
                rounded="full"
                position="absolute"
                bg={WARNA_RED}
                left={responsiveHeight(2)}
                top={responsiveHeight(-0.3)}
                _text={{
                  color: WARNA_WHITE,
                  fontSize: responsiveFontSize(1.3),
                  textAlign: 'center',
                }}>
                5
              </Box>
            </Pressable>
          </View>
        </View>
        <LinearGradient
          colors={['#FDD329', '#F2F2F2']}
          style={styles.boxLinear}>
          <View style={styles.box1}>
            <View style={styles.profil}>
              <ImagePiecker></ImagePiecker>
              <Text style={styles.text1}>Lorem Ipsum</Text>
              <Text style={styles.text2}>0851234567</Text>
            </View>
          </View>
        </LinearGradient>
        <View>
          <Text style={styles.text3}>Profile</Text>
          <TouchableOpacity
            onPress={() => navigateTo('EditProfile2')}
            style={styles.space2}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="pencil"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.space2}
            onPress={() => navigateTo('RiwayatTransaksi')}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="handshake"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Riwayat Transaksi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting}>
          <Text style={styles.text3}>Setting</Text>
          <TouchableOpacity
            style={styles.space2}
            onPress={() => navigateTo('Tentang')}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial name="help" size={26} style={styles.iconPen} />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Tentang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.space2}
            onPress={() => navigateTo('KebijakanPrivasi')}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="shield-half-full"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Kebijakan Privasi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.space2}
            onPress={() => navigateTo('SyaratKetentuan')}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="note-edit"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Syarat & Ketentuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.space2}
            // onPress={() => navigateTo('Login3')}
            onPress={handleLogout}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="logout"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Logout</Text>
            {/* <Text style={{color: WARNA_RED}}>{message}</Text> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

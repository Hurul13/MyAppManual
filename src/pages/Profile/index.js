import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {ImagePiecker} from '../../components';

const Profile = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
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
            <Icon
              name="bell"
              size={23}
              style={styles.iconBell}
              onPress={() => navigateTo('Notifikasi')}
            />
            <IconMaterial
              name="cart-outline"
              size={26}
              style={styles.iconTroll}
              onPress={() => navigateTo('Keranjang')}
            />
          </View>
        </View>
        <LinearGradient
          colors={['#FDD329', '#F2F2F2']}
          style={styles.boxLinear}>
          <View style={styles.box1}>
            <View style={styles.profil}>
              <ImagePiecker></ImagePiecker>
              <Text style={styles.text1}>Hurul Aini</Text>
              <Text style={styles.text2}>0851234567</Text>
            </View>
          </View>
        </LinearGradient>
        <View>
          <Text style={styles.text3}>Profile</Text>
          <TouchableOpacity
            onPress={() => navigateTo('EditProfile')}
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
            onPress={() => navigateTo('Login2')}>
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
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

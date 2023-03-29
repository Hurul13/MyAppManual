import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RiwayatTransaksi = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.judulBar}>Riwayat Transaksi</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.box2}>
            <View style={styles.box3}>
              <IconMaterial
                name="home-analytics"
                size={35}
                style={styles.iconToko}
              />
              <Text style={styles.text1}>Hanil Jaya Stell</Text>
            </View>
            <View>
              <Image
                source={require('../../assets/Images/genteng.jpg')}
                style={styles.genteng}></Image>
              <Text style={styles.text2}>Genteng A Bagus</Text>
              <View style={styles.box4}>
                <Text style={styles.text6}>Barang sudah diterima customer</Text>
              </View>
              <IconMaterial
                name="clock-time-three-outline"
                size={20}
                style={styles.iconJam}
              />
              <Text style={styles.text3}>11-11-2022 10:40</Text>
              <Text style={styles.text4}>Rp 200.000</Text>
              <Text style={styles.text5}>x10</Text>
              <View style={styles.box5}>
                <Text style={styles.text7}>Total Pesanan</Text>
                <Text style={styles.text8}>Rp 2.000.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.box3}>
              <IconMaterial
                name="home-analytics"
                size={35}
                style={styles.iconToko}
              />
              <Text style={styles.text1}>Hanil Jaya Stell</Text>
            </View>
            <View>
              <Image
                source={require('../../assets/Images/pasir.jpg')}
                style={styles.genteng}
              />
              <Text style={styles.text2}>Pasir Pasang</Text>
              <View style={styles.box4}>
                <Text style={styles.text6}>Barang sudah diterima customer</Text>
              </View>
              <IconMaterial
                name="clock-time-three-outline"
                size={20}
                style={styles.iconJam}
              />
              <Text style={styles.text3}>11-11-2022 10:40</Text>
              <Text style={styles.text4}>Rp 200.000</Text>
              <Text style={styles.text5}>x10</Text>
              <View style={styles.box5}>
                <Text style={styles.text7}>Total Pesanan</Text>
                <Text style={styles.text8}>Rp 2.000.000</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RiwayatTransaksi;

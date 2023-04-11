import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import material from '../../utils/material';
import riwayatTransaksi from '../../utils/riwayatTransaksi';
import {ScrollView} from 'react-native-virtualized-view';

const RiwayatTransaksi = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const CartCard = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigateTo('RincianPesanan')}>
        <View style={styles.cartCard}>
          <View style={styles.box1}>
            <Text style={styles.text}>{item.noResi}</Text>
          </View>
          <View style={styles.space}>
            <Image source={item.image} style={styles.img} />
            <View style={styles.space1}>
              <Text style={styles.text1}>{item.title}</Text>
              <View style={styles.space4}>
                <IconMaterial
                  name="clock-time-three-outline"
                  size={16}
                  style={styles.iconTime}
                />
                <Text style={styles.text2}>{item.date}</Text>
              </View>
              <View style={styles.space7}>
                <Text style={styles.text6}>{item.status}</Text>
              </View>
            </View>
          </View>
          <View style={styles.space5}>
            <View style={styles.space6}>
              <Text style={styles.text5}>6 produk</Text>
              <Text style={styles.text7}>
                Total Pesanan: ${item.totalHarga}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
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
          <FlatList
            showsVerticalScrollIndicator={false}
            data={riwayatTransaksi.slice(0, 2)}
            renderItem={({item}) => <CartCard item={item} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RiwayatTransaksi;

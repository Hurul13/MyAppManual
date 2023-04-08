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
            <IconMaterial name="home-analytics" size={30} style={styles.icon} />
            <Text style={styles.text}>{item.shop}</Text>
          </View>
          <View style={styles.space}>
            <Image source={item.image} style={styles.img} />
            <View style={styles.space1}>
              <Text style={styles.text1}>{item.name}</Text>
              <View style={styles.space2}>
                <View style={styles.space4}>
                  <IconMaterial
                    name="clock-time-three-outline"
                    size={16}
                    style={styles.iconTime}
                  />
                  <Text style={styles.text2}>{item.time}</Text>
                </View>
                <View style={styles.space3}>
                  <Text style={styles.text3}>x2</Text>
                  <Text style={styles.text4}>${item.price}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.space5}>
            <View style={styles.space6}>
              <Text style={styles.text5}>Total Pesanan</Text>
              <Text style={styles.text5}>${item.totalPrince}</Text>
            </View>
            <View style={styles.space6}>
              <Text style={styles.text5}>Status</Text>
              <View style={styles.space7}>
                <Text style={styles.text6}>{item.status}</Text>
              </View>
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
            // contentContainerStyle={{paddingBottom: 80}}
            data={material.slice(0, 2)}
            renderItem={({item}) => <CartCard item={item} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RiwayatTransaksi;

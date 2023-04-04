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
      <View style={styles.cartCard}>
        <View style={styles.box5}>
          <IconMaterial
            name="home-analytics"
            size={30}
            style={styles.iconShop}
          />
          <Text style={styles.text7}>{item.shop}</Text>
        </View>
        <Image source={item.image} style={styles.img} />
        <View style={styles.box4}>
          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.boxTime}>
            <IconMaterial
              name="clock-time-three-outline"
              size={16}
              style={styles.iconTime}
            />
            <Text style={styles.text1}>{item.time}</Text>
          </View>
        </View>
        <View style={styles.box1}>
          <View style={styles.actionBtn}>
            <Text style={styles.text3}>{item.status}</Text>
          </View>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text2}>x10</Text>
          <Text style={styles.text4}>${item.price}</Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.box6}>
            <Text style={styles.text6}>Total Pesanan</Text>
            <Text style={styles.text5}>$50</Text>
          </View>
        </View>
      </View>
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
            contentContainerStyle={{paddingBottom: 80}}
            data={material.slice(0, material.length > 2 ? 2 : material.length)}
            renderItem={({item}) => <CartCard item={item} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RiwayatTransaksi;

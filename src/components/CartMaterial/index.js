import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles';
import {material} from '../../assets';

const CartMaterial = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Text style={styles.textSubJudul}>Material Pilihan</Text>
        <Text style={styles.textSub}>Selengkapnya ...</Text>
        <View style={styles.boxCart}>
          <View style={styles.boxGambar}>
            <Image source={material} style={styles.img}></Image>
          </View>
          <Text style={styles.textName}>Pasir Pasang</Text>
          <Text style={styles.textHarga}>Rp 50.000 </Text>
        </View>
      </View>
    </View>
  );
};

export default CartMaterial;

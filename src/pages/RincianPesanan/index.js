import {
  Text,
  View,
  Image,
  // ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import material from '../../utils/material';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-virtualized-view';

const RincianPesanan = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const CartCard = ({item}) => {
    return (
      <View style={styles.cartCard}>
        <View style={styles.space}>
          <Image source={item.image} style={styles.img} />
          <View style={styles.box4}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text1}>{item.ingredients}</Text>
            <View style={styles.space1}>
              <Text style={styles.text2}>${item.price}</Text>
              <Text style={styles.text8}>x2</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconMaterial
            name="arrow-left"
            size={26}
            style={styles.iconBack}
            onPress={navigation.goBack}
          />
          <Text style={styles.judulBar}>Rincian Pesanan</Text>
        </View>
        <View style={styles.box}>
          <View style={{paddingTop: responsiveHeight(2)}}>
            <View style={styles.space2}>
              <Text style={styles.text3}>Alamat Pengiriman</Text>
              {/* <Text style={styles.text4}>Ubah</Text> */}
            </View>
            <View style={styles.space3}>
              <View style={styles.space4}>
                <Text style={styles.text5}>Lorem Ipsum</Text>
                <Text style={styles.text6}>0851234567</Text>
              </View>
              <Text style={styles.text7}>Jln. Mawar Melati Anggrek No 1</Text>
              <Text style={styles.text7}>
                LILY, KOTA BUNGA, INDONESIA, 45678
              </Text>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{marginVertical: responsiveHeight(3)}}
            data={material.slice(0, 3)}
            renderItem={({item}) => <CartCard item={item} />}
            ListFooterComponent={() => (
              <View>
                <View style={{marginTop: responsiveHeight(2)}}>
                  <View style={styles.space2}>
                    <Text style={styles.text3}>Pengiriman</Text>
                  </View>
                  <View style={styles.space5}>
                    <Text style={styles.text9}>Pihak HOMEI</Text>
                    <Text style={styles.text9}>$10</Text>
                    {/* <IconMaterial
                      name="menu-down"
                      size={26}
                      style={styles.icon}
                    /> */}
                  </View>
                </View>

                <View style={{marginTop: responsiveHeight(2)}}>
                  <View style={styles.space2}>
                    <Text style={styles.text3}>Rincian Pembayaran</Text>
                  </View>
                  <View style={styles.space7}>
                    <View style={styles.space6}>
                      <Text style={styles.text10}>Sub-Total Untuk Produk</Text>
                      <Text style={styles.text10}>$567</Text>
                    </View>
                    <View style={styles.space6}>
                      <Text style={styles.text10}>
                        Sub-Total Untuk Pengiriman
                      </Text>
                      <Text style={styles.text10}>$10</Text>
                    </View>
                    <View style={styles.space6}>
                      <Text style={styles.text11}>TOTAL PEMBAYARAN</Text>
                      <Text style={styles.text11}>$577</Text>
                    </View>
                  </View>
                  {/* <TouchableOpacity onPress={() => navigateTo('#')}>
                  </TouchableOpacity> */}
                  <View style={styles.boxBtn}>
                    <Text style={styles.text12}>SELESAI</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RincianPesanan;

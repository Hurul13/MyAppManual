import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import material from '../../utils/material';
import {responsiveHeight} from 'react-native-responsive-dimensions';
// import {ScrollView} from 'react-native-virtualized-view';

const Checkout = ({navigation}) => {
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
          <Text style={styles.judulBar}>Checkout</Text>
        </View>
        <View style={styles.box}>
          <View style={{paddingTop: responsiveHeight(4)}}>
            <View style={styles.space2}>
              <Text style={styles.text3}>Alamat Pengiriman</Text>
              <TouchableOpacity>
                <Text style={styles.text4}>Ubah</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.space3}>
              <View style={styles.space4}>
                <Text style={styles.text5}>Lorem Ipsum</Text>
                <Text style={styles.text6}>08765432234</Text>
              </View>
              <Text style={styles.text7}>
                Jln. Park Regency Blok. B No. 8, Keputih, Kec. Sukolilo, Kota
                Surabaya, Jawa Timur 60111, Indonesia
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
                    <Text style={styles.text3}>Pilih Ekspedisi</Text>
                  </View>
                  <TouchableOpacity>
                    <View style={styles.space5}>
                      <Text style={styles.text9}>--Pilih--</Text>
                      <IconMaterial
                        name="menu-down"
                        size={26}
                        style={styles.icon}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: responsiveHeight(2)}}>
                  <View style={styles.space2}>
                    <Text style={styles.text3}>Rincian Pembayaran</Text>
                  </View>
                  <View style={styles.space7}>
                    <View style={styles.space6}>
                      <Text style={styles.text10}>Sub-Total Untuk Produk</Text>
                      <Text style={styles.text10}>$40</Text>
                    </View>
                    <View style={styles.space6}>
                      <Text style={styles.text10}>
                        Sub-Total Untuk Pengiriman
                      </Text>
                      <Text style={styles.text10}>-</Text>
                    </View>
                    <View style={styles.space6}>
                      <Text style={styles.text11}>TOTAL PEMBAYARAN</Text>
                      <Text style={styles.text11}>$40</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigateTo('CheckoutBerhasil')}>
                    <View style={styles.boxBtn}>
                      <IconMaterial
                        name="cart-outline"
                        size={24}
                        style={styles.iconCard}
                      />
                      <Text style={styles.text12}>BAYAR</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout;

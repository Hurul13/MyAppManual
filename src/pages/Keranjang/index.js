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
import {MinPlus} from '../../components';
import {ScrollView} from 'react-native-virtualized-view';

const Keranjang = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [minPlus, setMinPlus] = useState(1);
  const onCounterChange = value => {
    setMinPlus(value);
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
        <View style={styles.space}>
          <Image source={item.image} style={styles.img} />
          <View style={styles.box4}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailProduct')}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text1}>{item.ingredients}</Text>
            </TouchableOpacity>
            <View style={styles.space1}>
              <Text style={styles.text2}>${item.price}</Text>
              <View style={styles.minplus}>
                <MinPlus onValueChange={onCounterChange} />
              </View>
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
          <TouchableOpacity onPress={navigation.goBack}>
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.judulBar}>Keranjang</Text>
        </View>
        <View style={styles.box}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 80}}
            data={material.slice(0, material.length > 3 ? 3 : material.length)}
            renderItem={({item}) => <CartCard item={item} />}
            // ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
            ListFooterComponent={() => (
              <View style={styles.box6}>
                <View style={styles.box2}>
                  <Text style={styles.text4}>Pengiriman</Text>
                  <Text style={styles.text5}>$2</Text>
                </View>
                <View style={styles.box2}>
                  <Text style={styles.text4}>Total</Text>
                  <Text style={styles.text5}>$50</Text>
                </View>
                <TouchableOpacity onPress={() => navigateTo('Checkout')}>
                  <View style={styles.box3}>
                    <Text style={styles.text6}>CHECKOUT</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Keranjang;

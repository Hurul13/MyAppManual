import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const BannerMaterialHome2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require('../../assets/Images/pasir.jpg')}
          style={styles.img}></Image>
        <Text style={styles.text}>Pasir Pasang</Text>
        <Text style={styles.text1}>Rp 255.000</Text>
        {/* <IconMaterial name="map-marker" size={20} style={styles.iconMap} />
        <Text style={styles.text2}>Kota Surabaya</Text>
        <View style={styles.line}></View> */}
        <IconMaterial name="star" size={18} style={styles.iconStar} />
        <Text style={styles.text3}>4.9</Text>
      </View>
      <View style={styles.box}>
        <Image
          source={require('../../assets/Images/genteng.jpg')}
          style={styles.img}></Image>
        <Text style={styles.text}>Genteng A Bagus</Text>
        <Text style={styles.text1}>Rp 200.000</Text>
        {/* <IconMaterial name="map-marker" size={20} style={styles.iconMap} />
        <Text style={styles.text2}>Kota Surabaya</Text>
        <View style={styles.line}></View> */}
        <IconMaterial name="star" size={18} style={styles.iconStar} />
        <Text style={styles.text3}>4.9</Text>
      </View>
    </View>
  );
};

export default BannerMaterialHome2;

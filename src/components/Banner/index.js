import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './Styles';
import {banner1, banner2} from '../../assets';

const Banner = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const images = [
    require('../../assets/Images/banner1.png'),
    require('../../assets/Images/banner2.png'),
  ];

  return (
    // <View>{/* <SliderBox></SliderBox> */}</View>
    <View style={styles.boxBanner}>
      <ScrollView horizontal={true} styles={styles.scroll}>
        <Image source={banner1} style={styles.imgBanner1}></Image>
        <Image source={banner2} style={styles.imgBanner1}></Image>
      </ScrollView>
      <View style={styles.boxBannerName}>
        <Text style={styles.text1}>Layanan Konstruksi Terbaik</Text>
        <Text style={styles.text2}>
          Wujudkan rumah impian anda bersama HOMEi
        </Text>
      </View>
    </View>
  );
};

export default Banner;

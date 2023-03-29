import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './Styles';

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
        <Image
          source={require('../../assets/Images/banner1.png')}
          style={styles.imgBanner1}></Image>
        <Image
          source={require('../../assets/Images/banner2.png')}
          style={styles.imgBanner1}></Image>
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

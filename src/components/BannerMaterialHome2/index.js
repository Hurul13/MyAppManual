import {
  StyleSheet,
  // Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {Text, Box, Pressable} from 'native-base';
import Swiper from 'react-native-swiper';
import React, {useState, useEffect} from 'react';
import banner from '../../utils/banner';
import {
  WARNA_BLACK,
  WARNA_GRAYTUA,
  WARNA_SILVER,
  WARNA_UTAMA,
} from '../../utils/constant';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

var {width} = Dimensions.get('window');

export default function BannerMaterialHome2() {
  const [BannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData(banner);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showButtons={false}
            autoplay={true}
            autoplayTimeout={4}
            style={{
              height: width / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {BannerData.map(item => {
              return (
                <View style={styles.space}>
                  <Image
                    key={item}
                    resizeMode="contain"
                    source={item.image}
                    style={styles.banner}
                  />
                  <View style={styles.spaceTitle}>
                    <Text isTruncated style={styles.title}>
                      {item.title}
                    </Text>
                    <Text isTruncated style={styles.decs}>
                      {item.decs}
                    </Text>
                  </View>
                </View>
              );
            })}
          </Swiper>
          <View style={{height: 20}}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '',
    // #e5e5e5
  },
  swiper: {
    width: width,
    marginTop: '5%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  space: {
    height: width / 2.5,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: WARNA_BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: width / 3.6,
    width: width - 40,
    // borderRadius: 10,
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
  },
  spaceTitle: {
    width: '100%',
    backgroundColor: WARNA_SILVER,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveWidth(2),
    // marginTop: responsiveHeight(2),
  },
  title: {
    color: WARNA_BLACK,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  decs: {
    color: WARNA_GRAYTUA,
  },
});

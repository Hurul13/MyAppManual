import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {DecsDetailProduct} from '..';

const images = [
  'https://cdn.pixabay.com/photo/2018/07/13/23/03/site-3536760_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/10/10/23/22/steel-2839316_960_720.jpg',
];

const BannerHome = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [imgActive, setImgActive] = useState(0);
  onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({nativeEvent}) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((val, index) => (
              <Image
                key={val}
                resizeMode="stretch"
                style={styles.wrap}
                source={{uri: val}}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((val, index) => (
              <Text
                key={val}
                style={imgActive == index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BannerHome;

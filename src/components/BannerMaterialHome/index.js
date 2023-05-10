import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  // Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import banner from '../../utils/banner';
import {Text} from 'native-base';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {WARNA_SEKUNDER, WARNA_WHITE} from '../../utils/constant';

const BannerMaterialHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const data = [
    {
      id: 1,
      image: 'https://example.com/image1.png',
      title: 'Judul 1',
      description: 'Deskripsi singkat 1',
    },
    {
      id: 2,
      image: 'https://example.com/image2.png',
      title: 'Judul 2',
      description: 'Deskripsi singkat 2',
    },
    {
      id: 3,
      image: 'https://example.com/image3.png',
      title: 'Judul 3',
      description: 'Deskripsi singkat 3',
    },
  ];

  const handleScroll = event => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offset / slideWidth);
    setCurrentIndex(currentIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === banner.length - 1 ? 0 : currentIndex + 1;
    scrollViewRef.current.scrollTo({
      x: nextIndex * Dimensions.get('window').width,
      animated: true,
    });
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.containerSlide}
        onMomentumScrollEnd={handleScroll}>
        {banner.map(item => (
          <View style={styles.slide} key={item.id}>
            <Image style={styles.image} source={item.image} />
            <View style={styles.content}>
              <Text isTruncated style={styles.title}>
                {item.title}
              </Text>
              <Text isTruncated style={styles.description}>
                {item.decs}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: responsiveHeight(3),
    // height: 200,
    // borderWidth: 1,
    // borderColor: WARNA_WHITE,
    // borderRadius: 8,
    // marginHorizontal: responsiveHeight(2),
  },
  containerSlide: {},
  slide: {
    width: Dimensions.get('window').width * 0.9,
    height: 160,
    marginRight: 2,
    // borderRadius: 8,
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: 160,
    resizeMode: 'cover',
    // borderRadius: 8,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.8,
    backgroundColor: WARNA_SEKUNDER,
    padding: 10,
    alignItems: 'center',
    // borderBottomRightRadius: 8,
    // borderBottomLeftRadius: 8,
    // paddingRight: responsiveHeight(1),
    // textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'white',
    fontSize: 15,
  },
});

export default BannerMaterialHome;

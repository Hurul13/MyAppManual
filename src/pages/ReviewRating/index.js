import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import banner from '../../utils/banner';

const ReviewRating = () => {
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
        onMomentumScrollEnd={handleScroll}>
        {banner.map(item => (
          <View style={styles.slide} key={item.id}>
            <Image style={styles.image} source={item.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.decs}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 10,
  },
  slide: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'white',
    fontSize: 16,
  },
});

export default ReviewRating;

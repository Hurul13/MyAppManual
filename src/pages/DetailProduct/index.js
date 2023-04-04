import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DecsDetailProduct,
  MinPlus,
  Accordion,
  AccordionRating,
} from '../../components';
import accordionDecs from '../../utils/accordionDecs';
import accordionRating from '../../utils/accordionRating';
import Share from 'react-native-share';

const images = [
  'https://cdn.pixabay.com/photo/2017/06/01/02/18/black-2362261_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/07/13/04/51/marble-3534940_960_720.jpg',
];

const DetailProduct = ({navigation, onValueChange}) => {
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

  const [minPlus, setMinPlus] = useState(1);

  const onCounterChange = value => {
    setMinPlus(value);
  };

  const share = async () => {
    const options = {
      message: 'this is a test message',
      // url: 'https://github.com/Hurul13',
      email: 'hurulaini218@gmail.com',
      subject: 'succes',
      recipient: '08765432234',
    };
    try {
      const res = await Share.open(options);
      console.log(JSON.stringify(res));
    } catch (err) {
      console.log('Error => ', err);
    }

    // Share.open(options)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
      <View style={styles.header}>
        <TouchableOpacity style={styles.bulat}>
          <IconMaterial
            name="arrow-left"
            size={26}
            style={styles.icon}
            onPress={navigation.goBack}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bulat} onPress={share}>
          <IconMaterial name="dots-vertical" size={26} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.space}>
        <Text style={styles.text}>Keramik Motif Marmer</Text>
        {/* <IconMaterial name="heart" size={26} style={styles.iconLike} /> */}
      </View>
      <Text style={styles.text1}>Keramik Marmer</Text>
      <View style={styles.space1}>
        <Text style={styles.text3}>$8.10</Text>
        <MinPlus onValueChange={onCounterChange} />
      </View>
      <View style={styles.line}>
        <View style={styles.box1}>
          <View style={styles.bgShop}>
            <Image
              source={require('../../assets/Images/shop.png')}
              style={styles.imgShop}
            />
          </View>
          <View style={styles.box2}>
            <Text style={styles.text4}>Tiga Saudara Bangunan</Text>
            <View style={styles.kota}>
              <IconMaterial
                name="map-marker"
                size={17}
                style={styles.iconMap}
              />
              <Text style={styles.textKota}>Kota Surabaya</Text>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        data={accordionDecs}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Accordion title={item.title} bodyText={item.body} />
        )}
      />
      <FlatList
        data={accordionRating.slice(
          0,
          accordionRating.length > 1 ? 1 : accordionRating.length,
        )}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <AccordionRating title={'Review'} />}
      />
      <TouchableOpacity onPress={() => navigateTo('Keranjang')}>
        <View style={styles.boxBtn}>
          <IconMaterial name="cart-outline" size={24} style={styles.iconCard} />
          <Text style={styles.text5}>Tambah Keranjang</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailProduct;

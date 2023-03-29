import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
  WARNA_GRAYTUA,
} from '../../utils/constant';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import material from '../../utils/material';

const Homes = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const Card = ({materials}) => {
    return (
      <TouchableHighlight
        underlayColor={WARNA_WHITE}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailProduct', materials)}>
        <View style={styles.card}>
          <View style={styles.cardImg}>
            <Image source={materials.image} style={styles.img} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.text}>{materials.name}</Text>
            <Text style={styles.text1}>{materials.ingredients}</Text>
          </View>
          <View style={styles.boxPrice}>
            <Text style={styles.text2}>${materials.price}</Text>
            <View style={styles.rating}>
              <IconMaterial name="star" size={19} style={styles.iconStar} />

              <Text style={styles.text3}>{materials.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="bell"
            size={23}
            style={styles.iconBell}
            onPress={() => navigateTo('Notifikasi')}
          />
          <IconMaterial
            name="cart-outline"
            size={26}
            style={styles.iconTroll}
            onPress={() => navigateTo('Keranjang')}
          />
          <Image
            source={require('../../assets/Images/logoHOMEI.png')}
            style={styles.logo}
            size={25}></Image>
        </View>
        <LinearGradient
          colors={['#FDD329', '#FDD329', '#FDD329', '#F2F2F2']}
          style={styles.boxLinear}>
          <View style={styles.box1}>
            <TextInput
              placeholder="Search Material ... "
              style={styles.textInput}></TextInput>
            <IconMaterial name="magnify" size={26} style={styles.iconSearch} />
          </View>
          <View>
            <Text style={styles.textJudul}>Material sering dibeli</Text>
            <TouchableOpacity onPress={() => navigateTo('Catalogue')}>
              <Text style={styles.textSubJudul}>Selengkapnya</Text>
              <IconMaterial
                name="chevron-right"
                size={21}
                style={styles.iconNext}
              />
            </TouchableOpacity>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.boxCard}
              data={material.slice(
                0,
                material.length > 3 ? 3 : material.length,
              )}
              renderItem={({item}) => <Card materials={item} />}
            />
          </View>
        </LinearGradient>
        <View style={styles.material1}>
          <Text style={styles.textJudul}>Rekomendasi material untuk anda</Text>
          <TouchableOpacity onPress={() => navigateTo('Catalogue')}>
            <Text style={styles.textSubJudul}>Selengkapnya</Text>
            <IconMaterial
              name="chevron-right"
              size={21}
              style={styles.iconNext}
            />
          </TouchableOpacity>
          <FlatList
            style={styles.boxCard}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={material.slice(0, material.length > 4 ? 4 : material.length)}
            renderItem={({item}) => <Card materials={item} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Homes;

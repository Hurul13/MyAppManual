import {
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import {logoHOMEI, iconkeranjang} from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  Banner,
  BannerMaterialHome,
  BottomUtamaHome,
  SearchBar,
} from '../../components';

const Homes = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="bell" size={23} style={styles.iconBell} />
          <IconMaterial
            name="cart-outline"
            size={26}
            style={styles.iconTroll}
          />
          <Image source={logoHOMEI} style={styles.logo} size={25}></Image>
        </View>
        <LinearGradient
          colors={['#FDD329', '#FDD329', '#FDD329', '#F2F2F2']}
          style={styles.boxLinear}>
          <SearchBar />
          <Banner />
        </LinearGradient>
        {/* <BottomUtamaHome /> */}
        <BannerMaterialHome />
      </View>
    </ScrollView>
  );
};

export default Homes;

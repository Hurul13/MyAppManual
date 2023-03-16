import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {WARNA_UTAMA, WARNA_DISABLE} from '../../utils/constant';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const IconBottom = () => {
    if (label === 'Home')
      return isFocused ? (
        <Ionicon name="home" size={23} color="#FDCD29" />
      ) : (
        <Ionicon name="home-outline" size={23} color="#34495E" light />
      );

    if (label === 'Catalogue')
      return isFocused ? (
        <Ionicon name="grid" size={23} color="#FDCD29" />
      ) : (
        <Ionicon name="grid-outline" size={23} color="#34495E" light />
      );

    if (label === 'Profile')
      return isFocused ? (
        <Icon name="user" size={23} color="#FDCD29" solid />
      ) : (
        <Icon name="user" size={23} color="#34495E" light />
      );
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <IconBottom />
      <Text style={styles.textBottom(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

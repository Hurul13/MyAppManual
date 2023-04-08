import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
} from '../utils/constant';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Notifikasi = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your email</Text>
      <TextInput></TextInput>
    </View>
  );
};

export default Notifikasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WARNA_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(5),
  },
});

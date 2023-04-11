import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  Box,
  Pressable,
  Input,
  ScrollView,
  Center,
  HStack,
  Button,
  Text,
  VStack,
  FormControl,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import material from '../../utils/material';
import {CartItem, Buttone} from '../../components';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
  WARNA_GRAYTUA,
  WARNA_BORDER,
  WARNA_DEEPYELLOW,
} from '../../utils/constant';
import addressUser from '../../utils/addressUser';

const ContactAdrress = [
  {
    label: 'Full Name',
    type: 'text',
  },
  {
    label: 'Phone Number',
    type: 'numeric',
  },
];

const EditAddress = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.judulBar}>Edit Address</Text>
      </View>
      <View style={styles.box}>
        <Box
        // px={5}
        // h="full"
        // bg={WARNA_WHITE}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            mx={responsiveHeight(3)}></ScrollView>
        </Box>
      </View>
    </View>
  );
};

export default EditAddress;

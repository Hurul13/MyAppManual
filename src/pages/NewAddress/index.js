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

const NewAddress = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.judulBar}>New Address</Text>
      </View>
      <View style={styles.box}>
        <Box
        // px={5}
        // h="full"
        // bg={WARNA_WHITE}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            mx={responsiveHeight(3)}>
            <Text
              fontSize={responsiveFontSize(2.2)}
              bold
              color={WARNA_GRAYTUA}
              my={responsiveHeight(2)}
              mt={responsiveHeight(4)}>
              Contact
            </Text>
            <VStack space={2}>
              {ContactAdrress.map((i, index) => (
                <FormControl key={index}>
                  <Input
                    borderWidth={0.2}
                    borderColor={WARNA_UTAMA}
                    bg={WARNA_DEEPYELLOW}
                    py={2}
                    placeholder={i.label}
                    type={i.type}
                    color={WARNA_SEKUNDER}
                    _focus={{
                      bg: WARNA_DEEPYELLOW,
                      borderColor: WARNA_UTAMA,
                      borderWidth: 1,
                    }}
                    _text={{fontSize: responsiveFontSize(2)}}
                  />
                </FormControl>
              ))}
            </VStack>
            <Text
              fontSize={responsiveFontSize(2.2)}
              bold
              color={WARNA_GRAYTUA}
              my={responsiveHeight(2)}
              mt={responsiveHeight(4)}>
              Address
            </Text>
            <VStack space={2}>
              {addressUser.map((i, index) => (
                <FormControl key={index}>
                  <Input
                    borderWidth={0.2}
                    borderColor={WARNA_UTAMA}
                    bg={WARNA_DEEPYELLOW}
                    py={2}
                    placeholder={i.label}
                    type={i.type}
                    color={WARNA_SEKUNDER}
                    _focus={{
                      bg: WARNA_DEEPYELLOW,
                      borderColor: WARNA_UTAMA,
                      borderWidth: 1,
                    }}
                    _text={{fontSize: responsiveFontSize(2)}}
                  />
                </FormControl>
              ))}
              <TouchableOpacity>
                <Buttone
                  bg={WARNA_UTAMA}
                  color={WARNA_SEKUNDER}
                  borderWidth={1}
                  borderColor={WARNA_BORDER}
                  mt={10}
                  onPress={() => navigation.navigate('EditProfile2')}>
                  SUBMIT
                </Buttone>
              </TouchableOpacity>
            </VStack>
          </ScrollView>
        </Box>
      </View>
    </View>
  );
};

export default NewAddress;

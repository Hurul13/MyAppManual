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
import {CartItem, Buttone} from '..';
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
// import editProfile from '../../utils/editProfile';
import editProfile from '../../utils/editProfile';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const ContactAdrress = [
  {
    id: '1',
    label: 'Nama',
    type: 'text',
    placeholder: 'Masukkan nama ...',
    text: 'Lorem Ipsum',
  },
  {
    id: '2',
    label: 'No. Telpon',
    type: 'numeric',
    placeholder: 'Masukkan no telepon ...',
    text: '0851234567',
  },
];

const EditProfileTab = () => {
  // const navigateTo = async page => {
  //   navigation.navigate(page);
  // };
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);

  return (
    <Box h="full" bg={WARNA_WHITE}>
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        mx={responsiveHeight(3)}>
        {/* <Text
          fontSize={responsiveFontSize(2.2)}
          bold
          color={WARNA_GRAYTUA}
          my={responsiveHeight(2)}
          mt={responsiveHeight(4)}>
          Contact
        </Text> */}
        <VStack space={2} mt={responsiveHeight(4)}>
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
                _text={{fontSize: responsiveFontSize(2)}}>
                {i.text}
              </Input>
            </FormControl>
          ))}
        </VStack>
        <Text
          fontSize={responsiveFontSize(2.2)}
          bold
          color={WARNA_GRAYTUA}
          my={responsiveHeight(2)}
          mt={responsiveHeight(4)}>
          Change Password
        </Text>
        <VStack space={2}>
          {editProfile.map((i, index) => (
            <FormControl key={index}>
              <Input
                w={{
                  base: '100%',
                  md: '25%',
                }}
                borderWidth={0.2}
                borderColor={WARNA_UTAMA}
                bg={WARNA_DEEPYELLOW}
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)} mr={2}>
                    <IconMaterial
                      name={show ? 'eye' : 'eye-off'}
                      size={25}
                      style={{color: WARNA_GRAYTUA}}
                    />
                    {/* size={5}
                    mr="2" color="muted.400" */}
                  </Pressable>
                }
                placeholder="Password">
                {i.text}
              </Input>
            </FormControl>
          ))}
          <TouchableOpacity>
            <Buttone
              bg={WARNA_UTAMA}
              color={WARNA_SEKUNDER}
              borderWidth={1}
              borderColor={WARNA_BORDER}
              mt={10}
              onPress={() => navigation.navigate('Profile')}>
              UPDATE PROFILE
            </Buttone>
          </TouchableOpacity>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default EditProfileTab;

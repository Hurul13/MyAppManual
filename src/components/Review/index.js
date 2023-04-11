import {
  Box,
  HStack,
  Text,
  Button,
  Heading,
  FormControl,
  VStack,
  CheckIcon,
  Select,
  TextArea,
} from 'native-base';
import React, {useEffect, useState} from 'react';
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
import Rating from '../Rating';
import Message from '../Message';
import Buttone from '../Buttone';

const Review = () => {
  const [rating, setRating] = useState('');
  return (
    <Box my={9} mx={responsiveHeight(3)}>
      <Text
        bold
        mb={2}
        color={WARNA_SEKUNDER}
        fontSize={responsiveFontSize(2.5)}>
        Review
      </Text>
      {/* IF THERE IS NO REVIEW */}
      {/* <Message
        color={WARNA_SEKUNDER}
        bg={WARNA_DEEPYELLOW}
        bold
        children={'NO REVIEW'}
      /> */}
      {/* REVIEW */}
      <Box p={3} bg={WARNA_DEEPYELLOW} mt={2} rounded={5}>
        <Text
          color={WARNA_SEKUNDER}
          fontSize={responsiveFontSize(2)}
          fontWeight={700}>
          User Lorem
        </Text>
        <Rating value={4} />
        <Text mb={2} color={WARNA_GRAYTUA}>
          April 09 2023
        </Text>
        <Message
          color={WARNA_SEKUNDER}
          bg={WARNA_WHITE}
          size={responsiveFontSize(1.5)}
          children={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        />
      </Box>
      {/* CREATE REVIEW */}
      {/* <Box mt={6}>
        <Text
          bold
          mb={2}
          color={WARNA_SEKUNDER}
          fontSize={responsiveFontSize(2.5)}>
          Review This Product
        </Text>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: responsiveFontSize(1.7),
                fontWeight: 'bold',
                color: WARNA_GRAYTUA,
              }}>
              Rating
            </FormControl.Label>
            <Select
              bg={WARNA_DEEPYELLOW}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: WARNA_DEEPYELLOW,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={rating}
              onValueChange={e => setRating(e)}>
              <Select.Item label="Bintang 1" value="1" />
              <Select.Item label="Bintang 2" value="2" />
              <Select.Item label="Bintang 3" value="3" />
              <Select.Item label="Bintang 4" value="4" />
              <Select.Item label="Bintang 5" value="5" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: responsiveFontSize(1.7),
                fontWeight: 'bold',
                color: WARNA_GRAYTUA,
              }}>
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This product is good ...."
              borderWidth={0}
              bg={WARNA_DEEPYELLOW}
              py={4}
              _focus={{bg: WARNA_DEEPYELLOW}}
            />
          </FormControl>
          <Buttone bg={WARNA_UTAMA} color={WARNA_SEKUNDER} mt={3}>
            SUBMIT
          </Buttone>
        </VStack>
      </Box> */}
    </Box>
  );
};

export default Review;

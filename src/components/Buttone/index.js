import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, HStack, Text, Button} from 'native-base';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Buttone = ({mx, my, mt, bg, color, children, onPress, mb}) => {
  return (
    <Button
      w={responsiveHeight(43)}
      mb={mb}
      mx={mx}
      my={my}
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.2),
      }}
      _pressed={{bg: bg}}
      onPress={onPress}>
      {children}
    </Button>
  );
};

export default Buttone;

const styles = StyleSheet.create({});

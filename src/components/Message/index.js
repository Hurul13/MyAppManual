import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, HStack, Text, Button, Center} from 'native-base';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Message = ({bg, color, children, size, bold}) => {
  return (
    <Center bg={bg} p={2.5} rounded={5}>
      <Text color={color} fontSize={size} bold={bold}>
        {children}
      </Text>
    </Center>
  );
};

export default Message;

const styles = StyleSheet.create({});

import {View, Text} from 'react-native';
import React from 'react';

const Navigation = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  return;
};

export default Navigation;

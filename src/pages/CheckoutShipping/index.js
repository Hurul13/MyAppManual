import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckoutShipping = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconMaterial
            name="arrow-left"
            size={26}
            style={styles.iconBack}
            onPress={navigation.goBack}
          />
          <Text style={styles.judulBar}>Checkout Shipping</Text>
        </View>
        <View style={styles.box}></View>
      </View>
    </ScrollView>
  );
};

export default CheckoutShipping;

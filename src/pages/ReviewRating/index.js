import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const ReviewRating = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.judulBar}>Review Rating</Text>
        </View>
        <View style={styles.box}></View>
      </View>
    </ScrollView>
  );
};

export default ReviewRating;

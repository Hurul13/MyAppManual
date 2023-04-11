import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  Box,
  Pressable,
  Input,
  // ScrollView,
  Center,
  HStack,
  Button,
  // Text,
  VStack,
  FormControl,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {Buttone, TabsEditProfile} from '../../components';

const EditProfile2 = ({navigation}) => {
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
          <Text style={styles.judulBar}>Edit Profile</Text>
        </View>
        <View style={styles.box}>
          <TabsEditProfile />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile2;

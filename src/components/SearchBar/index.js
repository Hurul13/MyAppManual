import {Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search material ... " style={styles.textInput} />
      <IconMaterial name="magnify" size={26} style={styles.iconSearch} />
    </View>
  );
};

export default SearchBar;

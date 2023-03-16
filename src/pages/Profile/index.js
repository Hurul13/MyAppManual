import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {CartMaterial} from '../../components';

const Profile = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return <View style={styles.container}></View>;
};

export default Profile;

import {ImageBackground, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles';
import {logoHOMEI, splashBG} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login2');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={splashBG} style={styles.splashbg}>
      <Image source={logoHOMEI} style={styles.logobg} />
    </ImageBackground>
  );
};

export default Splash;

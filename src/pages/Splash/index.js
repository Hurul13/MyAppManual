import {ImageBackground, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login2');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/Images/splash.png')}
      style={styles.splashbg}>
      {/* <Image
        source={require('../../assets/Images/logoHOMEI.png')}
        style={styles.logobg}
      /> */}
    </ImageBackground>
  );
};

export default Splash;

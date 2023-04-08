import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignIn from '../../assets/signIn';
import SignUp from '../../assets/signUp';
import {emailKey, pinKey} from '../../assets/constants/constants';

const Notifikasi = ({navigation}) => {
  const [isSignUp, setIsSingUp] = useState < Boolean > true;

  useEffect(() => {
    AsyncStorage.clear();
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const values = await AsyncStorage.multiGet([emailKey, pinKey]);
      if (values[0][1] !== null && values[1][1] !== null) {
        setIsSingUp(false);
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <>
      {isSignUp ? (
        <SignUp navigation={navigation} />
      ) : (
        <SignIn navigation={navigation} />
      )}
    </>
  );
};

export default Notifikasi;

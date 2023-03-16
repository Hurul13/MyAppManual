import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';

const Catalogue = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: 'Catalogue',
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Stack')}
          style={styles.stack}></TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Catalogue</Text>
    </View>
  );
};

export default Catalogue;

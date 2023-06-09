import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckoutBerhasil = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Perform the refresh logic here
    // You can call an API or update the data
    // After the refresh is complete, set refreshing to false
    setRefreshing(true);
    // Add your refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulating a 2-second refresh
  };

  return (
    <ScrollView
      style={styles.all}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconMaterial
            name="arrow-left"
            size={26}
            style={styles.iconBack}
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.judulBar}>Pembayaran Selesai</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.space}>
            <IconMaterial name="check-circle" size={120} style={styles.icon} />
          </View>
          <View style={styles.space1}>
            <Text style={styles.text}>Pembayaran Sukses</Text>
            <Text style={styles.text1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum condimentum porta enim. Nunc arcu orci, posuere nec
              risus sed, blandit gravida tortor.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckoutBerhasil;

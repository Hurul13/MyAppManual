import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
  RefreshControl,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { BiometrikPopup } from '../../components';

const MidtransWebView = ({ navigation }) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    // Simulate data fetch or any asynchronous task
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Adjust the timeout duration as needed

    // You can also perform any other refresh logic here
  };

  return (
    <ScrollView
      style={styles.all}
    // refreshControl={
    //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    // }
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <IconMaterial
            name="arrow-left"
            size={26}
            style={styles.iconBack}
            // onPress={navigation.goBack}
            onPress={() => navigateTo('Profile')}
          />
          <Text style={styles.judulBar}>Pembayaran</Text>
        </View>
        <View style={styles.box}>
          <BiometrikPopup></BiometrikPopup>
        </View>
      </View>
    </ScrollView>
  );
};

export default MidtransWebView;
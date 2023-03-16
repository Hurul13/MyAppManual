import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const BottomUtamaHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuBottom}>
        <View style={styles.boxBottom}>
          <IconMaterial
            name="account-supervisor"
            size={50}
            style={styles.icon}
          />
          <Text style={styles.text}>Mitra</Text>
        </View>
        <View style={styles.menu2}>
          <View style={styles.boxBottom}>
            <IconMaterial name="cart" size={41.5} style={styles.icon2} />
            <Text style={styles.text}>Material</Text>
          </View>
        </View>
        <View style={styles.menu3}>
          <View style={styles.boxBottom}>
            <IconMaterial name="account-search" size={50} style={styles.icon} />
            <Text style={styles.text}>Cari Tukang</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomUtamaHome;

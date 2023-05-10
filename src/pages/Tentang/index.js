import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const Tentang = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconMaterial
            name="arrow-left"
            size={26}
            style={styles.iconBack}
            onPress={navigation.goBack}
          />
          <Text style={styles.judulBar}>Tentang</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text1}>Kontak Kami</Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://goo.gl/maps/xGnNDTuEbm4MtcR27')
            }>
            <View style={styles.profilMap}>
              <View style={styles.box2}>
                <View style={styles.box3}>
                  <IconMaterial
                    name="map-marker"
                    size={26}
                    style={styles.iconMap}
                  />
                </View>
                <Text style={styles.text2}>
                  Jl. Sumatera 1-15, Surabaya - Jawa Timur, Indonsia 60131
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('tel:+6281333600959')}>
            <View style={styles.profilTelpon}>
              <View style={styles.box2}>
                <View style={styles.box3}>
                  <IconMaterial name="phone" size={26} style={styles.iconMap} />
                </View>
                <Text style={styles.text2}>+6281333600959</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:admin@homei.com')}>
            <View style={styles.profilTelpon}>
              <View style={styles.box2}>
                <View style={styles.box3}>
                  <IconMaterial name="email" size={26} style={styles.iconMap} />
                </View>
                <Text style={styles.text2}>admin@homei.com</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Tentang;

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
import {Accordion, DecsDetailProduct, MinPlus} from '../../components';
import material from '../../utils/material';

const Notifikasi = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [minPlus, setMinPlus] = useState(1);
  const onCounterChange = value => {
    setMinPlus(value);
  };

  const data = [
    {
      id: 0,
      title: 'Descripsi Product',
      body: 'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item',
    },
    {
      id: 1,
      title: 'Rating Product',
      body: 'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item',
    },
  ];

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.judulBar}>Notifikasi</Text>
        </View>
        <View style={styles.box}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Accordion title={item.title} bodyText={item.body} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifikasi;

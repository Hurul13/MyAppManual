import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
  WARNA_GRAYTUA,
} from '../../utils/constant';
import material from '../../utils/material';
import categories from '../../utils/categories';

const Card = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const Cards = ({materials}) => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableHighlight
          underlayColor={WARNA_WHITE}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('DetailProduct', materials)}>
          <View style={styles.card}>
            <View style={styles.cardImg}>
              <Image source={materials.image} style={styles.img} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.text}>{materials.name}</Text>
              <Text style={styles.text1}>{materials.ingredients}</Text>
            </View>
            <View style={styles.boxPrice}>
              <Text style={styles.text2}>${materials.price}</Text>
              <View style={styles.rating}>
                <IconMaterial name="star" size={19} style={styles.iconStar} />

                <Text style={styles.text3}>{materials.rating}</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
        )
      </ScrollView>
    );
  };
  return (
    <FlatList
      style={styles.boxCard}
      // showsVerticalScrollIndicator={false}
      numColumns={2}
      data={material}
      renderItem={({item}) => <Cards materials={item} />}
    />
  );
};

export default Card;

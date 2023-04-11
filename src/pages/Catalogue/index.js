import {
  // Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
  WARNA_GRAYTUA,
} from '../../utils/constant';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import categories from '../../utils/categories';
import material from '../../utils/material';
// import {ScrollView} from 'react-native-virtualized-view';

const Catalogue = ({navigation}, {materials}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const Category = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index ? WARNA_SEKUNDER : WARNA_UTAMA,
                ...styles.categoryBtn,
              }}>
              <View style={styles.categoryBtnImgCon}>
                <Image source={category.image} style={styles.imgCategory} />
              </View>
              <Text
                style={{
                  fontSize: responsiveFontSize(1.8),
                  fontWeight: 'bold',
                  color:
                    selectedCategoryIndex == index ? WARNA_UTAMA : WARNA_WHITE,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  {
    /* <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index ? WARNA_SEKUNDER : WARNA_WHITE,
                ...styles.categoryBtn,
              }}>
              <Text
                style={{
                  // borderColor:
                  //   selectedCategoryIndex == index ? WARNA_UTAMA : WARNA_WHITE,
                  fontSize: responsiveFontSize(2.5),
                  borderBottomWidth: 1,
                  paddingVertical: responsiveWidth(1),
                  fontWeight: 'bold',
                  textAlign: 'center',
                  borderWidth: 1,
                  paddingHorizontal: responsiveHeight(2),
                  color:
                    selectedCategoryIndex == index
                      ? WARNA_UTAMA
                      : WARNA_SEKUNDER,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity> */
  }
  const Card = ({materials}) => {
    return (
      <TouchableHighlight
        underlayColor={WARNA_WHITE}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailProduct2', materials)}>
        <View style={styles.card}>
          <View style={styles.cardImg}>
            <Image source={materials.image} style={styles.img} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.text} isTruncated>
              {materials.name}
            </Text>
            <Text style={styles.text1} isTruncated>
              {materials.ingredients}
            </Text>
          </View>
          <View style={styles.boxPrice}>
            <Text style={styles.text2}>${materials.price}</Text>
            <View style={styles.rating}>
              <Text style={styles.text3}>{materials.rating}</Text>
              <IconMaterial name="star" size={19} style={styles.iconStar} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.boxHeader}>
          <View style={styles.boxHeader1}>
            <View style={styles.header}>
              <View style={styles.box1}>
                <View style={styles.boxSearch}>
                  <IconMaterial
                    name="magnify"
                    size={26}
                    style={styles.iconSearch}
                  />
                </View>
                <TextInput
                  placeholder="Search Material..."
                  placeholderTextColor={WARNA_DISABLE}
                  style={styles.textInput}></TextInput>
              </View>
              {/* <TouchableOpacity>
                <View style={styles.boxFilter}>
                  <IconMaterial
                    name="filter-variant"
                    size={33}
                    style={styles.iconFilter}
                  />
                </View>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
        <View style={styles.box}>
          {/* <FlatList
            // style={styles.boxCard}
            // showsVerticalScrollIndicator={false}
            // numColumns={2}
            data={categories}
            renderItem={({item}) => <Category category={item} />}
          /> */}
          <View>
            <Category></Category>
          </View>
          <FlatList
            style={styles.boxCard}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={material}
            renderItem={({item}) => <Card materials={item} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Catalogue;

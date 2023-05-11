import React, {useState, useEffect} from 'react';
import {
  View,
  // Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, Center, Text, HStack} from 'native-base';

import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {url} from '../../utils/url';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  WARNA_DISABLE,
  WARNA_GRAYTUA,
  WARNA_SEKUNDER,
  WARNA_UTAMA,
  WARNA_DEEPYELLOW,
  WARNA_WHITE,
  WARNA_BORDER,
} from '../../utils/constant';
import {Buttone} from '../../components';

const URL = `${url}supplier-barang/index`;

const ReviewRating = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteItem = id => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
    setSelectedItems(selectedItems.filter(itemId => itemId !== id));
  };

  const handleCheckItem = (id, harga) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
      setTotalHarga(totalHarga - harga);
    } else {
      setSelectedItems([...selectedItems, id]);
      setTotalHarga(totalHarga + harga);
    }
  };

  const renderItem = ({item}) => {
    const {id, gambar, harga_proyek, nama_barang, stok} = item;
    const isSelected = selectedItems.includes(id);

    return (
      <View style={styles.card}>
        <View style={styles.spaceImg}>
          {/* <Image source={{uri: gambar}} style={styles.gambar} /> */}
        </View>
        <View style={styles.space1}>
          <View style={styles.textContainer}>
            <Text isTruncated style={styles.nama}>
              {nama_barang}
            </Text>
            <Text style={styles.harga}>Rp {harga_proyek}</Text>
            <NumericInput
              // value={stok}
              // onChange={value => console.log(value)}
              minValue={0}
              maxValue={stok}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              borderColor={WARNA_DEEPYELLOW}
              rounded
              textColor={WARNA_SEKUNDER}
              iconStyle={{color: WARNA_SEKUNDER}}
              rightButtonBackgroundColor={WARNA_UTAMA}
              leftButtonBackgroundColor={WARNA_UTAMA}
            />
          </View>
          <View style={styles.space2}>
            <TouchableOpacity
              onPress={() => handleCheckItem(id, harga_proyek)}
              style={styles.checkButton}>
              {isSelected ? (
                <Icon name="check-square-o" size={20} color="green" />
              ) : (
                <Icon name="square-o" size={20} color="grey" />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDeleteItem(id)}
              style={styles.deleteButton}>
              <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.slice(0, data.length > 5 ? 5 : data.length)}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.bottom}>
        <View style={styles.bottomTotal}>
          <Text style={styles.totalHarga1}>Total Harga</Text>
          <Text style={styles.totalHarga}>Rp. {totalHarga}</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log('checkout')}
          style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  card: {
    backgroundColor: 'white',
    marginVertical: responsiveWidth(1),
    marginHorizontal: responsiveHeight(2),
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: WARNA_DISABLE,
    borderWidth: 1,
  },
  spaceImg: {
    width: '30%',
    backgroundColor: 'white',
    // borderWidth: 1,
    height: 105,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: WARNA_DISABLE,
  },
  space1: {
    flexDirection: 'row',
    paddingVertical: responsiveWidth(2),
  },
  space2: {
    flexDirection: 'row',
    paddingHorizontal: responsiveHeight(0.8),
    width: '20%',
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    paddingHorizontal: responsiveHeight(1),
    // borderWidth: 1,
    width: '63%',
  },
  nama: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
  },
  harga: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: WARNA_GRAYTUA,
    paddingVertical: responsiveWidth(2),
  },
  bottom: {
    // backgroundColor: WARNA_UTAMA,
    borderTopWidth: 1,
    borderColor: WARNA_BORDER,
    alignItems: 'center',
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    // justifyContent
    // marginHorizontal: responsiveHeight(2),
  },
  bottomTotal: {
    marginVertical: responsiveWidth(5),
    flexDirection: 'row',
    borderRadius: 50,
    justifyContent: 'space-between',
    backgroundColor: WARNA_WHITE,
    // shadowOpacity: 2,
    width: '90%',
    height: 45,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: WARNA_BORDER,
    alignItems: 'center',
  },
  totalHarga1: {
    paddingHorizontal: responsiveHeight(2),
    fontSize: responsiveFontSize(2),
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  totalHarga: {
    paddingVertical: responsiveWidth(3),
    textAlign: 'center',
    paddingHorizontal: responsiveHeight(2),
    height: 45,
    borderRadius: 50,
    backgroundColor: WARNA_UTAMA,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
  checkoutButton: {
    // borderTopWidth: 1,
    // borderColor: WARNA_BORDER,
    alignItems: 'center',
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    backgroundColor: WARNA_UTAMA,
    width: '90%',
    borderRadius: 50,
    // height: 45,
    marginVertical: responsiveWidth(5),
  },
  checkoutText: {
    fontSize: responsiveFontSize(2),
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
    // paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveWidth(4),
    textAlign: 'center',
  },
});

export default ReviewRating;

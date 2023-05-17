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
import styles from './Styles';
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
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {Buttone} from '../../components';

const URL = `${url}supplier-barang/index`;

const Keranjang3 = ({navigation}) => {
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
    setTotalHarga(totalHarga - data.find(item => item.id === id).harga_proyek);
  };

  const handleCheckItem = (id, harga, stok) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
      setTotalHarga(totalHarga - harga * stok);
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
          <Image
            source={require('../../assets/Images/batu.jpg')}
            style={styles.img}
          />
        </View>
        <View style={styles.space1}>
          <View style={styles.textContainer}>
            <Text isTruncated style={styles.nama}>
              {nama_barang}
            </Text>
            <Text style={styles.harga}>Rp {harga_proyek}</Text>
            <NumericInput
              // value={stok}
              onChange={value => console.log(value)}
              minValue={1}
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
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.judulBar}>Keranjang</Text>
      </View>
      <View style={styles.box}>
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
            // onPress={() => console.log('checkout')}
            onPress={() => navigation.navigate('Checkout')}
            style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Keranjang3;

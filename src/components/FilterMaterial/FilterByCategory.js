import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const FilterByCategory = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'http://192.168.1.3/homeii/web/api/v1/supplier-barang/index',
    );
    const json = await response.json();
    setData(json.data);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require('../../assets/Images/batu.jpg')}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.nama_barang}</Text>
          <Text style={styles.cardText}>Harga Proyek: {item.harga_proyek}</Text>
          <Text style={styles.cardTextStok}>Stok: {item.stok}</Text>
        </View>
      </View>
    );
  };

  const renderCategory = ({item}) => {
    const isSelected = selectedCategory === item;
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            isSelected && styles.activeCategoryButton,
          ]}
          onPress={() => setSelectedCategory(isSelected ? null : item)}>
          <Text
            style={[
              styles.categoryText,
              isSelected && styles.selectedCategoryText,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const getFilteredData = () => {
    // if (!selectedCategory) {
    //   return data;
    // }
    // return data.filter(item => item.nama_barang === selectedCategory);
    if (selectedCategory === null) {
      return data;
    }
    return data.filter(item =>
      item.nama_barang.toLowerCase().includes(selectedCategory.toLowerCase()),
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        // showsHorizontalScrollIndicator={false}
      >
        <FlatList
          data={[
            'batu',
            'semen',
            'pasir',
            'keramik',
            'genteng',
            'besi',
            'bata',
            'steel',
          ]}
          renderItem={renderCategory}
          keyExtractor={item => item}
          extraData={selectedCategory}
          horizontal={true}
          // style={{flexDirection: 'row'}}
        />
      </ScrollView>
      <FlatList
        data={getFilteredData()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection: 'row',
    // paddingTop: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  card: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    marginLeft: 20,
    borderRadius: 10,
  },
  cardContent: {
    marginLeft: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  cardText: {
    fontSize: 16,
    color: 'green',
  },
  cardTextStok: {
    fontSize: 14,
    color: 'gray',
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  categoryButton: {
    // borderWidth: 1,
    backgroundColor: 'gray',
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveWidth(2),
    borderRadius: 5,
    marginVertical: responsiveWidth(2),
    marginHorizontal: responsiveHeight(1),
  },
  activeCategoryButton: {
    backgroundColor: 'red',
  },
  categoryText: {
    color: 'White',
  },
  selectedCategoryText: {
    color: 'white',
  },
});

export default FilterByCategory;

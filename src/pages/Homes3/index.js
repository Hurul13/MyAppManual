import {
  WARNA_DISABLE,
  WARNA_WHITE,
  WARNA_RED,
  WARNA_SEKUNDER,
} from '../../utils/constant';

// call api pake axios
// import React, {useEffect, useState} from 'react';
// import {View, Text, FlatList, Image} from 'react-native';
// import axios from 'axios';

// const API_URL = 'http://192.168.1.11/homei/web/api/v1/supplier-barang/index';
// const API_URL1 = 'http://localhost/homei/web/api/v1/supplier-barang/index';

// const Homes3 = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(API_URL, {
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log(response.data);
//       // setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const renderData = ({item}) => (
//     <View style={{color: WARNA_RED, fontSixe: 50, padding: 10}}>
//       <Text>{item.nama_barang}</Text>
//       <Text>{item.stok}</Text>
//       <Text>{item.harga_proyek}</Text>
//       {/* <Image source={{uri: item.gambar}} style={{width: 100, height: 100}}/> */}
//     </View>
//   );

//   return (
//     <View>
//       <FlatList
//         data={data}
//         keyExtractor={item => item.id.toString()}
//         renderItem={renderData}
//       />
//     </View>
//   );
// };

// export default Homes3;

// call api pake fetch
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {MyCheckBox} from '../../components';

const API_URL = 'http://192.168.1.11:/homei/web/api/v1/supplier-barang/index';
const API_URL1 = 'http://localhost/homei/web/api/v1/supplier-barang/index';

const Homes3 = () => {
  const [dataMaterial, setDataMaterial] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setDataMaterial(json.data);
      // console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({item}) => {
    const {nama_barang, stok, harga_proyek, gambar} = item;
    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        {/* <Image
          source={{uri: gambar}}
          style={{width: 50, height: 50, marginRight: 10}}
        /> */}
        <View style={{flex: 1, color: WARNA_RED, fontSize: 50}}>
          <Text style={{fontWeight: 'bold', color: WARNA_RED}}>
            {nama_barang}
          </Text>
          <Text style={{color: WARNA_RED}}>Stok: {stok}</Text>
          <Text style={{color: WARNA_RED}}>Harga Proyek: {harga_proyek}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={dataMaterial}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

export default Homes3;

// call api pake fetch dengan map
// import React, {useState, useEffect} from 'react';
// import {View, Text, Image} from 'react-native';

// const Homes3 = () => {
//   const [barang, setBarang] = useState([]);

//   useEffect(() => {
//     fetch('http://192.168.1.11/homei/web/api/v1/supplier-barang/index')
//       .then(response => response.json())
//       .then(json => {
//         setBarang(json.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <View>
//       {barang &&
//         barang.map((item, index) => (
//           <View key={index}>
//             <Text>{item.nama_barang}</Text>
//             <Text>{item.stok}</Text>
//             <Text>{item.harga_proyek}</Text>
//             {/* <Image
//               source={{uri: item.gambar}}
//               style={{width: 50, height: 50}}
//             /> */}
//           </View>
//         ))}
//     </View>
//   );
// };

// export default Homes3;

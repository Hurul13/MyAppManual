import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { AutoRefreshAnimation, ImagePicker } from '../../components';
import { Box, Pressable } from 'native-base';
import {
  WARNA_GRAYTUA,
  WARNA_WHITE,
  WARNA_RED,
  WARNA_UTAMA,
} from '../../utils/constant';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from '../../utils/url';
import { useIsFocused } from '@react-navigation/native';

const Profile = ({ navigation }) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [cartCount, setCartCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [refreshing, setRefreshing] = useState(false); // State untuk mengontrol refresh

  useEffect(() => {
    fetch(`${url}supplier-barang/index`)
      .then(response => response.json())
      .then(json => setData(json.data))
      .catch(error => console.error(error));
  }, []);

  const handleCardClick = item => {
    navigation.navigate('DetailProduct3', { item });
  };

  // untuk menampilkan banyaknya cart
  const fetchDataCart = async () => {
    try {
      const data = await AsyncStorage.getItem('cart');
      if (data !== null) {
        const cart = JSON.parse(data);
        setCartCount(cart.length);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataCart();
  }, []);
  // useEffect(() => {
  //   AsyncStorage.getItem('cart')
  //     .then(data => {
  //       if (data !== null) {
  //         const cart = JSON.parse(data);
  //         setCartCount(cart.length);
  //       }
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  // logic logout
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    fetchData();
    // const interval = setInterval(fetchData, 60000); // Refresh every 60 seconds
    // return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true); // Set loading state to true
      const token = await AsyncStorage.getItem('token');
      const user_id = await AsyncStorage.getItem('user_id');

      const response = await fetch(`${url}user/view-user?id=${user_id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);

        setUsername(data.data.username);
        setName(data.data.name);
        setPhone(data.data.phone);
        setImageTimestamp(Date.now());
      } else {
        ToastAndroid.show(
          'Error, Failed to fetch user data',
          ToastAndroid.SHORT,
        );
        // Alert.alert('Error', 'Failed to fetch user data.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile3');
  };

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(`${url}auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Hapus data token dan user_id dari AsyncStorage
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user_id');
        console.log('Logout Successful');
        ToastAndroid.show('Keluar sukses', ToastAndroid.SHORT);
        // Alert.alert('Logout Successful', 'You have successfully logged out.');
        navigation.navigate('Login3');
      } else {
        ToastAndroid.show('Gagal keluar', ToastAndroid.SHORT);
        // Alert.alert('Error', 'Failed to logout.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [imageTimestamp, setImageTimestamp] = useState(Date.now());

  const onRefresh = () => {
    setRefreshing(true); // Set refreshing state menjadi true

    fetchData().then(() => {
      setRefreshing(false); // Set refreshing state menjadi false setelah selesai refreshing
    });

    fetchDataCart().then(() => {
      setRefreshing(false); // Set refreshing state menjadi false setelah selesai refreshing
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> // Mengontrol refresh dengan state refreshing
        }>
        <View style={styles.header}>
          <View style={styles.space1}>
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
            <Text style={styles.judulBar}>Profile</Text>
          </View>
          <View style={styles.space}>
            {/* <Icon
              name="bell"
              size={23}
              style={styles.iconBell}
              onPress={() => navigateTo('#')}
            /> */}
            <Pressable
              // ml={responsiveHeight(2)}
              // top={-3}
              // onPress={handleCardClick}
              onPress={() => navigateTo('Keranjang5')}>
              <IconMaterial
                name="shopping"
                size={30}
                style={styles.iconTroll}
              />
              <Box
                px={responsiveHeight(0.5)}
                rounded="full"
                position="absolute"
                bg={WARNA_RED}
                left={responsiveHeight(2)}
                top={responsiveHeight(-0.3)}
                _text={{
                  color: WARNA_WHITE,
                  fontSize: responsiveFontSize(1.3),
                  textAlign: 'center',
                }}>
                {cartCount}
              </Box>
            </Pressable>
          </View>
        </View>
        <LinearGradient
          colors={['#FDD329', '#F2F2F2']}
          style={styles.boxLinear}>
          <View style={styles.box1}>
            <View style={styles.profil}>
              {isLoading ? ( // Show loading spinner while fetching data
                <ActivityIndicator size="large" color={WARNA_UTAMA} />
              ) : (
                <ImagePicker />
              )}
              <Text style={styles.text1}>{name ? name : ''}</Text>
              <Text style={styles.text2}>{phone ? phone : ''}</Text>
            </View>
          </View>
        </LinearGradient>
        <View>
          <Text style={styles.text3}>Profile</Text>
          <TouchableOpacity onPress={handleEditProfile} style={styles.space2}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="pencil"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Edit Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.space2}
            onPress={() => navigateTo('TambahAlamat')}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="map-marker"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Alamat Saya</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.space2}
            onPress={() => navigateTo('HistoryOrder')}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="handshake"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Riwayat Transaksi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting}>
          <Text style={styles.text3}>Setting</Text>
          <TouchableOpacity
            style={styles.space2}
            onPress={() => navigateTo('Tentang')}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial name="help" size={26} style={styles.iconPen} />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Tentang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.space2}
            onPress={() => navigateTo('KebijakanPrivasi')}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="shield-half-full"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Kebijakan Privasi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.space2}
            onPress={() => navigateTo('SyaratKetentuan')}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="note-edit"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Syarat & Ketentuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.space2}
            // onPress={() => navigateTo('Login3')}
            onPress={handleLogout}>
            <View style={styles.space3}>
              <View style={styles.box3}>
                <View style={styles.box4}>
                  <IconMaterial
                    name="logout"
                    size={26}
                    style={styles.iconPen}
                  />
                </View>
                <IconMaterial
                  name="chevron-right"
                  size={26}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <Text style={styles.text4}>Keluar</Text>
            {/* <Text style={{color: WARNA_RED}}>{message}</Text> */}
          </TouchableOpacity>
        </View>
        {/* <AutoRefreshAnimation /> */}
      </ScrollView>
    </View>
  );
};

export default Profile;

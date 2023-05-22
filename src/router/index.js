import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Splash,
  Homes,
  Homes2,
  Homes3,
  Homes4,
  Catalogue,
  Profile,
  Profile2,
  Login,
  Login2,
  Login3,
  Register,
  Register2,
  Register3,
  EditProfile,
  EditProfile2,
  RiwayatTransaksi,
  Tentang,
  KebijakanPrivasi,
  SyaratKetentuan,
  Keranjang,
  Keranjang2,
  Keranjang3,
  Notifikasi,
  DetailProduct,
  DetailProduct2,
  Checkout,
  CheckoutAddress,
  CheckoutPayment,
  CheckoutShipping,
  CheckoutSelesai,
  CheckoutBerhasil,
  ReviewRating,
  RincianPesanan,
  EditAddress,
  NewAddress,
  DetailProduct3,
  Keranjang4,
  Checkout2,
  UpdateAddress,
  TambahAlamat,
} from '../pages';
import {
  BottomNavigation,
  EditProfileTab,
  AddressProfileTab,
  CartItem,
} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen
        name="Home"
        component={Homes}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Catalogue"
        component={Catalogue}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login2"
        component={Login2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login3"
        component={Login3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register2"
        component={Register2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register3"
        component={Register3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile2"
        component={Profile2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile2"
        component={EditProfile2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatTransaksi"
        component={RiwayatTransaksi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tentang"
        component={Tentang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KebijakanPrivasi"
        component={KebijakanPrivasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SyaratKetentuan"
        component={SyaratKetentuan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Keranjang"
        component={Keranjang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Keranjang2"
        component={Keranjang2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Keranjang3"
        component={Keranjang3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Keranjang4"
        component={Keranjang4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailProduct2"
        component={DetailProduct2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailProduct3"
        component={DetailProduct3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout2"
        component={Checkout2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckoutAddress"
        component={CheckoutAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckoutPayment"
        component={CheckoutPayment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckoutShipping"
        component={CheckoutShipping}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckoutSelesai"
        component={CheckoutSelesai}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckoutBerhasil"
        component={CheckoutBerhasil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReviewRating"
        component={ReviewRating}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RincianPesanan"
        component={RincianPesanan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditAddress"
        component={EditAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewAddress"
        component={NewAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddressProfileTab"
        component={AddressProfileTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfileTab"
        component={EditProfileTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartItem"
        component={CartItem}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Homes2"
        component={Homes2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Homes3"
        component={Homes3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Homes4"
        component={Homes4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateAddress"
        component={UpdateAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahAlamat"
        component={TambahAlamat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});

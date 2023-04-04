import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Splash,
  Homes,
  Catalogue,
  Profile,
  Login,
  Login2,
  Register,
  Register2,
  EditProfile,
  RiwayatTransaksi,
  Tentang,
  KebijakanPrivasi,
  SyaratKetentuan,
  Keranjang,
  Notifikasi,
  DetailProduct,
  Checkout,
  CheckoutAddress,
  CheckoutPayment,
  CheckoutShipping,
  ReviewRating,
  RincianPesanan,
} from '../pages';
import {BottomNavigation} from '../components';

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
        name="EditProfile"
        component={EditProfile}
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
        name="Checkout"
        component={Checkout}
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
        name="ReviewRating"
        component={ReviewRating}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RincianPesanan"
        component={RincianPesanan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});

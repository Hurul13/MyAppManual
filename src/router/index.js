import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Splash,
  Homes,
  Catalogue,
  Profile,
  Login3,
  Register3,
  EditProfile3,
  Tentang,
  KebijakanPrivasi,
  SyaratKetentuan,
  CheckoutBerhasil,
  NewAddress,
  DetailProduct4,
  UpdateAddress,
  TambahAlamat,
  Keranjang5,
  Checkout3,
  HistoryOrder,
  HistoryOrderDetailBelumBayar,
  HistoryOrderDetailSudahBayar,
  HistoryOrderDetailDibatalkan,
  MidtransWebView,
} from '../pages';
import {
  BottomNavigation,
} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen
        name="Home"
        component={Homes}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Catalogue"
        component={Catalogue}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login3"
        component={Login3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register3"
        component={Register3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile3"
        component={EditProfile3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tentang"
        component={Tentang}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="KebijakanPrivasi"
        component={KebijakanPrivasi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SyaratKetentuan"
        component={SyaratKetentuan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Keranjang5"
        component={Keranjang5}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailProduct4"
        component={DetailProduct4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout3"
        component={Checkout3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckoutBerhasil"
        component={CheckoutBerhasil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewAddress"
        component={NewAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateAddress"
        component={UpdateAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TambahAlamat"
        component={TambahAlamat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HistoryOrder"
        component={HistoryOrder}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HistoryOrderDetailBelumBayar"
        component={HistoryOrderDetailBelumBayar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HistoryOrderDetailSudahBayar"
        component={HistoryOrderDetailSudahBayar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HistoryOrderDetailDibatalkan"
        component={HistoryOrderDetailDibatalkan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MidtransWebView"
        component={MidtransWebView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});

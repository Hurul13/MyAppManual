import {StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {Box, HStack, Text, Button, Center} from 'native-base';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
} from '../../utils/constant';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import EditProfileTab from '../EditProfileTab';
import AddressProfileTab from '../AddressProfileTab';

const renderScene = SceneMap({
  first: EditProfileTab,
  second: AddressProfileTab,
});

export default function TabsEditProfile() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Profile',
    },
    {
      key: 'second',
      title: 'Address',
    },
  ]);

  const renderTabsBar = props => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorStyle={{backgroundColor: WARNA_SEKUNDER}}
      activeColor={WARNA_UTAMA}
      inactiveColor={WARNA_WHITE}
      renderLabel={({route, color}) => (
        <Text style={{color, ...styles.text}}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabsBar}
    />
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: WARNA_SEKUNDER,
  },
  text: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
});

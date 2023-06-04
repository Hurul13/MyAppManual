import React, {useState, useEffect} from 'react';
import {View, Text, Animated} from 'react-native';

const AutoRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    startRefreshing();
  }, []);

  const startRefreshing = () => {
    setRefreshing(true);
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
    // Tambahkan kode pembaruan data di sini
    setTimeout(stopRefreshing, 2000);
  };

  const stopRefreshing = () => {
    setRefreshing(false);
    spinValue.setValue(0);
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.Text style={{transform: [{rotate: spin}], marginBottom: 10}}>
        🔄
      </Animated.Text>
      <Text>{refreshing ? 'Refreshing...' : 'Pull to refresh'}</Text>
    </View>
  );
};

export default AutoRefreshScreen;

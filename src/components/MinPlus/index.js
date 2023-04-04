import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const MinPlus = ({onValueChange}) => {
  // const navigateTo = async page => {
  //   navigation.navigate(page);
  // };
  const [skor, setSkor] = useState(0);
  const [value, setValue] = useState(1);
  useEffect(() => {
    onValueChange(value);
  }, [onValueChange, value]);
  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };

  return (
    <View>
      <View style={styles.actionBtn}>
        <TouchableOpacity onPress={() => onCount('minus')}>
          <IconMaterial name="minus" size={25} style={styles.iconPlus} />
        </TouchableOpacity>
        <Text style={styles.text2}>{value}</Text>
        <TouchableOpacity onPress={() => onCount('plus')}>
          <IconMaterial name="plus" size={25} style={styles.iconPlus} />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.actionBtn}>
          <TouchableOpacity onPress={() => setSkor(skor - 1)}>
            <IconMaterial name="minus" size={25} style={styles.iconPlus} />
          </TouchableOpacity>
          <Text style={styles.text2}>{skor}</Text>
          <TouchableOpacity onPress={() => setSkor(skor + 1)}>
            <IconMaterial name="plus" size={25} style={styles.iconPlus} />
          </TouchableOpacity>
        </View> */}
    </View>
  );
};

export default MinPlus;

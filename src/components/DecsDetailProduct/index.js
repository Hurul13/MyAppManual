import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DecsDetailProduct(props) {
  return (
    <View style={styles.boxAllDecs}>
      <View style={styles.boxDecs}>
        <Text style={styles.decsName}>{props.title}</Text>
        <IconMaterial
          name={props.children ? 'chevron-down' : 'chevron-right'}
          size={25}
          style={styles.iconRight}
        />
      </View>
      {props.children && <View style={styles.decsChil}>{props.children}</View>}
    </View>
  );
}

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const ImagePiecker = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };
  const [imageCamera, setImageCamera] = React.useState(null);
  const [imageGallery, setImageGallery] = React.useState(null);
  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('user cancelled image picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImageCamera(data);
        console.log(data);
      }
    });
  };
  const openGallery = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('user cancelled image picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImageGallery(data);
        console.log(data);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/Images/user1.jpg')}
        style={styles.fotoProfil}></Image>
      <View>
        {imageCamera != null && (
          <Image
            source={{uri: imageCamera.uri}}
            style={styles.upFotoProfil}></Image>
        )}
        {imageGallery != null && (
          <Image
            source={{uri: imageGallery.uri}}
            style={styles.upFotoProfil}></Image>
        )}
      </View>
      <Pressable style={styles.box4} onPress={openGallery}>
        <Icon name="camera" size={17} style={styles.iconUser} />
      </Pressable>
    </SafeAreaView>
  );
};

export default ImagePiecker;

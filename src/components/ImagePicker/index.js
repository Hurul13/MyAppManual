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
import AsyncStorage from '@react-native-async-storage/async-storage';

const ImagePicker = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [savedImageUri, setSavedImageUri] = useState(null);
  const saveImageUri = async uri => {
    try {
      await AsyncStorage.setItem('imageUri', uri);
    } catch (error) {
      console.error('Failed to save image URI:', error);
    }
  };
  const loadImageUri = async () => {
    try {
      const uri = await AsyncStorage.getItem('imageUri');
      setSavedImageUri(uri);
    } catch (error) {
      console.error('Failed to load image URI:', error);
    }
  };
  useEffect(() => {
    loadImageUri();
  }, []);

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
        saveImageUri(data.uri); // Save the image URI
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
        saveImageUri(data.uri); // Save the image URI
      }
    });
  };

  // const openCamera = () => {
  //   const option = {
  //     mediaType: 'photo',
  //     quality: 1,
  //   };
  //   launchCamera(option, res => {
  //     if (res.didCancel) {
  //       console.log('user cancelled image picker');
  //     } else if (res.errorCode) {
  //       console.log(res.errorMessage);
  //     } else {
  //       const data = res.assets[0];
  //       setImageCamera(data);
  //       console.log(data);
  //     }
  //   });
  // };
  // const openGallery = () => {
  //   const option = {
  //     mediaType: 'photo',
  //     quality: 1,
  //   };
  //   launchImageLibrary(option, res => {
  //     if (res.didCancel) {
  //       console.log('user cancelled image picker');
  //     } else if (res.errorCode) {
  //       console.log(res.errorMessage);
  //     } else {
  //       const data = res.assets[0];
  //       setImageGallery(data);
  //       console.log(data);
  //     }
  //   });
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fotoProfil}>
        {/* <Image
          source={require('../../assets/Images/user1.jpg')}
          style={styles.fotoProfil}></Image> */}
      </View>
      {/* <View>
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
      </View> */}
      <View>
        {savedImageUri && (
          <Image source={{uri: savedImageUri}} style={styles.upFotoProfil} />
        )}
      </View>
      <Pressable style={styles.box4} onPress={openGallery}>
        <Icon name="camera" size={17} style={styles.iconUser} />
      </Pressable>
    </SafeAreaView>
  );
};

export default ImagePicker;

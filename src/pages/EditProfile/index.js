import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const EditProfile = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.judulBar}>Edit Profile</Text>
        </View>
        <View style={styles.box}>
          {/* <ImagePiecker></ImagePiecker> */}
          <Text style={styles.textUser}>Nama</Text>
          <TextInput placeholder="Masukan nama ... " style={styles.textInput}>
            Lorem Ipsum
          </TextInput>
          <Text style={styles.textPass}>No. Telpon</Text>
          <TextInput
            placeholder="Masukan no telpon ... "
            style={styles.textInput}
            keyboardType="numeric">
            0851234567
          </TextInput>
          {/* <Text style={styles.textPass}>Foto Profile</Text>
          <View style={styles.box2}>
            <View style={styles.box3}>
              <Text style={styles.text}>Select Foto</Text>
            </View>
          </View> */}
          <Text style={styles.textPass}>Password Lama</Text>
          <TextInput
            placeholder="Masukan password ..."
            style={styles.textInput}
            secureTextEntry>
            **********
          </TextInput>
          <Text style={styles.textPass}>Password Baru</Text>
          <TextInput
            placeholder="Masukan password ..."
            style={styles.textInput}
            secureTextEntry>
            **********
          </TextInput>
          <Text style={styles.textPass}>Konfirmasi Password Baru</Text>
          <TextInput
            placeholder="Masukan konfirmasi password ..."
            style={styles.textInput}
            secureTextEntry>
            **********
          </TextInput>
          <TouchableOpacity onPress={() => navigateTo('Profile')}>
            <View style={styles.viewButton}>
              <Text style={styles.textRegister}>SIMPAN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

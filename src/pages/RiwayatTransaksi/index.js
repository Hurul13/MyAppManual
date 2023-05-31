import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import riwayatTransaksi from '../../utils/riwayatTransaksi';
import {
  WARNA_BLACK,
  WARNA_BLUE,
  WARNA_GREEN,
  WARNA_RED,
} from '../../utils/constant';

const RiwayatTransaksi = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [activeStatus, setActiveStatus] = useState('All');
  const [filteredPesanan, setFilteredPesanan] = useState(riwayatTransaksi);

  const renderStatusButton = status => {
    const isActive = status === activeStatus;

    return (
      <View style={styles.containerStatus} key={status}>
        <TouchableOpacity
          style={[styles.statusButton, isActive && styles.activeStatusButton]}
          onPress={() => handleStatusPress(status)}>
          <Text style={isActive ? styles.activeStatusText : styles.statusText}>
            {status}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderPesanan = pesanan => {
    let statusColor;

    switch (pesanan.status) {
      case 'Belum Bayar':
      case 'Dibatalkan':
        statusColor = WARNA_RED; // Merah
        break;
      case 'Dikemas':
      case 'Dikirim':
      case 'Pengembalian':
        statusColor = WARNA_BLUE; // Biru
        break;
      case 'Selesai':
        statusColor = WARNA_GREEN; // Hijau
        break;
      default:
        statusColor = WARNA_BLACK; // Hitam (default)
        break;
    }

    return (
      <TouchableOpacity
        key={pesanan.id}
        style={styles.continerCard}
        onPress={() => handleCardPress(pesanan)}>
        <View style={[styles.card, styles.elevation]}>
          <View style={styles.space}>
            <Image source={pesanan.gambar} style={styles.img} />
            <View style={styles.space2}>
              <View style={styles.space1}>
                <Text style={styles.text1}>
                  Nomor Transaksi: {pesanan.nomorTransaksi}
                </Text>
                <Text style={styles.text2}>Tanggal: {pesanan.tanggal}</Text>
              </View>
            </View>
          </View>
          <View style={styles.space4}>
            <View style={styles.space3}>
              <Text style={styles.text2}>Total Harga:</Text>
              <Text style={styles.text1}>Rp.{pesanan.totalHarga}</Text>
            </View>
            <View style={styles.space5}>
              <Text style={styles.text2}>Status: </Text>
              <Text style={{color: statusColor}}> {pesanan.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleStatusPress = status => {
    console.log(`Tombol status ${status} ditekan.`);
    setActiveStatus(status);

    if (status === 'All') {
      setFilteredPesanan(riwayatTransaksi);
    } else {
      const filteredData = riwayatTransaksi.filter(
        pesanan => pesanan.status === status,
      );
      setFilteredPesanan(filteredData);
    }
  };

  const handleCardPress = pesanan => {
    console.log(
      `Pesanan dengan nomor transaksi ${pesanan.nomorTransaksi} ditekan.`,
    );
    Alert.alert(
      'Keterangan',
      `Pesanan dengan nomor transaksi ${pesanan.nomorTransaksi}.`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('#', {pesanan}),
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <IconMaterial name="arrow-left" size={26} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.judulBar}>Riwayat Transaksi</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.containerrr}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{}}>
              {[
                'All',
                'Belum Bayar',
                'Dikemas',
                'Dikirim',
                'Selesai',
                'Dibatalkan',
              ].map(status => renderStatusButton(status))}
            </ScrollView>
            {filteredPesanan.length > 0 ? (
              <ScrollView style={styles.pesananContainer}>
                {filteredPesanan.map(pesanan => renderPesanan(pesanan))}
              </ScrollView>
            ) : (
              <Text style={styles.noPesananText}>Tidak ada pesanan.</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RiwayatTransaksi;

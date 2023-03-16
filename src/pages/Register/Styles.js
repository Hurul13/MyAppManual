import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#FDCD29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    textAlign: 'center',
    marginTop: 80,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495E',
  },
  desc: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 25,
    color: '#34495E',
  },
  box: {
    backgroundColor: '#ffff',
    marginTop: 30,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    height: 850,
    width: 360,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    //elevation: 7,
    flexDirection: 'row',
  },

  //   inputan nama
  textNama: {
    color: '#34495E',
    marginTop: 30,
    marginLeft: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxNama: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 295,
    height: 49,
    borderWidth: 2,
    borderColor: '#FDCD29',
    borderRadius: 10,
    marginTop: 63,
    marginLeft: -45,
  },
  textIsiNama: {
    color: '#A0A0A0',
    marginLeft: 20,
    fontSize: 16,
  },

  //   inputan email
  textEmail: {
    color: '#34495E',
    marginTop: 130,
    marginLeft: -295,
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxEmail: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 295,
    height: 49,
    borderWidth: 2,
    borderColor: '#FDCD29',
    borderRadius: 10,
    marginTop: 163,
    marginLeft: -45,
  },
  textIsiEmail: {
    color: '#A0A0A0',
    marginLeft: 20,
    fontSize: 16,
  },

  //   inputan no telpon
  textHP: {
    color: '#34495E',
    marginTop: 230,
    marginLeft: -295,
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxHP: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 295,
    height: 49,
    borderWidth: 2,
    borderColor: '#FDCD29',
    borderRadius: 10,
    marginTop: 263,
    marginLeft: -79,
  },
  textIsiHP: {
    color: '#A0A0A0',
    marginLeft: 20,
    fontSize: 16,
  },

  //   inputan username
  textUsername: {
    color: '#34495E',
    marginTop: 330,
    marginLeft: -295,
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxUsername: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 295,
    height: 49,
    borderWidth: 2,
    borderColor: '#FDCD29',
    borderRadius: 10,
    marginTop: 363,
    marginLeft: -73,
  },
  textIsiUsername: {
    color: '#A0A0A0',
    marginLeft: 20,
    fontSize: 16,
  },

  //   inputan password
  textPassword: {
    color: '#34495E',
    marginTop: 430,
    marginLeft: -295,
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxPassword: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 295,
    height: 49,
    borderWidth: 2,
    borderColor: '#FDCD29',
    borderRadius: 10,
    marginTop: 463,
    marginLeft: -73,
  },
  textIsiPassword: {
    color: '#A0A0A0',
    marginLeft: 20,
    fontSize: 16,
  },

  //   inputan konfirmasi password
  textKP: {
    color: '#34495E',
    marginTop: 530,
    marginLeft: -295,
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxKP: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 295,
    height: 49,
    borderWidth: 2,
    borderColor: '#FDCD29',
    borderRadius: 10,
    marginTop: 563,
    marginLeft: -143,
  },
  textIsiKP: {
    color: '#A0A0A0',
    marginLeft: 20,
    fontSize: 16,
  },

  //   tombol register
  bottomRegister: {
    justifyContent: 'center',
    backgroundColor: '#FDCD29',
    width: 295,
    height: 49,
    borderWidth: 2,
    borderColor: '#FDCD29',
    borderRadius: 35,
    marginTop: 700,
    marginLeft: -295,
  },
  textBottom: {
    color: '#34495E',
    // marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textRHA: {
    color: '#34495E',
    fontSize: 15,
    marginTop: 760,
    marginLeft: -240,
  },
  textLogin: {
    color: '#34495E',
    marginTop: 760,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },

  // checkBox
  options: {
    alignSelf: 'flex-start',
    marginLeft: -230,
    marginTop: 640,
  },
  // checked: {
  //   flexDirection: 'row',
  //   marginVertical: 7,
  // },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#34495E',
    marginRight: 5,
  },
  checkedName: {
    textTransform: 'capitalize',
    fontSize: 14,
    color: 'black',
    marginTop: -27,
    marginLeft: 30,
    marginRight: 270,
  },
  check: {
    alignSelf: 'center',
    color: '#34495E',
    fontSize: 16,
    marginTop: -3,
  },
});

export default styles;

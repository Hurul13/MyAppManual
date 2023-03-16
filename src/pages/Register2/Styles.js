import {StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: WARNA_UTAMA,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  viewWrapper: {
    alignItems: 'center',
  },
  imageRegister: {
    width: 200,
    height: 200,
    marginTop: responsiveHeight(4),
  },
  textTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(1.1),
    marginBottom: responsiveHeight(13),
  },
  viewBox: {
    backgroundColor: WARNA_WHITE,
    marginTop: responsiveHeight(-10),
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    height: responsiveHeight(120),
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    // flexDirection: 'row',
  },
  textUser: {
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.0),
    color: WARNA_SEKUNDER,
  },
  textPass: {
    marginLeft: responsiveWidth(5),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.0),
    color: WARNA_SEKUNDER,
  },
  textInput: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderWidth: 1,
    color: WARNA_SEKUNDER,
    borderColor: WARNA_DISABLE,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.33),
    fontSize: responsiveFontSize(1.8),
  },
  textFP: {
    marginLeft: responsiveWidth(18),
    marginTop: responsiveHeight(-4.3),
    marginBottom: responsiveHeight(5),
    fontSize: responsiveFontSize(1.8),
    color: WARNA_SEKUNDER,
  },
  viewButton: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    alignItems: 'center',
    backgroundColor: WARNA_UTAMA,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 35,
    marginTop: responsiveHeight(-1),
  },
  textRegister: {
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.2),
  },
  textAHA: {
    marginLeft: responsiveWidth(25),
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
    color: WARNA_SEKUNDER,
  },
  textLogin: {
    marginLeft: responsiveWidth(62),
    marginTop: responsiveHeight(-2.2),
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
  },

  // options: {
  //   alignSelf: 'flex-start',
  //   marginLeft: -230,
  //   marginTop: 640,
  // },
  // // checked: {
  // //   flexDirection: 'row',
  // //   marginVertical: 7,
  // // },
  // checkBox: {
  //   width: 20,
  //   height: 20,
  //   borderWidth: 2,
  //   borderColor: '#34495E',
  //   marginRight: 5,
  // },
  // checkedName: {
  //   textTransform: 'capitalize',
  //   fontSize: 14,
  //   color: 'black',
  //   marginTop: -27,
  //   marginLeft: 30,
  //   marginRight: 270,
  // },
  // check: {
  //   alignSelf: 'center',
  //   color: '#34495E',
  //   fontSize: 16,
  //   marginTop: -3,
  // },
});

export default styles;

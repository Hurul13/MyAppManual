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
  imageLogin: {
    width: 200,
    height: 200,
    marginTop: responsiveHeight(15),
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
    height: responsiveHeight(70),
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
    borderColor: WARNA_DISABLE,
    color: WARNA_SEKUNDER,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.33),
    fontSize: responsiveFontSize(2),
  },
  textFP: {
    marginLeft: responsiveWidth(67),
    // marginTop: responsiveHeight(-1),
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
  textLogin: {
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.2),
  },
  textDHA: {
    marginLeft: responsiveWidth(25),
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
    color: WARNA_SEKUNDER,
  },
  textRegister: {
    marginLeft: responsiveWidth(59),
    marginTop: responsiveHeight(-2.2),
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
  },
});

export default styles;

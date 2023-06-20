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
  boxInput: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderWidth: 1,
    borderColor: WARNA_UTAMA,

    color: WARNA_SEKUNDER,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.33),
    fontSize: responsiveFontSize(2),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxIcon: {
    width: responsiveWidth(15),
    height: responsiveHeight(7),
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WARNA_UTAMA,
  },
  icon: {
    color: WARNA_WHITE,
  },
  textInput: {
    width: responsiveWidth(65),
    height: responsiveHeight(7),
    // borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: WARNA_SEKUNDER,
    color: WARNA_SEKUNDER,
    alignSelf: 'center',
    // borderRadius: 10,
    // marginVertical: responsiveHeight(2.33),
    fontSize: responsiveFontSize(2),
  },
  textFP: {
    marginLeft: responsiveWidth(67),
    // marginTop: responsiveHeight(-1),
    marginBottom: responsiveHeight(5),
    fontSize: responsiveFontSize(1.8),
    color: WARNA_SEKUNDER,
    fontStyle: 'italic',
  },
  viewButton: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    alignItems: 'center',
    backgroundColor: WARNA_UTAMA,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 35,
    marginTop: responsiveHeight(1),
  },
  textLogin: {
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.2),
  },
  space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveHeight(13),
    marginVertical: responsiveHeight(1),
  },
  textDHA: {
    fontSize: responsiveFontSize(1.8),
    color: WARNA_SEKUNDER,
  },
  textRegister: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
  },
});

export default styles;

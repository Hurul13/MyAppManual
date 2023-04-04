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
  WARNA_BORDER,
  WARNA_GRAYTUA,
} from '../../utils/constant';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveHeight(3),
    // marginVertical: responsiveWidth(2),
    paddingVertical: responsiveWidth(2),
    overflow: 'hidden',
    // borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: WARNA_BORDER,
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
  },
  icon: {
    color: WARNA_SEKUNDER,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyContainer: {},
  body: {
    color: WARNA_SEKUNDER,
  },
  imgUser: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: WARNA_GRAYTUA,
  },
  iconStar: {
    color: WARNA_UTAMA,
  },
  star: {
    flexDirection: 'row',
  },
  space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyContainer: {
    flexDirection: 'row',
    marginVertical: responsiveWidth(2),
  },
  iconUser: {
    color: WARNA_GRAYTUA,
  },
  space1: {
    alignCont: 'center',
    justifyContent: 'center',
    marginHorizontal: responsiveHeight(1),
  },
  textRev: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.1),
    marginVertical: responsiveWidth(1.5),
    marginTop: responsiveHeight(1),
    fontWeight: '600',
  },
  space2: {
    flexDirection: 'row',
  },
  imgRev: {
    height: responsiveHeight(13),
    width: responsiveWidth(25),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: WARNA_GRAYTUA,
    marginRight: responsiveHeight(1),
  },
  textTime: {
    color: WARNA_DISABLE,
    marginVertical: responsiveWidth(1),
  },
});

export default styles;

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
  WARNA_GRAYTUA,
  WARNA_BORDER,
  WARNA_DEEPYELLOW,
  WARNA_GREEN,
} from '../../utils/constant';

const styles = StyleSheet.create({
  all: {
    backgroundColor: WARNA_UTAMA,
  },
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(5.4),
  },
  iconBack: {
    color: WARNA_SEKUNDER,
  },
  judulBar: {
    marginHorizontal: responsiveHeight(2.5),
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: WARNA_WHITE,
    // borderTopLeftRadius: 35,
    // borderTopRightRadius: 35,
    height: responsiveHeight(91.6),
    paddingVertical: responsiveWidth(8),
  },

  cartCard: {
    borderRadius: 10,
    borderColor: WARNA_DISABLE,
    borderWidth: 1,
    // elevation: 1,
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(1),
    paddingHorizontal: responsiveHeight(2),
    // backgroundColor: WARNA_DEEPYELLOW,
  },
  box1: {
    paddingVertical: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: WARNA_BORDER,
  },
  icon: {
    color: WARNA_SEKUNDER,
    paddingRight: responsiveHeight(1),
  },
  text: {
    color: WARNA_SEKUNDER,
  },
  space: {
    paddingVertical: responsiveWidth(2),
    flexDirection: 'row',
  },
  img: {
    height: responsiveHeight(10),
    width: responsiveWidth(23),
    borderRadius: 5,
  },
  space1: {
    paddingHorizontal: responsiveWidth(2),
  },
  text1: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
  space2: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: responsiveHeight(2.8),
    justifyContent: 'flex-end',
  },
  space4: {
    flexDirection: 'row',
    paddingVertical: responsiveWidth(2),
  },
  iconTime: {
    color: WARNA_DISABLE,
    paddingRight: responsiveHeight(0.5),
  },
  text2: {
    color: WARNA_DISABLE,
  },
  space3: {
    alignItems: 'flex-end',
  },
  text3: {
    color: WARNA_GRAYTUA,
  },
  text4: {
    color: WARNA_GRAYTUA,
    fontSize: responsiveHeight(1.8),
  },
  space5: {
    borderTopWidth: 1,
    borderColor: WARNA_BORDER,
    paddingVertical: responsiveWidth(2),
  },
  space6: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: responsiveHeight(0.5),
    justifyContent: 'space-between',
  },
  text5: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(1.8),
    // fontWeight: '500',
  },
  text7: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
  },
  text6: {
    fontSize: responsiveFontSize(1.3),
    color: WARNA_WHITE,
  },
  space7: {
    backgroundColor: WARNA_GREEN,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveWidth(1),
  },
});

export default styles;

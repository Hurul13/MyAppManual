import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#FDCD29',
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
    // paddingTop: 520,
    // paddingRight: 10,
    borderRadius: 18,
    height: 590,
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
  textUsername: {
    color: '#34495E',
    marginTop: 30,
    marginLeft: 30,
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
    marginTop: 63,
    marginLeft: -73,
  },
  textIsiUsername: {
    color: '#A0A0A0',
    marginLeft: 20,
    fontSize: 16,
  },
  textPassword: {
    color: '#34495E',
    marginTop: 130,
    marginLeft: -294,
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
    marginTop: 163,
    marginLeft: -73,
  },
  textIsiPassword: {
    color: '#A0A0A0',
    marginLeft: 20,
    fontSize: 16,
  },
  textFP: {
    color: '#34495E',
    fontSize: 15,
    marginTop: 220,
    marginLeft: -108,
  },
  bottomLogin: {
    justifyContent: 'center',
    backgroundColor: '#FDCD29',
    width: 295,
    height: 49,
    borderWidth: 2,
    borderColor: '#FDCD29',
    borderRadius: 35,
    marginTop: 280,
    marginLeft: -292,
  },
  textBottom: {
    color: '#34495E',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textDHA: {
    color: '#34495E',
    marginTop: 340,
    fontSize: 15,
    marginLeft: -240,
  },
  textRegister: {
    color: '#34495E',
    marginTop: 340,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;

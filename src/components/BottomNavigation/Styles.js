import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    resizeMode: 'cover',
    backgroundColor: '#ffff',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 14,
  },
});

export default styles;

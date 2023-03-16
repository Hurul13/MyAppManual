import * as React from 'react';
import styles from './Styles';
import {Checkbox} from 'react-native-paper';
import {View} from 'react-native';

const CheckBox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.check}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        styles={styles.checkBox}
      />
    </View>
  );
};

export default CheckBox;

import React, {useState} from 'react';
import {View, Text} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import {
  WARNA_DISABLE,
  WARNA_RED,
  WARNA_SEKUNDER,
  WARNA_UTAMA,
  WARNA_WHITE,
} from '../../utils/constant';

const MyCheckBox = () => {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: WARNA_RED,
      }}>
      <Text style={{color: WARNA_RED}}>Choose your options:</Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', color: WARNA_RED}}>
        <CheckBox value={isSelected1} onValueChange={setSelection1} />
        <Text style={{color: WARNA_RED}}>Option 1</Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', color: WARNA_RED}}>
        <CheckBox value={isSelected2} onValueChange={setSelection2} />
        <Text style={{color: WARNA_RED}}>Option 2</Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', color: WARNA_RED}}>
        <CheckBox value={isSelected3} onValueChange={setSelection3} />
        <Text style={{color: WARNA_RED}}>Option 3</Text>
      </View>
    </View>
  );
};

export default MyCheckBox;

// import React, { useState, useEffect } from 'react';
// import { View, Text, CheckBox } from 'react-native';

// const MyCheckBox = () => {
//   const [options, setOptions] = useState([]);

//   useEffect(() => {
//     fetch('https://example.com/api/options')
//       .then(response => response.json())
//       .then(data => setOptions(data))
//       .catch(error => console.error(error));
//   }, []);

//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleOptionSelection = (optionId) => {
//     const selectedIndex = selectedOptions.indexOf(optionId);
//     let newSelectedOptions = [...selectedOptions];

//     if (selectedIndex === -1) {
//       newSelectedOptions.push(optionId);
//     } else {
//       newSelectedOptions.splice(selectedIndex, 1);
//     }

//     setSelectedOptions(newSelectedOptions);
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Choose your options:</Text>
//       {options.map(option => (
//         <View key={option.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <CheckBox
//             value={selectedOptions.indexOf(option.id) !== -1}
//             onValueChange={() => handleOptionSelection(option.id)}
//           />
//           <Text>{option.name}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default MyCheckBox;

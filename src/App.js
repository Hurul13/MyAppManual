// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import Router from './router';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Router />
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

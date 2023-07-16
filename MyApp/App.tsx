import React from 'react';
import Input from './src/input'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View
} from 'react-native';const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <View style={{alignItems: 'center'}}>
		<Input />
      </View>
    </SafeAreaView>
  );
};
export default App;
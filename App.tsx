import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Root from './src/navigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{flex: 1}}>
        <Root />
      </SafeAreaView>
    </>
  );
};
export default App;

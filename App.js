/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import Map from './src/components/Map';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <Map />
    </View>
  );
};

export default App;

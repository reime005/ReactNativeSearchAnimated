/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import { Search } from './src/components/Search/Search';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 100, zIndex: 1, elevation: 1 }}>
          <Search />
        </View>

        <ScrollView
          alwaysBounceVertical={false}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ alignItems: 'center' }}
          style={{ flex: 1, marginHorizontal: 16 }}>
          <Image
            style={{ width: '100%', height: 500, borderRadius: 16 }}
            source={require('./src/assets/coffee.jpg')}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

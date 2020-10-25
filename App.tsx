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
  ScrollView,
  View,
  StatusBar,
  Image,
  Platform,
} from 'react-native';

import { Search } from './src/components/Search/Search';

const extraProps = Platform.select({
  android: {},
  ios: { zIndex: 5, elevation: 5 },
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 100, ...extraProps }}>
          <View style={{ height: '100%' }}>
            <Search />
          </View>
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

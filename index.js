/**
 * @format
 */
import React from 'react'

import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { name as appName } from './app.json';
import { lightTheme } from './src/theme/theme';

const Root = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  )
}

AppRegistry.registerComponent(appName, () => Root);

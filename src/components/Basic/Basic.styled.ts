import { ComponentType } from 'react';
import { View, ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const BaseText = styled.Text`
  color: #0f0f0f;
  font-size: 14px;
`;

export const BaseScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const FlexBox = styled(Animated.View)`
  width: 100%;
  flex: 1;
  flex-direction: column;
`;

export const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #e0e0e0;
  margin-top: 4px;
  margin-bottom: 8px;
`;

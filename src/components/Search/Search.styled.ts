import { ComponentType } from 'react';
import {
  Dimensions,
  TouchableOpacity,
  TouchableOpacityBase,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { BaseText } from '../Basic/Basic.styled';

const AnimatedTouchableOpacity: ComponentType<TouchableOpacityProps> = Animated.createAnimatedComponent(
  TouchableOpacity,
);

export const StyledSearchWrapper = styled(AnimatedTouchableOpacity)`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fafafa;
  flex-direction: column;
  min-height: 50px;
`;

export const StyledSearchBar = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const StyledSearchWrapperText = styled.TextInput`
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
`;

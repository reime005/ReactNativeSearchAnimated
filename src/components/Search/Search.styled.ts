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
  padding-left: 48px;
  padding-right: 48px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  flex-direction: row;
  min-height: 50px;
`;

export const StyledSearchBar = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const StyledSearchWrapperText = styled.TextInput`
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  padding-left: 16px;
  width: 100%;
  height: 100%;
`;

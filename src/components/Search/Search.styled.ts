import { ComponentType } from 'react';
import { TouchableOpacity, TouchableOpacityBase, TouchableOpacityProps, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { BaseText } from '../Basic/Basic.styled';

const AnimatedTouchableOpacity: ComponentType<TouchableOpacityProps> = Animated.createAnimatedComponent(TouchableOpacity);

export const StyledSearchWrapper = styled(AnimatedTouchableOpacity)`
  padding: 24px;
  margin: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 54px;
  background-color: #fff;
  flex-direction: row;
`;

export const StyledSearchWrapperText = styled(BaseText)`
  font-size: 16px;
  font-weight: 600;
  padding-left: 8px;
`;

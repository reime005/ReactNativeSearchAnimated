import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { repeat, timing, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Svg from 'react-native-svg';
import { SearchIcon } from '../SVG/SearchIcon';
import * as S from './Search.styled';

export const Search = () => {
  const rotation = useSharedValue(10);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: `${rotation.value}%`
    };
  });


  return (
    <S.StyledSearchWrapper
      activeOpacity={0.65}
      onPress={() => {
        rotation.value = withSpring(rotation.value > 50 ? 12 : 80, { damping: 12, stiffness: 55 });
      }}
      style={[animatedStyle, styles.shadow]}>
      <SearchIcon color="#8d0fd1" />

      <S.StyledSearchWrapperText>
        What are you looking for?
      </S.StyledSearchWrapperText>
    </S.StyledSearchWrapper>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { height: 5, width: 0 },
    shadowRadius: 4,
    shadowOpacity: 0.05,
  }
})

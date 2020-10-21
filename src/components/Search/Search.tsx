import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, {
  cancelAnimation,
  delay,
  Easing,
  repeat,
  sequence,
  timing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg from 'react-native-svg';
import { SearchIcon } from '../SVG/SearchIcon';
import * as S from './Search.styled';

const springConfig: Animated.WithSpringConfig = {
  damping: 25,
  stiffness: 255,
  velocity: 555,
};

const DEFAULT_SEARCH = "What are you looking for?";

export const Search = () => {
  const height = useSharedValue(10);
  const scale = useSharedValue(1);
  const alignItems = useSharedValue<'center' | 'flex-start'>('center');

  const [searchValue, setSearchValue] = React.useState("");
  const [editable, setEditable] = React.useState(false);
  const inRef = React.useRef<TextInput | null>(null);

  React.useEffect(() => {
    if (editable) {
      inRef.current?.focus();
    }
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: scale.value }],
      alignItems: alignItems.value,
      height: `${height.value}%`,
    };
  });

  return (
    <S.StyledSearchWrapper
      activeOpacity={0.65}

      onPress={() => {
        const isClosed = height.value < 50;
        height.value = delay(0, withSpring(isClosed ? 80 : 10, springConfig));

        setTimeout(() => {
          alignItems.value = isClosed ? 'flex-start' : 'center';
          setEditable(isClosed);
        }, isClosed ? 0 : 200);
      }}
      style={[animatedStyle, styles.shadow]}>
      <SearchIcon color="#8d0fd1" />

      <S.StyledSearchWrapperText pointerEvents="box-none" placeholder={DEFAULT_SEARCH} value={searchValue} ref={inRef} onChangeText={setSearchValue} editable={editable}>

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
  },
});

import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, {
  cancelAnimation,
  delay,
  Easing,
  interpolate,
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

const DEFAULT_SEARCH = 'What are you looking for?';
const DEFAULT_RADIUS = 52;
const DEFAULT_MARGIN = 36;
const MIN_HEIGHT_PERC = 7;
const MAX_HEIGHT_PERC = 85;

export const Search = () => {
  const height = useSharedValue(MIN_HEIGHT_PERC);
  const scale = useSharedValue(1);
  const margin = useSharedValue(DEFAULT_MARGIN);
  const borderRadius = useSharedValue(DEFAULT_RADIUS);
  const alignItems = useSharedValue<'center' | 'flex-start'>('center');

  const [searchValue, setSearchValue] = React.useState('');
  const [editable, setEditable] = React.useState(false);
  const inRef = React.useRef<TextInput | null>(null);

  React.useEffect(() => {
    if (editable) {
      inRef.current?.focus();
    }
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: scale.value }],
      margin: margin.value,
      borderRadius: borderRadius.value,
      alignItems: alignItems.value,
      height: `${height.value}%`,
    };
  });

  return (
    <S.StyledSearchWrapper
      activeOpacity={0.65}
      onPress={() => {
        const isClosed = height.value < 30;

        if (isClosed) {
          height.value = withSpring(MAX_HEIGHT_PERC, springConfig);

          margin.value = interpolate(
            height.value,
            [MIN_HEIGHT_PERC, MAX_HEIGHT_PERC],
            [DEFAULT_MARGIN * 0.75, DEFAULT_MARGIN],
          );

          borderRadius.value = interpolate(
            height.value,
            [MIN_HEIGHT_PERC, MAX_HEIGHT_PERC],
            [DEFAULT_RADIUS * 0.5, DEFAULT_RADIUS],
          );
        } else {
          height.value = withSpring(MIN_HEIGHT_PERC, springConfig);

          margin.value = interpolate(
            height.value,
            [MAX_HEIGHT_PERC, MIN_HEIGHT_PERC],
            [DEFAULT_MARGIN, DEFAULT_MARGIN * 0.75],
          );

          borderRadius.value = interpolate(
            height.value,
            [MAX_HEIGHT_PERC, MIN_HEIGHT_PERC],
            [DEFAULT_RADIUS, DEFAULT_RADIUS * 0.5],
          );
        }

        setTimeout(
          () => {
            alignItems.value = isClosed ? 'flex-start' : 'center';
            setEditable(isClosed);
          },
          isClosed ? 0 : 200,
        );
      }}
      style={[animatedStyle, styles.shadow]}>
      <View style={{ width: '100%', flexDirection: 'row' }}>
        <SearchIcon color="#8d0fd1" />

        <S.StyledSearchWrapperText
          pointerEvents="box-none"
          placeholder={DEFAULT_SEARCH}
          value={searchValue}
          ref={inRef}
          onChangeText={setSearchValue}
          editable={editable}></S.StyledSearchWrapperText>
      </View>
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

import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  delay,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { CloseIcon } from '../SVG/CloseIcon';
import { SearchIcon } from '../SVG/SearchIcon';
import * as S from './Search.styled';
import { BackIcon } from '../SVG/BackIcon';
import { SearchContent } from '../SearchContent/SearchContent';
import { searchProducts } from '../../api/searchProducts';
import { SearchItem } from '../SearchItem/SearchItem';
import useAsyncEffect from '@n1ru4l/use-async-effect';

const springConfig: Animated.WithSpringConfig = {
  damping: 25,
  stiffness: 255,
  velocity: 555,
};

const DEFAULT_SEARCH = 'What are you looking for?';
const DEFAULT_RADIUS = 52;
const DEFAULT_MARGIN = 36;
const MIN_HEIGHT_PERC = 50;
const MIN_MARGIN = 16;
const MAX_HEIGHT_PERC = Dimensions.get('screen').height * 0.85;
const SCREEN_WIDTH = Dimensions.get('screen').width;

export const Search = () => {
  const height = useSharedValue(MIN_HEIGHT_PERC);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0);
  const margin = useSharedValue(DEFAULT_MARGIN);
  const borderRadius = useSharedValue(DEFAULT_RADIUS);

  const [searchValue, setSearchValue] = React.useState('');
  const [editable, setEditable] = React.useState(false);
  const inRef = React.useRef<TextInput | null>(null);
  const [loading] = React.useState(false);
  const [data, setData] = React.useState<SearchItem[]>();

  React.useEffect(() => {
    if (editable) {
      inRef.current?.focus();
    } else {
      inRef.current?.blur();
    }
  });

  useAsyncEffect(
    function* (_, c) {
      if (!searchValue || !searchValue.length) {
        return;
      }

      const { products } = yield* c(searchProducts(searchValue));

      setData(
        products.map((p: any) => {
          const { image_url, quantity, product_name, ingredients_text } = p;

          return {
            image_url,
            quantity,
            product_name,
            ingredients_text,
          };
        }),
      );
    },
    [searchValue],
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: scale.value }],
      margin: margin.value,
      borderRadius: borderRadius.value,
      height: height.value,
      width: SCREEN_WIDTH - margin.value,
      left: -margin.value / 2,
    };
  });

  const onAnimPress = () => {
    const isClosed = height.value < MIN_HEIGHT_PERC * 1.5;

    if (isClosed) {
      opacity.value = delay(200, withSpring(1));
      height.value = withSpring(MAX_HEIGHT_PERC, springConfig);

      margin.value = interpolate(
        height.value,
        [MIN_HEIGHT_PERC, MAX_HEIGHT_PERC],
        [MIN_MARGIN, DEFAULT_MARGIN],
      );

      borderRadius.value = interpolate(
        height.value,
        [MIN_HEIGHT_PERC, MAX_HEIGHT_PERC],
        [DEFAULT_RADIUS * 0.5, DEFAULT_RADIUS],
      );
    } else {
      opacity.value = delay(200, withSpring(0));

      height.value = withSpring(MIN_HEIGHT_PERC, springConfig);

      margin.value = interpolate(
        height.value,
        [MAX_HEIGHT_PERC, MIN_HEIGHT_PERC],
        [DEFAULT_MARGIN, MIN_MARGIN],
      );

      borderRadius.value = interpolate(
        height.value,
        [MAX_HEIGHT_PERC, MIN_HEIGHT_PERC],
        [DEFAULT_RADIUS, DEFAULT_RADIUS * 0.2],
      );
    }

    setTimeout(
      () => {
        setEditable(isClosed);
      },
      isClosed ? 0 : 200,
    );
  };

  return (
    <S.StyledSearchWrapper
      activeOpacity={editable ? 1 : 0.95}
      onPress={!editable ? onAnimPress : undefined}
      style={[{ zIndex: 9999 }, animatedStyle, styles.shadow]}>
      <S.StyledSearchBar>
        {editable ? (
          <TouchableOpacity onPress={onAnimPress}>
            <BackIcon />
          </TouchableOpacity>
        ) : (
          <SearchIcon />
        )}

        <S.StyledSearchWrapperText
          pointerEvents="box-none"
          placeholder={DEFAULT_SEARCH}
          numberOfLines={1}
          value={searchValue}
          ref={inRef}
          onChangeText={setSearchValue}
          onEndEditing={() => {
            searchProducts(searchValue);
          }}
          editable={editable}
        />

        <TouchableOpacity onPress={() => inRef.current?.clear()}>
          <CloseIcon color="grey" />
        </TouchableOpacity>
      </S.StyledSearchBar>

      <SearchContent opacity={opacity} loading={loading} data={data} />
    </S.StyledSearchWrapper>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 5,
  },
});

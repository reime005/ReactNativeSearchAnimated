import React from 'react';
import { Text } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import * as B from '../Basic/Basic.styled';

interface Props {
  opacity: Animated.SharedValue<number>;
}

export const SearchContent = (props: Props) => {
  const contentStyle = useAnimatedStyle(() => {
    return {
      opacity: props.opacity.value,
    };
  });

  return (
    <B.FlexBox style={[contentStyle]}>
      <B.BaseScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{ paddingTop: 8 }}>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
        <Text>item</Text>
      </B.BaseScrollView>
    </B.FlexBox>
  );
};

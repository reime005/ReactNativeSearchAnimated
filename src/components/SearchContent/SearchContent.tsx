import React from 'react';
import { ActivityIndicator } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import * as B from '../Basic/Basic.styled';
import { SearchItem } from '../SearchItem/SearchItem';
import { Text } from '../SearchItem/SearchItem.styled';

interface Props {
  opacity: Animated.SharedValue<number>;
  data?: SearchItem[];
  loading?: boolean;
}

export const SearchContent = (props: Props) => {
  const contentStyle = useAnimatedStyle(() => {
    return {
      opacity: props.opacity.value,
      zIndex: 1,
      elevation: 1,
    };
  });

  const { data, loading } = props;

  if (!data || loading) {
    return (
      <B.FlexBox style={[contentStyle, { justifyContent: 'center' }]}>
        {!data ? (
          <Text style={{ alignSelf: 'center' }}>No data</Text>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </B.FlexBox>
    );
  }

  return (
    <B.FlexBox style={[contentStyle]}>
      <B.BaseScrollView
        data={data}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        keyExtractor={(item: any) => item.image_url}
        renderItem={({ item }: any) => <SearchItem {...item} />}
        contentContainerStyle={{ paddingTop: 8 }}
      />
    </B.FlexBox>
  );
};

import React from 'react';
import FastImage from 'react-native-fast-image';

import * as S from './SearchItem.styled';

export interface SearchItem {
  image_url: string;
  quantity: string;
  product_name: string;
  ingredients_text: string;
}

export const SearchItem = (props: SearchItem) => {
  return (
    <S.Wrapper>
      <FastImage
        source={{ uri: props.image_url, priority: 'normal' }}
        style={{ width: 100, height: 100, borderRadius: 24 }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <S.TextWrapper>
        <S.Text numberOfLines={2} ellipsizeMode="tail" title>
          {props.product_name}
        </S.Text>

        <S.Text numberOfLines={3} ellipsizeMode="tail">
          {props.ingredients_text}
        </S.Text>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

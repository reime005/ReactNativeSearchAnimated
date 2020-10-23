import React, { SVGProps } from 'react'
import { useTheme } from 'styled-components';
import SVG from '../../assets/svg/search.svg'

import { SVGWrapperProps, defaultSVGProps } from './SVGWrapper'

export const SearchIcon = (props: SVGWrapperProps) => {
  const theme = useTheme();

  return (
    <SVG {...{ ...defaultSVGProps, color: theme.primaryColor }} {...props} />
  )
}

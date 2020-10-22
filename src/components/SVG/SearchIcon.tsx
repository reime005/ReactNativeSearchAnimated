import React, { SVGProps } from 'react'
import SVG from '../../assets/svg/search.svg'

import { SVGWrapperProps, defaultSVGProps } from './SVGWrapper'

export const SearchIcon = (props: SVGWrapperProps) => {
  return (
    <SVG {...defaultSVGProps} {...props} />
  )
}

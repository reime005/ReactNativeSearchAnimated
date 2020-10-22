import React from 'react'
import SVG from '../../assets/svg/x-circle.svg'

import { SVGWrapperProps, defaultSVGProps } from './SVGWrapper'

export const CloseIcon = (props: SVGWrapperProps) => {
  return (
    <SVG {...defaultSVGProps} {...props} />
  )
}

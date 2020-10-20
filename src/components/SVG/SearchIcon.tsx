import React from 'react'
import SVG from '../../assets/svg/search.svg'

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const SearchIcon = (props: Props) => {
  return (
    <SVG width={22} height={22} {...props} />
  )
}

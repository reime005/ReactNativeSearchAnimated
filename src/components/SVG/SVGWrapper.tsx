import React from 'react'

interface Props {
  width?: number;
  height?: number;
  children: React.ReactNode
}

export const SVGWrapper = (props: Props) => {
  return (
    props.children
  )
}

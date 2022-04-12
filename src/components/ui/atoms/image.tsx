import { Box } from '@mui/material'
import React from 'react'

interface IContentImage {
  ImageURL: string
}

export const ContentImage: React.VFC<IContentImage> = ({
  ImageURL,
}: IContentImage) => {
  return (
    <Box
      src={ImageURL}
      component="img"
      sx={{
        width: '100%',
      }}
    />
  )
}

interface IDefaultImage {
  ImageURL: string
  Border: string
  Width: number | string
  Height: number | string
}

export const DefaultImage: React.VFC<IDefaultImage> = ({
  ImageURL,
  Border,
  Width,
  Height,
}: IDefaultImage) => {
  return (
    <Box
      src={ImageURL}
      component="img"
      sx={{
        border: Border,
        borderColor : "#666666",
        width: Width,
        height: Height,
      }}
    />
  )
}

interface IAbsoluteCenterImage {
  ImageURL: string
  Width: number | string
  Height: number | string
}

export const AbsoluteCenterImage: React.VFC<IAbsoluteCenterImage> = ({
  ImageURL,
  Width,
  Height,
}: IAbsoluteCenterImage) => {
  return (
    <Box
      src={ImageURL}
      component="img"
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: '40%',
        m: 'auto',
        width: Width,
        height: Height,
      }}
    />
  )
}

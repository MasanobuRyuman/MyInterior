import { Box, Fade } from '@mui/material'
import React from 'react'

export const TopPageContentImage: React.VFC = () => {
  return (
    <Box
      src="TopPage/TopPageUpSide.png"
      component="img"
      sx={{
        width: '100%',
      }}
    />
  )
}

export const TopPageSofa: React.VFC = () => {
  return (
    <Fade timeout={3000} in={true}>
      <Box
        src="TopPage/TopPageSofa.png"
        component="img"
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '40%',
          m: 'auto',
          width: '40%',
          height: '60%',
        }}
      />
    </Fade>
  )
}

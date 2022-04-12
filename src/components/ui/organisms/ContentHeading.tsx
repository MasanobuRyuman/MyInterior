import { Box, Fade } from '@mui/material'
import React from 'react'

import { AbsoluteCenterImage, ContentImage } from './../atoms'
import { CatchCopy } from './../molecules'

export const ContentHeading: React.VFC = () => {
  return (
    <div>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <ContentImage ImageURL="TopPage/TopPageUpSide.png" />
        <CatchCopy />
        <Fade timeout={3000} in={true}>
          <Box>
            <AbsoluteCenterImage
              ImageURL="TopPage/TopPageSofa.png"
              Width="40%"
              Height="60%"
            />
          </Box>
        </Fade>
      </Box>
    </div>
  )
}

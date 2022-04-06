import { Box } from '@mui/material'
import React from 'react'

import { TopPageContentImage, TopPageSofa } from './../atoms'
import { CatchCopy } from './../molecules'

export const ContentHeading: React.VFC = () => {
  return (
    <div>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <TopPageContentImage />
        <CatchCopy />
        <TopPageSofa />
      </Box>
    </div>
  )
}

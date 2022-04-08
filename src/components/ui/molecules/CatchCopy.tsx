import { Box } from '@mui/material'
import React from 'react'

import { CatchCopyText } from './../atoms'

export const CatchCopy: React.VFC = () => {
  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          width: '57%',
          left: 0,
          right: 0,
          top: '20%',
          m: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'block',
            ml: '10%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <CatchCopyText
              sx={{
                fontWeight: 'bold',
              }}
            >
              WebAR
            </CatchCopyText>
            <CatchCopyText>✖️</CatchCopyText>
            <CatchCopyText
              sx={{
                fontWeight: 'bold',
              }}
            >
              インテリア
            </CatchCopyText>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

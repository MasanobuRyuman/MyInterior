import { Box } from '@mui/material'

import { CatchCopyText, H2 } from './../atoms'

export const CatchCopy = () => {
  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          width: '55%',
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
            <CatchCopyText sx={{}}>✖️</CatchCopyText>
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

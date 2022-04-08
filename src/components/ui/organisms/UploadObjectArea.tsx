import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { InputFileArea } from './InputFileArea'
import { DefaultButton, H4 } from './../atoms'

export const UploadObjectArea: React.VFC = () => {
  return (
    <div>
      <Box
        sx={{
          border: 'solid',
          width: {
            md: 700,
            sm: 500,
            xs: 340,
          },
          height: 250,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#FFEF6C',
            border: 'solid',
            width: 260,
            height: 46,
            mt: -6.3,
            ml: -0.2,
          }}
        >
          <H4
            sx={{
              textAlign: 'center',
              pt: 1,
              fontWeight: 'bold',
            }}
          >
            自分のオブジェクトを表示
          </H4>
        </Box>
        <Box
          sx={{
            width: {
              sm: 500,
              xs: 340,
            },
            m: 'auto',
            mt: 6,
            ml: {
              md: 'auto',
              sm: 1,
              xs: 1,
            },
          }}
        >
          <InputFileArea />
        </Box>
        <Box
          sx={{
            ml: '70%',
            mt: 5,
          }}
        >
          <Link to="../AR">
            <DefaultButton Width={100}>AR</DefaultButton>
          </Link>
        </Box>
      </Box>
    </div>
  )
}

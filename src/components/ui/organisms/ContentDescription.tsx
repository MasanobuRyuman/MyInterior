import { Box } from '@mui/material'
import React from 'react'

import { H2, H4 } from './../atoms'

export const ContentDescription: React.VFC = () => {
  return (
    <div>
      <Box
        sx={{
          height: 330,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'block',
            m: 'auto',
            mt: {
              sm: 5,
              xs: 0,
            },
            width: {
              sm: 500,
              xs: 300,
            },
          }}
        >
          <H2
            sx={{
              textAlign: 'center',
            }}
          >
            MyInteriorとは
          </H2>
          <H4
            sx={{
              mt: {
                sm: 4,
                xs: 1,
              },
            }}
          >
            web上でARををみることができます。
            <br />
            3Dオブジェクトの家具を手軽に部屋にARとして置くことができます。
            <br />
            いろんな家具をおいてみて、あなたの部屋に合う家具を見つけてみてください。
          </H4>
        </Box>
      </Box>
    </div>
  )
}

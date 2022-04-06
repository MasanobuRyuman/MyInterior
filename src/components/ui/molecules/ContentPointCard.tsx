import { Box } from '@mui/material'
import React from 'react'

import { DefaultBox, H3, H4 } from './../atoms'

interface IContentPointCard {
  TitleText: string
  Text: string
}

// eslint-disable-next-line react/prop-types
export const ContentPointCard: React.VFC<IContentPointCard> = ({
  TitleText,
  Text,
}) => {
  return (
    <DefaultBox
      Height={300}
      Width={250}
      sx={{
        m: 'auto',
      }}
    >
      <Box
        sx={{
          width: 200,
          m: 'auto',
        }}
      >
        <H3
          sx={{
            mt: 3,
            textAlign: 'center',
          }}
        >
          {TitleText}
        </H3>
        <H4
          sx={{
            mt: 6,
          }}
        >
          {Text}
        </H4>
      </Box>
    </DefaultBox>
  )
}

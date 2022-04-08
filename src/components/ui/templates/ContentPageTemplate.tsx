import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { DefaultButton } from '../atoms'
import {
  ContentPageHeader,
  ObjectListArea,
  UploadObjectArea,
} from '../organisms'
import { MarkerDownload } from '../molecules'

export const ContentPageTemplate: React.VFC = () => {
  return (
    <div>
      <ContentPageHeader />
      <Box
        sx={{
          display: 'flex',
          mt: {
            sm: 5,
            xs: 2,
          },
          ml: {
            sm: 5,
            xs: 1,
          },
        }}
      >
        <Link to="../">
          <DefaultButton Width={130}>トップに戻る</DefaultButton>
        </Link>
        <Box
          sx={{
            ml: 2,
          }}
        >
          <MarkerDownload />
        </Box>
      </Box>

      <Box
        sx={{
          width: {
            md: 700,
            sm: 500,
            xs: 340,
          },
          m: 'auto',
          mt: 15,
        }}
      >
        <UploadObjectArea />
        <Box
          sx={{
            mt: 5,
            mb: 5,
          }}
        >
          <ObjectListArea />
        </Box>
      </Box>
    </div>
  )
}

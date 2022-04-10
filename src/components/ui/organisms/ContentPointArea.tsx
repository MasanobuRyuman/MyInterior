import { Box, Grid } from '@mui/material'
import React from 'react'

import { ContentPointCard } from './../molecules'

export const ContentPointArea: React.VFC = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#FEF98D',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '85%',
            m: 'auto',
          }}
        >
          <Grid
            container
            columns={{ xs: 4, sm: 4, md: 12 }}
            justifyContent='center'
          >
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <ContentPointCard
                  TitleText={'Point 1'}
                  Text={
                    'Web上でARを見ることができるので、ヘッドセットなどの準備は必要ありません。'
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <ContentPointCard
                  TitleText={'Point 2'}
                  Text={
                    'Web上で配布されている3Dデータや自分で作った3Dデータを表示できます。'
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  mt: 3,
                  mb: 3,
                }}
              >
                <ContentPointCard
                  TitleText={'Point 3'}
                  Text={'このサイトで用意されている家具を自由に表示できます。'}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

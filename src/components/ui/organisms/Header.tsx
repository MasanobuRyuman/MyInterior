import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderButton, HeaderBox, Logo } from './../atoms'

export const Header: React.VFC = () => {
  return (
    <div>
      <HeaderBox>
        <Box
          sx={{
            display: 'flex',
            width: {
              md: 800,
              xs: '100%',
            },
            m: 'auto',
          }}
        >
          <Logo
            sx={{
              ml: 1,
            }}
          >
            MyInterior
          </Logo>
          <Box
            sx={{
              m: '0 0 0 auto',
              mt: 2.0,
              mr: 1,
            }}
          >
            <Link to="content">
              <HeaderButton>Start</HeaderButton>
            </Link>
          </Box>
        </Box>
      </HeaderBox>
    </div>
  )
}

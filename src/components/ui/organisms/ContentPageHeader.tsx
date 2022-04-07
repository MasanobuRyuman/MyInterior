import React from 'react'

import { HeaderBox, Logo } from './../atoms'

export const ContentPageHeader: React.VFC = () => {
  return (
    <div>
      <HeaderBox>
        <Logo
          sx={{
            textAlign: 'center',
          }}
        >
          MyInterior
        </Logo>
      </HeaderBox>
    </div>
  )
}

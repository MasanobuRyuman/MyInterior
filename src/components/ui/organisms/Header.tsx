import {Box} from '@mui/material'

import {Button,HeaderBox,Logo} from "./../atoms" 

export const Header = ()=>{
  return(
    <div>
      <HeaderBox sx={{
      }}>
        <Box sx={{
          display : "flex",
          width: {
            md : 800,
            xs : "100%",
          },
          m    : "auto",
        }}>
          <Logo sx={{
            ml : 1
          }}>MyInterior</Logo>
          <Button sx={{
            m : "0 0 0 auto",
            mt : 2.0,
            mr : 1,
          }}>Start</Button>
         </Box>
      </HeaderBox>
    </div>
  )
}
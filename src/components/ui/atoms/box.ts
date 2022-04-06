import { Box, styled } from '@mui/material'

export const HeaderBox = styled(Box)({
  backgroundColor: '#534B4B',
  width: '100%',
  height: 70,
})

interface IDefaultBox {
  Width: number
  Height: number
}
export const DefaultBox = styled(Box)(({ Width, Height }: IDefaultBox) => ({
  backgroundColor: '#FFFFFF',
  border: 'solid',
  borderColor: '#63daff',
  borderRadius: 10,
  borderWidth: 10,
  height: Height,
  width: Width,
}))

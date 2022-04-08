import { styled } from '@mui/material'

export const HeaderButton = styled('button')({
  backgroundColor: '#D7DDD4',
  border: 'solid',
  borderColor: '#D7DDD4',
  borderRadius: 10,
  color: 'black',
  fontSize: 20,
  height: 40,
  width: 80,
  '&:hover': {
    background: '#bbbbbb',
    borderColor: '#bbbbbb',
  },
})

interface IDefaultButton {
  Width: number
}

export const DefaultButton = styled('button')(({ Width }: IDefaultButton) => ({
  backgroundColor: '#FFEF6C',
  borderColor: '#FFEF6C',
  borderRadius: 10,
  color: '#666666',
  height: 40,
  width: Width,
  '&:hover': {
    background: '#bbbbbb',
    borderColor: '#bbbbbb',
  },
}))

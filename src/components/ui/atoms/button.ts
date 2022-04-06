import { styled } from '@mui/material'

export const Button = styled('button')({
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

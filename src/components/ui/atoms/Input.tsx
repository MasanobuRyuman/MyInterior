/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Input, InputLabel, Typography } from '@mui/material'
import React from 'react'

interface IFileInput {
  OnChange: any
}

export const FileInput: React.VFC<IFileInput> = ({ OnChange }: IFileInput) => {
  return (
    <InputLabel
      sx={{
        border: 'solid',
        width: 200,
        height: 30,
      }}
    >
      <Input
        type="file"
        name="file"
        onChange={OnChange}
        sx={{
          display: 'none',
        }}
      ></Input>
      <Typography
        sx={{
          textAlign: 'center',
          pt: 0.3,
        }}
      >
        ファイルを選択
      </Typography>
    </InputLabel>
  )
}

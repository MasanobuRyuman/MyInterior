/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'

import { ObjectDataContext } from './../../../context/ObjectDataContext'
import { FileInput, H4 } from '../atoms'

export const InputFileArea: React.VFC = () => {
  const { setObjectURL, setMaterialURL } = useContext(ObjectDataContext)
  const [objectFileStatus, setObjectFileStatus] =
    useState<string>('選択されていません')
  const [materialFileStatus, setMaterialFileStatus] =
    useState<string>('選択されていません')

  const setObject = (e: any) => {
    setObjectURL(URL.createObjectURL(e.target.files[0]))
    setObjectFileStatus(e.target.files[0].name)
  }

  const setMaterial = (e: any) => {
    setMaterialURL(URL.createObjectURL(e.target.files[0]))
    setMaterialFileStatus(e.target.files[0].name)
  }
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <H4>Objectファイル(.obj)</H4>
        <Box
          sx={{
            ml: 3,
          }}
        >
          <FileInput OnChange={setObject} />
        </Box>
        <H4
          sx={{
            ml: 1,
          }}
        >
          {objectFileStatus}
        </H4>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mt: 2,
        }}
      >
        <H4>Materialファイル(.obj)</H4>
        <Box
          sx={{
            ml: 1.1,
          }}
        >
          <FileInput OnChange={setMaterial} />
        </Box>
        <H4
          sx={{
            ml: 1,
          }}
        >
          {materialFileStatus}
        </H4>
      </Box>
    </div>
  )
}

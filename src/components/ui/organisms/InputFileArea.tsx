/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'

import { ObjectDataContext } from './../../../context/ObjectDataContext'
import { FileInput, H5 } from '../atoms'

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
          display: {
            sm: 'flex',
            xs: 'inline',
          },
        }}
      >
        <H5
          sx={{
            mt: {
              sm: 0.5,
            },
          }}
        >
          Objectファイル(.obj)
        </H5>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              ml: {
                sm: 2.6,
                xs: 0,
              },
            }}
          >
            <FileInput OnChange={setObject} />
          </Box>
          <H5
            sx={{
              mt: 0.5,
              ml: 1,
            }}
          >
            {objectFileStatus}
          </H5>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            sm: 'flex',
            xs: 'inline',
          },
          mt: 2,
        }}
      >
        <H5
          sx={{
            mt: {
              sm: 0.5,
            },
          }}
        >
          Materialファイル(.mtl)
        </H5>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              ml: {
                sm: 1.1,
                xs: 0,
              },
            }}
          >
            <FileInput OnChange={setMaterial} />
          </Box>
          <H5
            sx={{
              mt: 0.5,
              ml: {
                sm: 1,
              },
            }}
          >
            {materialFileStatus}
          </H5>
        </Box>
      </Box>
    </div>
  )
}

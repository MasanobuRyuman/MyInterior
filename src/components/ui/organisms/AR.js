/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Box } from '@mui/material'
import { useContext } from 'react'

import { ObjectDataContext } from './../../../context/ObjectDataContext'

export const AR = () => {
  const { ObjectURL, MaterialURL } = useContext(ObjectDataContext)
  return (
    <Box>
      <Box
        id="a-frame"
        sx={{
          width: 1400,
          height: 1000,
        }}
      >
        <a-scene embedded arjs="debugUIEnabled:false;">
          <a-assets>
            <a-asset-item id="cow" src={ObjectURL}></a-asset-item>
            <a-asset-item id="mtl" src={MaterialURL}></a-asset-item>
          </a-assets>
          <a-marker preset="hiro">
            <a-obj-model src="#cow" mtl="#mtl" scale="5 5 5"></a-obj-model>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
        <p>QRコードを写してください</p>
        <a href="../content">移動</a>
      </Box>
    </Box>
  )
}

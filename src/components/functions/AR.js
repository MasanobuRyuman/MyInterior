/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Box } from '@mui/material'

export const AR = ({ obj, mtl }) => {
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
            <a-asset-item id="cow" src={obj}></a-asset-item>
            <a-asset-item id="mtl" src={mtl}></a-asset-item>
          </a-assets>
          <a-marker preset="hiro">
            <a-obj-model src="#cow" mtl="#mtl" scale=".5 .5 .5"></a-obj-model>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      </Box>
    </Box>
  )
}

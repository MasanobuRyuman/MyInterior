/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { matrix, index, subset, atan2, asin, multiply } from 'mathjs'
import { Box } from '@mui/material'
import { useContext, useState } from 'react'

import { ObjectDataContext } from './../../../context/ObjectDataContext'
import { DefaultButton, H3 } from '../atoms'

export const AR = () => {
  const [vectorData, setVectorData] = useState('0 0 0')
  const [rotationData, setRotationData] = useState(
    matrix([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
  )
  const [ObjectSize, setObjectSize] = useState(5)
  const [ObjectSizeData, setObjectSizeData] = useState('5 5 5')

  const { ObjectURL, MaterialURL } = useContext(ObjectDataContext)
  const rotation = (move) => {
    //let xpMat = matrix([[1,0,0],[0,0.7,-0.7],[0,0.7,0.7]]);
    //let xmMat = matrix([[1,0,0],[0,0.7,0.7],[0,-0.7,0.7]]);
    //let ypMat = matrix([[0.7,0,-0.7],[0,1,0],[-0.7,0,0.7]]);
    //let ymMat = matrix([[-0.7,0,0.7],[0,1,0],[0.7,0,-0.7]]);
    //let zpMat = matrix([[0.7,-0.7,0],[0.7,0.7,0],[0,0,1]]);
    //let zmMat = matrix([[0.7,0.7,0],[-0.7,0.7,0],[0,0,1]]);
    let mat = matrix([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
    if (move == 'xp') {
      mat = matrix([
        [1, 0, 0],
        [0, 0.924, -0.382],
        [0, 0.382, 0.924],
      ])
    } else if (move == 'xm') {
      mat = matrix([
        [1, 0, 0],
        [0, 0.924, 0.382],
        [0, -0.382, 0.924],
      ])
    } else if (move == 'yp') {
      mat = matrix([
        [0.924, 0, 0.382],
        [0, 1, 0],
        [-0.382, 0, 0.924],
      ])
    } else if (move == 'ym') {
      mat = matrix([
        [0.924, 0, -0.382],
        [0, 1, 0],
        [0.382, 0, 0.924],
      ])
    } else if (move == 'zp') {
      console.log('zp')
      mat = matrix([
        [0.924, -0.382, 0],
        [0.382, 0.924, 0],
        [0, 0, 1],
      ])
    } else if (move == 'zm') {
      mat = matrix([
        [0.924, 0.382, 0],
        [-0.382, 0.924, 0],
        [0, 0, 1],
      ])
    }

    let rotMat = multiply(mat, rotationData)
    setRotationData(rotMat)

    let yaw = atan2(subset(rotMat, index(1, 0)), subset(rotMat, index(0, 0)))
    let pitch = asin(subset(rotMat, index(2, 0)) * -1)
    let roll = atan2(subset(rotMat, index(2, 1)), subset(rotMat, index(2, 2)))
    yaw = Number((yaw * 180) / 3.14)
    pitch = Number((pitch * 180) / 3.14)
    roll = Number((roll * 180) / 3.14)

    setVectorData(pitch + ' ' + yaw + ' ' + roll)
  }

  const ChangeObjectSize = (value) => {
    if (value == 'up') {
      setObjectSize(ObjectSize + 1)
    } else if (value == 'down') {
      setObjectSize(ObjectSize - 1)
    }
    console.log(ObjectSize)
    setObjectSizeData(ObjectSize + ' ' + ObjectSize + ' ' + ObjectSize)
    console.log(setObjectSizeData)
  }

  return (
    <Box>
      <Box
        id="a-frame"
        sx={{
          width: 1400,
          height: 1400,
        }}
      >
        <a-scene embedded arjs="debugUIEnabled:false;">
          <a-assets>
            <a-asset-item id="cow" src={ObjectURL}></a-asset-item>
            <a-asset-item id="mtl" src={MaterialURL}></a-asset-item>
          </a-assets>
          <a-marker preset="hiro">
            <a-obj-model
              src="#cow"
              mtl="#mtl"
              scale={ObjectSizeData}
              position="0 1 0"
              rotation={vectorData}
            ></a-obj-model>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
        
        <Box
          sx={{
            position: 'absolute',
            right: 20,
            top: 30,
          }}
        >
          <a href="../content">
            <DefaultButton>戻る</DefaultButton>
          </a>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '80%',
            left: 10,
          }}
        >
          <DefaultButton onClick={() => ChangeObjectSize('down')}>
            小さくする
          </DefaultButton>
          <DefaultButton onClick={() => ChangeObjectSize('up')}>
            大きくする
          </DefaultButton>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            top: '90%',
            left: 10,
          }}
        >
          <Box>
            <DefaultButton onClick={() => rotation('yp')}>下回り</DefaultButton>
          </Box>
          <Box>
            <DefaultButton onClick={() => rotation('ym')}>上周り</DefaultButton>
          </Box>
          <Box>
            <DefaultButton onClick={() => rotation('zp')}>左回り</DefaultButton>
          </Box>
          <Box>
            <DefaultButton onClick={() => rotation('zm')}>右回り</DefaultButton>
          </Box>
          <Box>
            <DefaultButton onClick={() => rotation('xp')}>
              左横まわり
            </DefaultButton>
          </Box>
          <Box>
            <DefaultButton onClick={() => rotation('xm')}>
              右横まわり
            </DefaultButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

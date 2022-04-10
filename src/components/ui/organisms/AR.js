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
import { DefaultButton } from '../atoms'

export const AR = () => {
  const [ObjectSize, setObjectSize] = useState(5)
  const [ObjectSizeData, setObjectSizeData] = useState('5 5 5')
  const [ObjectPosition, setObjectPosition] = useState([0, 0, 0])
  const [ObjectPositionData, setObjectPositionData] = useState('0 0 0')
  const [vectorData, setVectorData] = useState('0 0 0')
  const [rotationData, setRotationData] = useState(
    matrix([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
  )

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
    if (move == 'turnLeftSideWays') {
      mat = matrix([
        [1, 0, 0],
        [0, 0.924, -0.382],
        [0, 0.382, 0.924],
      ])
    } else if (move == 'turnRightSideWays') {
      mat = matrix([
        [1, 0, 0],
        [0, 0.924, 0.382],
        [0, -0.382, 0.924],
      ])
    } else if (move == 'turnBottom') {
      mat = matrix([
        [0.924, 0, 0.382],
        [0, 1, 0],
        [-0.382, 0, 0.924],
      ])
    } else if (move == 'turnUp') {
      mat = matrix([
        [0.924, 0, -0.382],
        [0, 1, 0],
        [0.382, 0, 0.924],
      ])
    } else if (move == 'turnLeft') {
      console.log('turnLeft')
      mat = matrix([
        [0.924, -0.382, 0],
        [0.382, 0.924, 0],
        [0, 0, 1],
      ])
    } else if (move == 'turnRight') {
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
    console.log(ObjectSizeData)
    if (value == 'up') {
      console.log('kita')
      console.log(ObjectSize + 1)
      setObjectSize(ObjectSize + 1)
      setObjectSizeData(`${ObjectSize + 1} ${ObjectSize + 1} ${ObjectSize + 1}`)
    } else if (value == 'down') {
      console.log('kita')
      console.log(ObjectSize - 1)
      setObjectSize(ObjectSize - 1)
      setObjectSizeData(`${ObjectSize - 1} ${ObjectSize - 1} ${ObjectSize - 1}`)
    }
  }

  const ChangePosition = (value) => {
    console.log(ObjectPositionData)
    if (value == 'down') {
      setObjectPosition([
        ObjectPosition[0],
        ObjectPosition[1],
        ObjectPosition[2] + 1,
      ])
      setObjectPositionData(
        `${ObjectPosition[0]} ${ObjectPosition[1]} ${ObjectPosition[2] + 1}`
      )
    } else if (value == 'up') {
      setObjectPosition([
        ObjectPosition[0],
        ObjectPosition[1],
        ObjectPosition[2] - 1,
      ])
      setObjectPositionData(
        `${ObjectPosition[0]} ${ObjectPosition[1]} ${ObjectPosition[2] - 1}`
      )
    } else if (value == 'left') {
      setObjectPosition([
        ObjectPosition[0] - 1,
        ObjectPosition[1],
        ObjectPosition[2],
      ])
      setObjectPositionData(
        `${ObjectPosition[0] - 1} ${ObjectPosition[1]} ${ObjectPosition[2]}`
      )
    } else if (value == 'right') {
      setObjectPosition([
        ObjectPosition[0] + 1,
        ObjectPosition[1],
        ObjectPosition[2],
      ])
      setObjectPositionData(
        `${ObjectPosition[0] + 1} ${ObjectPosition[1]} ${ObjectPosition[2]}`
      )
    } else if (value == 'back') {
      setObjectPosition([
        ObjectPosition[0],
        ObjectPosition[1] - 1,
        ObjectPosition[2],
      ])
      setObjectPositionData(
        `${ObjectPosition[0]} ${ObjectPosition[1] - 1} ${ObjectPosition[2]}`
      )
    } else if (value == 'near') {
      setObjectPosition([
        ObjectPosition[0],
        ObjectPosition[1] + 1,
        ObjectPosition[2],
      ])
      setObjectPositionData(
        `${ObjectPosition[0]} ${ObjectPosition[1] + 1} ${ObjectPosition[2]}`
      )
    }
  }

  return (
    <Box>
      <Box
        id='a-frame'
        sx={{
          width: 1400,
          height: 1400,
        }}
      >
        <a-scene embedded arjs='debugUIEnabled:false;'>
          <a-assets>
            <a-asset-item id='cow' src={ObjectURL}></a-asset-item>
            <a-asset-item id='mtl' src={MaterialURL}></a-asset-item>
          </a-assets>
          <a-marker preset='hiro'>
            <a-obj-model
              src='#cow'
              mtl='#mtl'
              scale={ObjectSizeData}
              position={ObjectPositionData}
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
          <a href='../content'>
            <DefaultButton>戻る</DefaultButton>
          </a>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '70%',
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
            top: '80%',
            left: 10,
          }}
        >
          <DefaultButton onClick={() => ChangePosition('down')}>
            手前
          </DefaultButton>
          <DefaultButton onClick={() => ChangePosition('up')}>奥</DefaultButton>
          <DefaultButton onClick={() => ChangePosition('left')}>
            左
          </DefaultButton>
          <DefaultButton onClick={() => ChangePosition('right')}>
            右
          </DefaultButton>
          <DefaultButton onClick={() => ChangePosition('back')}>
            下
          </DefaultButton>
          <DefaultButton onClick={() => ChangePosition('near')}>
            上
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
          <DefaultButton onClick={() => rotation('turnBottom')}>
            下回り
          </DefaultButton>
          <DefaultButton onClick={() => rotation('turnUp')}>
            上周り
          </DefaultButton>
          <DefaultButton onClick={() => rotation('turnLeft')}>
            左回り
          </DefaultButton>
          <DefaultButton onClick={() => rotation('turnRight')}>
            右回り
          </DefaultButton>
          <DefaultButton onClick={() => rotation('turnLeftSideWays')}>
            左横まわり
          </DefaultButton>
          <DefaultButton onClick={() => rotation('turnRightSideWays')}>
            右横まわり
          </DefaultButton>
        </Box>
      </Box>
    </Box>
  )
}

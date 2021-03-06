import { Tabs, Tab, Typography, Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ObjectInfo } from '../../../dataManagement/ObjectManagement'
import { ObjectDataContext } from './../../../context/ObjectDataContext'
import { DefaultImage } from './../atoms'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

interface IObjectImageList {
  itemList: string[]
  item: string
}

const ObjectImageList = (props: IObjectImageList) => {
  const { setObjectURL, setMaterialURL } = useContext(ObjectDataContext)
  const SetObject = (item: string, object: string) => {
    setObjectURL(`Objects/${item}/${object}/${object}.obj`)
    setMaterialURL(`Objects/${item}/${object}/${object}.mtl`)
  }
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
      {props.itemList.map((value, index) => {
        return (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Box
              sx={{
                width: 200,
                height: 200,
                m: 'auto',
                mt: 1,
              }}
            >
              <Link to="../AR" onClick={() => SetObject(props.item, value)}>
                <DefaultImage
                  ImageURL={`Objects/${props.item}/${value}/${value}.png`}
                  Width={200}
                  Height={200}
                  Border="solid"
                />
              </Link>
            </Box>
          </Grid>
        )
      })}
    </Grid>
  )
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export const ObjectListArea = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="??????" />
          <Tab label="?????????" />
          <Tab label="?????????" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ObjectImageList itemList={ObjectInfo.chair} item="chair" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ObjectImageList itemList={ObjectInfo.sofa} item="sofa" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ObjectImageList itemList={ObjectInfo.desk} item="desk" />
      </TabPanel>
    </Box>
  )
}

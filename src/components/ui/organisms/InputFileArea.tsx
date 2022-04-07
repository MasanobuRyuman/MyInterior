/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ObjectDataContext } from './../../../context/ObjectDataContext'

export const InputFileArea: React.VFC = () => {
  const { setObjectURL, setMaterialURL } = useContext(ObjectDataContext)
  const setObject = (e: any) => {
    setObjectURL(URL.createObjectURL(e.target.files[0]))
  }

  const setMaterial = (e: any) => {
    setMaterialURL(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div>
      <input type="file" onChange={setObject} />
      <input type="file" onChange={setMaterial} />
      <Link to="../AR">AR</Link>
    </div>
  )
}

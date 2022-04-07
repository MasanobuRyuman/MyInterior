/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'

interface IObjectDateContext {
  ObjectURL: string
  MaterialURL: string
  setObjectURL: (ObjectURL: string) => void
  setMaterialURL: (MaterialURL: string) => void
}

export const ObjectDataContext = createContext<IObjectDateContext>({
  ObjectURL: '',
  MaterialURL: '',
  setObjectURL: () => {},
  setMaterialURL: () => {},
})

const ObjectProvider: React.VFC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ObjectURL, setObjectURL] = useState<string>('')
  const [MaterialURL, setMaterialURL] = useState<string>('')

  return (
    <ObjectDataContext.Provider
      value={{ ObjectURL, MaterialURL, setObjectURL, setMaterialURL }}
    >
      {children}
    </ObjectDataContext.Provider>
  )
}

export default ObjectProvider

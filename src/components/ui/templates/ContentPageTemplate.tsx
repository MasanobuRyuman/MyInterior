import React from 'react'

import { ContentPageHeader } from '../organisms'
import { InputFileArea } from '../organisms'

export const ContentPageTemplate: React.VFC = () => {
  return (
    <div>
      <ContentPageHeader />
      <InputFileArea />
    </div>
  )
}

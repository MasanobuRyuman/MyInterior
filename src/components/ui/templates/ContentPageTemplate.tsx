import React from 'react'
import { Link } from 'react-router-dom'

import { ContentPageHeader } from '../organisms'
import { InputFileArea } from '../organisms'

export const ContentPageTemplate: React.VFC = () => {
  return (
    <div>
      <ContentPageHeader />
      <InputFileArea />
      <Link to="../AR">AR</Link>
    </div>
  )
}

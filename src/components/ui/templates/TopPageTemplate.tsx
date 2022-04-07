import React from 'react'

import {
  ContentDescription,
  ContentHeading,
  ContentPointArea,
  Header,
} from './../organisms'

export const TopPageTemplate: React.VFC = () => {
  return (
    <div>
      <Header />
      <ContentHeading />
      <ContentDescription />
      <ContentPointArea />
    </div>
  )
}

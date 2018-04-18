//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'

import { Page, Container, H1 } from 'react-dress-code'
import { Typography } from './core/typography'
import { Grid } from './structure/layout'
import { Buttons } from './atoms/button'
import { Cards } from './atoms/card'
import { Inputs } from './atoms/input'
import { Loading } from './atoms/loading-bar'
import { ExampleStatus } from './atoms/status'
import { Tabs } from './atoms/tab'
import { Tables } from './atoms/table'
import { Revealer } from './molecules/revealer'


const App = () => (
  <Page>
    <Container>
    
      <H1>Core</H1>
      <Typography />

      <H1>Page Structure and Grid</H1>
      <Grid />

      <H1>Atoms</H1>
      <Buttons />
      <Cards />
      <Inputs />
      <Loading />
      <ExampleStatus />
      <Tabs />
      <Tables />

      <H1>Molecules</H1>
      <Revealer />
      
    </Container>
  </Page>
)


export default App

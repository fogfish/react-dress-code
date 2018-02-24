//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { H1, Card } from 'react-dress-code'
import { Tab, TabElement } from 'react-dress-code'

export const TabHorizontal = () => (
  <div className="item-group">
  <Tab>
    <TabElement header> Header </TabElement>
    <TabElement active> Tab1 </TabElement>
    <TabElement> Tab2 </TabElement>
    <TabElement disabled> Tab3 </TabElement>
    <TabElement> Tab4 </TabElement>
  </Tab>
  </div>
)

export const TabVertical = () => (
  <div className="item-group">
  <Tab vertical>
    <TabElement header> Header </TabElement>
    <TabElement active> Tab1 </TabElement>
    <TabElement> Tab2 </TabElement>
    <TabElement disabled> Tab3 </TabElement>
    <TabElement> Tab4 </TabElement>
  </Tab>
  </div>
)


export const Tabs = () => (
   <Card>
      <H1>Tab</H1>
      <TabHorizontal />
      <TabVertical />

   </Card>
)

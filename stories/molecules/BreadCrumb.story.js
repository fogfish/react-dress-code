//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { BreadCrumbs, BreadCrumb } from '../../src/index'

storiesOf('Molecules > Breadcrumb', module)
  .add('Breadcrumb',
    withInfo('')(
      () => (
        <div>
          <BreadCrumbs>
            <BreadCrumb href="#">Previous</BreadCrumb>
            <BreadCrumb href="#">Previous</BreadCrumb>
            <BreadCrumb href="#">Previous</BreadCrumb>
            <BreadCrumb>Current</BreadCrumb>
          </BreadCrumbs>
        </div>
      )
    )
  )


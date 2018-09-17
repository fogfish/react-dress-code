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
import { action } from '@storybook/addon-actions'

import { Toasts, Toast } from '../../src/index'

storiesOf('Molecules > Toasts', module)
  .add('Toasts at top',
    withInfo('')(
      () => (
        <Toasts top>
         <Toast top>Toast. Be quick, this message will disappear!</Toast>
         <Toast top info>Info toast. Be quick, this message will disappear!</Toast>
         <Toast top success>Success toast. Be quick, this message will disappear!</Toast>
         <Toast top warning>Warning toast. Be quick, this message will disappear!</Toast>
         <Toast top error>Error toast. Be quick, this message will disappear!</Toast>
        </Toasts>
      )
    )
  )

  .add('Toasts at bottom',
    withInfo('')(
      () => (
        <Toasts bottom>
         <Toast bottom>Toast. Be quick, this message will disappear!</Toast>
         <Toast bottom info>Info toast. Be quick, this message will disappear!</Toast>
         <Toast bottom success>Success toast. Be quick, this message will disappear!</Toast>
         <Toast bottom warning>Warning toast. Be quick, this message will disappear!</Toast>
         <Toast bottom error>Error toast. Be quick, this message will disappear!</Toast>
        </Toasts>
      )
    )
  )

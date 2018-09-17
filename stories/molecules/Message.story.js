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

import { Message, Link } from '../../src/index'

storiesOf('Molecules > Message', module)
  .add('Messages',
    withInfo('')(
      () => (
        <div>
          <Message 
            icon="contact"
            title="Message"
            onClick={action('message')}
          >
            Some more information about what happened.
          </Message>

          <Message 
            info
            icon="info"
            title="Info Message"
            onClick={action('info')}
          >
            Some more information about what happened.
          </Message>

          <Message 
            success
            icon="success"
            title="Success Message"
            onClick={action('success')}
          >
            Some more information about what happened.
          </Message>

          <Message 
            warning
            icon="warning"
            title="Warning Message"
            onClick={action('warning')}
          >
            Some more information about what happened.
          </Message>

          <Message 
            error
            icon="error"
            title="Error Message"
            onClick={action('error')}
          >
            Some more information about what happened.
          </Message>
        </div>
      )
    )
  )

  .add('Message without Close',
    withInfo('')(
      () => (
        <div>
          <Message 
            info
            icon="info"
            title="Info Message"
          >
            Some more information about what happened.
          </Message>
        </div>
      )
    )
  )


  .add('Message without Title',
    withInfo('')(
      () => (
        <div>
          <Message 
            info
            icon="info"
            onClick={action('info')}
          >
            Some more information about what happened.
          </Message>
        </div>
      )
    )
  )

  .add('Message without Icon',
    withInfo('')(
      () => (
        <div>
          <Message 
            info
            title="Info message"
            onClick={action('info')}
          >
            Some more information about what happened.
          </Message>
        </div>
      )
    )
  )

  .add('Message with Link',
    withInfo('')(
      () => (
        <div>
          <Message 
            info
            icon="info"
            title="Info Message"
            onClick={action('info')}
          >
            Some more information about what happened. <Link in-message href="#">Click for details.</Link>
          </Message>
        </div>
      )
    )
  )


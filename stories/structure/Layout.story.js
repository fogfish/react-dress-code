import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Page, Container, Row, Column } from '../../src/index'

storiesOf('Layout > Grid', module)
  .add('Page Structure',
    withInfo('')(
      () => (
        <Page>
          Use page to set up the page space. It applies the default page padding for several screen sizes.
          <Container>
            Use Container to create the main content container. Your content and cards should go inside of this container. 
          </Container>
          <Container limited>
            Use Container with limited in addition to Container to limit the maximum size of the container.
          </Container>
        </Page>
      )
    )
  )

  .add('Basic Grid',
    withInfo('')(
      () => (
        <div>
          <Row>
            <Column>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, eveniet.
            </Column>
            <Column>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, repudiandae.
            </Column>
            <Column>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, ut.
            </Column>
            <Column>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, animi.
            </Column>
            <Column>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, cum.
            </Column>
          </Row> 
        </div>
      )
    )
  )

  .add('Responsive Grid',
    withInfo('')(
      () => (
        <div>
          <Row>
            <Column large={4} medium={12}>
              Column large-4 / medium-12
            </Column>
            <Column large={4} medium={12}>
              Column large-4 / medium-12
            </Column>
            <Column large={4} medium={12}>
              Column large-4 / medium-12
            </Column>    
          </Row>
        </div>
      )
    )
  )

  .add('Columns Grid',
    withInfo('')(
      () => (
        <div>
          <Row>
            <Column center small={2}>2</Column>
            <Column center small={10}>10</Column>
          </Row>
          <Row>
            <Column center small={3}>3</Column>
            <Column center small={9}>9</Column>
          </Row>
          <Row>
            <Column center small={4}>4</Column>
            <Column center small={8}>8</Column>
          </Row>
          <Row>
            <Column center small={5}>5</Column>
            <Column center small={7}>7</Column>
          </Row>
          <Row>
            <Column center small={6}>6</Column>
            <Column center small={6}>6</Column>
          </Row>
          <Row>
            <Column center small={4}>4</Column>
            <Column center small={4}>4</Column>
            <Column center small={4}>4</Column>
          </Row>
          <Row>
            <Column center small={3}>3</Column>
            <Column center small={3}>3</Column>
            <Column center small={3}>3</Column>
            <Column center small={3}>3</Column>
          </Row>
          <Row>
            <Column center small={2}>2</Column>
            <Column center small={2}>2</Column>
            <Column center small={2}>2</Column>
            <Column center small={2}>2</Column>
            <Column center small={2}>2</Column>
            <Column center small={2}>2</Column>
          </Row>
          <Row>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
            <Column center small={1}>1</Column>
          </Row>
        </div>
      )
    )
  )

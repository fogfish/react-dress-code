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

  .add('Row Align Centered',
    withInfo('')(
      () => (
        <div>
          <Row align="center">
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
          </Row>
        </div>
      )
    )
  )

  .add('Row Align Right',
    withInfo('')(
      () => (
        <div>
          <Row align="right">
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
          </Row>
        </div>
      )
    )
  )

  .add('Row Align Spaced',
    withInfo('')(
      () => (
        <div>
          <Row align="spaced">
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
          </Row>
        </div>
      )
    )
  )

  .add('Row Align Justified',
    withInfo('')(
      () => (
        <div>
          <Row align="justify">
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
          </Row>
        </div>
      )
    )
  )

  .add('Row Align Top',
    withInfo('')(
      () => (
        <div>
          <Row align="top">
            <Column small={4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
          </Row>
        </div>
      )
    )
  )

  .add('Row Align Middle',
    withInfo('')(
      () => (
        <div>
          <Row align="middle">
            <Column small={4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
          </Row>
        </div>
      )
    )
  )

  .add('Self Align Columns',
    withInfo('')(
      () => (
        <div>
          <Row align="spaced">
            <Column small={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo eveniet inventore voluptatibus aliquid debitis laboriosam magni cupiditate possimus facere?</Column>
            <Column small={2} align="bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Column>
            <Column small={2} align="top">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Column>
            <Column small={2} align="middle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Column>
          </Row>
        </div>
      )
    )
  )

import React from 'react'
import { Row, Column, Card, H1, H2, Divider } from 'react-dress-code'

const BasicGrid = () => (
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
)

const ResponsiveGrid = () => (
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
)

const ColumnGrid = () => (
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

export const Grid = () => (
  <Card>
    <H1>Grid</H1>

    <H2>Basic Grid</H2>
    <Divider />
    <BasicGrid />

    <H2>Responsive Grid</H2>
    <Divider />
    <ResponsiveGrid />

    <H2>Grid Column Sizes</H2>
    <Divider />
    <ColumnGrid />

  </Card>
) 

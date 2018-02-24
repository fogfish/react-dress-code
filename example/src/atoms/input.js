//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { H1, H2, Card, Divider, Label, Input, Select } from 'react-dress-code'


const TextInput = () => (
  <div>
    <Label>Text input</Label>
    <Input id="optInput" type="text" placeholder="e.g. give an example" />

    <Label sub="optional">Number input</Label>
    <Input id="intInput" type="number" placeholder="e.g. 100" />

    <Label sub="required">Required input</Label>
    <Input id="reqInput" type="text" placeholder="e.g. give an example" />

    <Label sub="required">Required input</Label>
    <Input id="errInput" type="text" placeholder="e.g. give an example" is-error />

    <Label disabled>Disabled input</Label>
    <Input id="offInput" type="text" placeholder="e.g. give an example" disabled />

    <Label>Small input</Label>
    <Input id="lowInput" type="text" placeholder="e.g. give an example" small />

  </div>
)

const SelectInput = () => (
  <div>
    <Select>
      <option value="">Enabled</option>
      <option value="">Option 2</option>
      <option value="">Option 3</option>
      <option value="">Option 4</option>
      <option value="">Option 5</option>
    </Select>

    <Select disabled>
      <option value="">Disabled</option>
      <option value="">Option 2</option>
      <option value="">Option 3</option>
      <option value="">Option 4</option>
      <option value="">Option 5</option>
    </Select>

    <Select is-error>
      <option value="">Enabled</option>
      <option value="">Option 2</option>
      <option value="">Option 3</option>
      <option value="">Option 4</option>
      <option value="">Option 5</option>
    </Select>

    <Select small>
      <option value="">Enabled</option>
      <option value="">Option 2</option>
      <option value="">Option 3</option>
      <option value="">Option 4</option>
      <option value="">Option 5</option>
    </Select>  
  </div>
)


export const Inputs = () => (
  <Card>
    <H1>Forms</H1>

    <H2>Text Input</H2>
    <Divider/>
    <TextInput />

    <H2>Select</H2>
    <Divider/>
    <SelectInput />

  </Card>
)
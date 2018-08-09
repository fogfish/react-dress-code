import React from 'react'
import Editor from './Editor'
import { Input } from '../../atoms/input'
import toClass from 'recompact/toClass'

const Static = props => (
  <span {...props}>{props.children}</span>
)

const Dynamic = toClass(Input)

const EInput = props => (
  <Editor 
    Static={Static}
    Dynamic={Dynamic}
    commitWithShift={false}
    {...props}
  />
) 

export default EInput

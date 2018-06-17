import React from 'react'
import Editor from './Editor'
import { TextArea } from '../../atoms/input'
import toClass from 'recompact/toClass'

const Static = props => (
  <p {...props}>{props.children}</p>
)

const Dynamic = toClass(TextArea)

const ETextArea = props => (
  <Editor 
    Static={Static}
    Dynamic={Dynamic}
    {...props}
  />
) 

export default ETextArea